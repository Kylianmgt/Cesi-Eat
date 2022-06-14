const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const getOrder = {
    params: Joi.object().keys({
        userId: Joi.string().custom(objectId),
    }),
};
module.exports = {
    getOrder,
};
