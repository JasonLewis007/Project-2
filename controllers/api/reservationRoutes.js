const router = require('express').Router();
const { Reservation } = require('../../models');
const withAuth = require('./../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newReservation = await Reservation.create({
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            user_id: req.session.user_id,
        });


        // if the user is successfully created, the new response will be returned as json
        res.status(200).json(newReservation)

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;