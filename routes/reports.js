const mongoose = require('mongoose');
const Favorite = mongoose.model('favorites');
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.get('/api/reports/list', (req, res) => {
        res.send({ response: 'hi there'})
    });

    app.get('/api/reports/favorites', requireLogin, async (req, res) => {
        const favorites = await Favorite.find({ _user: req.user.id }).select();
        res.send(favorites);
    });

    app.post('/api/reports/favorites/add', requireLogin, async (req, res) => {
        const reportID = req.body.code;

        const favorite = new Favorite({
            reportID,
            _user: req.user.id
        });

        const exists = await Favorite.findOne({ reportID: favorite.reportID, _user: req.user.id }).select();
        if (exists) {
            console.log(exists);
            res.status(403).send({success: false, message: "This Report Is Already Favorited"});
        } else {
            /*
            Front end should change state of item to "favorited"
            We don't need to await anything here - assume it will eventually be added.
            */
            favorite.save();
            res.send({success: true, message: "This Report Will Be Favorited!"});
        }
    });

    app.post('/api/reports/favorites/delete', requireLogin, async (req, res) => {
        const reportID = req.body.code;

        const favorite = new Favorite({
            reportID,
            _user: req.user.id
        });

        /*
        Front end should change state of item to "not favorited"
        We don't need to await anything here - if it exists, it will eventually delete
        */
        Favorite.findOneAndRemove({ reportID: favorite.reportID, _user: req.user.id }).exec();
        res.send({success: true, message: "This Report Has Been Deleted From Favorites!"});
    });
};