import express from 'express';
import userController from "../controller/userController.js";
import errorMiddleware from "../middleware/error/errorMiddleware.js";
import passport from "passport";
import session from 'express-session';
import bodyParser from 'body-parser';
import bukuService from "../service/bukuService.js";
import bookController from "../controller/bookController.js";


const router = express.Router();
//middlleware
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: true }));
router.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}));
router.use(passport.initialize());
router.use(passport.session())


//router
router.get('/', (req, res) => {
    res.send('Hello World!');
})

//home
router.get("/home",userController.otentikasi)
//autentikasi
router.post("/register",userController.controllerRegister)
router.post("/login",userController.controllerLogin)

//buku
router.get("/buku/kategori/all",bookController.controllerGetAllBooks)
router.get("/buku/kategori/:id",bookController.controllerGetAllCategorieBook)
router.post("/buku/cari",bookController.controllerFindBook)
//update pinjam buku
router.put("/buku/pinjam/:id",bookController.controllerPinjamBuku)
//mengembalikan buku

// error midlleware
router.use(errorMiddleware)
export default router;