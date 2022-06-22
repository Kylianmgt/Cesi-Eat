const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const deliveryRoute = require('./delivery.route');
const restaurantRoute = require('./restaurant.route');
const restaurantsRoute = require('./restaurants.route');
const clientRoute = require('./client.route');
const docsRoute = require('./docs.route');
const ordersRoute = require('./orders.route');
const orderRoute = require('./order.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/orders',
    route: ordersRoute,
  },
  {
    path: '/order',
    route: orderRoute,
  },
  {
    path: '/delivery',
    route: deliveryRoute,
  },
  {
    path: '/restaurant',
    route: restaurantRoute,
  },
    {
    path: '/restaurants',
    route: restaurantsRoute,
  },
  {
    path: '/client',
    route: clientRoute,
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
