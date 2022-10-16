import { sequelize } from "../sequelize";
import { Request, Response } from "express";

class ComedianController {
    async getComedianByLocation(req: Request, res: Response) {
        try {

            const {country_id, comedian_city, comedian_city_en, limit = null, offset = null} = req.query;
    
                const data = await sequelize.query(
                    `
                    SELECT * FROM comedians
                    WHERE fk_country_id = ${country_id ? ':country_id' : 'fk_country_id'}
                    AND (comedian_city = ${comedian_city ? ':comedian_city' : 'comedian_city'} OR comedian_city_en = ${comedian_city_en ? ':comedian_city_en' : 'comedian_city_en'})
                    LIMIT :limit
                    OFFSET :offset
                    ;
                    `,
                    { 
                        replacements: {offset, limit, country_id, comedian_city, comedian_city_en},
                        type: 'SELECT'
                    }
                );
        
                return res.status(200).json({data})
                

        } catch(e) {
            console.log(e)
            return res.status(500).json({message: 'error get comedians'})
        }
    }


    async getComedianById(req: Request, res: Response) {
        try {
            const {id} = req.params;

            if (!id) {
                return res.status(400).json({message: 'there is not comedian_id'})
            }

            // remade! - pictures + resources
            const users = await sequelize.query(
                `
                SELECT 
                    comedian_id, 
                    comedian_first_name,
                    comedian_last_name,
                    comedian_first_name_en,
                    comedian_last_name_en,
                    comedian_city,
                    comedian_city_en,
                    comedian_avatar,
                    comedian_date_birth,
                    comedian_date_death,
                    comedian_date_added,
                    average_comedian_rating,
                    number_comedian_rating,
                    number_day_viewing,
                    number_week_viewing,
                    number_month_viewing,
                    number_viewing,
                    comedians.description,
                    country_id, country_name, country_name_en,
                    user_id, user_nik,
                    picture_path,
                    fk_resource_type_id, resource_href
                FROM comedians 
                LEFT JOIN countries ON comedians.fk_country_id = country_id
                LEFT JOIN users ON comedians.fk_user_added_id = user_id
                LEFT JOIN pictures ON comedian_id = pictures.fk_comedian_id
                LEFT JOIN resources ON comedian_id = resources.fk_comedian_id 
                
                WHERE comedian_id = :id;
                `,
                {
                    replacements: {id},
                    type: 'SELECT'
                }
            )

            if (!users.length) {
                return res.status(400).json({message: `there is not comedian with id = ${id}`})
            }

            return res.status(200).json({user: users});
    
   
        } catch {
            return res.status(500).json({message: 'error get comedian by id'})
        }
    }
    async searchComedianByNames(req: Request, res: Response) {
        try {
            const {search} = req.query;


            const comedians = await sequelize.query(
                `
                SELECT * FROM comedians
                WHERE comedian_first_name ILIKE :search 
                    OR comedian_last_name ILIKE :search  
                    OR comedian_first_name_en ILIKE :search  
                    OR comedian_last_name_en ILIKE :search
                ;
                `,
                {
                    replacements: {search: `%${search}%`},
                    type: 'SELECT'
                }
            )

            return res.status(200).json({comedians});
    
   
        } catch {
            return res.status(500).json({message: 'error search comedian'})
        }
    }

}


export const comedianController = new ComedianController();