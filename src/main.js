// const Vue = require('vue');
// const VueCookie = require('vue-cookie');
// const App = require('./App.vue');
// const router = require('./router');
import Vue from 'vue'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue } from 'bootstrap-vue'
import Argon from "./plugins/argon-kit";




Vue.config.productionTip = false

Vue.use(Argon);
Vue.use(VueCookie);
Vue.use(BootstrapVue);

export const eventBus = new Vue();


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
