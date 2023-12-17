const dbPool = require('../config/database')
const bcrypt = require('bcrypt')

const showProfileModel = async (data) => {
    const SQLQuery = `  SELECT * FROM users 
                        WHERE phoneNumber = '${data.phoneNumber}'`
    const [rows] = await dbPool.execute(SQLQuery)
    return rows[0]
}

const updateProfileModel = async (body, data) => {
    const SQLQuery = `  UPDATE users
                        SET phoneNumber = '${body.phoneNumber}', fullName = '${body.fullName}'
                        WHERE idUser = '${data.idUser}'`
    return dbPool.execute(SQLQuery)
}

const resetPasswordModel = async (body, data) => {
    const {password} = body

    const hashedPassword = await bcrypt.hash(password, 10)

    const SQLQuery = `  UPDATE users
                        SET password = '${hashedPassword}'
                        WHERE idUser = '${data.idUser}'`
    return dbPool.execute(SQLQuery)
}

module.exports = {showProfileModel, updateProfileModel, resetPasswordModel}