const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { restaurantService } = require('../services');
const logger = require('../config/logger');

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

    res.status(httpStatus.CREATED).send(article);

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

    res.status(httpStatus.CREATED).send(menu);

})

const deleteMenuById = catchAsync(async (req, res) => {
    const menuId = req.body.menuId;
    logger.debug("[ ] [CONTROLLER]  Delete menu by Id: ")
    logger.debug(menuId);

    const menuDeleted = await restaurantService.deleteMenuById(menuId);

    res.status(httpStatus.NO_CONTENT).send();


})


module.exports = {
    getRestaurantOrders,
    getRestaurants,
    createArticle,
    deleteMenuById,
    createMenu,
};
