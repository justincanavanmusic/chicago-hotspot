const router = require('express').Router();
const { Attractions, Users, Reviews } = require('../models');

router.get('/', async (req, res) => {
  const attractionData = await Attractions.findAll().catch((err) => {
    res.json(err);
  });
  const attractions = attractionData.map((attraction) => attraction.get({ plain: true }));
  res.render('attraction', { attractions, loggedIn: req.session.loggedIn });
});

router.get('/one-restaurant', async (req, res) => {
  res.render('one-restaurant');
});

router.get('/profile', async (req, res) => {
  try {
    const userReview = await Reviews.findAll({
      where: {
        userId: req.sessionID.userId,
      },
      include: [{
        model: Attractions,
        required: true
      }]

    });
    const reviews = userReview.map((data) => data.get({ plain: true }));
    console.log(reviews);
    res.render('profile', { reviews, loggedIn: req.session,loggedIn })
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/login', (req, res) => {

  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('login');
});



module.exports = router;