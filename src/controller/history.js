const historyModel = require('../models/history')

const addHistoryController = async (req, res) => {
    try {
        await historyModel.addHistoryModel()

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
        const history = await historyModel.getHistoryModel()

        res.status(200).json({
            message: 'Get all history success',
            data: history
        })
    } catch (error){
        res.status(500).json({
            message: 'Server error',
            serverMessage: error.message
        })
    }
}

module.exports = {addHistoryController, getHistoryController}