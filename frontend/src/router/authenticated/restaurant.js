import UserTypes from '../../enums/UserTypes';

export default [
    {
        path: '/restaurant/home',
        name: 'restaurant-home',
        component: () => import('../../pages/restaurant/Home.vue'),
        meta: { userType: UserTypes.RESTAURANT },
    },
];