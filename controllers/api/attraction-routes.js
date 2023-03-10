const router = require('express').Router();
const { Attractions, Users, Reviews } = require('../../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try {
        const attractionData = await Attractions.findByPk(req.params.id)
        const attraction = attractionData.get({ plain: true });
        res.render('one-restaurant', { attraction, loggedIn: req.session.loggedIn });
        // console.log(attractionData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;