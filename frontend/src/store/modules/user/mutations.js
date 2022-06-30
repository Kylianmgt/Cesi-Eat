export default {
  setUserData(state, userData) {
    state.userData.profil = userData.profil;
    state.userData.user = userData.user;
  },
  setUserId(state, userId) {
    state.userId = userId;
  },
  setUserType(state, userType) {
    state.userType = userType;
  },
  setUserOrders(state, userOrders) {
    state.userOrders = userOrders;
  },
  setPendingOrders(state, pendingOrders) {
    state.pendingOrders = pendingOrders;
  },
  setUserDataProfil(state, profil) {
    state.userData.profil = profil;
  }
};
