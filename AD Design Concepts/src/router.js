import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './views/MainPage.vue'
import AboutUs from './views/AboutUs.vue'
import Services from './views/Services.vue'
import Projects from './views/Projects.vue'
import fortisgreen from './components/Projects/fortisgreen.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
        path: '/aboutus',
        component: AboutUs
    },
    {
        path: '/services',
        component: Services
    }
    ,
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/projects/fortisgreen',
        component: fortisgreen
    }
  ]
})