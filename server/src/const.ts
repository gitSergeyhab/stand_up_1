export enum StatusCode {
    ServerError = 500,
    NotFoundError = 404,
    BadRequest = 400,
    NotAuthError = 401,
    Ok = 200,
    Added = 201,
    Deleted = 204,
}


export const OrderValues = {
    dateAdded: 'show_date_added',
    dateWas: 'show_date',
    rate: 'avg_rate',
    pop: 'number_of_rate',
    views: 'view_num'
}