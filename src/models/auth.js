const dbPool = require('../config/database')

const bcrypt = require('bcrypt')
const {uid} = require('uid')

const registerModel = async (body) => {
    const {password} = body

    const idUser = uid(8)
    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUserQuery = `     SELECT * FROM users 
                                    WHERE phoneNumber = '${body.phoneNumber}'`
    const [existingUserRows] = await dbPool.execute(existingUserQuery)

    if (existingUserRows.length > 0) {
        const error = new Error('Phone number already registered')
        throw error
    }

    const SQLQuery = `  INSERT INTO users (idUser, fullName, phoneNumber, password) 
                        VALUES (
                            '${idUser}',
                            '${body.fullName}', 
                            '${body.phoneNumber}',
                            '${hashedPassword}')`
    return dbPool.execute(SQLQuery)
}

const loginModel = async (phoneNumber) => {
    const SQLQuery = `  SELECT * FROM users 
                        WHERE phoneNumber = '${phoneNumber}'`
    const [rows] = await dbPool.execute(SQLQuery)
    return rows[0]
}

module.exports = {registerModel, loginModel}