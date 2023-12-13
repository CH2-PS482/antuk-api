const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authModel = require('../models/auth')
// const {registerValidation, loginValidation, editProfileValidation, resetPasswordValidation} = require('../validation/validation')

const register = async (req, res) => {
    const {body} = req
    
    try{
        // confirm password
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
    console.log(phoneNumber);

    try{
        const user = await authModel.login(phoneNumber)
        console.log(user);
        if(!user){
            return res.status(404).json({
                message: 'User not found'
            })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid){ 
            const token = jwt.sign({
                phoneNumber
            },process.env.SECRETKEY,{
                expiresIn: '7d',
            }) 

            return res.status(200).json({
                message: 'Log in success',
                data: {                    
                    id: user.id,
                    phoneNumber: user.phoneNumber,
                    fullName: user.fullName,
                    token
                }
            })
        } else {
            return res.status(401).json({
                message: 'Wrong password'
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