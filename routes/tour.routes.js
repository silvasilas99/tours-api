const router = require('express').Router();
const tourController = require('./../controllers/tour.controller');

router.get('/simpleFilter', tourController.getSimpleFilteredTours);

module.exports = router;