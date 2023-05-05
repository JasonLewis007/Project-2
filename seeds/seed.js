const sequelize = require('../config/connection');
const { User, Restaurant, Reservation } = require('../models');

const userData = require('./userData.json');
const restaurantData = require('./restaurantData.json');
const reservationData = require('./reservationData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const restaurant = await Restaurant.bulkCreate(restaurantData, {
        returning: true,
    });

    const reservation = await Reservation.bulkCreate(reservationData, {
        returning: true,
    });


    process.exit(0);
};

seedDatabase();
