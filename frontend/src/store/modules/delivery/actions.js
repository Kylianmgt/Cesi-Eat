import api from '../../../api';


const getDeliveryOrders = ({ commit }, deliveryId) => {
    return api.get(`/delivery/${deliveryId}/orders`)
        .then(response => {
            commit('SET_DELIVERY_ORDERS', response.data);
            return response.data;
        })
        .catch(error => error.response);
};

const getPendingOrders = ({ commit }) => {
    return api.get('/delivery/pending')
        .then(response => {
            commit('SET_PENDING_ORDERS', response.data);
            return response.data;
        })
        .catch(error => error.response);
};

export default {
    getDeliveryOrders,
    getPendingOrders,
};
