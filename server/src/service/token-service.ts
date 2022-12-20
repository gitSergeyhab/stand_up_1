import jwt from 'jsonwebtoken';
import { TokenExpire } from '../const';
import { ApiError } from '../custom-errors/api-error';
import { sequelize } from '../sequelize';
import { UserDTO_SC, UserPseudoType } from '../types';
import { userService } from './user-service';


const enum TokenType {
    Refresh = 'REFRESH',
    Access = 'ACCESS'
}

class TokenService {
    generateTokens({userDTO} : {userDTO: UserPseudoType}) {
        const accessToken = jwt.sign(userDTO, process.env.JWT_ACCESS_SECRET, {expiresIn: TokenExpire.Access});
        const refreshToken = jwt.sign(userDTO, process.env.JWT_REFRESH_SECRET, {expiresIn: TokenExpire.Refresh});
        return { accessToken, refreshToken };
    }

    validateToken({token, type}: {token: string, type: TokenType}) {
        const secret = type === TokenType.Access ? process.env.JWT_ACCESS_SECRET : process.env.JWT_REFRESH_SECRET;
        const userData = jwt.verify(token, secret);
        console.log(userData);
        return  userData;
    }

    async saveToken({user_id, refreshToken}: {user_id: string, refreshToken: string}) {
        // ищет в токенах токен с user_id
        const oldTokens = await sequelize.query(
            `
            SELECT * FROM tokens
            WHERE user_id = :user_id; 
            `, 
            {
                type: 'SELECT',
                replacements: {user_id}
            }
        )
        // если уже есть, то обновляет
        if (oldTokens.length) {
            const updatedToken = await sequelize.query(
                `
                UPDATE tokens
                SET refresh_token = :refreshToken
                WHERE user_id = :user_id;
                `, 
                {
                    type: 'UPDATE',
                    replacements: { user_id, refreshToken }
                }
            )
            console.log(updatedToken);
            return updatedToken;
        }
        // если нет, то создает новый
        const newToken = await sequelize.query(
            `
            INSERT INTO tokens(user_id, refresh_token) VALUES
            (:user_id, :refreshToken);
            `, 
            {
                type: 'INSERT',
                replacements:  { user_id, refreshToken }
            }
        )
        console.log(newToken);
        return newToken;

    }

    async removeRefreshToken({refreshToken} : { refreshToken: string }) {
        const token = await sequelize.query(
            `
            DELETE FROM tokens
            WHERE refresh_token = :refresh_token;
            `,
            {
                type: 'DELETE',
                replacements: {refresh_token: refreshToken}
            }
        );

        console.log(token)

        return token;
    }

    async refreshToken({refreshToken} : { refreshToken: string }) {
        if (refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = this.validateToken({token: refreshToken, type: TokenType.Refresh});

        const tokenFromDB = await this.findToken({refreshToken});

        if (!userData || !tokenFromDB || !tokenFromDB.length) {
            throw ApiError.UnauthorizedError()
        }

        const userDTO = await userService.findUserById({id: (userData as UserPseudoType).user_id})


    }

    async findToken({refreshToken} : { refreshToken: string }) {
        const token = await sequelize.query(
            `
            SELECT * FROM tokens WHERE refresh_token = :refresh_token;
            `, 
            {
                type: 'SELECT',
                replacements: {refresh_token: refreshToken}
            }
        )

        return token;
    }

}

export const tokenService = new TokenService();