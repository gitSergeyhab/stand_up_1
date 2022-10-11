import { sequelize } from "../sequelize";
import { Request, Response } from "express";

class UserController {
    async getUsers(req: Request, res: Response) {

        try {
            const users = await sequelize.query(
                `
                SELECT * FROM users;
                `
            );
    
            return res.status(200).json({users})

        } catch (err) {
            return res.status(500).json({message: 'server getUsers Error'})
        }

    }
}


export const userController = new UserController();