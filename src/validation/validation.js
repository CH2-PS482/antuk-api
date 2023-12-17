const { registerSchema, loginSchema, editProfileSchema, resetPasswordSchema } = require("./userValidation")

const registerValidation = async (req, res, next) => {
    const {body} = req

    try{
        await registerSchema.validateAsync(body)
        next()
    } catch (error) {
        res.status(400).json({
            message: 'Validation error',
            error: error.message
        })
    }
}

const loginValidation = async (req, res, next) => {
    const {body} = req

    try{
        await loginSchema.validateAsync(body)
        next()
    } catch (error) {
        res.status(400).json({
            message: 'Validation error',
            error: error.message
        })
    }
}

const editProfileValidation = async (req, res, next) => {
    try{
        const {body} = req

        await editProfileSchema.validateAsync(body)
        next()
    } catch (error) {
        res.status(400).json({
            message: 'Validation error',
            error: error.message
        })
    }
}

const resetPasswordValidation = async (req, res, next) => {
    try{
        const {body} = req

        await resetPasswordSchema.validateAsync(body)
        next()
    } catch (error) {
        res.status(400).json({
            message: 'Validation error',
            error: error.message
        })
    }
}

module.exports = {registerValidation, loginValidation, editProfileValidation, resetPasswordValidation}