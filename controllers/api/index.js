const router = require('express').Router();
const loginRoutes = require('./login-routes');
const reviewRoutes = require('./reviews');
const attractionRoutes = require('./attraction-routes')

router.use('/users', loginRoutes);
router.use('/reviews', reviewRoutes);
router.use('/attractions', attractionRoutes);

module.exports = router;
