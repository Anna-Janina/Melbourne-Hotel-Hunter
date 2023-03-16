const User = require('./User');
const Hotel = require('./Hotel');
const Review = require('./Review');

// Define the relationship between the models
User.hasMany(Review, {
  foreignKey: 'email_id',
});
// Define relationship between a "Review" model and a "User" model
Review.belongsTo(User, {
  foreignKey: 'email_id'
});

// Define the relationship between the models
Hotel.hasMany(Review, {
    foreignKey: 'hotel_id',
});

// Define relationship between a "Review" model and a "Hotel" model
Review.belongsTo(Hotel, {
    foreignKey: 'hotel_id'
});

module.exports = { User, Review, Hotel };