import UserTypes from '../../enums/UserTypes';

export default [
    {
        name: 'restaurant',
        path: '/restaurant',
        redirect: '/restaurant/home',
    },
    {
        path: '/restaurant/home',
        name: 'restaurant-home',
        component: () => import('../../pages/restaurant/Home.vue'),
        meta: { userType: UserTypes.RESTAURANT },
    },
];