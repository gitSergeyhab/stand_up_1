import { sequelize } from "../sequelize";
import { Request, Response } from "express";
import { OrderValues, SQLFunctionName, StatusCode } from "../const";
import { getDataFromSQL, insertView } from "../utils/sql-utils";

const EventOrder = {
    totalViews: 'total_views',
    views: 'views',
    time: 'event_date',
    upcoming : 'upcoming '
}


class EventsController {
    async getEventById(req: Request, res: Response) {
        try {
            const {id, user_id = '1'} = req.params
                const events = await sequelize.query(
                    `
                    SELECT 
                        event_id, event_name, event_name_en,    event_discription, event_date, event_date_added, event_status, event_promo_picture AS event_picture,
                        places.place_id, place_name, place_name_en, places.place_promo_picture AS place_picture,
                        user_id, user_nik, user_avatar,
                        countries.country_id, country_name, country_name_en, 
                        get_event_comedians(:id) as event_comedians,
                        get_event_shows(:id) AS event_shows,
                        get_event_resource(:id) AS event_resources,
                        get_count_of_event_views(:id, 7) as views,
                        get_count_of_event_views(:id, 1000000) as total_views
                    
                    FROM events
                    LEFT JOIN places USING (place_id)
                    LEFT JOIN countries USING (country_id)
                    LEFT JOIN users USING (user_id)
                    WHERE event_id = :id
                    ;
                    `,
                    { 
                        replacements: {id},
                        type: 'SELECT'
                    }
                );

                if (!events.length) {
                    return res.status(StatusCode.NotFoundError).json({message: `where is not event with ID: ${id}`})
                }

                await insertView(id, user_id, SQLFunctionName.InsertEventView)
        
                return res.status(StatusCode.Ok).json({event: events[0]})
            
        } catch {
            return res.status(StatusCode.ServerError).json({message: 'error get show by id'})
        }
    }

// !!! PLANNED -> planned
    async getEventsByQuery(req: Request, res: Response) {
        try {
            const {days = '365', country_id = null, city = null, status = null, order = null, direction = null, limit = null, offset = null } = req.query;

            const where = `
                WHERE  country_id = ${country_id ? ':country_id' : 'country_id'}
                AND ( LOWER(place_city)  = LOWER(${city ? ':city' : 'LOWER(place_city)'})  OR LOWER(place_city_en) = LOWER(${city ? ':city' : 'LOWER(place_city_en)'}) )
                AND event_status = ${status ? ':status' : 'event_status'}
                AND EXTRACT (DAY FROM ( NOW() - event_date )) < :days
            `;

            const result = await sequelize.query(
                `
                SELECT 
                    event_id, event_name, event_name_en, event_date, event_date_added, event_status, event_promo_picture AS event_picture,
                    countries.country_id, country_name, country_name_en, 
                    place_city, place_city_en,
                    get_count_of_event_views(event_id, 7) AS views,
                    get_count_of_event_views(event_id, 1000000) AS total_views,
                    ABS(EXTRACT (DAY FROM ( NOW() - event_date )))  AS upcoming

                FROM events
                LEFT JOIN places USING (place_id)
                LEFT JOIN countries USING (country_id)

                ${where}

                ORDER BY ${EventOrder[order as string] || EventOrder.views} ${direction === 'asc' ? 'ASC' : 'DESC'}
                
                LIMIT :limit
                OFFSET :offset
                ;

                SELECT
                COUNT (event_id)::int
                FROM events
                LEFT JOIN places USING (place_id)
                LEFT JOIN countries USING (country_id)

                ${where}
                ;
                `,
                {
                    replacements: { days, country_id, city, status, order, direction, limit, offset},
                    type: 'SELECT'
                }
            )

            
            const data = getDataFromSQL(result, 'events')


            return res.status(200).json({data});
    
   
        } catch(err) {
            console.log(err)
            return res.status(500).json({message: 'error get shows by query'})
        }
    }
}


export const eventsController = new EventsController();