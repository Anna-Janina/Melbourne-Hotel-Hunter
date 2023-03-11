const {User, Review,Hotel} = require('../models/index');
const sequelize = require('../config/connection');
const hotelList = require('./hotelList.json')


async function sync ()
{
    await sequelize.sync({ force: true });
    await Hotel.bulkCreate({hotelList})
}

sync()

