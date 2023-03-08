const router = require('express').Router();
const loginRoutes = require('./login-routes');

router.use('/users', loginRoutes);

module.exports = router;
