const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { clientService } = require('../services');
const logger = require('../config/logger');

const getClientOrders = catchAsync(async (req, res) => {
    const orders = await clientService.getClientOrders(req.params.clientId);
    res.status(httpStatus.OK).send(orders);
});

module.exports = {
    getClientOrders
};

