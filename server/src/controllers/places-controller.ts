import { sequelize } from "../sequelize";
import { Request, Response } from "express";
import { OrderValues } from "../const";



class PlacesController {
                // remade! - pictures + resources

    async getPlaceById(req: Request, res: Response) {
        try {
            const {id} = req.params
                const place = await sequelize.query(
                    // `
                    // SELECT
                    //     place_id, place_name, place_name_en, place_city, place_city_en, place_date_founded, date_place_added, place_description, place_promo_picture,   
                    //     countries.country_id, country_name, country_name_en,
                    //     users.user_id, user_nik,
                    //     picture_path,
                    //     resource_type_id, resource_href
                    // FROM places
                    // LEFT JOIN countries USING(country_id)
                    // LEFT JOIN users ON user_id = user_added_id
                    // LEFT JOIN pictures USING(place_id) 
                    // LEFT JOIN resources USING(place_id)
                    // WHERE place_id = :id;
                    // `,
                    `
                    SELECT
                        place_id, place_name, place_name_en, place_city, place_city_en, place_date_founded, date_place_added, place_description, place_promo_picture,   
                        countries.country_id, country_name, country_name_en,
                        users.user_id, user_nik,
                        COUNT (place_view_id)
                    FROM places
                    LEFT JOIN countries USING(country_id)
                    LEFT JOIN users ON user_id = user_added_id
                    LEFT JOIN place_views USING(place_id)
                    WHERE place_id = :id
                    GROUP BY  place_id, countries.country_id, users.user_id 
                    ;
                    `,
                    { 
                        replacements: {id},
                        type: 'SELECT'
                    }
                );
        
                return res.status(200).json({place})
        } catch {
            return res.status(500).json({message: 'error get place by id'})
        }
    }


    async getPlacesByQuery(req: Request, res: Response) {
        try {
            const {country_id = null, city = null, order = 'pop', limit = null, offset = null} = req.query;


            const shows = await sequelize.query(
                `
                SELECT
                    place_id, place_name, place_name_en, place_city, place_city_en, place_promo_picture,
                    country_id, country_name, country_name_en
                FROM places
                LEFT JOIN countries USING (country_id)
                
                WHERE country_id = ${country_id ? ':country_id' : 'country_id'}
                AND ( LOWER(place_city)  = LOWER(${city ? ':city' : 'place_city'})  OR LOWER(place_city_en) = LOWER(${city ? ':city' : 'place_city_en'}) )
                LIMIT :limit
                OFFSET :offset
                ;
                `,
                {
                    replacements: {country_id, city, order, limit, offset},
                    type: 'SELECT'
                }
            )



            return res.status(200).json({shows});
    
   
        } catch(err) {
            console.log(err)
            return res.status(500).json({message: 'error get shows by query'})
        }
    }
    async searchPlacesByName(req: Request, res: Response) {
        try {
            const {search='', limit = null, offset = null, order='view'} = req.query;

            const shows = await sequelize.query(
                `
                SELECT 
                    place_id, place_name, place_name_en, place_city, place_city_en, place_promo_picture,
                    COUNT(place_view_id) as view_num
                FROM places
                JOIN place_views USING (place_id) 
                
                WHERE place_name ILIKE :search OR place_name_en ILIKE :search
                GROUP BY place_id
                ORDER BY ${OrderValues[order as string] || OrderValues.views} DESC
                LIMIT :limit
                OFFSET :offset;
                ;
                `,
                {
                    replacements: {search: `%${search}%`, limit, offset},
                    type: 'SELECT'
                }
            )

            return res.status(200).json({shows});
    
   
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: 'error search shows'})
        }
    }

}


export const placesController = new PlacesController();