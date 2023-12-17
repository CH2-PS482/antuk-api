const dbPool = require('../config/database')

const {uid} = require('uid')

const addHistoryModel = async () => {
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

    const SQLQuery = `  INSERT INTO history (idHistory, date)
                        VALUES ('${idHistory}', '${date}')`
                            
    // const SQLQuery = `  INSERT INTO history (idHistory, date, duration, totalWarnings)
    //                     VALUES ('${idHistory}', '${date}', '${dura}', '${totalWarnings}')`
    return dbPool.execute(SQLQuery)
}

const getHistoryModel = async () => {
    const SQLQuery = `SELECT * FROM history`
    return dbPool.execute(SQLQuery)
}

module.exports = {addHistoryModel, getHistoryModel}