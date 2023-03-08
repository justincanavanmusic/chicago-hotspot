const router = require('express').Router();
const { Attractions, Users, Reviews }   = require('../models');

router.get('/', async (req, res) => {
    const attractionData = await Attraction.findAll().catch((err) => { 
        res.json(err);
      });
        const attractions = attractionData.map((attraction) => attraction.get({ plain: true }));
        res.render('all', { attractions });
      });
  
router.get('/', async (req, res) => {
        res.send('all');
      });
  

module.exports= router;