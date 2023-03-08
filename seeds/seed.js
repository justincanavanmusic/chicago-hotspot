const sequelize = require('../config/connection');
const { Attractions } = require('../models');

const restaurantData = require('./restaurantData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Attractions.bulkCreate(restaurantData, {
        individualHooks: true, // not sure if needed
        returning: true, // not sure if needed
      });

    process.exit(0);
};

seedDatabase();