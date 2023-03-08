const router = require('express').Router();
const { User, Project } = require('../models');

router.get('/', (req, res)=> {

    res.render('homepage')

});

module.exports = router;