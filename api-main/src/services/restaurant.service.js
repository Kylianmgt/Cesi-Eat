const { Restaurant, Order } = require('../models');

/**
 * Create a user
 * @param {Object} profil Object containing the user profile
 * @param {Object} userId Object containing the user id
 * @returns {Promise<User>}
 */
const createRestaurantProfil = async (userId, profil) => {
    const restaurant = {
        ...profil,
        user: userId,
    };
    return Restaurant.create(restaurant);
};

const getRestaurantProfil = async (userId) => {
    return Restaurant.findOne({ user: userId });
};

const updateRestaurantProfil = async (userId, profil) => {
    return Restaurant.findOneAndUpdate({ user: userId }, profil);
}

const getRestaurantOrders = async (restaurantId) => {
    return Order.find({ restaurant: restaurantId }).populate('client');
};


module.exports = {
    createRestaurantProfil,
    getRestaurantProfil,
    getRestaurantOrders,
    updateRestaurantProfil,
};