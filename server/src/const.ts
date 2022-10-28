export const enum StatusCode {
    ServerError = 500,
    NotFoundError = 404,
    BadRequest = 400,
    NotAuthError = 401,
    Ok = 200,
    Added = 201,
    Deleted = 204,
}


export const OrderValues = {
    dateAdded: 'date_added',
    dateWas: 'show_date',
    rate: 'avg_rate',
    pop: 'number_of_rate',
    views: 'views',
    totalViews: 'total_views'
}


export const enum SQLFunctionName {
    InsertComedianView = 'insert_comedian_view',
    InsertShowView = 'insert_show_view',
    InsertPlaceView = 'insert_place_view',
    InsertEventView = 'insert_event_view',

}