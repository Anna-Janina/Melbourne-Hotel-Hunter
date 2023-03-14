const express = require('express') //Import express module
const router = require('express').Router();//Import router function
const {User}  = require('../../models'); //Import user object
const nodemailer = require('nodemailer'); //Import nodemailer
var validator = require("email-validator"); //Email validator tool
const app = express();


router.get('/',async(req,res)=>{
    if (!req.session.userloggedin)
    {
        res.render('signup', {userloggedin: req.session.userloggedin})
    }
})

router.post('/',async (req,res)=>{

    const checkIfEmailAlreadyExist = await User.findOne({where:{email:req.body.email}})
    if (checkIfEmailAlreadyExist == null)
    {
    if(req.body.firstname == "" || req.body.firstname == "" || req.body.password == "")
    {
        res.send("Fill out all fields")
    }
    else if ( req.body.password.length < 10)
        {
            res.send("Password length must be atleast 10 characters")

        }
    else
    {
        // validate if the email is in correct format
        if (validator.validate(req.body.email))
        {

        
        let newUser = await User.create({
            firstname:req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        })
            req.session.userloggedin = true;
            req.session.email = req.body.email;

            //Defining nodemailer connection options

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'mebournehotelhunter@gmail.com',
                  pass: 'llyxeynlzauarudi'
                }
              });
            
              //Defining nodemailer email options

              const mailOptions = {
                from: 'mebournehotelhunter@gmail.com',
                to: req.body.email,
                subject: 'Welcome to Melboure Hotel Hunter!',
                text: `
                
                Welcome to Melbourne Hotel Hunter, a website that provides a platform for users to review and rate 5-star hotels in Melbourne, Australia.
            
            The website is designed to make it easy for users to share their experiences and opinions about the hotels they've stayed in, and to help other travelers make informed decisions when choosing a place to stay in Melbourne.
            
            Users can browse reviews and ratings from other users to get a sense of the quality and value of each hotel.
            
            Each hotel listing includes detailed information about the property, photos, and location. Users can leave a written review on each hotel.
            
            Overall, Melbourne Hotel Reviews is a valuable resource for anyone who is looking to book a 5-star hotel in Melbourne, and who wants to hear from other travelers about their experiences and recommendations.
            
            `
              };
            
            //funtion to send email to the user
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            
            res.redirect('/')
        }
        else {
            res.send("Email address is not correct")
        }
        }
    
    }
    else
    {
        res.send("Email already exist")
    }
  })

module.exports = router