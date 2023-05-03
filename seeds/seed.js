const sequelize = require('../config/connection');
const { User, Restaurant } = require('../models');

const userData = require('./userData.json');
const restaurantData = require('./restaurantData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const restaurant = await Restaurant.bulkCreate(restaurantData, {
        returning: true,
    });

    process.exit(0);
};

seedDatabase();
