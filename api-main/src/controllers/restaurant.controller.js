const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { restaurantService } = require('../services');
const logger = require('../config/logger');
const { getRestaurantProfil } = require('../services/restaurant.service');

const getRestaurantOrders = catchAsync(async (req, res) => {
    const orders = await restaurantService.getRestaurantOrders(req.params.restaurantId);
    res.status(httpStatus.OK).send(orders);
});

const getRestaurants = catchAsync(async (req, res) => {
    const restaurants = await restaurantService.getRestaurants();
    res.status(httpStatus.OK).send(restaurants);
});

const createArticle = catchAsync(async (req, res) => {
    logger.debug("[ ] [CONTROLLER] Create Article...")

    const restaurantId = req.params.restaurantId;
    const userId = req.body.userId;
    const restaurant = await restaurantService.getRestaurantProfil(userId)
    logger.debug(req.body.userId);
    const articleFields = req.body.article;
    logger.debug(restaurantId);
    logger.debug(articleFields);
    const article = await restaurantService.createArticle(restaurantId, articleFields);

    restaurant.articles.push(article);
    restaurant.save();

    const restaurantProfil = restaurantService.getRestaurantProfil(userId);
    res.status(httpStatus.DELETE).send(restaurantProfil);

})

const createMenu = catchAsync(async (req, res) => {
    logger.debug("[ ] [CONTROLLER] Create Menu...")

    const restaurantId = req.params.restaurantId;
    const userId = req.body.userId;
    const restaurant = await restaurantService.getRestaurantProfil(userId)

    const menuFields = req.body.menu;
    logger.debug(restaurantId);
    logger.debug(menuFields.articles);
    const menu = await restaurantService.createMenu(restaurantId, menuFields);

    restaurant.menus.push(menu);
    restaurant.save();

    const restaurantProfil = restaurantService.getRestaurantProfil(userId);
    res.status(httpStatus.CREATED).send(restaurantProfil);

})

const deleteMenuById = catchAsync(async (req, res) => {
    const menuId = req.body.menuId;
    logger.debug("[ ] [CONTROLLER]  Delete menu by Id: " + menuId)
    const menuDeleted = await restaurantService.deleteMenuById(menuId);
    const userId = req.body.userId;
    const restaurantProfil = restaurantService.getRestaurantProfil(userId);
    res.status(httpStatus.DELETE).send(restaurantProfil);
})

const deleteArticleById = catchAsync(async (req, res) => {
    const articleId = req.body.articleId;
    logger.debug("[ ] [CONTROLLER]  Delete article by Id: " + articleId)
    const articleDeleted = await restaurantService.deleteArticleById(articleId);
    const userId = req.body.userId;
    const restaurantProfil = restaurantService.getRestaurantProfil(userId);
    res.status(httpStatus.DELETE).send(restaurantProfil);
})

const updateArticleById = catchAsync(async (req, res) => {
    const article = req.body.article;
    const articleId = article.id;
    logger.debug("[ ] [CONTROLLER] Update Article..." + articleId)
    const restaurantId = req.params.restaurantId;
    const userId = req.body.userId;
    const updateArticle = await restaurantService.updateArticle(restaurantId, article);
    const restaurantProfil = restaurantService.getRestaurantProfil(userId);
    res.status(httpStatus.CREATED).send(restaurantProfil);
})

const updateMenuById = catchAsync(async (req, res) => {
    const menu = req.body.menu;
    const articlesLength = menu.articles.length;
    const menuId = menu.id;
    logger.debug("[ ] [CONTROLLER] Update Menu: " + menuId)
    logger.debug("[+] [CONTROLLER] Get " + articlesLength + " articles.")
    const restaurantId = req.params.restaurantId;
    const userId = req.body.userId;
    const updateArticle = await restaurantService.updateMenu(restaurantId, menu);
    const restaurantProfil = await restaurantService.getRestaurantProfil(userId);
    res.status(httpStatus.CREATED).send(restaurantProfil);
})


module.exports = {
    getRestaurantOrders,
    getRestaurants,
    createArticle,
    deleteMenuById,
    createMenu,
    deleteArticleById,
    updateArticleById,
    updateMenuById,
};
