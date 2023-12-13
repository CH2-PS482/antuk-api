const usersModel = require('../models/users')

const register = async (req, res) => {
    const {body} = req

    try {
        await usersModel.register(body)
        // Validation        
        res.status(201).json({
            message: 'Register success',
            data: body
        })
    } catch (error){
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}

const getAllUsers = async (req, res) => {
    try{
        const [data] = await usersModel.getAllUsers()
        res.json({
            message: 'GET user success',
            data: data
        })
    }
    catch (error){
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}



const updateUser = async (req, res) => {
    const {id} = req.params
    const {body} = req
    try {
        await usersModel.updateUser(body, id)
        res.json({
            message: 'UPDATE user success',
            data: {
                id: id,
                ...body //spread biar muncul semuanya
            }
        })
    } catch (error){
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    try {
        await usersModel.deleteUser(id)
        res.json({
            message: 'DELETE user success',
        })
    } catch (error){
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}
module.exports = { getAllUsers, register, updateUser, deleteUser }