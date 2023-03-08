const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
    id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
      },
    description: {
       type: DataTypes.STRING,
      },
    header: {
       type: DataTypes.STRING,
      },
    user_email: {
        type: DataTypes.STRING,
        references: {
          model: 'user',
          key: 'email',
        },
      },
    hotel_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'hotel',
          key: 'id',
        },
      },
    },
    {
    sequelize,
    freezeTableName: true,
    modelName: 'review',
    }
);

module.exports = Review;