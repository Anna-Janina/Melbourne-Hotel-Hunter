const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session');
const sequelize = require('./config/connection');
const validator = require("email-validator");
const hotelList = require("./seeds/hotelList.json")
const path = require('path');
require('dotenv').config();
const {Hotel, Review, User} = require('./models/index');

//Initializing Express
const app = express();

//Defining PORT which will be used by the app
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

//Using JSON middlewhere to parse JSON files in requests
app.use(express.json());
app.use(express.Router())
//Defining Views engine for the app
app.engine('handlebars',  hbs.engine);
app.set('view engine', 'handlebars');

//Definig Express tatic middlewhere to make Public folder accessible for the front-end
app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./controller/routes'));

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
  };

  app.use(session(sess));

  app.get('/',(req,res)=>{
    res.render('homepage',{hotels: hotelList})
  })


  sequelize.sync({force:true}).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
    });