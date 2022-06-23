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
    return client;
};

const getClientOrders = async (clientId) => {
    return Order.find({ client: clientId }).populate(['restaurant', 'delivery']);
};


module.exports = {
    createClientProfil,
    getClientProfil,
    getClientOrders,
    updateClientProfil,
};