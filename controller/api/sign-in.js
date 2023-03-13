const express = require('express')
const router = require('express').Router();
const {User}  = require('../../models');
const app = express();



router.post('/',async (req,res)=>{
    let user = await User.findOne({where:{email:req.body.email}})
    if (user !== null && req.session)
    {
    user = user.get({ plain: true })
    console.log(user)

    if (user.email == req.body.email && user.password == req.body.password)
    {
        req.session.userloggedin = true;
        req.session.useremail = user.email;
        res.redirect('/')
    }
    else
    {
        res.send("Username or password is incorrect")

    }
    }
    else
    {
        res.send("Username or password is incorrect")
    }
  })

module.exports = router