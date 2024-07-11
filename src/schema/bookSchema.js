import Joi from "joi";

const userFindBook = Joi.object().keys({
    judul: Joi.string().min(5).max(25),
    tahun: Joi.string().min(5).max(25),
    penulis: Joi.string().min(5).max(25),
    kategori: Joi.string().min(5).max(25),
})

export {
    userFindBook,
}