const { Delivery } = require('../models');

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

const getDeliverytProfil = async (userId) => {
    return Delivery.findOne({ user: userId });
};

module.exports = {
    createDeliveryProfil,
    getDeliverytProfil
};