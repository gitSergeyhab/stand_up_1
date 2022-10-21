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
}


export const userController = new UserController();