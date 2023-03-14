const router = require('express').Router(); //Import express router function
const { Review, User, Hotel } = require('../../models'); //Import Hotel, User and Review tables from models folder

//GET Route for /review/id page
router.get('/:id',async (req,res)=>{
    let hotel = await Hotel.findOne({where:{id: req.params.id}}) //Find the hotel with the ID given in the prams
    hotel = hotel.get({ plain: true }) //Convert hotel object to usable JS object
    const reviews = await Review.findAll({where:{hotel_id:hotel.id}}) //Find all reviews for the hotel found 
    const j = reviews.map((i) => i.get({ plain: true })); //Convert it into usable JS object
    res.render('review',{hotel:hotel, review:j, userloggedin:req.session.userloggedin}) //Render page and send
  })

//POST Route for /review/id page
router.post('/:id',async (req,res)=>{
  const review = await Review.create({ //Create new review in Database
    heading: req.body.heading,
    review: req.body.review,
    hotel_id:req.params.id,
    user_email: req.session.email,
  })
  res.send("Review submited") //Send confirmation to client
})

module.exports = router //Export router function