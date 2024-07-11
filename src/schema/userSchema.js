import Joi from 'joi'

const userRegistrasiSchema = Joi.object().keys({
    username: Joi.string().min(5).max(12).required(),
    password: Joi.string().min(8).max(12).required(),
    email: Joi.string().email().required(),
})

const userLoginSchema = Joi.object().keys({
    password: Joi.string().min(8).max(12).required(),
    email: Joi.string().email().required(),
})

export  {
    userRegistrasiSchema,
    userLoginSchema,
}