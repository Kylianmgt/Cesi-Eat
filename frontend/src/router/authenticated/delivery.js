import UserTypes from '../../enums/UserTypes';

export default [
    {
        path: '/delivery/home',
        name: 'delivery-home',
        component: () => import('../../pages/delivery/Home.vue'),
        meta: { userType: UserTypes.DELIVERY },
    },
];