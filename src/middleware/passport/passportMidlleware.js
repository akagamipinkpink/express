import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// set up passport configurasi nya
passport.use("local",new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password"
    },
    async (email, password, done) => {
        try {
            console.log("LocalStrategy called");
            const user = await prisma.user.findUnique({ where: { email } });
            if (!user) {
                return done(null, false, { message: 'Email anda salah.' });
            }

            const passwordVerify = await bcrypt.compare(password, user.password);
            if (!passwordVerify) {
                return done(null, false, { message: 'Password anda salah.' });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));
// set - cookie
passport.serializeUser((user, done) => {
    done(null, user.id);
});
// cek - cookie
passport.deserializeUser(async (id, done) => {
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        done(null, user);
    } catch (err) {
        done(err);
    }
});


export default passport;
