const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService, clientService, deliveryService, restaurantService } = require('../services');
const logger = require('../config/logger');

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body.user);
  const tokens = await tokenService.generateAuthTokens(user);
  let profil;
  switch (user.role) {
    case 'client':
      profil = await clientService.createClientProfil(user.id, req.body.profil);
      logger.info(`Client ${user.id} registered`);
      logger.info(profil);
      break;
    case 'delivery':
      profil = await deliveryService.createDelivery(user.id, req.body.delivery);
      logger.info(`Delivery ${user.id} created`);
      break;
    case 'restaurant':
      profil = await restaurantService.createRestaurant(user.id, req.body.restaurant);
      break;
    default:
      break;
  }
  res.status(httpStatus.CREATED).send({ user, tokens, profil });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  let profil;
  switch (user.role) {
    case 'client':
      profil = await clientService.getClientProfil(user.id);
      logger.info(`Client ${user.id} registered`);
      logger.info(profil);
      break;
    case 'delivery':
      profil = await deliveryService.getDeliveryProfil(user.id);
      break;
    case 'restaurant':
      profil = await restaurantService.getRestaurantProfil(user.id);
      break;
    default:
      break;
  }
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens, profil });
});

const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const sendVerificationEmail = catchAsync(async (req, res) => {
  const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
  await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyEmail = catchAsync(async (req, res) => {
  await authService.verifyEmail(req.query.token);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
};
