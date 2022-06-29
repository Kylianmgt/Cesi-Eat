const httpStatus = require('http-status');
const { User, Client, Restaurant, Delivery } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (userBody.sponsorCode && !checkSponsorCode(userBody.sponsorCode, userBody.role)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid sponsor code');
  }
  userBody.publicSponsorCode = await generateSponsorCode();
  return User.create(userBody);
};


/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

/**
 * Update user profil
 * @param {ObjectId} userId
 * @param {Object} updateBody
 */

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.remove();
  return user;
};

const checkSponsorCode = async (sponsorCode, role) => {
  const user = await User.findOne({ publicSponsorCode: sponsorCode });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "Wrong sponsor code");
  }
  if (user.role !== role) {
    throw new ApiError(httpStatus.NOT_FOUND, "Wrong sponsor code, different Role");
  }
  return true;

}
const generateSponsorCode = async () => {
  return Date.now() + Math.floor(Math.random() * 1000000);
}

const getProfilBySponsorCode = async (sponsorCode) => {
  const user = await User.findOne({ publicSponsorCode: sponsorCode });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "Wrong sponsor code");
  }
  switch (user.role) {
    case "client":
      return await Client.findOne({ user: user.id });
    case "restaurant":
      return await Restaurant.findOne({ user: user.id });
    case "delivery":
      return await Delivery.findOne({ user: user.id });
    default:
      throw new ApiError(httpStatus.NOT_FOUND, "Wrong sponsor code");
  }
}

const getSponsoredProfiles = async (publicSponsorCode) => {
  const users = await User.find({ sponsorCode: publicSponsorCode });
  if (!users) {
    return [];
  }
  let profiles = [];
  for (let i = 0; i < users.length; i++) {
    switch (users[i].role) {
      case "client":
        profiles.push(await Client.findOne({ user: users[i].id }));
        break;
      case "restaurant":
        profiles.push(await Restaurant.findOne({ user: users[i].id }));
        break;
      case "delivery":
        profiles.push(await Delivery.findOne({ user: users[i].id }));
        break;
      default:
        throw new ApiError(httpStatus.NOT_FOUND, "Wrong sponsor code");
    }
  }
  return profiles;
}



module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
  getProfilBySponsorCode,
  getSponsoredProfiles
};
