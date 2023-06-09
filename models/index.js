const User = require('./User');
const Review = require('./Review');
const Reservation = require('./Reservation');
const Restaurant = require('./Restaurant');

User.hasMany(Review, {
    foreignKey: 'user_id',
});

User.hasMany(Reservation, {
    foreignKey: 'user_id',
});

Review.belongsTo(User, {
    foreignKey: 'review_id',
});

Reservation.belongsTo(User, {
    foreignKey: 'reservation_id',
});

Restaurant.hasMany(Reservation, {
    foreignKey: 'restaurant_id',
});

Restaurant.hasMany(Review, {
    foreignKey: 'review_id',
});

module.exports = {
    User,
    Review,
    Reservation,
    Restaurant
};