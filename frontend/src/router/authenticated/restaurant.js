import UserTypes from '../../enums/UserTypes';

export default [
    {
<<<<<<< HEAD
        path: '/restaurant/home',
        name: 'restaurant-home',
        component: () => import('../../pages/restaurant/Home.vue'),
        meta: { userType: UserTypes.RESTAURANT },
=======
        name: 'MyRestaurant',
        role: ["restaurant"],
        icon: 'restaurant',
        placeholder: "MyRestaurant",
        path: '/restaurant',
        component: () => import('../../pages/restaurant/Restaurant.vue'),
>>>>>>> master
    },
];