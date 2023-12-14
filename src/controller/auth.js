const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authModel = require('../models/auth')

const register = async (req, res) => {
    const {body} = req

    try{
        await authModel.register(body)
            res.status(201).json({
            message: 'Register success',
            data: {
                fullName: body.fullName,
                phoneNumber: body.phoneNumber
            }
        })
    } catch (error){
        res.status(500).json({
            message: 'Server error',
            serverMessage: error.message
        })
    }
}

const login = async (req, res) => {
    const {phoneNumber, password} = req.body

    try{
        const user = await authModel.login(phoneNumber)
        if(!user){
            return res.status(404).json({
                message: 'User not found'
            })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid){ 
            return res.status(401).json({
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

module.exports = {register, login}