const router = require('express').Router();
const loginRoutes = require('./login-routes');
const reviewRoutes = require('./reviews');

router.use('/users', loginRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
