const router = require('express').Router();
const { Attractions, Users, Reviews } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  const attractionData = await Attractions.findAll().catch((err) => {
    res.json(err);
  });
  const attractions = attractionData.map((attraction) => attraction.get({ plain: true }));
  res.render('attraction', { attractions, loggedIn: req.session.loggedIn });
});

router.get('/one-restaurant', withAuth, async (req, res) => {
  res.render('one-restaurant');
});

router.get('/profile', withAuth, async (req, res) => {
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

// route for log out page
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/logout', async (req, res) => {
  try {
    res.render('logout')
  } catch(err){
    res.status(500).json(err);
  }
})

module.exports = router;