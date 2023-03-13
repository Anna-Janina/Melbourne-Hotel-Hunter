const sequelize = require('../config/connection');
const { User, Review, Hotel } = require('../models');

const hotelData = require('./hotelList.json');
const userData = require('./userData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

//   for (const hotel of reviewData) {
//     await Review.create({
//       ...Review,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

  process.exit(0);
};

seedDatabase();