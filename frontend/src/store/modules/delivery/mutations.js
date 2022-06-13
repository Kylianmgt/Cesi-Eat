export default {
    SET_DELIVERY_ORDERS(state, orders) {
        state.deliveryOrders = orders;
    },
    SET_PENDING_ORDERS(state, orders) {
        state.pendingOrders = orders;
    },
};
