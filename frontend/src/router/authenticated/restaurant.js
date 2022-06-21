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
        name: 'MenuAdd',
        path: '/restaurant/menu/add',
        role: ["restaurant"],
        component: () => import('../../pages/restaurant/MenuAdd.vue'),
    },
    {
        name: 'MenuEdit',
        path: '/restaurant/menu/edit',
        role: ["restaurant"],
        component: () => import('../../pages/restaurant/MenuEdit.vue'),
    },
    {
        name: 'ArticleAdd',
        path: '/restaurant/article/add',
        role: ["restaurant"],
        component: () => import('../../pages/restaurant/ArticleAdd.vue'),
    },
    {
        name: 'ArticleEdit',
        path: '/restaurant/article/edit',
        role: ["restaurant"],
        component: () => import('../../pages/restaurant/ArticleEdit.vue'),
    },
];