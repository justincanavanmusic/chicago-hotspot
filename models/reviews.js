const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Reviews extends Model {}

Reviews.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          body: {
            type: DataTypes.STRING,
            allowNull: false,
          }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'reviews',
    }
);

module.exports = Reviews;