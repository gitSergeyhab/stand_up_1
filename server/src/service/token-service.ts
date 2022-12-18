import jwt from 'jsonwebtoken';
import { TokenExpire } from '../const';
import { sequelize } from '../sequelize';
import { UserDTO_SC } from '../types';

class TokenService {
    generateTokens({userDTO} : {userDTO: UserDTO_SC}) {
        const accessToken = jwt.sign(userDTO, process.env.JWT_ACCESS_SECRET, {expiresIn: TokenExpire.Access});
        const refreshToken = jwt.sign(userDTO, process.env.JWT_REFRESH_SECRET, {expiresIn: TokenExpire.Refresh});
        return { accessToken, refreshToken };
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

}

export const tokenService = new TokenService();