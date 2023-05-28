import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Home.vue') }],
  },
  {
    path: '/cultures',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Cultures.vue') }],
  },
  {
    path: '/spawns',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Spawns.vue') }],
  },
  {
    path: '/fruits',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Fruits.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
