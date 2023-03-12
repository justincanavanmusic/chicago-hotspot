const router = require('express').Router();
const { Attractions, Users, Reviews } = require('../../models');
const withAuth = require('../utils/auth');

// * /api/attractions

router.get('/:id', withAuth, async (req, res) => {
    try {
        const attractionData = await Attractions.findByPk(req.params.id, {
            include: [
                {
                    model: Reviews, 
                    include: Users 
                }
                
            ]
        })
        const attraction = attractionData.get({ plain: true });
        res.render('one-restaurant', { attraction, loggedIn: req.session.loggedIn });
        // console.log(attraction)
   
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// new review


module.exports = router;