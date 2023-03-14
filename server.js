const express = require('express') //Adding Express module
const exphbs = require('express-handlebars') //Adding express-handlebar module
const session = require('express-session'); //Adding express session module
const sequelize = require('./config/connection'); // Adding MySQL daatbase connection
const path = require('path'); //Adding path module
require('dotenv').config(); // Adding dotenv module
const routes = require('./controller'); // Importing routes

//Initializing Express
const app = express();

//Defining PORT which will be used by the app
const PORT = process.env.PORT || 3001;

//Defining session options and config
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

//Using session variable in middleware
app.use(session(sess));


const hbs = exphbs.create({});

//Using JSON middlewhere to parse JSON files in requests
app.use(express.json());

//Using express route middleware
app.use(express.Router())

//Defining Views engine for the app
app.engine('handlebars',  hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);

//Definig Express tatic middlewhere to make Public folder accessible for the front-end
app.use(express.static(path.join(__dirname, 'public')));

  
//Syncing sequzlize with the database
  sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`); //Listen on 'PORT'
    });
    });