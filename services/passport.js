const keys = require('../config/keys');
const passport = require('passport');
const ldapStrategy = require('passport-ldapauth').Strategy;
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const User = mongoose.model('User');

passport.use(new ldapStrategy((req, callback) => {
        process.nextTick(() => {
            const opts = {
                server: {
                    url: keys.ldap.url,
                    bindDn: keys.ldap.binddn,
                    bindCredentials: keys.ldap.bindsecret,
                    searchBase: keys.ldap.dn,
                    searchFilter: `cn=${req.body.username}`,
                    reconnect: true
                }
            };
            callback(null, opts)
        })
    },
    (user, done) => {
        return done(null, user)
    }));

passport.serializeUser((user, done) => {
    done(null, user.cn)
});

passport.deserializeUser((id, done) => {
    User.findOne({ cn: id })
        .exec()
        .then(user => {
            if (!user) {
                done(new Error(`Deserialize user failed. ${id} is deleted from local DB`))
            } else {
                done(null, user)
            }
        })
});