const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const mongoose = require('mongoose');
require('./models/user');
require('./models/favorite');
require('./services/passport');

mongoose.Promise = Promise;
mongoose.connect(keys.dburl);

const app = express();
/* Body Parser (and all other app.use statements) MUST be before any routes */
app.use(cookieSession(({
    maxAge: 5 * 24 * 60 * 60 * 1000,
    keys: [keys.sessionSecret]
})));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);
require('./routes/reports')(app);

const port = process.env.PORT || 5000;
app.listen(port);