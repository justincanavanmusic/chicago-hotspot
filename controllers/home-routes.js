const router = require('express').Router();
const { Attractions, Users, Reviews } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  const attractionData = await Attractions.findAll().catch((err) => {
    res.json(err);
  });
  const attractions = attractionData.map((attraction) => attraction.get({ plain: true }));
  res.render('attraction', { attractions, loggedIn: req.session.loggedIn });
});

router.get('/one-restaurant', withAuth, async (req, res) => {
  res.render('one-restaurant');
});

router.get('/profile', async (req, res) => {
  res.render('profile');
});

router.get('/login', (req, res) => {

  if (req.session.loggedIn) {
    res.redirect('/');
    console.log(req.session)
    return;
  }
  res.render('login');
});



module.exports = router;