const { Client } = require('../models');

/**
 * Create a user
 * @param {Object} profil Object containing the user profile
 * @param {Object} userId Object containing the user id
 * @returns {Promise<User>}
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

module.exports = {
    createClientProfil,
    getClientProfil
};