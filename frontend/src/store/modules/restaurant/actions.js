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

export default {
    getRestaurantOrders,
    postArticle,
    postMenu
};
