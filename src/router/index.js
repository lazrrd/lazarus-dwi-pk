import Vue from 'vue';
import VueRouter from 'vue-router';
import Beranda from '../views/Beranda.vue';
import Produk from '../views/Produk.vue';
import Kontak from '../views/Kontak.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Beranda },
  { path: '/produk', component: Produk },
  { path: '/kontak', component: Kontak },
];

const router = new VueRouter({
  routes,
});

export default router;
