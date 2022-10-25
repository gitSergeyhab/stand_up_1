import { sequelize } from "../sequelize";
import { Request, Response } from "express";
import { OrderValues, SQLFunctionName, StatusCode } from "../const";
import { getDataFromSQL, insertView } from "../utils/sql-utils";


class ShowsController {
    async getShowById(req: Request, res: Response) {
        try {
            const {id, user_id = '1'} = req.params
                const shows = await sequelize.query(
                    `
                    SELECT
                        show_id, show_date, show_date_added, show_name, show_description, show_poster,
                        comedian_id, comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en, comedian_avatar,
                        countries.country_id, country_name, country_name_en,
                        place_id, place_name, place_name_en,
                        language_id, language_name, language_name_en,
                        users.user_id AS user_show_added_id, user_nik AS user_show_added_nik,
                        get_count_of_show_views(:id, 7) AS views,
                        get_count_of_show_views(:id, 1000000) AS total_views,
                        picture_paths,
                        video_paths, is_pro, minutes, user_ids, user_niks,
                        COUNT (show_rating_id) AS number_of_rate, AVG (show_rate) AS avg_rate
                    FROM shows
                    LEFT JOIN comedians USING (comedian_id)
                    LEFT JOIN countries ON shows.country_id = countries.country_id
                    LEFT JOIN languages USING (language_id)
                    LEFT JOIN places USING (place_id)
                    LEFT JOIN users ON shows.user_added_id = user_id
                    LEFT JOIN get_show_pictures() USING (show_id)
                    LEFT JOIN get_show_videos() USING (show_id)
                    LEFT JOIN show_ratings USING (show_id)
                    
                    WHERE show_id = :id
                    GROUP BY language_name, language_name_en, users.user_id, 
                    show_id, comedian_id, comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en, comedian_avatar, countries.country_id, place_name, place_name_en,
                    picture_paths,
                    show_id, video_paths, is_pro, minutes, user_ids, user_niks
                    ;
                    `,
                    { 
                        replacements: {id},
                        type: 'SELECT'
                    }
                );

                if (!shows.length) {
                    return res.status(StatusCode.NotFoundError).json({message: `where is not show with ID: ${id}`})
                }

                await insertView(id, user_id, SQLFunctionName.InsertShowView)
        
                return res.status(StatusCode.Ok).json({show: shows[0]})
            
        } catch {
            return res.status(StatusCode.ServerError).json({message: 'error get show by id'})
        }
    }


    async getShowsByQuery(req: Request, res: Response) {
        try {
            const {comedian_id = null, place_id = null, language_id = null, order = 'pop', direction = 'DESC', limit = null, offset = null } = req.query;

            const where = `
                WHERE language_id = ${language_id ? ':language_id' : 'language_id'} 
                AND place_id = ${place_id ? ':place_id' : 'place_id'} 
                AND comedian_id = ${comedian_id ? ':comedian_id' : 'comedian_id'} 
            `;

            const result = await sequelize.query(
                `
                SELECT
                    show_id, show_date, show_date_added AS date_added, show_name, show_poster,
                    comedian_id, comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en,
                    countries.country_id, country_name, country_name_en,
                    place_id, place_name, place_name_en,
                    language_id, language_name, language_name_en,
                    get_count_of_show_views(show_id, 7) AS views,
                    get_count_of_show_views(show_id, 1000000) AS total_views,
                    COUNT (show_rating_id) AS number_of_rate, AVG (show_rate) AS avg_rate
                FROM shows

                LEFT JOIN comedians USING (comedian_id)
                LEFT JOIN countries ON shows.country_id = countries.country_id
                LEFT JOIN languages USING (language_id)
                LEFT JOIN places USING (place_id)
                LEFT JOIN show_ratings USING (show_id)

                ${where}

                GROUP BY 
                language_name, language_name_en,
                show_id, 
                comedian_id, comedian_first_name, comedian_last_name, comedian_first_name_en, comedian_last_name_en, 
                countries.country_id, 
                place_name, place_name_en

                ORDER BY ${OrderValues[order as string] || OrderValues.pop} ${direction}
                LIMIT :limit
                OFFSET :offset
                ;

                SELECT
                COUNT (show_id)
                FROM shows

                ${where}
                ;
                `,
                {
                    replacements: {comedian_id, place_id, language_id, order, limit, offset},
                    type: 'SELECT'
                }
            )

            
            const data = getDataFromSQL(result, 'shows')


            return res.status(200).json({data});
    
   
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
                show_id, show_date, show_name, average_show_rating, number_show_rating, show_poster,
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