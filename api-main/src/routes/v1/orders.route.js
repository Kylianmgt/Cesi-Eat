const auth = require('../../middlewares/auth');
const express = require('express');
const validate = require('../../middlewares/validate');
const userController = require('../../controllers/user.controller');
const userValidation = require('../../validations/user.validation');


const router = express.Router();

router.route('/:userId')
    .get(validate(userValidation.getUser), userController.getUserOrders)




module.exports = router;
