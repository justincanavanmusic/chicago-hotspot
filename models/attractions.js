const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Attractions extends Model {}

Attractions.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          location: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          year: {
            type: DataTypes.INTEGER,
            allowNull: true
          },
          cuisine: {
            type: DataTypes.STRING,
            allowNull: true
          },
          price: {
            type: DataTypes.STRING,
            allowNull: true
          },
          url: {
            type: DataTypes.STRING,
            allowNull: true
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'attractions'
    }
);

module.exports = Attractions;