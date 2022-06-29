const logger = require('../config/logger');
const { Restaurant, Order, Article, Menu } = require('../models');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const mongoose = require('mongoose');

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

const getMenuById = async (menuId) => {
  logger.debug("[ ] [SERVICE]  Get menu by Id: " + menuId)
  return Menu.findById(menuId);
};

const getArticleById = async (articleId) => {
  logger.debug("[ ] [SERVICE]  Get article by Id: " + articleId)
  return Article.findById(articleId);
};

const getRestaurantProfil = async (userId) => {
  return Restaurant.findOne({ user: userId })
    .populate([{
      path: "articles"
    },
    { path: "menus", populate: { path: "articles" } }
    ]);
};

const updateRestaurantProfil = async (userId, profil) => {
  return Restaurant.findOneAndUpdate({ user: userId }, profil);
};

const updateArticle = async (restaurantId, article) => {
  return Article.findOneAndUpdate({ restaurant: restaurantId }, article);
};

const updateMenu = async (restaurantId, menuFields) => {
  logger.debug("[ ] [SERVICE]  Attempt to UPDATE menu: " + menuFields.id);
  let articlesIds = menuFields.articles;

  menuFields.articles = articlesIds;
  // logger.debug("[ ] [SERVICE]  menuFields.id: " + menuFields.id)

  const menu = {
    ...menuFields,
    restaurant: restaurantId,
  };
  return Menu.findOneAndUpdate({ _id: mongoose.Types.ObjectId(menuFields.id) }, menuFields);
};

const getRestaurantOrders = async (restaurantId) => {
  return Order.find({ restaurant: restaurantId, isPayed: true }).populate('client');
};

const getRestaurants = async () => {
  return await Restaurant.find().populate("menus").populate("articles");
};

const createArticle = async (restaurantId, articleFilds) => {
  const article = {
    ...articleFilds,
    restaurant: restaurantId,
  };
  return Article.create(article);
}

const createMenu = async (restaurantId, menuFilds) => {
  const menu = {
    ...menuFilds,
    restaurant: restaurantId,
  };
  return Menu.create(menu);
}

const deleteMenuById = async (menuId) => {
  logger.debug("[ ] [SERVICE]  Delete menu by Id: " + menuId)
  const menu = await getMenuById(menuId);
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Menu not found');
  }
  await menu.remove();
  return menu;
};

const deleteArticleById = async (articleId) => {
  logger.debug("[ ] [SERVICE]  Delete article by Id: " + articleId)
  const article = await getArticleById(articleId);
  if (!article) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Article not found');
  }
  await article.remove();
  return article;
};


module.exports = {
  createRestaurantProfil,
  getRestaurantProfil,
  getRestaurantOrders,
  getRestaurants,
  updateRestaurantProfil,
  createArticle,
  createMenu,
  deleteMenuById,
  getMenuById,
  deleteArticleById,
  updateArticle,
  updateMenu
};
