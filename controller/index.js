const router = require('express').Router();

const signinRoute = require('./api/sign-in');
const signupRoute = require('./api/sign-up');
const signoutRoute = require('./api/sign-out');
const reviewRoute = require('./api/review');

const homeRoute = require('./homeRoute');

router.use('/', homeRoute);
router.use('/signin', signinRoute);
router.use('/signup', signupRoute);
router.use('/signout', signoutRoute);
router.use('/review', reviewRoute);

module.exports = router;
