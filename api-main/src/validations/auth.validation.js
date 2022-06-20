const Joi = require('joi');
const { password } = require('./custom.validation');

const clientProfil = Joi.object().keys({
  name: Joi.string().required(),
  firstName: Joi.string().required(),
  address: Joi.string().required(),
  image: Joi.string(),
});

const deliveryProfil = Joi.object().keys({
  name: Joi.string().required(),
  firstName: Joi.string().required(),
  address: Joi.string().required(),
  image: Joi.string(),

});

const restaurantProfil = Joi.object().keys({
  address: Joi.string().required(),
  city: Joi.string().required(),  
  zipCode: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.allow(),
});

const register = {
  body: Joi.object().keys({
    user: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      role: Joi.string().required(),
    }),
    profil: Joi.alternatives().try(clientProfil, deliveryProfil, restaurantProfil),
  }),
};




const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

const forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required(),
  }),
};

const resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password),
  }),
};

const verifyEmail = {
  query: Joi.object().keys({
    token: Joi.string().required(),
  }),
};

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
  clientProfil,
  deliveryProfil,
  restaurantProfil,
};
