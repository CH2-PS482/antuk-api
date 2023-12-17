const express = require('express')

const verifyToken = require('../middleware/accessValidation')
const profileController = require('../controller/profile')
const { editProfileValidation, resetPasswordValidation } = require('../validation/validation')

const route = express.Router()

route.get('/', verifyToken, profileController.getProfileController)
route.patch('/edit', verifyToken, editProfileValidation, profileController.editProfileController)
route.put('/reset-password', verifyToken, resetPasswordValidation, profileController.resetPasswordController)

module.exports = route
