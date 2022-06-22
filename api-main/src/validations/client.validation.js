const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const getClientOrders = {
  params: Joi.object().keys({
    clientId: Joi.string().custom(objectId),
  }),
};

// TO COMPLETE
// const createClientOrder = {
//     params: Joi.object().keys({
//         clientId: Joi.string().custom(objectId);
//         restaurant
//         client
//         delivery
//         status
//         menus
//         articles
//     })
// };

module.exports = { getClientOrders };
