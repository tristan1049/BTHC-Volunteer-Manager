import Vue from 'vue'
import Router from 'vue-router'

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
    }
  ]
})