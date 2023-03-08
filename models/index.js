const User = require('./User');
const Review = require('./Review');
const Hotel = require('./Hotel');

User.hasMany(Review, {
  foreignKey: 'email_id',
  onDelete: 'CASCADE'
});

Review.belongsTo(User, {
  foreignKey: 'email_id'
});

Hotel.hasMany(Review, {
    foreignKey: 'hotel_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(Hotel, {
    foreignKey: 'hotel_id'
});

module.exports = { User, Review, Hotel };