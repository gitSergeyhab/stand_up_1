import { SQLFunctionName } from "../const"
import { sequelize } from "../sequelize"

export const insertView = async(id: string, user_id: string, sqlFuncName: SQLFunctionName) => {
    await sequelize.query(
        `SELECT ${sqlFuncName}(:id, :user_id);`, 
        {
            replacements: {id, user_id},
            type: 'INSERT'
        }
    )
}