import api from "../../../api";

const getClientOrders = ({ commit }, clientId) => {
  return api
    .get(`/client/${clientId}/orders`)
    .then((response) => {
      commit("SET_CLIENT_ORDERS", response.data);
      return response.data;
    })
    .catch((error) => error.response);
};

const getRestaurants = ({ commit }) => {
  return api
    .get(`/restaurants/`)
    .then((response) => {
      commit("SET_RESTAURANTS", response.data);
      return response.data;
    })
    .catch((error) => error.response);
};

const createOrder = ({ commit }, order) => {
  return api.post(`/client/${order.client}/create-order/`, order);
};


export default {
  getClientOrders,
  getRestaurants,
  createOrder,
};
