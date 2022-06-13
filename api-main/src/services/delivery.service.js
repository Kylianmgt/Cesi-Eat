const { Delivery, Order } = require('../models');

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

module.exports = {
    createDeliveryProfil,
    getDeliveryProfil,
    getDeliveryOrders,
    getPendingOrders
};