const dbPool = require('../config/database')
const bcrypt = require('bcrypt')

const showProfileModel = async (data) => {
    const SQLQuery = `  SELECT * FROM users 
                        WHERE phoneNumber = '${data.phoneNumber}'`
    const [rows] = await dbPool.execute(SQLQuery)
    return rows[0]
}

const updateProfileModel = async (body, data) => {
    // Validate phone number
    const existingUserQuery = `     SELECT * FROM users 
                                    WHERE phoneNumber = '${body.phoneNumber}'`
    const [existingUserRows] = await dbPool.execute(existingUserQuery)

    if (existingUserRows.length > 0) {
        const error = new Error('Phone number already registered')
        throw error
    }

    const SQLQuery = `  UPDATE users
                        SET phoneNumber = '${body.phoneNumber}', fullName = '${body.fullName}'
                        WHERE idUser = '${data.idUser}'`
    dbPool.execute(SQLQuery)
    return data.idUser
}

const resetPasswordModel = async (body, data) => {
    const { password } = body

    const hashedPassword = await bcrypt.hash(password, 10)

    const SQLQuery = `  UPDATE users
                        SET password = '${hashedPassword}'
                        WHERE idUser = '${data.idUser}'`
    return dbPool.execute(SQLQuery)
}

module.exports = { showProfileModel, updateProfileModel, resetPasswordModel }