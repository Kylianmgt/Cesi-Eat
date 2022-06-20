import api from '../../../api/index';



export default {
  setUserData({ commit }, data) {
    commit('setUserData', data);
  },
  cleanUserData({ commit }) {
    commit('setUserId', 0);
    commit('setUserType', 0);
  },
  sendRecoveryPasswordEmail({ }, email) {
    return api.post('/recover-password', { email });
  },
  getUserOrders({ commit }, userId) {
    return api.get('/orders/' + userId).then((response) => {
      commit('setUserOrders', response.data);
      return response.data;
    });
  },
  getPendingOrders({ commit }) {
    return api.get('/orders/').then((response) => {
      commit('setPendingOrders', response.data);
      return response.data;
    })
  },
  updateProfil({ commit }, payload) {
    console.log('updateProfil', payload);
    return api.post('/users/' + payload.userId, {
      profil: payload.profil,
    }).then((response) => {
      console.log(response.data);
      commit('setUserData', response.data);
      return response.data;
    })
  }


};
