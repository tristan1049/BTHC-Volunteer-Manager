// const Vue = require('vue');
// const VueCookie = require('vue-cookie');
// const App = require('./App.vue');
// const router = require('./router');
import Vue from 'vue'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'

Vue.use(VueCookie);

export const eventBus = new Vue();
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');