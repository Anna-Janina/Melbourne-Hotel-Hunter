const express = require('express') //Import express module
const router = require('express').Router();//Import router function
const { User } = require('../../models'); //Import user object
const nodemailer = require('nodemailer'); //Import nodemailer
var validator = require("email-validator"); //Email validator tool
const app = express();

// GET /signup route to display signup page
router.get('/', async (req, res) => {
  if (!req.session.userloggedin) {
    res.render('signup', { userloggedin: req.session.userloggedin })
  }
})

// POST /signup route to reveive user signup data
router.post('/', async (req, res) => {

  //check if the user email address already exist in database
  const checkIfEmailAlreadyExist = await User.findOne({ where: { email: req.body.email } })
  //proceed if email address doesn't exitst
  if (checkIfEmailAlreadyExist == null) {
    //check if the first name or last name of password fields are empty
    if (req.body.firstname == "" || req.body.firstname == "" || req.body.password == "" || req.body.email == "") {
      res.send("Fill out all fields")
    }
    //check if password strength is leass than 10
    else if (req.body.password.length < 10) {
      res.send("Password length must be atleast 10 characters")

    }
    else {
      // validate if the email is in correct format
      if (validator.validate(req.body.email)) {


        //create user account in the database
        let newUser = await User.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
        })
        //set the value if userloggedin to true in session
        req.session.userloggedin = true;
        //set the value of email in user session
        req.session.email = req.body.email;

        //Defining nodemailer connection options

        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'mebournehotelhunter@gmail.com',
            pass: process.env.EMAIL_PASSWORD
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
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });

        res.redirect('/')
      }
      else {
        res.send("Email address is not valid")
      }
    }

  }
  else {
    res.send("Email already exist")
  }
})

module.exports = router