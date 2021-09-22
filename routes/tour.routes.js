const router = require('express').Router();
const tourController = require('./../controllers/tour.controller');

router.get('/getTours', tourController.getTours);

module.exports = router;