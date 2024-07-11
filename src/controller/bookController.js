import bukuService from "../service/bukuService.js";
import prisma from "../prismaConnection/connection.js";

const controllerFindBook = async (req, res, next) => {
    if(req.isAuthenticated())  {
    try {
        const result = await bukuService.findBook(req);
        res.json(result);
    }catch(err) {
        next(err);
    }
    }else {
        res.status(500).json({message: 'anda belum login'});
    }
}
const controllerGetAllCategorieBook = async (req, res, next) => {
    try {
        const result = await bukuService.getAllBooksCategorie(req)
        res.json(result);
    }catch(err) {
        next(err);
    }
}
const controllerGetAllBooks = async (req, res, next) => {
    try {
        const result = await bukuService.getAllBooks(req)
        res.json(result);
    }catch(err) {
        next(err);
    }
}

const controllerPinjamBuku = async (req,res,next) => {
    try {
        const result = await bukuService.pinjamBuku(req)
        res.json(result);
    }catch(err) {
        next(err);
    }
}
export default {
    controllerFindBook,
    controllerGetAllCategorieBook,
    controllerGetAllBooks,
    controllerPinjamBuku
}