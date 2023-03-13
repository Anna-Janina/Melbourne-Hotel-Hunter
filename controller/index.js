const router = require('express').Router();

const signinRoute = require('./api/sign-in');
const signupRoute = require('./api/sign-up');
const homeRoute = require('./homeRoute');

router.use('/', homeRoute);
router.use('/signin', signinRoute);
router.use('/signup', signupRoute);
module.exports = router;
