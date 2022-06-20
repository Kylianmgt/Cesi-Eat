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
        name: 'RestaurantEdit',
        path: '/restaurant/edit',
        role: ["restaurant"],
        component: () => import('../../pages/restaurant/RestaurantEdit.vue'),
    },
    {
        name: 'MenuEdit',
        path: '/restaurant/menu/edit',
        role: ["restaurant"],
        component: () => import('../../pages/restaurant/MenuEdit.vue'),
    },
    {
        name: 'ArticleEdit',
        path: '/restaurant/article/edit',
        role: ["restaurant"],
        component: () => import('../../pages/restaurant/ArticleEdit.vue'),
    },
];