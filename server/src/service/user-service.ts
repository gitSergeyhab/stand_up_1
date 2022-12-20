import { ApiError } from "../custom-errors/api-error";
import { userSchema } from "../schemas/user-schema";
import { sequelize } from "../sequelize";
import { UserDTO_SC, UserPseudoType } from "../types";
import { crypt } from "../utils/bcrypt-utils";
import { mailService } from "./mail-service";
import { tokenService } from "./token-service";

/**
 * создает ссылку для активации профиля пользователя
 * @param hashPassword 
 * @returns 
 */

const generateActivateLink = (hashPassword: string) => {
    const length = Math.ceil(hashPassword.length / 10); ;
    const date = Date.now();
    return `${hashPassword.slice(0,  length)}-${date}-activate`
};

const getUserDTO = (user: UserPseudoType) => ({...user, user_password: 'no way'})


class UserService {
    async registration ({email, nik, password}: {email: string, nik: string, password: string}) {

        // const {error} = userSchema.validate({email, nik, password, passwordRepeat: password}, { abortEarly: false }); 

        // if (error) {
        //     const errors = error.details.map((item) => item.message)
        //     console.log({errors});
        //     throw ApiError.BadRequest('registration error', errors)
        // }


        //1. проверяет, что еще нет юзера с такими  nik и email
        const userByNik = await sequelize.query(
            `
            SELECT user_id FROM users
            WHERE user_nik = :nik;
            `,
            {
                type: 'SELECT',
                replacements: {nik}
            }
        );

        //!!! WHERE LOWER(user_email) = LOWER(:email)
        const userByEmail = await sequelize.query(
            `
            SELECT user_id FROM users
            WHERE user_email = :email;
            `,
            {
                type: 'SELECT',
                replacements: { email }
            }
        );

        const errors = [];

        if (userByNik.length) {
            errors.push(`user with nik: "${nik}" has already exist`);
        };
        if (userByEmail.length) {
            errors.push(`user with email: "${email}" has already exist`);
        };

        //2. если есть выдает ошибку
        if (errors.length) {
            throw ApiError.BadRequest('registration error', errors)
        }
        //2.хеширует пароль
        const hashPassword = await crypt.hash(password);
        //3.создает ссылку для активации
        const activationLink = generateActivateLink(hashPassword);

        //4.создает юзера и ! возвращает user_id, user_email, user_activated
        const user = await sequelize.query(
            `
            INSERT INTO users(user_password, user_email, user_nik, user_activation_link) 
            VALUES (:hashPassword, :email, :nik, :activationLink)
            RETURNING user_id, user_email, user_activated
            ;
            `, 
            {
                type: 'INSERT',
                replacements: {nik, email, hashPassword, activationLink}
            }
        )
        //5.отправляет на почту ссылку для регистрации

        // const link = `${process.env.API_URL}/api/users/activate/${activationLink}`;
        // await mailService.sendActivationMail({email, link}); // не работает - нужен рассылочный сервис !!!
        await mailService.sendActivationMailImitation({email, link: activationLink}); // пока не настроен sendActivationMail !!!

        const userDTO = getUserDTO(user[0][0] as unknown as UserPseudoType) ;
        //6.создает токены
        const {accessToken, refreshToken} = tokenService.generateTokens({userDTO});
        //7.создает / обновляет токены в БД
        await tokenService.saveToken({user_id: userDTO.user_id , refreshToken});

        //8.возвращает токены и юзера : {user_id, user_email, user_activated}
        return {
            accessToken, refreshToken,
            user: userDTO
        }
    }


    async activate({activationLink} : {activationLink: string}) {
        const users = await sequelize.query(
            `
            SELECT user_id FROM users
            WHERE user_activation_link = :activationLink;
            `,
            {
                type: 'SELECT',
                replacements: {activationLink}
            }
        );

        if(!users.length) {
            throw ApiError.BadRequest(`There is not user with this activation Link: ${activationLink}`)
        }

        await sequelize.query(
            `
            UPDATE users
            SET user_activated = true;
            `, 
            {
                type: 'UPDATE'
            }
        );
    }

    async login({email, password}: {email: string, password: string}) {
        const user = await sequelize.query(
            `
            SELECT 
            user_id, user_nik, user_email, user_password, user_avatar, user_status
            FROM users
            WHERE LOWER(user_email) = LOWER(:email);
            `,
            {
                type: 'SELECT',
                replacements: { email }
            }
        );

        if (!user.length) {
            throw ApiError.BadRequest(`There is not user with email ${email}`);
        }

        console.log({user})
        

        const isPasswordCorrect = await crypt.compare(password, (user[0] as unknown as UserPseudoType).user_password);

        


        if (!isPasswordCorrect) {
            throw ApiError.BadRequest('The password is wrong');
        }

        const userDTO = getUserDTO(user[0] as unknown as UserPseudoType);
        const tokens = tokenService.generateTokens({userDTO});

        await tokenService.saveToken({user_id: userDTO.user_id, refreshToken: tokens.refreshToken});

        return { ...tokens, user: userDTO }
    }

    async logout({refreshToken} : { refreshToken: string }) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const token = await tokenService.removeRefreshToken({refreshToken})
        return token;
    }

    async findUserById ({id} : {id: string}) {
        const user = await sequelize.query(
            `
            SELECT * FROM users WHERE user_id = :id
            `,
            {
                type: 'SELECT',
                replacements: {id}
            }
        )
        return user;
    }
}

export const userService = new UserService();