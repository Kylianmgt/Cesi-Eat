import UserTypes from '../../enums/UserTypes';

export default [
  {
    path: '/client/home',
    name: 'client-home',
    component: () => import('../../pages/client/Home.vue'),
    meta: { userType: UserTypes.CLIENT },
  },
  {
    name: "/client/restos",
    placeholder: "Restos",
    component: () => import('../../pages/client/Restos.vue'),
    icon: "restaurant-outline",
    path: "/client/restos"
  },
  {
    name: "/client/profile",
    placeholder: "Profile",
    icon: "person",
    path: "/client/profile",
    component: () => import('../../pages/client/Profile.vue'),
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