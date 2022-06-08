import UserTypes from '../../enums/UserTypes';

export default [
    {
        name: 'delivery',
        path: '/delivery',
        redirect: '/delivery/home',
    },
    {
        path: '/delivery/home',
        name: 'delivery-home',
        component: () => import('../../pages/delivery/Home.vue'),
        meta: { userType: UserTypes.DELIVERY },
    },
];