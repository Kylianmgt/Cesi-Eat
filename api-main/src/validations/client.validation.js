const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const getClientOrders = {
  params: Joi.object().keys({
    clientId: Joi.string().custom(objectId),
  }),
};

// TO COMPLETE
const createClientOrder = {
    // params: Joi.object().keys({
    //     clientId: Joi.string().custom(objectId),
    // }),
    body : Joi.object().keys({
        order: Joi.object().keys({
            restaurant: Joi.string().custom(objectId),
            client: Joi.string().custom(objectId),
            menus: Joi.array().items(Joi.string().custom(objectId)),
            articles: Joi.array().items(Joi.string().custom(objectId))
        })
    })
};

module.exports = { getClientOrders, createClientOrder };
