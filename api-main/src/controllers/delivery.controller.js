const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { deliveryService } = require('../services');
const logger = require('../config/logger');

const getDeliveryOrders = catchAsync(async (req, res) => {
    const orders = await deliveryService.getDeliveryOrders(req.params.restaurantId);
    res.status(httpStatus.OK).send(orders);
});

const getPendingOrders = catchAsync(async (req, res) => {
    const orders = await deliveryService.getPendingOrders();
    res.status(httpStatus.OK).send(orders);
});

module.exports = {
    getDeliveryOrders,
    getPendingOrders
};

