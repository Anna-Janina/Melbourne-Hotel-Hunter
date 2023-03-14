const router = require('express').Router(); //Importing express-router

const signinRoute = require('./api/sign-in'); //Import sign-in route
const signupRoute = require('./api/sign-up'); //Import sign-up route
const signoutRoute = require('./api/sign-out'); //Import sign-out route
const reviewRoute = require('./api/review'); //Import review route
const homeRoute = require('./homeroute'); // Import home route

//Adding add routes to the Router middleware
router.use('/', homeRoute);
router.use('/signin', signinRoute);
router.use('/signup', signupRoute);
router.use('/signout', signoutRoute);
router.use('/review', reviewRoute);

module.exports = router;
