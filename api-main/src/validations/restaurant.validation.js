const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const getRestaurantOrders = {
    params: Joi.object().keys({
        restaurantId: Joi.string().custom(objectId),
    }),
};


module.exports = {
    getRestaurantOrders,
};
