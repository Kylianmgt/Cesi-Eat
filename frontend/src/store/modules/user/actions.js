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
};
