import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => {
    // always scroll to top
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search.vue'),
      meta: {
        layout: 'content',
      },
    },
    {
      path: '/',
      name: 'dashboard-analytics',
      component: () => import('@/views/dashboard/analytics/index.vue'),
      meta: {
        layout: 'content',
      },
    },
    {
      path: '/pages/crypto',
      name: 'pages-crypto',
      component: () => import('@/views/crypto/index.vue'),
      meta: {
        layout: 'content',
      },
    },
    {
      path: '/cards',
      name: 'pages-cards',
      component: () => import('@/views/cards/index.vue'),
      meta: {
        layout: 'content',
      },
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import('@/views/Blank.vue'),
      meta: {
        layout: 'blank',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'blank',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
      meta: {
        layout: 'blank',
      },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('@/views/ForgotPassword.vue'),
      meta: {
        layout: 'blank',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        layout: 'blank',
      },
    },
    {
      path: '/forms/example/advertising',
      name: 'forms-example-advertising',
      component: () => import('@/views/forms/examples/Advertising.vue'),
      meta: {
        layout: 'content',
        requiresAuth: true,
      },
    },
  ],
})

export default router
