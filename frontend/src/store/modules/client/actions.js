import api from '../../../api';



const getClientOrders = ({ commit }, clientId) => {
    return api.get(`/client/${clientId}/orders`)
        .then(response => {
            commit('SET_CLIENT_ORDERS', response.data);
            return response.data;
        })
        .catch(error => error.response);
};



export default {
    getClientOrders,
};
