const dbPool = require('../config/database')
const bcrypt = require('bcrypt')

const register = async (body) => {
    const {password} = body
    const hashedPassword = await bcrypt.hash(password, 10)
    const SQLQuery = `  INSERT INTO users (fullName, phoneNumber, password) 
                        VALUES (
                            '${body.fullName}', 
                            '${body.phoneNumber}',
                            '${hashedPassword}')`
    return dbPool.execute(SQLQuery)
}

const login = async (phoneNumber) => {
    const SQLQuery = `  SELECT * FROM users 
                        WHERE phoneNumber = '${phoneNumber}'`
    const [rows] = await dbPool.execute(SQLQuery)
    return rows[0]
}

module.exports = {register, login}