const express = require('express')

const verifyToken = require('../middleware/accessValidation')
const historyController = require('../controller/history')

const route = express.Router()

route.post('/', verifyToken, historyController.addHistoryController)
route.get('/', verifyToken, historyController.getHistoryController)

module.exports = route