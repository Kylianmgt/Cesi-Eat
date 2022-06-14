const auth = require('../../middlewares/auth');
const express = require('express');
const validate = require('../../middlewares/validate');
const userController = require('../../controllers/user.controller');
const deliveryController = require('../../controllers/delivery.controller');
const userValidation = require('../../validations/user.validation');


const router = express.Router();

router.route('/:userId')
    .get(validate(userValidation.getUser), userController.getUserOrders)

router.route('/').get(deliveryController.getPendingOrders)




module.exports = router;
