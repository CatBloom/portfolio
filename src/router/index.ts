import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/TopView.vue';
import gsap from 'gsap';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkView.vue'),
    },
    {
      path: '/skilset',
      name: 'skilset',
      component: () => import('../views/SkilsetView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path == '/') {
    next();
  } else {
    const tl = gsap.timeline();
    tl.to('.content', {
      duration: 0.2,
      opacity: 0,
      onComplete: () => {
        next();
      },
    }).to(
      '.content',
      {
        duration: 0.2,
        opacity: 1,
      },
      1
    );
  }
});

export default router;
