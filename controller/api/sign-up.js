const express = require('express')
const router = require('express').Router();
const {User}  = require('../../models');
const app = express();



router.post('/',async (req,res)=>{

    const checkIfEmailAlreadyExist = await User.findOne({where:{email:req.body.email}})
    if (checkIfEmailAlreadyExist == null)
    {
    let newUser = await User.create({
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    })
        req.session.userloggedin = true;
        req.session.email = req.body.email;
        res.redirect('/')
    }
    else
    {
        res.send("Email address already exist")
    }
  })

module.exports = router