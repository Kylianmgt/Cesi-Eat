const { Delivery, Order } = require('../models');
const logger = require('../config/logger');

/**
 * Create a user
 * @param {Object} profil Object containing the user profile
 * @param {Object} userId Object containing the user id
 * @returns {Promise<User>}
 */
const createDeliveryProfil = async (userId, profil) => {
    const delivery = {
        ...profil,
        user: userId,
    };
    return Delivery.create(delivery);
};

const getDeliveryProfil = async (userId) => {
    return Delivery.findOne({ user: userId });
};

const getDeliveryOrders = async (deliveryId) => {
    return Order.find({ delivery: deliveryId }).populate('client');
};

const getPendingOrders = async () => {
    return Order.find({ status: 'pending' }).populate('client');
}

const assignOrder = async (orderId, deliveryId) => {
    logger.debug('assigning order');
    logger.debug(orderId);
    logger.debug(deliveryId);
    const profil = await Delivery.findById(deliveryId);
    const order = await Order.findById(orderId);
    order.delivery = profil;
    order.status = 'accepted';
    order.save();
    return;

}

const takeFromRestaurant = async (orderId) => {
    const order = await Order.findById(orderId);
    order.status = 'deliver';
    order.save();
    return;
}

const markOrderAsDone = async (orderId) => {
    const order = await Order.findById(orderId);
    order.status = 'done';
    order.save();
    return;
}

module.exports = {
    createDeliveryProfil,
    getDeliveryProfil,
    getDeliveryOrders,
    getPendingOrders,
    assignOrder,
    takeFromRestaurant,
    markOrderAsDone
};