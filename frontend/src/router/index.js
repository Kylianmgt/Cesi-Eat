import { createRouter, createWebHistory } from '@ionic/vue-router';

import client from './authenticated/client';
import admin from './authenticated/admin';
import delivery from './authenticated/delivery';
import restaurant from './authenticated/restaurant';

const routes = [
  {
    path: '/',
    redirect: '/landing',
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
    name: 'login',
    component: () => import('../pages/Login.vue'),
  },
  {
    path: '/recovery-password',
    name: 'recovery-password',
    component: () => import('../pages/RecoverPassword.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/Error404.vue'),
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
