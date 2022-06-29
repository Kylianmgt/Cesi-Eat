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

router.route('/:restaurantId/menu/delete')
    .post(restaurantController.deleteMenuById)

router.route('/:restaurantId/article/delete')
    .post(restaurantController.deleteArticleById)

router.route('/:restaurantId/article/update')
    .put(restaurantController.updateArticleById)

router.route('/:restaurantId/menu/update')
    .put(validate(restaurantValidation.updateMenuById), restaurantController.updateMenuById)




module.exports = router;
