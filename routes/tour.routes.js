const router = require('express').Router();
const tourController = require('./../controllers/tour.controller');

router.get('/simpleFilter', tourController.getSimpleFilteredTours);
router.get('/advancedFilter', tourController.getAdvancedFilteredTours);

module.exports = router;