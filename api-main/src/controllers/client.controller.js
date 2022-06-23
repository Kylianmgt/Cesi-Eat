const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { clientService } = require('../services');
const logger = require('../config/logger');

const getClientOrders = catchAsync(async (req, res) => {
    const orders = await clientService.getClientOrders(req.params.clientId);
    res.status(httpStatus.OK).send(orders);
});

const createOrder = catchAsync(async (req, res) => {
    logger.debug("request : ", req);
    logger.debug("order : ", req.body.order);
    logger.debug("params client ID : ", req.params.clientId);
    // const order = await clientService.createClientOrder(req);
    res.status(httpStatus.CREATED).send(order);
});


module.exports = {
    getClientOrders,
    createOrder
};
