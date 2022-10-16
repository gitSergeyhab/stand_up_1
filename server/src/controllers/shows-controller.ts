import { sequelize } from "../sequelize";
import { Request, Response } from "express";

const Order = {
    pop: 'number_show_rating',
    score: 'average_show_rating',
    dateAdded: 'show_date_added',
    dateWas: 'show_date'


}

class ShowsController {
    async getShowById(req: Request, res: Response) {
        try {
            const {id} = req.params
                const shows = await sequelize.query(
                    `
                    SELECT
                    show_id, show_date, show_date_added, show_name, shows.description, average_show_rating, number_show_rating, show_poster, fk_show_status_id,
                    comedian_id, comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en, comedian_avatar, average_comedian_rating,
                    country_id, country_name, country_name_en,
                    place_id, place_name, place_name_en,
                    language_id, language_name, language_name_en,
                    user_id, user_nik,
                    show_video_id, show_videos_path, is_video_professional, minutes
                    FROM shows
                    LEFT JOIN comedians ON comedian_id = fk_comedian_id
                    LEFT JOIN countries ON shows.fk_country_id = country_id
                    LEFT JOIN languages ON shows.fk_language_id = language_id
                    LEFT JOIN places ON shows.fk_place_id = place_id
                    LEFT JOIN users ON shows.fk_user_added_id = user_id
                    LEFT JOIN show_videos ON show_videos.fk_show_id = show_id
                    WHERE show_id = :id;
                    `,
                    { 
                        replacements: {id},
                        type: 'SELECT'
                    }
                );
        
                return res.status(200).json({show: shows[0]})
            
        
            
        } catch {
            return res.status(500).json({message: 'error get show by id'})
        }
    }


    async getShowsByQuery(req: Request, res: Response) {
        try {
            const {comedian_id = null, place_id = null, language_id = null, order = 'pop'} = req.query;


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
                WHERE language_id = ${language_id ? ':language_id' : 'language_id'} 
                AND place_id = ${place_id ? ':place_id' : 'place_id'} 
                AND comedian_id = ${comedian_id ? ':comedian_id' : 'comedian_id'} 
                ORDER BY ${Order[order as string] || Order.pop}
                ;
                `,
                {
                    replacements: {comedian_id, place_id, language_id, order},
                    type: 'SELECT'
                }
            )



            return res.status(200).json({shows});
    
   
        } catch(err) {
            console.log(err)
            return res.status(500).json({message: 'error get shows by query'})
        }
    }
    async searchShowsByNames(req: Request, res: Response) {
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


export const showsController = new ShowsController();