const router = require('express').Router();
const { Review, User, Hotel } = require('../../models');

router.get('/:id',async (req,res)=>{
    let hotel = await Hotel.findOne({where:{id: req.params.id}})
    hotel = hotel.get({ plain: true })
    const reviews = await Review.findAll({where:{hotel_id:hotel.id}})
    const j = reviews.map((i) => i.get({ plain: true }));
    res.render('review',{hotel:hotel, review:j})
  })

router.post('/:id',async (req,res)=>{
  const hotels = await Hotel.findAll()
  const j = hotels.map((i) => i.get({ plain: true }));
  res.render('homepage',{})
})

module.exports = router