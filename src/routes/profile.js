const express = require('express')

const verifyToken = require('../middleware/accessValidation')
const profileController = require('../controller/profile')
const { editProfileValidation } = require('../validation/validation')

const route = express.Router()

route.get('/', verifyToken, profileController.getProfile)
route.patch('/edit', verifyToken, editProfileValidation, profileController.editProfile)
// route.put('/resetPassword', verifyToken, profileController.resetPassword)

module.exports = route
