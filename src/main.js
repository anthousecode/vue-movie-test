import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import cutDescription from './directives/cutDescription';

Vue.use(VueAxios, axios);

Vue.directive('cut-description', cutDescription);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
