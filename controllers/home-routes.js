const router = require('express').Router();
const { Attractions, Users, Reviews }   = require('../models');


router.get('/', async (req, res) => {
    const attractionData = await Attractions.findAll().catch((err) => { 
        res.json(err);
      });
        const attractions = attractionData.map((attraction) => attraction.get({ plain: true }));
        res.render('attraction', { attractions });
      });
 
      

router.get('/one-restaurant', async (req, res) => {
      res.render('one-restaurant');
    });

router.get('/profile', async (req, res) => {
      res.render('profile');
});

router.get('/login', (req, res) => {

  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('login');
});



module.exports= router;