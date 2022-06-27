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
    console.log("[ ] postArticle store...")
    console.log({ payload })
    return api.post(`/restaurant/${payload.restaurantId}/article/create`, { article: payload.article, userId: payload.userId })
        .then(response => {
            return response.data;
        })
        .catch(error => error.response);
};

const postMenu = ({ }, payload) => {
    console.log("[ ] postMenu store...")
    console.log({ payload })
    return api.post(`/restaurant/${payload.restaurantId}/menu/create`, { menu: payload.menu, userId: payload.userId })
        .then(response => {
            return response.data;
        })
        .catch(error => error.response);
};

const deleteMenu = ({ }, payload) => {
    console.log("[STORE] [ ] deleteMenu store...")
    const menuId = payload.menuId;
    console.log({ payload })
    console.log({ menuId })
    return api.post(`/restaurant/${payload.restaurantId}/menu/delete`, { menuId: menuId })
        .then(response => {
            return response.data;
        })
        .catch(error => error.response);
};

const deleteArticle = ({ }, payload) => {
    console.log("[STORE] [ ] Calling Delete Article from API...")
    const articleId = payload.articleId;
    console.log({ payload })
    console.log({ articleId })
    return api.post(`/restaurant/${payload.restaurantId}/article/delete`, { articleId: articleId })
        .then(response => {
            return response.data;
        })
        .catch(error => error.response);
};

const updateArticle = ({ }, payload) => {
    console.log("[STORE] [ ] Calling Delete Article from API...")
    console.log({ payload })
    return api.put(`/restaurant/${payload.restaurantId}/article/update`, { article: payload.articleFields, userId: payload.userId })
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
    updateArticle
};
