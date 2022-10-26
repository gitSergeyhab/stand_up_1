import { sequelize } from "../sequelize";
import { Request, Response } from "express";
import { OrderValues, StatusCode, SQLFunctionName } from "../const";


class UserController {
    // async getUsers(req: Request, res: Response) {
    //     try {
    //         const limit = +req.query.limit || null;
    //         const offset = isNaN(+req.query.offset) ?  null : +req.query.offset;
    //         const status = req.query.status;

    //         const where = status ? 'WHERE user_status = :status' : '';
    
    //         if (limit && offset !== null) {
    //             const data = await sequelize.query(
    //                 `
    //                 SELECT * FROM users
    //                 ${where}
    //                 LIMIT :limit
    //                 OFFSET :offset;
    //                 ;
    //                 `,
    //                 { 
    //                     replacements: {offset, limit, status},
    //                     type: 'SELECT'
    //                 }
    //             );
        
    //             return res.status(200).json({data})
                
    //         } else {

    //             const users = await sequelize.query(
    //                 `
    //                 SELECT * FROM users ${where};
    //                 `,
    //                 { 
    //                     replacements: {status},
    //                     type: 'SELECT'
    //                 }
    //             );
        
    //             return res.status(200).json({users})
    //         }
    //     } catch {
    //         return res.status(500).json({message: 'error get users'})
    //     }
    // }

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
                    get_user_resource(:id) AS resources,
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