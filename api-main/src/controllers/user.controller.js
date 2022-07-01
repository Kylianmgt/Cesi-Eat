const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService, clientService, deliveryService, restaurantService } = require('../services');
const logger = require('../config/logger');


const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const updateProfil = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  // logger.debug(req.body.profil.image);
  let profil;
  switch (user.role) {
    case 'client':
      profil = await clientService.updateClientProfil(user.id, req.body.profil);
      break;
    case 'delivery':
      profil = await deliveryService.updateDeliveryProfil(user.id, req.body.profil);
      break;
    case 'restaurant':
      profil = await restaurantService.updateRestaurantProfil(user.id, req.body.profil);
      break;
    default:
      break;
  }
  logger.debug(profil);
  logger.debug(user);
  res.send({ user: user, profil: profil });
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

const getUserOrders = catchAsync(async (req, res) => {
  // logger.warn(req.session);
  const user = await userService.getUserById(req.params.userId);
  let orders;
  switch (user.role) {
    case 'client':
      const client = await clientService.getClientProfil(req.params.userId)
      orders = await clientService.getClientOrders(client._id);
      logger.debug(orders);
      res.send(orders);
      break;
    case 'delivery':
      const delivery = await deliveryService.getDeliveryProfil(req.params.userId)
      orders = await deliveryService.getDeliveryOrders(delivery._id);
      res.send(orders);
      break;
    case 'restaurant':
      const restaurant = await restaurantService.getRestaurantProfil(req.params.userId)
      orders = await restaurantService.getRestaurantOrders(restaurant._id);
      res.send(orders);
      break;
    default:
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
})

const updateUserOrder = async (action, orderId, deliveryId) => {
  switch (action) {
    case 'accept':
      logger.info("J'accepte la ommande");
      deliveryService.assignOrder(orderId, deliveryId);
      break;
    case 'restaurantAccepted':
      logger.info("Le restaurant accepte la ommande");
      deliveryService.restaurantAcceptOrder(orderId);
      break;
    case 'take-from-restaurant':
      deliveryService.takeFromRestaurant(orderId);
      break;
    case 'deliver':
      deliveryService.markOrderAsDone(orderId);
      break;
    default:
      throw new ApiError(httpStatus.NOT_FOUND, 'Problem orders');
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserOrders,
  updateUserOrder,
  updateProfil,
};
