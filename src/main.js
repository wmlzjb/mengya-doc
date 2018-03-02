import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import MainHeader from './components/header.vue';
import VueRouter from 'vue-router';
import SideNav from './components/side-nav';
import routes from './route.config';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
