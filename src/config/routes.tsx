import InicioView from '@/pages/InicioView.vue';
import RolesView from '@/pages/RolesView.vue';
import UsuariosView from '@/pages/UsuariosView.vue';
import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', component: InicioView },
  { path: '/usuarios', component: UsuariosView },
  { path: '/roles', component: RolesView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
