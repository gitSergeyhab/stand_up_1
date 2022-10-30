import { SQLFunctionName } from "../const";
import { sequelize } from "../sequelize";


export const getDataFromSQL = (result: [unknown[], unknown], field: string) => ({[field]: result.slice(0, result.length - 1), ...result[result.length - 1] as {}});


export const insertView = async(id: string, user_id: string, column: string) => {
    await sequelize.query(
        `SELECT insert_view (:column, :id, :user_id);`, 
        {
            replacements: {id, user_id, column},
            type: 'INSERT'
        }
    )
}