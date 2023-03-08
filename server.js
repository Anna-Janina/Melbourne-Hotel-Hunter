const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session');
const sequelize = require('./config/connection');
var validator = require("email-validator");

const path = require('path');
require('dotenv').config();

const {Hotel, Review, User} = require('./models/index');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});
app.use(express.json());

app.engine('handlebars',  exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 

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
    req.render('homepage',{})
  })

  sequelize.sync({force:true}).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
    });

