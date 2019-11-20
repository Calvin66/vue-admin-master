import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'container',
    meta: {
      requiresAuth: true,
      name: '首页'
    },
    component: Layout,
    children: [
      // {
      //   path: '/',
      //   name: 'home',
      //   // route level code-splitting
      //   // this generates a separate chunk (about.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      // }
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
