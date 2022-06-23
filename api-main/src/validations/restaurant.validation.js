const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const getRestaurantOrders = {
    params: Joi.object().keys({
        restaurantId: Joi.string().custom(objectId),
    }),
};

const createArticle = {
    body: Joi.object().keys({
        article: Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.string().required(),
            image: Joi.string().required(),
            price: Joi.number().required(),
        }),
        userId: Joi.string().custom(objectId),
    })
}


module.exports = {
    getRestaurantOrders,
    createArticle
};
