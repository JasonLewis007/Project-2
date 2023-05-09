const router = require('express').Router();
const { Reservation } = require('../../models');
const withAuth = require('./../../utils/auth');

const nodeMailer = require('nodemailer');
require('dotenv').config();

router.post('/', withAuth, async (req, res) => {
    try {
        const newReservation = await Reservation.create({
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            user_id: req.session.user_id,
            restaurant_name: req.body.restaurant_name
        });
        let transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
              type: 'OAuth2',
              user: process.env.MAIL_USERNAME,
              pass: process.env.MAIL_PASSWORD,
              clientId: process.env.OAUTH_CLIENTID,
              clientSecret: process.env.OAUTH_CLIENT_SECRET,
              refreshToken: process.env.OAUTH_REFRESH_TOKEN
            }
          });
          
          let mailOptions = {
            from: 'tablespotter@gmail.com',
            to: req.body.email,
            subject: 'Table Spotter Reservation',
            text: `You created a reservation at ${req.body.restaurant_name}`
          };
          
          transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
              console.log("Error " + err);
            } else {
              console.log("Email sent successfully");
            }
          });


        // if the user is successfully created, the new response will be returned as json
        res.status(200).json(newReservation)

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;