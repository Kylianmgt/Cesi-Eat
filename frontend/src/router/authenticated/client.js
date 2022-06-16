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
    role: ["client"],
    path: "/client/restos"
  },
  {
    name: "Restaurant",
    path: "/client/restaurant",
    component: () => import('../../pages/client/Restaurant.vue')
  },
  {
    name: "/client/order-check",
    path: "/client/orderCheck",
    component: () => import('../../pages/client/OrderCheck.vue'),
  },
];