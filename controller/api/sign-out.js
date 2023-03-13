const express = require('express')
const router = require('express').Router();
const {User}  = require('../../models');
const app = express();



router.get('/',async (req,res)=>{
    if (req.session.email)
    {
    let user = await User.findOne({where:{email:req.session.email}})
    if (user !== null && req.session)
    {
    user = user.get({ plain: true })

        req.session.userloggedin = false;
        req.session.useremail = null;
        res.redirect('/')
    }
    else
    {
        res.send("Request not valid")
    }
    }
    else
    {
        res.send("Request not valid")
    }
  })

module.exports = router