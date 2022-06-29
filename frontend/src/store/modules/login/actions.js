import { Storage } from '@capacitor/storage';
import api from '../../../api';


async function setToken(token) {
  await Storage.set({
    key: 'token',
    value: token,
  });
}


export default {
  login({ commit }, userCredentials) {
    return api.post('/auth/login', userCredentials)
      .then(async (response) => {
        commit('setUserData', response.data);
        await setToken(response.data.tokens.access.token);
        return response.data;
      })
      .catch((error) => error.response);
  },
};
