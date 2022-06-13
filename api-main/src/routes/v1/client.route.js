const auth = require('../../middlewares/auth');
const express = require('express');
const validate = require('../../middlewares/validate');
const clientController = require('../../controllers/client.controller');
const clientValidation = require('../../validations/client.validation');


const router = express.Router();

router.route('/:clientId/orders')
    .get(validate(clientValidation.getClientOrders), clientController.getClientOrders)




module.exports = router;
