import UserTypes from '../../enums/UserTypes';

export default [
    {
        name: 'MyRestaurant',
        role: ["restaurant"],
        icon: 'restaurant',
        placeholder: "MyRestaurant",
        path: '/restaurant',
        component: () => import('../../pages/restaurant/Restaurant.vue'),
    },
    {
        name: 'MenuEdit',
        path: '/restaurant/menu/edit',
        role: ["restaurant"],
        component: () => import('../../pages/restaurant/MenuEdit.vue'),
    }
];