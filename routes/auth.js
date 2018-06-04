const passport = require('passport');
const User = require('../models/user').User;

module.exports = app => {
    app.post('/api/auth/ldap', function (req, res, next) {
        passport.authenticate('ldapauth', (err, user, info) => {
            if (err) {
                return next(err)
            }
            if (!user) {
                res.status(401).json({ success: false, message: info.message })
            } else {
                req.login(user, loginErr => {
                    if (loginErr) {
                        return next(loginErr);
                    }
                    User.findOneAndUpdate({ cn: user.cn }, user, { upsert: true, new: true })
                        .exec()
                        .then(user => {
                            const userObj = typeof(user.toObject) === "function" ? user.toObject(): user;
                            //return res.json({ success: true, message: 'authentication succeeded', user: userObj })
                            res.redirect('/dashboard');
                        })
                })
            }
        })(req, res, next)
    });

    app.get('/', (req, res) => {
        res.send({ response: 'hi there'})
    });

    app.get('/api/auth/current-user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};

