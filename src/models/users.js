// mirip handler buat mysql
const dbPool = require('../config/database')

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users'
    return dbPool.execute(SQLQuery)
}

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users (name, email) 
                        VALUES ('${body.name}', '${body.email}')`
    return dbPool.execute(SQLQuery)
}

const updateUser = (body, id) => {
    const SQLQuery = `  UPDATE users 
                        SET name='${body.name}', email='${body.email}'
                        WHERE id=${id}`
    return dbPool.execute(SQLQuery)
}

const deleteUser = (id) => {
    const SQLQuery = `  DELETE FROM users
                        WHERE id=${id}`
    return dbPool.execute(SQLQuery)
}

module.exports = {getAllUsers, createNewUser, updateUser, deleteUser}