import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 注册element-ui组件
import './utils/elementui'
import '@/styles/index.scss' // global css
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 还没登录
  if (!store.state.user.token) {
    if (to.matched.length > 0 && !to.matched.some(record => record.meta && record.meta.required)) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    // 这里是为了防止重复获取权限列表
    if (!store.state.permission.permissionList.length) {
      store.dispatch('permission/fetchPermission').then(() => {
        next({ path: to.path })
      })
    } else {
      if (to.path !== '/login') {
        next()
      } else {
        next(from.fullPath)
      }
    }
  }
})
router.afterEach((to, from, next) => {
  var routerList = to.matched
  console.info('routerList ======> ', routerList)
  // 设置菜单
  // store.commit('setCrumbList', routerList)
  // 设置当前菜单
  store.commit('permission/SET_CURRENT_MENU', to.name)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
