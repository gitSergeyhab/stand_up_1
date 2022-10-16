import { sequelize } from "../sequelize";
import { Request, Response } from "express";

const Order = {
    name: 'place_name',
    pop: 'number_show_rating',
}

class PlacesController {
                // remade! - pictures + resources

    async getPlaceById(req: Request, res: Response) {
        try {
            const {id} = req.params
                const place = await sequelize.query(
                    `
                    SELECT
                        place_id, place_name, place_name_en, place_city, place_city_en, date_place_founded, date_place_added, places.description,    
                        country_id, country_name, country_name_en,
                        user_id, user_nik,
                        picture_path,
                        fk_resource_type_id, resource_href
                    FROM places
                    LEFT JOIN countries ON places.fk_country_id = country_id
                    LEFT JOIN users ON places.fk_user_added_id = user_id
                    LEFT JOIN pictures ON place_id = pictures.fk_place_id
                    LEFT JOIN resources ON place_id = resources.fk_place_id 
                    WHERE place_id = :id;
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

                // remade! - pictures + resources + ADDED main_pic to places

            const shows = await sequelize.query(
                `
                SELECT
                    place_id, place_name, place_name_en, place_city, place_city_en,    
                    country_id, country_name, country_name_en,
                    picture_path
                FROM places
                LEFT JOIN countries ON country_id = places.fk_country_id
                LEFT JOIN pictures ON pictures.fk_place_id = place_id
                
                WHERE fk_country_id = ${country_id ? ':country_id' : 'fk_country_id'}
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
    async searchPlacesByNames(req: Request, res: Response) {
        try {
            const {search, limit = null, offset = null} = req.query;


            const shows = await sequelize.query(
                `
                SELECT
                show_id, show_date, show_name, average_show_rating, number_show_rating, show_poster, fk_show_status_id,
                comedian_id, comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en,
                country_id, country_name, country_name_en,
                place_id, place_name, place_name_en,
                language_id
                FROM shows
                LEFT JOIN comedians ON comedian_id = fk_comedian_id
                LEFT JOIN countries ON shows.fk_country_id = country_id
                LEFT JOIN languages ON shows.fk_language_id = language_id
                LEFT JOIN places ON shows.fk_place_id = place_id
                WHERE comedian_first_name ILIKE :search 
                    OR comedian_last_name ILIKE :search  
                    OR comedian_first_name_en ILIKE :search  
                    OR comedian_last_name_en ILIKE :search
                    OR comedian_last_name ILIKE :search  
                    OR show_name ILIKE :search
                    ORDER BY number_show_rating
                    LIMIT :limit
                    OFFSET :offset
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