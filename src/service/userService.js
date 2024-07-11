import Pipe from "../schema/pipe.js";
import {userLoginSchema, userRegistrasiSchema} from "../schema/userSchema.js";
import bcrypt from "bcrypt";
import prisma from "../prismaConnection/connection.js";
import ResponseError from "../middleware/error/responseError.js";
import passportMidlleware from "../middleware/passport/passportMidlleware.js";

const register = async (request) => {
    const pipe = Pipe(userRegistrasiSchema,request.body)
    const {username, email, password} = pipe
    const salt = await bcrypt.genSalt(10);
    try {
        const duplicate = await prisma.user.findMany({
            where: {
                OR: [
                    {username: username},
                    {email: email}
                ]
            }
        })
        if (duplicate.length > 0) {
            throw  new ResponseError(400, "nama and email is dupiclate")
        }
        const paswordHash = await bcrypt.hash(password, salt)
        const result = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: paswordHash
            }
        });
        console.log(result)
        return result
    }catch (error){
        throw error
    }
}


const login = async (req, res, next) => {
    const user = Pipe(userLoginSchema, req.body);

    passportMidlleware.authenticate('local', (err, user, info) => {
        if (err) {
            throw new ResponseError(400, "err.message")
        }
        if (!user) {
            throw new ResponseError(401, "user tidak ditemukan")
        }

        req.login(user, (err) => {
            if (err) {
                throw new ResponseError(500, "Login Error")
            }
            res.status(200).json({ message: 'Login berhasil' });
        });
    })(req, res, next);
};
export default {
    register,
    login
}