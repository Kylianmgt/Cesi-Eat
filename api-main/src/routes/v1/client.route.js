const auth = require('../../middlewares/auth');
const express = require('express');
const validate = require('../../middlewares/validate');
const clientController = require('../../controllers/client.controller');
const clientValidation = require('../../validations/client.validation');
const logger = require('../../config/logger');
const bodyParser = require('body-parser');

const stripe = require('stripe')('sk_test_51LEAlbLhNfISaHcD8OZv3CwsgLas8yqCN08YrZUVMREgzVN0XdjDq1cH9WC7NKlc6fexCaavX6VkZmsD9wXHU3C400eWwGJ3zL');

// Find your endpoint's secret in your Dashboard's webhook settings



const router = express.Router();

router.route('/:clientId/orders').get(auth(), validate(clientValidation.getClientOrders), clientController.getClientOrders);

// router.route('/:clientId/create-order').post(validate(clientValidation.createClientOrder), clientController.createOrder);
router.route('/:clientId/create-order').post(auth(), clientController.createOrder);

router.route('/:clientId/create-checkout-session').post(clientController.createCheckoutSession);

router.route('/webhook').post(express.raw({ type: 'application/json' }), clientController.checkoutSessionHandler);


module.exports = router;
