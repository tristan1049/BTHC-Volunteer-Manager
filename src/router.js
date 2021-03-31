import Vue from 'vue'
import Router from 'vue-router'
//import AppHeader from "./layout/AppHeader";
//import AppFooter from "./layout/AppFooter";
//import Components from "./views/Components.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {

      path: '/',
      name: 'home',
      component: () => import('./views/LoginPage.vue')

    },
    {
      path: '/first',
      name: 'firsturl',
      component: ()=>import('./views/LoginPage.vue')
    },
    {
      path: '/onb1',
      name: 'Onboarding-1',
      component: ()=>import('./views/Onboarding-1.vue')
    },
    {
      path: '/onb2',
      name: 'Onboarding-2',
      component: ()=>import('./views/Onboarding-2.vue')
    },
    {
      path: '/onb3',
      name: 'Onboarding-3',
      component: ()=>import('./views/Onboarding-3.vue')
    },
    {
      path: '/onb4',
      name: 'Onboarding-4',
      component: ()=>import('./views/Onboarding-4.vue')
    },
    {
      path: '/onb5',
      name: 'Onboarding-5',
      component: ()=>import('./views/Onboarding-5.vue')
    },
    {
      path: '/adminsitedata',
      name: 'adminsitedata',
      component: ()=>import('./views/Admin-edit_site_data.vue')
    },
    {
      path: '/udash1',
      name: 'udash1',
      component: ()=>import('./views/UDash1.vue')
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
