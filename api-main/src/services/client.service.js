const logger = require('../config/logger');
const { Client, Order } = require('../models');

/**
 * Create a client
 * @param {Object} profil Object containing the user profil
 * @param {Object} userId Object containing the user id
 * @returns {Promise<Client>}
 */
const createClientProfil = async (userId, profil) => {
    const client = {
        ...profil,
        user: userId,
    };
    return Client.create(client);
};

const getClientProfil = async (userId) => {
    return Client.findOne({ user: userId });
};
const updateClientProfil = async (userId, profil) => {
    const client = await Client.findOneAndUpdate({ user: userId }, profil, { new: true });
    logger.debug(`Update client ${client.name}`);
    return client;
};
const getClientOrders = async (clientId) => {
    return Order.find({ client: clientId, isPayed: true }).populate(['restaurant', 'delivery']);
};

const createClientOrder = async (order) => {
    return Order.create(order);
};

const getOrderById = async (orderId) => {
    return Order.findById(orderId).populate(["articles", "menus"]);
}

const markOrderAsPaid = async (orderId) => {
    const order = await Order.findById(orderId);
    order.isPayed = true;
    await order.save();
    return order;
}



module.exports = {
    createClientProfil,
    getClientProfil,
    getClientOrders,
    updateClientProfil,
    createClientOrder,
    getOrderById,
    markOrderAsPaid
};