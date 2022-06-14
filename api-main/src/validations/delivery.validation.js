const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const getDelievryOrders = {
    params: Joi.object().keys({
        deliveryId: Joi.string().custom(objectId),
    }),
};
module.exports = {
    getDelievryOrders,
};
