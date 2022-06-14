import api from '../../../api';

const getRestaurantOrders = ({ commit }, restaurantId) => {
    return api.get(`/client/${restaurantId}/orders`)
        .then(response => {
            commit('SET_RESTAURANT_ORDERS', response.data);
            return response.data;
        })
        .catch(error => error.response);
};

export default {
    getRestaurantOrders,
};
