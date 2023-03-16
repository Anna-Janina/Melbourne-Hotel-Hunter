//Importing required modules and data for the Sequelize and setting up the initial data for the models.
const {User, Review,Hotel} = require('../models/');
const sequelize = require('../config/connection');
const hotelList = require('./hotelList.json');
const userList = require('./userData.json');
const review = require('./reviewData.json');

//synchronize the models with the database and create records for the "Hotel", "User", and "Review" models.
async function sync ()
{
    await sequelize.sync({force:true});
    await Hotel.bulkCreate(hotelList)
    await User.bulkCreate(userList)
    await Review.bulkCreate(review)

}

sync()