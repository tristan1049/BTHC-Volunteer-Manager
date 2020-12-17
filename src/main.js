import Vue from 'vue'
import VueCookie from 'vue-cookie'
import firebase from 'firebase/app'

import App from './App.vue'
import router from './router'

Vue.use(VueCookie);

export const eventBus = new Vue();
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDQxEAXDmPsM2j-hLJuniRSfMn3HqtpRcI",
  authDomain: "bthc-volunteer-service.firebaseapp.com",
  databaseURL: "https://bthc-volunteer-service.firebaseio.com",
  projectId: "bthc-volunteer-service",
  storageBucket: "bthc-volunteer-service.appspot.com",
  messagingSenderId: "610410716655",
  appId: "1:610410716655:web:b2b07177666913b8482a1a",
  measurementId: "G-W3P3FTGZC1"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');