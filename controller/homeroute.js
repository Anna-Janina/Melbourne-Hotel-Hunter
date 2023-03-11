const router = require('express').Router();
const { Review, User, Hotel } = require('../models');

router.get('/',async (req,res)=>{

    const hotels = await Hotel.findAll()
    const j = hotels.map((i) => i.get({ plain: true }));

    console.log(j)
    res.render('homepage',{hotels: j})
  })

module.exports = router