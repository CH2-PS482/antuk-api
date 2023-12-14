const profileModel = require('../models/profile')

const getProfile = async (req, res) => {
    try {
        const user = await profileModel.showProfile(req.decodedToken)
        if (user){
            res.status(200).json({
                message: 'Get user success',
                data: {
                    phoneNumber: user.phoneNumber,
                    fullName: user.fullName
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

const editProfile = async (req, res) => {
    const {body} = req
    
    try {
        const user = await profileModel.updateProfile(body, req.decodedToken)
        if (user){
            res.status(201).json({
                message: 'Update user success',
                data: {
                    phoneNumber: body.phoneNumber,
                    fullName: body.fullName
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

module.exports = {getProfile, editProfile}