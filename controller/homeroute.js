const router = require('express').Router(); //Importing Express router function
const { Review, User, Hotel } = require('../models'); //Importing hotel class object 

//Route for homepage
router.get('/', async (req, res) => {

  const hotels = await Hotel.findAll() //Fetch list of all rows from Hotel table in databse
  const j = hotels.map((i) => i.get({ plain: true })); //Convert the hotels object into usable JS object
  res.render('homepage', { hotels: j, userloggedin: req.session.userloggedin }) //Render homepage handlebar and send to client
})

module.exports = router //Export Router 