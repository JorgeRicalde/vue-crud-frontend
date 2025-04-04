import $ from 'jquery';
//@ts-ignore
window.$ = window.jQuery = $;

import 'popper.js';
import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/main.css';
import App from './App.vue';
import { router } from './config/routes';

createApp(App).use(router).use(VueSweetalert2).mount('#app');

const loadScripts = async () => {
  //@ts-ignore
  await import('./vendor/bootstrap/js/bootstrap.bundle');
  //@ts-ignore
  await import('./vendor/adminlte/js/adminlte');
  //@ts-ignore
  await import('./vendor/overlayScrollbars/js/jquery.overlayScrollbars');
};

loadScripts();
