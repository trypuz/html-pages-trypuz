import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import Clipboard from 'v-clipboard';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Clipboard);

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'G-WM9XRFEHTR',
  router,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
