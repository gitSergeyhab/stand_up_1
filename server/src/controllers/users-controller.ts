import { sequelize } from "../sequelize";
import { Request, Response } from "express";

class UserController {
    async getUsers(req: Request, res: Response) {
        try {
            const limit = +req.query.limit || null;
            const offset = isNaN(+req.query.offset) ?  null : +req.query.offset;
            const status = req.query.status;

            const where = status ? 'WHERE fk_status_id = :status' : '';
    
            if (limit && offset !== null) {
                const data = await sequelize.query(
                    `
                    SELECT * FROM users
                    ${where}
                    LIMIT :limit
                    OFFSET :offset;
                    ;
                    `,
                    { 
                        replacements: {offset, limit, status},
                        type: 'SELECT'
                    }
                );
        
                return res.status(200).json({data})
                
            } else {

                const users = await sequelize.query(
                    `
                    SELECT * FROM users ${where};
                    `,
                    { 
                        replacements: {status},
                        type: 'SELECT'
                    }
                );
        
                return res.status(200).json({users})
            }
        } catch {
            return res.status(500).json({message: 'error get users'})
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const {id} = req.params;

            if (!id) {
                return res.status(400).json({message: 'there is not id'})
            }

            const users = await sequelize.query(
                `
                SELECT * FROM users WHERE user_id = :id;
                `, 
                {
                    replacements: {id},
                    type: 'SELECT'
                }
            )

            if (!users.length) {
                return res.status(400).json({message: `there is not user with id = ${id}`})
            }

            return res.status(200).json({user: users[0]});
    
   
        } catch {
            return res.status(500).json({message: 'error get users'})
        }
    }
    // async createUser(req: Request, res: Response) {
    //     try {

    //         const {body} = req;


    //         const result = await sequelize.query(
    //             `
    //             INSERT INTO users ( 
    //                 user_email,
    //                 user_password,
    //                 user_nik,
    //                 fk_status_id, 
    //                 user_first_name,
    //                 user_last_name,
    //                 fk_country_id,
    //                 user_city,
    //                 user_avatar,
    //                 user_date_birth,
    //                 description
    //                 ) VALUES (
    //                 :email,
    //                 :hash_password,
    //                 :nik,
    //                 :status,
    //                 :first_name,
    //                 :last_name,
    //                 :country,
    //                 :city,
    //                 :avatar,
    //                 :date_birth,
    //                 :description
    //                 );
    //             `,
    //             { 
    //                 replacements: body,
    //                 type: 'INSERT'
    //             }
    //         );

    //         return res.status(201).json({result})
    
    //     } catch {
    //         return res.status(500).json({message: 'err'})
    //     }
    // }
}


export const userController = new UserController();