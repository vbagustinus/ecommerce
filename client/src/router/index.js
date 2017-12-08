import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Home from '@/components/Home'
import Products from '@/components/Products'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'products',
          name: 'Products',
          component: Products
        }
      ]
    }
  ]
})
