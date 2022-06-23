const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { restaurantService } = require('../services');
const logger = require('../config/logger');

const getRestaurantOrders = catchAsync(async (req, res) => {
    const orders = await restaurantService.getRestaurantOrders(req.params.restaurantId);
    res.status(httpStatus.OK).send(orders);
});

const getRestaurants = catchAsync(async (req, res) => {
    const restaurants = await restaurantService.getRestaurants();
    res.status(httpStatus.OK).send(restaurants);
});

const createArticle = catchAsync(async (req, res) => {
    logger.debug("[ ] [CONTROLLER] Create Article...")

    const restaurantId = req.params.restaurantId;
    const userId = req.body.userId;
    const restaurant = await restaurantService.getRestaurantProfil(userId)
    logger.debug(req.body.userId);
    const articleFields = req.body.article;
    logger.debug(restaurantId);
    logger.debug(articleFields);
    const article = await restaurantService.createArticle(restaurantId, articleFields);

    restaurant.articles.push(article);
    restaurant.save();

    res.status(httpStatus.CREATED).send(article);

})


module.exports = {
    getRestaurantOrders,
    getRestaurants,
    createArticle
};
