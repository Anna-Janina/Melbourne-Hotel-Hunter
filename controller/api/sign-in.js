const express = require('express')
const router = require('express').Router();
const {User}  = require('../../models');
const bcrypt = require('bcrypt');
const app = express();


router.get('/',async (req,res)=>{
    if (!req.session.userloggedin)
    {
        res.render('signin', {userloggedin:req.session.userloggedin})
    }
    else
    {
        res.redirect('/')
    }
    
})

router.post('/',async (req,res)=>{
    let user = await User.findOne({where:{email:req.body.email}})
    if (user !== null && req.session)
    {
    user = user.get({ plain: true })
    console.log(user)
        const checkPassword = await bcrypt.compare(req.body.password, user.password)
    if (user.email == req.body.email && checkPassword)
    {
        console.log('User sucessfuly loggedin')
        req.session.userloggedin = true;
        req.session.email = user.email;
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