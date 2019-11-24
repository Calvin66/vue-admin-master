import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 初始路由
export default new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: [{ path: '/login', name: 'login', component: () => import(/* webpackChunkName: "login" */ '@/views/login') }]
})
