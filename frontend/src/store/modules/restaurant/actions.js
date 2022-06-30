import api from '../../../api';

const getRestaurantOrders = ({ commit }, restaurantId) => {
    return api.get(`/client/${restaurantId}/orders`)
        .then(response => {
            commit('SET_RESTAURANT_ORDERS', response.data);
            return response.data;
        })
        .catch(error => error.response);
};

const postArticle = ({ }, payload) => {
    return api.post(`/restaurant/${payload.restaurantId}/article/create`, { article: payload.article, userId: payload.userId })
        .then(response => {
            return response.data;
        })
        .catch(error => error.response);
};

const postMenu = ({ }, payload) => {
    return api.post(`/restaurant/${payload.restaurantId}/menu/create`, { menu: payload.menu, userId: payload.userId })
        .then(response => {
            return response.data;
        })
        .catch(error => error.response);
};

const deleteMenu = ({ }, payload) => {
    const menuId = payload.menuId;
    return api.post(`/restaurant/${payload.restaurantId}/menu/delete`, { menuId: menuId })
        .then(response => {
            return response.data;
        })
        .catch(error => error.response);
};

const deleteArticle = ({ }, payload) => {
    const articleId = payload.articleId;
    return api.post(`/restaurant/${payload.restaurantId}/article/delete`, { articleId: articleId })
        .then(response => {
            return response.data;
        })
        .catch(error => error.response);
};

const updateArticle = ({ }, payload) => {
    return api.put(`/restaurant/${payload.restaurantId}/article/update`, { article: payload.articleFields, userId: payload.userId })
        .then(response => {
            return response.data;
        })
        .catch(error => error.response);
};

const updateMenu = ({ }, payload) => {
    return api.put(`/restaurant/${payload.restaurantId}/menu/update`, { menu: payload.menuFields, userId: payload.userId })
        .then(response => {
            return response.data;
        })
        .catch(error => error.response);
};

export default {
    getRestaurantOrders,
    postArticle,
    postMenu,
    deleteMenu,
    deleteArticle,
    updateArticle,
    updateMenu
};
