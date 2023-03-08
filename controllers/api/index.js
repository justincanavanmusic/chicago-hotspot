
const loginRoutes = require('./login-routes');

router.use('/users', loginRoutes);

module.exports = router;
