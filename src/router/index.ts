import CadastroUsuarioView from '@/views/tela-cadastro-usuario/CadastroUsuarioView.vue';
import LoginView from '@/views/tela-login/LoginView.vue';
import MeuPerfilView from '@/views/tela-meu-perfil/MeuPerfilView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routerGuard } from './routerGuard';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
    meta: {roles: ['ADMIN']}
  },
  {
    path: '/cadastrar-usuario',
    name: 'Cadastrar Usuário',
    component: CadastroUsuarioView,
    meta: {roles: ['ADMIN']}
  },
  {
    path: '/meu-perfil',
    name: 'Meu Perfil',
    component: MeuPerfilView,
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
