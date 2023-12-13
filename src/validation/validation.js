const Joi = require('joi')

const registerSchema = Joi.object({
    fullName: Joi.string()
            .max(50)
            .required(),

    phoneNumber: Joi.string()
            .min(10)
            .max(20)
            .required(),

    password: Joi.string()
            .max(50)
            .required(),

    confirmPassword: Joi.ref('password')
})

const loginSchema = Joi.object({
    phoneNumber: Joi.string()
        .min(10)
        .max(20)
        .required(),

    password: Joi.string()
            .max(50)
            .required()

    // pass true false?

})

const editProfileSchema = Joi.object({
    fullName: Joi.string()
            .max(50)
            .required(),

    phoneNumber: Joi.string()
    .min(10)
    .max(20)
    .required(),
})

const resetPasswordSchema = Joi.object({
    password: Joi.string()
            .max(50)
            .required(),

    confirmPassword: Joi.ref('password')
})

const registerValidation = async (body) => {
    try{
        await registerSchema.validateAsync(body)
        return true
    } catch (error) {
        throw error
    }
}

const loginValidation = async (body) => {
    try{
        await loginSchema.validateAsync(body)
        return true
    } catch (error) {
        throw error
    }
}

const editProfileValidation = async (body) => {
    try{
        await editProfileSchema.validateAsync(body)
        return true
    } catch (error) {
        throw error
    }
}

const resetPasswordValidation = async (body) => {
    try{
        await resetPasswordSchema.validateAsync(body)
        return true
    } catch (error) {
        throw error
    }
}

module.exports = {registerValidation, loginValidation, editProfileValidation, resetPasswordValidation}