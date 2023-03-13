const {User, Review,Hotel} = require('../models/');
const sequelize = require('../config/connection');
const hotelList = require('./hotelList.json');
const userList = require('./userData.json');
const review = require('./reviewData.json');


async function sync ()
{
    await sequelize.sync({force:true});
    await Hotel.bulkCreate(hotelList)
    await User.bulkCreate(userList)
    await Review.bulkCreate(review)

}

sync()