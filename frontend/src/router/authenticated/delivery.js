import UserTypes from '../../enums/UserTypes';

export default [
    {
        path: '/delivery',
        redirect: '/orders'
    },
    {
        name: 'Orders',
        path: '/orders',
        component: () => import('../../pages/Orders.vue'),
    },
    {
        path: '/delivery/home',
        name: 'delivery-home',
        component: () => import('../../pages/delivery/Home.vue'),
        meta: { userType: UserTypes.DELIVERY },
    },
];