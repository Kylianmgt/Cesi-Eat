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
    path: "/client/order-check",
    component: () => import('../../pages/client/OrderCheck.vue'),
  },
];


// const routes = {
//   "client":
//     [
//       {
//         "name": "tabs/restos",
//         "placeholder": "Restos",
//         "icon": "restaurant",
//         "url": "/client/restaurants"
//       },
//       {
//         "name": "tabs/profile",
//         "placeholder": "Profile",
//         "icon": "person",
//         "url": "/client/profile"
//       },

//     ],
//   "delivery":
//     [
//       {
//         "name": "tabs/profile",
//         "placeholder": "Profile",
//         "icon": "person",
//         "url": "/delivery/profile"
//       },
//       {
//         "name": "tabs/orders",
//         "placeholder": "Orders",
//         "icon": "restaurant",
//         "url": "/delivery/orders"
//       },
//     ],
//   "restaurant": [
//     {
//       "name": "tabs/profile",
//       "placeholder": "Profile",
//       "icon": "person",
//       "url": "/restaurant/profile"
//     },
//     {
//       "name": "tabs/menu",
//       "placeholder": "Menu",
//       "icon": "restaurant",
//       "url": "/restaurant/menu"
//     },
//     {
//       "name": "tabs/orders",
//       "placeholder": "Orders",
//       "icon": "restaurant",
//       "url": "/restaurant/orders"
//     },
//   ],

// };