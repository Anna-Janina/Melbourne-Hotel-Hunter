const router = require('express').Router();

const signinRoute = require('./api/sign-in');
const homeRoute = require('./homeRoute');

router.use('/', homeRoute);
router.use('/signin', signinRoute);

// router.use('/api', apiRoutes);

module.exports = router;
