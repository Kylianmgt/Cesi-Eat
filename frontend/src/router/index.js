import { createRouter, createWebHistory } from '@ionic/vue-router';

import client from './authenticated/client';
import admin from './authenticated/admin';
import delivery from './authenticated/delivery';
import restaurant from './authenticated/restaurant';

export const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../pages/Landing.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/home/Index.vue'),
  },
  ...client,
  ...admin,
  ...delivery,
  ...restaurant,
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/edit-profil',
    name: 'edit-profil',
    component: () => import('../pages/EditProfil.vue'),
  },
  {
    path: '/orders',
    name: 'Orders',
    placeholder: 'Orders',
    icon: 'restaurant',
    role: ["client", "restaurant", "delivery"],
    component: () => import('../pages/Orders.vue'),
  },
  {
    path: '/profil',
    name: 'Profil',
    placeholder: 'Profil',
    component: () => import('../pages/Profil.vue'),
    icon: 'person',
    role: ["client", "restaurant", "delivery"],
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../pages/Order.vue'),
  },
  {
    path: '/recovery-password',
    name: 'recovery-password',
    component: () => import('../pages/RecoverPassword.vue'),
  },
  {
    path: '/choose-register-role',
    name: 'RegisterRoleSelection',
    component: () => import('../pages/RegisterRoleSelection.vue')
  },
  {
    path: '/register',
    name: 'Signup',
    component: () => import('../pages/Signup.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/Contact.vue'),
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../pages/Logout.vue'),
  },
  {
    path: '/not-authorized',
    name: 'not-authorized',
    component: () => import('../pages/NotAuthorized.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('../pages/Error404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
