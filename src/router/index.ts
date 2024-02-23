import LoginView from '@/views/tela-login/LoginView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routerGuard } from './routerGuard';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
    meta: {roles: ['ADMIN']}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  routerGuard(to, from, next);
});

export default router;
