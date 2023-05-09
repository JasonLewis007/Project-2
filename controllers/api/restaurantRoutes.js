const router = require('express').Router();
const { Restaurant } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const restaurantData = await Restaurant.findAll();
        res.status(200).json(restaurantData)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const restaurantData = await Restaurant.findByPk(req.params.id);
        res.status(200).json(restaurantData)
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;