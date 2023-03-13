const router = require('express').Router();
const { Attractions, Users, Reviews } = require('../models');
const withAuth = require('../utils/auth');

//homepage route, gets all attractions
router.get('/', withAuth, async (req, res) => {
  const attractionData = await Attractions.findAll().catch((err) => {
    res.json(err);
  });
  const attractions = attractionData.map((attraction) => attraction.get({ plain: true }));
  res.render('homepage', { attractions, loggedIn: req.session.loggedIn });
});

router.get('/one-restaurant/', async (req, res) => {

  res.render('one-restaurant')

});

//profile route, gets all user reviews
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userReview = await Reviews.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [{
        model: Attractions,
        required: true
      }]

    });
    const reviews = userReview.map((data) => data.get({ plain: true }));
    res.render('profile', { reviews, loggedIn: req.session.loggedIn })
  } catch (err) {
    res.redirect('login');
    console.log(err)
  }
});

//login route, renders login page
router.get('/login', (req, res) => {
  res.render('login');
});

// logout post route, destroys session
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;