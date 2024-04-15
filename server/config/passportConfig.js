const { User } = require('../models/user');
const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth2').Strategy;

const authenticateWithGoogle = async (
    req,
    accessToken,
    refreshToken,
    profile,
    done
) => {
    try {
        const currentUser = await User.findOrCreate(profile.id, profile);

        return done(null, currentUser);
    } catch (e) {
        console.log(e.message);
    }
};

const initPassport = (clientID, clientSecret) => {
    passport.use(
        'google-auth',
        new GoogleStrategy(
            {
                clientID,
                clientSecret,
                callbackURL: 'http://localhost:3001/auth/callback',
                passReqToCallback: true,
            },
            authenticateWithGoogle
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        const currentUser = await User.findById(id);
        done(null, currentUser);
    });
};

module.exports = { initPassport };
