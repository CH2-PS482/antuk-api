const dbPool = require('../config/database')

const {uid} = require('uid')

const addHistoryModel = async (id_user) => {
    const idHistory = uid(10)

    function getCurrentDate() {
        const months = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ]

        const currentDate = new Date()
        const day = currentDate.getDate()
        const monthIndex = currentDate.getMonth()
        const year = currentDate.getFullYear()
        
        const formattedDate = `${day} ${months[monthIndex]} ${year}`
        return formattedDate
    }

    const date = getCurrentDate()

    // TODO: trigger totalDuration & totalWarnings

    const SQLQuery = `  INSERT INTO history (id_user, idHistory, date)
                        VALUES ('${id_user}','${idHistory}', '${date}')`
                            
    // const SQLQuery = `  INSERT INTO history (id_user, idHistory, date, duration, totalWarnings)
    //                     VALUES ('${id_user}', '${idHistory}', '${date}', '${duration}', '${totalWarnings}')`
    return dbPool.execute(SQLQuery)
}

const getHistoryModel = async (user_id) => {
    const SQLQuery = `  SELECT * FROM history
                        WHERE id_user = '${user_id}'`
                        console.log(user_id);
    const [historyData] = await dbPool.execute(SQLQuery)
    return [historyData]
}

module.exports = {addHistoryModel, getHistoryModel}