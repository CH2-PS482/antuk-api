const Joi = require('joi')

const registerSchema = Joi.object({
                fullName: Joi.string()
                        .max(50)
                        .pattern(new RegExp('^[A-Za-z ]+$'))
                        .required(),

                phoneNumber: Joi.string()
                        .min(10)
                        .max(20)
                        .pattern(new RegExp('^[0-9]+$'))
                        .required(),

                password: Joi.string()
                        .min(8)
                        .max(50)
                        .required(),

                confirmPassword: Joi.ref('password')
})

const loginSchema = Joi.object({
                phoneNumber: Joi.string()
                        .min(10)
                        .max(20)
                        .pattern(new RegExp('^[0-9]+$'))
                        .required(),

                password: Joi.string()
                        .max(50)
                        .required()
})

const editProfileSchema = Joi.object({
                fullName: Joi.string()
                        .max(50)
                        .pattern(new RegExp('^[A-Za-z ]+$'))
                        .required(),

                phoneNumber: Joi.string()
                .min(10)
                .max(20)
                .pattern(new RegExp('^[0-9]+$'))
                .required(),
})

const resetPasswordSchema = Joi.object({
                password: Joi.string()
                .min(8)
                .max(50)
                .required(),

                confirmPassword: Joi.ref('password')
})

module.exports = {registerSchema, loginSchema, editProfileSchema, resetPasswordSchema}