import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Detail from '@/components/Detail/Detail'
import Step1 from '@/components/Step/Step1'
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }, {
      path: '/step1',
      name: 'step1',
      component: Step1
    }
  ],
})

export default router
