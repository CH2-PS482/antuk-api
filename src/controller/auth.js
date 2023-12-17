const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authModel = require('../models/auth')

const registerController = async (req, res) => {
    const {body} = req
    try{            
        await authModel.registerModel(body)

        return res.status(201).json({
            message: 'Register success',
            data: {
                // idUser: user.idUser,
                fullName: body.fullName,
                phoneNumber: body.phoneNumber
            }
        })
    } catch (error){
        if (error.message === 'Phone number already registered'){
            return res.status(400).json({
                message: error.message
            })
        }
        res.status(500).json({
            message: 'Server error',
            serverMessage: error.message
        })
    }
}

const loginController = async (req, res) => {
    const {phoneNumber, password} = req.body

    try{
        const user = await authModel.loginModel(phoneNumber)
        if(!user){
            return res.status(400).json({
                message: 'User not found'
            })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid){ 
            return res.status(400).json({
                message: 'Wrong password'
            })
        } else {
            const token = jwt.sign({
                phoneNumber: user.phoneNumber,
                idUser: user.idUser
            },process.env.SECRETKEY,{
                expiresIn: '7d',
            }) 

            return res.status(200).json({
                message: 'Log in success',
                data: {               
                    idUser: user.idUser,     
                    phoneNumber: user.phoneNumber,
                    fullName: user.fullName,
                    token: token
                }
            })
        }
    } catch (error){
        res.status(500).json({
            message: 'Server error',
            serverMessage: error.message
        })
    }
}

module.exports = {registerController, loginController}