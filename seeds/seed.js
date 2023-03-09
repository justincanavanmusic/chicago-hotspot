const sequelize = require('../config/connection');
const reviewList = require('./reviews.json');
const userList = require('./userData.json');
const restaurantData = require('./restaurantData.json');
const { Attractions, Users, Reviews } = require('../models');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Attractions.bulkCreate(restaurantData);

  await Users.bulkCreate(userList, {
    individualHooks: true,
    returning: true
  });
  await Reviews.bulkCreate(reviewList);

  process.exit(0);
};

seedDatabase();
