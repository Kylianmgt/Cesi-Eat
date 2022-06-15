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




module.exports = {
    getRestaurantOrders
};

