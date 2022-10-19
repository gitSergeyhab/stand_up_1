import { sequelize } from "../sequelize";
import { Request, Response } from "express";
import { OrderValues } from "../const";

class ComedianController {
    async getComedianByLocation(req: Request, res: Response) {
        try {

            const {country_id, city, limit = null, offset = null, order='pop', direction='ASC'} = req.query;
    
                const data = await sequelize.query(
                    `
                    SELECT 
                        comedian_id, comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en, 
                        country_id, country_name, country_name_en,
                        AVG(comedian_rate) as ${OrderValues.pop}
                    FROM comedians

                    LEFT JOIN countries USING(country_id)
                    LEFT JOIN comedian_ratings USING(comedian_id)
                    
                    WHERE country_id = ${country_id ? ':country_id' : 'country_id'}
                        AND (comedian_city = ${city ? ':city' : 'comedian_city'} OR comedian_city_en = ${city ? ':city' : 'comedian_city_en'})

                    GROUP BY comedian_id, country_id, country_name, country_name_en

                    ORDER BY ${OrderValues[order as string]} ${direction}

                    LIMIT :limit
                    OFFSET :offset
                    ;
                    `,
                    { 
                        replacements: {offset, limit, country_id, city},
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
                    comedian_description,
                    countries.country_id, country_name, country_name_en,
                    users.user_id, user_nik,
                    picture_path,
                    resource_type_id, resource_href,
                    AVG (comedian_rate) as avg_rate, COUNT(comedian_rate) as number_of_rate
                FROM comedians
                LEFT JOIN countries USING (country_id)
                LEFT JOIN users ON users.user_id = comedians.user_added_id
                LEFT JOIN pictures USING (comedian_id)
                LEFT JOIN resources USING (comedian_id)
                LEFT JOIN comedian_ratings USING (comedian_id)
                
                WHERE comedian_id = :id
                GROUP BY comedian_id, countries.country_id, users.user_id, pictures.picture_path, resource_type_id, resource_href
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
                `SELECT 
                    comedian_id, comedian_first_name, comedian_last_name, 
                    country_id, country_name, country_name_en,
                AVG(comedian_rate) 
                FROM comedians
                LEFT JOIN countries USING(country_id)
                LEFT JOIN comedian_ratings USING(comedian_id)
                WHERE comedian_first_name ILIKE :search 
                    OR comedian_last_name ILIKE :search  
                    OR comedian_first_name_en ILIKE :search  
                    OR comedian_last_name_en ILIKE :search
                GROUP BY comedian_id, country_id, country_name, country_name_en
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