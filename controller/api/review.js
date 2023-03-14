const router = require('express').Router();
const { Review, User, Hotel } = require('../../models');

router.get('/:id',async (req,res)=>{
    let hotel = await Hotel.findOne({where:{id: req.params.id}})
    hotel = hotel.get({ plain: true })
    const reviews = await Review.findAll({where:{hotel_id:hotel.id}})
    const j = reviews.map((i) => i.get({ plain: true }));
    res.render('review',{hotel:hotel, review:j, userloggedin:req.session.userloggedin})
  })

router.post('/:id',async (req,res)=>{
  const review = await Review.create({
    heading: req.body.heading,
    review: req.body.review,
    hotel_id:req.params.id,
    user_email: req.session.email,
  })
  res.send("Review submited")
})

module.exports = router