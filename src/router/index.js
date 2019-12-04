import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 解决两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 初始路由
export default new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: [{ path: '/login', name: 'login', component: () => import(/* webpackChunkName: "login" */ '@/views/Login') }]
})
