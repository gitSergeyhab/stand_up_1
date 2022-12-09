import { sequelize } from "../sequelize";
import { Request, Response } from "express";
import { OrderValues, StatusCode, SQLFunctionName } from "../const";


class UserController {

    async createUser(req: Request, res: Response) {
        const {nik, email, password, passwordRepeat} = req.body;

        console.log(nik, email, password, passwordRepeat)

    }


    async getUserById(req: Request, res: Response) {
        try {
            const {id} = req.params;

            if (!id) {
                return res.status(400).json({message: 'there is not id'})
            }

            const users = await sequelize.query(
                `
                SELECT 
                    user_id, 
                    user_email, user_password, user_nik, user_first_name, user_last_name, user_city, user_avatar, user_date_birth, user_description, user_date_registration,
                    country_id, country_name, country_name_en,
                    AVG(show_rate)::real AS avg_rate,
                    get_review_user_data(:id, 3) AS reviews,
                    get_user_views_data(:id, 10) AS latest_views,
                    picture_path,
                    get_resources('user_id', 1) AS resources,
                    get_show_ratings_user_data(:id, 3) AS show_ratings,
                    get_comedian_ratings_user_data(:id, 3) AS comedian_ratings

                FROM users
                LEFT JOIN countries USING(country_id)
                LEFT JOIN show_ratings USING(user_id)
                LEFT JOIN pictures USING(user_id)
                WHERE user_id = :id
                GROUP BY user_id, country_name, country_name_en, picture_path
                `, 
                {
                    replacements: {id},
                    type: 'SELECT'
                }
            )

            if (!users.length) {
                return res.status(StatusCode.NotFoundError).json({message: `there is not user with id = ${id}`})
            }

            return res.status(200).json({user: users[0]});
    
   
        } catch {
            return res.status(500).json({message: 'error get users'})
        }
    }
}


export const userController = new UserController();