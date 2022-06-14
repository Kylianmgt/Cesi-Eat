const auth = require('../../middlewares/auth');
const express = require('express');
const validate = require('../../middlewares/validate');
const userController = require('../../controllers/user.controller');
const orderValidation = require('../../validations/order.validation');


const router = express.Router();

// router.route('/:orderId')
//     .post(validate(orderValidation.getOrder), userController.updateUserOrder)




module.exports = router;
