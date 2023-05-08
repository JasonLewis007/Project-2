const router = require('express').Router();
const userRoutes = require('./userRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const reservationRoutes = require('./reservationRoutes');

router.use('/users', userRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/reservations', reservationRoutes);

module.exports = router;