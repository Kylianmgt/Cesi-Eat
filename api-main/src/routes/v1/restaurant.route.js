const auth = require('../../middlewares/auth');
const express = require('express');
const validate = require('../../middlewares/validate');
const restaurantController = require('../../controllers/restaurant.controller');
const restaurantValidation = require('../../validations/restaurant.validation');


const router = express.Router();

router.route('/:restaurantId/orders')
    .get(auth(), validate(restaurantValidation.getRestaurantOrders), restaurantController.getRestaurantOrders)

router.route('/:restaurantId/article/create')
    .post(auth(), validate(restaurantValidation.createArticle), restaurantController.createArticle)

router.route('/:restaurantId/menu/create')
    .post(auth(), validate(restaurantValidation.createMenu), restaurantController.createMenu)

router.route('/:restaurantId/menu/delete')
    .post(auth(), restaurantController.deleteMenuById)

router.route('/:restaurantId/article/delete')
    .post(auth(), restaurantController.deleteArticleById)

router.route('/:restaurantId/article/update')
    .put(auth(), restaurantController.updateArticleById)

router.route('/:restaurantId/menu/update')
    .put(auth(), validate(restaurantValidation.updateMenuById), restaurantController.updateMenuById)




module.exports = router;
