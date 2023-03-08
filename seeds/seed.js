const sequelize = require('../config/connection');
const { Attraction } = require('../models');

const restaurantData = require('./restaurantData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Attraction.bulkCreate(restaurantData, {
        individualHooks: true, // not sure if needed
        returning: true, // not sure if needed
      });

    process.exit(0);
};

seedDatabase();