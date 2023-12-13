const express = require('express')

const UserController = require('../controller/users.js')

const route = express.Router()

route.post('/', UserController.register)

route.get('/', UserController.getAllUsers)

route.patch('/:id',UserController.updateUser)

route.delete('/:id',UserController.deleteUser)

module.exports = route;