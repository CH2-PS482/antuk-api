const dbPool = require('../config/database')
const bcrypt = require('bcrypt')

const register = async (body) => {
    const {password, confirmPassword} = body

    const hashedPassword = await bcrypt.hash(password, 10)

    // Validate
    if (password !== confirmPassword) {
        throw new Error('Password do not match'); // 400
    }

    const existingUserQuery = `     SELECT * FROM users 
                                    WHERE phoneNumber = '${body.phoneNumber}'`
    const [existingUserRows] = await dbPool.execute(existingUserQuery);

    if (existingUserRows.length > 0) {
        throw new Error('Phone number already registred') // 400
    }

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