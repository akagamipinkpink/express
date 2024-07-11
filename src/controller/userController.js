import userService from "../service/userService.js";

const controllerRegister = async (req, res, next) => {
    try {
        const result = await userService.register(req)
        res.status(201).json({ message: 'Registrasi telah Berhasil.' });
    }catch (error) {
        next(error)
    }
}
const controllerLogin = async (req, res, next) => {
    try {
         await userService.login(req, res, next);
    }catch (error) {
        next(error)
    }
};
const otentikasi = async (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            res.status(200).json({message: 'Login berhasil'});
        }else {
            res.status(401).json({mesage: 'Gagal'});
        }
    }catch (error) {
        next(error)
    }

}
export default {
    controllerRegister,
    controllerLogin,
    otentikasi,
}