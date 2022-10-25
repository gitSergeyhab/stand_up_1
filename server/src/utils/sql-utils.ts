import { SQLFunctionName } from "../const";
import { sequelize } from "../sequelize";


export const getDataFromSQL = (result: [unknown[], unknown], field: string) => ({[field]: result.slice(0, result.length - 1), ...result[result.length - 1] as {}});


export const insertView = async(id: string, user_id: string, sqlFuncName: SQLFunctionName) => {
    await sequelize.query(
        `SELECT ${sqlFuncName}(:id, :user_id);`, 
        {
            replacements: {id, user_id},
            type: 'INSERT'
        }
    )
}