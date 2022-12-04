import { ColumnId, SQLFunctionName, TableName } from "../const";
import { sequelize } from "../sequelize";


export const getDataFromSQL = (result: [unknown[], unknown], field: string) => ({[field]: result.slice(0, result.length - 1), ...result[result.length - 1] as {}});
export const getDataFromSQLWithTitles = (result: [unknown[], unknown]) => 
    ({data: result.slice(0, result.length - 2), titles: result[result.length - 2], ...result[result.length - 1] as {}});



export const insertView = async(id: string, user_id: string, column: string) => {
    await sequelize.query(
        `SELECT insert_view (:column, :id, :user_id);`, 
        {
            replacements: {id, user_id, column},
            type: 'INSERT'
        }
    )
}

const getProtoTitleQuery = (nativeCol: string, enCol: string, table: string, idCol: string) => `
    SELECT 
    ${nativeCol} AS native,
    ${enCol} AS en
    FROM ${table}
    WHERE ${idCol} = :id;
    `

export const getTitlesQuery = (type: string) => {
    const tableName = TableName[type] || TableName.comedians;

    switch (tableName) {
        case TableName.comedians: return `
            SELECT 
            get_one_name_of_two(comedian_first_name, comedian_last_name) AS native,
            get_one_name_of_two(comedian_first_name_en, comedian_last_name_en) AS en
            FROM comedians
            WHERE comedian_id = :id;
        `;
        case TableName.events: return getProtoTitleQuery('event_name', 'event_name_en', 'events', 'event_id');
        case TableName.places: return getProtoTitleQuery('place_name', 'place_name_en', 'places', 'place_id');
        case TableName.shows: return getProtoTitleQuery('show_name', '', 'shows', 'show_id');
        default: return getProtoTitleQuery('user_nik', '', 'users', 'user_id'); 
    }
}