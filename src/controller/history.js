const historyModel = require('../models/history')

const addHistoryController = async (req, res) => {
    try {
        // Get ID User
        const id_user = req.decodedToken.idUser; 

        await historyModel.addHistoryModel(id_user)

        res.status(201).json({
            message: 'Add history success',
        })
    } catch (error){
        res.status(500).json({
            message: 'Server error',
            serverMessage: error.message
        })
    }
}

const getHistoryController = async (req, res) => {
    try {
        // Get ID user from active token
        const user_id = req.decodedToken.idUser 

        const history = await historyModel.getHistoryModel(user_id)

        if (history === [ [] ]){
            res.status(200).json({
                message: 'Get all history success'
            })
        }
        res.status(200).json({
            message: 'Get all history success',
            data: history
        })
        console.log(history);
    } catch (error){
        res.status(500).json({
            message: 'Server error',
            serverMessage: error.message
        })
    }
}

module.exports = { addHistoryController, getHistoryController }