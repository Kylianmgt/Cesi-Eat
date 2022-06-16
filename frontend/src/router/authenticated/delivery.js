import UserTypes from '../../enums/UserTypes';

export default [
    {
        path: '/delivery',
        redirect: '/orders'
    },
    {
        name: "/delivery/profil",
        placeholder: "Profil",
        icon: "person",
        path: "/delivery/profil",
        role: 'delivery',
        component: () => import('../../pages/Profil.vue'),
    },
];