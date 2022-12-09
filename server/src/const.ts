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

export const enum Column {
    Comedian = 'comedian_id',
    Show = 'show_id',
    Place = 'place_id',
    Event = 'event_id',
    User = 'user_id'
}

export const TableName = {
    comedians: 'comedians',
    shows: 'shows',
    places: 'places',
    events: 'events',
    users: 'users'
}


export const ColumnId = {
    comedians: 'comedian_id',
    shows: 'show_id',
    places: 'place_id',
    events: 'event_id',
    users: 'user_id'
}

export const JoiMessageKey = {
    StringMin: `string.min`,
    StringMax: `string.max`,
    StringEmpty: `string.empty`,
    Required: `any.required`,
    AnyOnly: `any.only`,
    NumberMin: `number.min`,
    NumberBase: `number.base`,
    Regexp: `string.pattern.base`,
    Email: `string.email`
  };