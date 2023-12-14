const dbPool = require('../config/database')

const showProfile = async (data) => {
    const SQLQuery = `  SELECT * FROM users 
                        WHERE phoneNumber = '${data.phoneNumber}'`
    const [rows] = await dbPool.execute(SQLQuery)
    return rows[0]
}

const updateProfile = async (body, data) => {
    const SQLQuery = `  UPDATE users
                        SET phoneNumber = '${body.phoneNumber}', fullName = '${body.fullName}'
                        WHERE idUser = '${data.idUser}'`
    return dbPool.execute(SQLQuery)
}

// const resetPassword = async () => {
//     const SQLQuery 
// }

module.exports = {showProfile, updateProfile}