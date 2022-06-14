import { createStore } from 'vuex';

import general from './modules/general/index';
import login from './modules/login/index';
import files from './modules/files/index';
import user from './modules/user/index';
import menu from './modules/menu/index';
import register from './modules/register/index';
import profil from './modules/profil/index';
import client from './modules/client/index';
import restaurant from './modules/restaurant/index';
import delivery from './modules/delivery/index';


const store = createStore({
  modules: {
    general,
    login,
    files,
    user,
    menu,
    register,
    profil,
    client,
    restaurant,
    delivery,
  },
});

export default store;
