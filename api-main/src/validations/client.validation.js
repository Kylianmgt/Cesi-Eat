const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const getClientOrders = {
    params: Joi.object().keys({
        clientId: Joi.string().custom(objectId),
    }),
};

module.exports = { getClientOrders };