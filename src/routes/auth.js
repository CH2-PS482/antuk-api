const express = require('express')

const authController = require('../controller/auth')
const { registerValidation, loginValidation } = require('../validation/validation')

const route = express.Router()

route.post('/register', registerValidation, authController.registerController)
route.post('/login', loginValidation, authController.loginController)

module.exports = route
