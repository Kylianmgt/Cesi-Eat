const auth = require('../../middlewares/auth');
const express = require('express');
const validate = require('../../middlewares/validate');
const restaurantController = require('../../controllers/restaurant.controller');
const restaurantValidation = require('../../validations/restaurant.validation');


const router = express.Router();

router.route('/:restaurantId/orders')
    .get(validate(restaurantValidation.getRestaurantOrders), restaurantController.getRestaurantOrders)

router.route('/:restaurantId/article/create')
    .post(validate(restaurantValidation.createArticle), restaurantController.createArticle)

router.route('/:restaurantId/menu/create')
    .post(validate(restaurantValidation.createMenu), restaurantController.createMenu)




module.exports = router;
