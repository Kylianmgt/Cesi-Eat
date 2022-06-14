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
  res.status(httpStatus.OK).send();

})

const updateUserOrder = catchAsync(async (req, res) => {
  // logger.info(req.session);
  switch (req.body.action) {
    case 'accept':
      deliveryService.acceptDelivery(req.params.orderId, req.body.deliveryId);
      break;
    case 'take-from-restaurant':
      deliveryService.takeFromRestaurant(req.params.orderId);
      break;
    case 'deliver':
      deliveryService.deliver(req.params.orderId);
      break;
    default:
      throw new ApiError(httpStatus.NOT_FOUND, 'User not found');


  }
})

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  getUserOrders,
  updateUserOrder
};
