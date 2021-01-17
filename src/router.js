import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {

      path: '/',
      name: 'home',
      component: () => import('./views/FirstUrl.vue')

    },
    {
      path: '/first',
      name: 'firsturl',
      component: ()=>import('./views/FirstUrl.vue')
    },
    {
      path: '/second',
      name: 'secondurl',
      component: ()=>import('./views/SecondUrl.vue')
    },
    {
      path: '/third',
      name: 'thirdurl',
      component: ()=>import('./views/ThirdUrl.vue')
    }
  ]
})
