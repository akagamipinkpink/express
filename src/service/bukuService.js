import pipe from "../schema/pipe.js";
import prisma from "../prismaConnection/connection.js";
import ResponseError from "../middleware/error/responseError.js";
import { userFindBook } from "../schema/bookSchema.js";

const findBook = async (request) => {
    const Pipe = pipe(userFindBook, request.body);
    const { judul = null, tahun = null, penulis = null, kategori = null } = Pipe;

    try {
        const result = await prisma.buku.findMany({
            where: {
                OR: [
                    judul ? { judul: judul } : undefined,
                    tahun ? { tahun: tahun } : undefined,
                    penulis ? { penulis: penulis } : undefined,
                    kategori ? { kategori: kategori } : undefined,
                ].filter((item) => item !== undefined), // Filter out undefined items
            },
        });

        if (result.length === 0) {
            throw new ResponseError(400, "Buku tidak tersedia");
        }

        return result;
    } catch (err) {
        throw new ResponseError(400, err.message);
    }
};

const getAllBooksCategorie = async (request) => {
    const param = request.params.id
    try {
        const result = await prisma.buku.findMany({
            where: {
                kategori: param
            }
        })
        return result;
    }catch(err) {
        throw new ResponseError(400, err.message);
    }
}


const getAllBooks = async (request) => {
    try {
        const result = await prisma.buku.findMany()
        return result;
    }catch(err) {
        throw new ResponseError(400, err.message);
    }
}

const pinjamBuku = async (request) => {
    const param = parseInt(request.params.id)
    try {
        const ada = await prisma.buku.findUnique({
            where: {
                id: param
            }
        })
        if (!ada) {
            throw new ResponseError(400, "Buku tidak tersedia");
        }
        const value = !ada.status
        const result = await prisma.buku.update({
            where:{
                id: param
            },
            data:{
                status: value
            }
        })
        return result;
    }catch(err) {
        throw new ResponseError(400, err.message);
    }
}
export default {
    findBook,
    getAllBooksCategorie,
    getAllBooks,
    pinjamBuku
};
