import UserTypes from '../../enums/UserTypes';

export default [
  {
    name: 'client',
    path: '/client',
    redirect: '/client/restos',
  },
  {
    name: "/client/restos",
    placeholder: "Restos",
    component: () => import('../../pages/client/Restos.vue'),
    icon: "restaurant-outline",
    path: "/client/restos"
  },
  {
    name: "/client/profil",
    placeholder: "Profil",
    icon: "person",
    path: "/client/profil",
    component: () => import('../../pages/Profil.vue'),
  },
  {
    name: "/client/order-check",
    path: "/client/orderCheck",
    component: () => import('../../pages/client/OrderCheck.vue'),
  },
];