import { sequelize } from "../sequelize";
import { Request, Response } from "express";

class ComedianController {
    async getComedianByLocation(req: Request, res: Response) {
        try {
            const limit = +req.query.limit || null;
            const offset = isNaN(+req.query.offset) ?  null : +req.query.offset;
            const {country_id, comedian_city, comedian_city_en} = req.query;

            const comedianCountry = country_id ? 'fk_country_id = :country_id' : '';
            const comedianCity = comedian_city ? 'comedian_city = :comedian_city' : '';
            const comedianCityEn = comedian_city_en ? 'comedian_city_en = :comedian_city_en' : '';

            const locations = [comedianCountry, comedianCity, comedianCityEn].filter((item) => item);

            const locationQuery = locations.length ? `WHERE ${locations.filter((item) => item).join(' AND ')}` : '';

    
            if (limit && offset !== null) {
                const data = await sequelize.query(
                    `
                    SELECT * FROM comedians
                    LIMIT :limit
                    OFFSET :offset
                    ${locationQuery}
                    ;
                    `,
                    { 
                        replacements: {offset, limit, country_id, comedian_city, comedian_city_en},
                        type: 'SELECT'
                    }
                );
        
                return res.status(200).json({data})
                
            } else {

                const comedians = await sequelize.query(
                    `
                    SELECT * FROM comedians ${locationQuery};
                    `,
                    { 
                        replacements: {country_id, comedian_city, comedian_city_en},
                        type: 'SELECT'
                    }
                );
        
                return res.status(200).json({comedians})
            }
        } catch {
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
                SELECT * FROM comedians WHERE comedian_id = :id;
                `,
                {
                    replacements: {id},
                    type: 'SELECT'
                }
            )

            if (!users.length) {
                return res.status(400).json({message: `there is not comedian with id = ${id}`})
            }

            return res.status(200).json({user: users[0]});
    
   
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
                WHERE comedian_first_name LIKE :search
                    OR comedian_last_name LIKE :search
                    OR comedian_first_name_en LIKE :search
                    OR comedian_last_name_en LIKE :search
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