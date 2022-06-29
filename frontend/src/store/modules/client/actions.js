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

const createCheckoutSession = ({ }, payload) => {

  return api.post(`/client/${payload.clientId}/create-checkout-session`, { order: payload.order }).then((response) => {
    return response.data;
  }
  );
}

const createOrder = ({ commit }, payload) => {
  return api.post(`/client/${payload.order.client}/create-order/`, { order: payload.order });
};


export default {
  getClientOrders,
  getRestaurants,
  createOrder,
  createCheckoutSession
};
