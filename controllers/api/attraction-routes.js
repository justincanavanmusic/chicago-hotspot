const router = require('express').Router();
const { Attractions, Users, Reviews } = require('../../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try {
        const attractionData = await Attractions.findByPk(req.params.id, {
            include: [
                {
                    model: Reviews,
                    attributes: [
                        'id',
                        'body'
                    ]
                }
            ]
        })
        const attraction = attractionData.get({ plain: true });
        res.render('one-restaurant', { attraction, loggedIn: req.session.loggedIn });
        console.log(attractionData)
        // console.log(attraction.reviews[0].body)
        // console.log(attraction.reviews[0].id)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/:id', withAuth, async (req, res) => {
    try {
        const newReview = await Reviews.create({
            body: req.body.body,
            user_id: req.session.userId,
            attraction_id: req.params.id,
        });
        res.status(200).json(newReview);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;