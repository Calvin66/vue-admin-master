import { fetchPermission } from '@/api/user'
import router from '@/router/index'
import { recursionRouter, setDefaultRoute } from '@/utils/recursion-router'
import staticRouter from '@/router/components/static-router'
import dynamicRouter from '@/router/components/dynamic-router'

const state = {
  permissionList: [] /** 所有路由 */,
  sidebarMenu: [] /** 导航菜单 */,
  currentMenu: '', /** 当前active导航菜单 */
  isSidebarNavCollapse: false
}
const mutations = {
  SET_PERMISSION(state, routes) {
    state.permissionList = routes
  },
  CLEAR_PERMISSION(state) {
    state.permissionList = []
  },
  SET_MENU(state, menu) {
    state.sidebarMenu = menu
  },
  SET_CURRENT_MENU(state, currentMenu) {
    state.currentMenu = currentMenu
  },
  toggleNavCollapse(state) {
    state.isSidebarNavCollapse = !state.isSidebarNavCollapse
  }
}
const actions = {
  async fetchPermission({ commit, state }) {
    const permissionList = await fetchPermission()
    /* 根据权限刷选出我们设置好的路由并加入到 path='' 的children */
    const routes = recursionRouter(permissionList, dynamicRouter)

    const MainContainer = staticRouter.find(v => v.path === '/')
    const children = MainContainer.children
    // 将当前用户的权限路由添加到动态路由中
    children.push(...routes)

    /* 生成左侧导航菜单 */
    commit('SET_MENU', children)

    /*
      为所有有children的菜单路由设置第一个children为默认路由
      主要是供面包屑用，防止点击面包屑后进入某个路由下的 '' 路由,比如/manage/
      而我们的路由是
      [
          /manage/menu1,
          /manage/menu2
      ]
    */
    setDefaultRoute([MainContainer])

    /* 初始化路由 */
    const initialRoutes = router.options.routes

    /* 动态路由 */
    router.addRoutes(staticRouter)

    /* 完整的路由表 */
    commit('SET_PERMISSION', [...initialRoutes, ...staticRouter])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
