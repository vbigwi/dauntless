import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue'),
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../pages/TeamPage.vue'),
    },
    {
      path: '/culture',
      name: 'culture',
      component: () => import('../pages/CulturePage.vue'),
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../pages/CommunityPage.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../pages/ProjectPage.vue'),
    },
    {
      path: '/journey',
      name: 'journey',
      component: () => import('../pages/JourneyPage.vue'),
    },
  ],
})

export default router
