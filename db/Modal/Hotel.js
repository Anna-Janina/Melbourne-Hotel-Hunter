const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hotel extends Model {}

Hotel.init(
    {
    id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
      },
    name: {
       type: DataTypes.STRING,
       allowNull: false,
      },
    description: {
       type: DataTypes.STRING,
      },
    address: {
       type: DataTypes.STRING,
      },
    review: {
      type: DataTypes.STRING,
      },
    user_email: {
        type: DataTypes.STRING,
        references: {
          model: 'user',
          key: 'email',
        },
      },
    },
    {
    sequelize,
    modelName: 'user',
    }
);

module.exports = Hotel;