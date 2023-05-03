const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    const reservationData = await Reservation.findAll({
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    });

    const reservations = reservationData.map(reservation => reservation.toJSON());

    res.render('homepage', {
        reservations,
        logged_in: req.session.logged_in
    });
});

router.get('/profile', withAuth, async (req, res) => {
    const reservationData = await Reservation.findAll({
        where: {
            user_id: req.session.user_id
        }
    });
    const reservations = reservationData.map(reservation => reservation.toJSON());
    console.log(reservations);
    res.render('profile', {
        logged_in: req.session.logged_in,
        projects
    });
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        return res.redirect('/profile');
    }
    res.render('login');
});

router.get('/reservation/:id', withAuth, async (req, res) => {
    const reservationId = req.params.id;
    const reservationData = await Reservation.findByPk(reservationId, {
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    });
    const reservation = reservationData.toJSON();
    console.log(reservation);
    res.render('reservation', {
        ...reservation,
        logged_in: req.session.logged_in
    });
});

router.get('/review/:id', withAuth, async (req, res) => {
    const reviewId = req.params.id;
    const reviewData = await Review.findByPk(reviewId, {
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
    });
    const review = reviewData.toJSON();
    console.log(review);
    res.render('review', {
        ...review,
        logged_in: req.session.logged_in
    });
});

module.exports = router;