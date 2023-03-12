const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hotel extends Model {}

Hotel.init(
    {
    id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement:true,
      },
    name: {
       type: DataTypes.STRING,
       allowNull: false,
      },
    description: {
       type: DataTypes.TEXT,
      },
    address: {
       type: DataTypes.STRING,
      },
    review: {
      type: DataTypes.STRING,
      },
    image: {
      type: DataTypes.STRING,
    }
    },
    {
    sequelize,
    modelName: 'hotel',
    freezeTableName:true
    }
);

module.exports = Hotel;