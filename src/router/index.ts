import { createRouter, createWebHistory } from 'vue-router';
import gsap from 'gsap';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'top',
    //   // component: HomeView,
    // },
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
      path: '/skill',
      name: 'skill',
      component: () => import('../views/SkillView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
});

router.beforeEach((to, _, next) => {
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
