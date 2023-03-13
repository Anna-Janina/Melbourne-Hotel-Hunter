const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session');
const sequelize = require('./config/connection');
const validator = require("email-validator");
const hotelList = require("./seeds/hotelList.json")
const path = require('path');
require('dotenv').config();
const {Hotel, Review, User} = require('./models/index');
const routes = require('./controller');
const  {transporter, mailOptions} = require('./config/email')

//Initializing Express
const app = express();

//Defining PORT which will be used by the app
const PORT = process.env.PORT || 3001;

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

const hbs = exphbs.create({});

//Using JSON middlewhere to parse JSON files in requests
app.use(express.json());

app.use(express.Router())

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// })

//Defining Views engine for the app
app.engine('handlebars',  hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);

//Definig Express tatic middlewhere to make Public folder accessible for the front-end
app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./controller/routes'));



  
  sequelize.sync({force:true}).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
    });