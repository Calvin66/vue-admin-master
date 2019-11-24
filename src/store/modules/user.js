import { login } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

const state = {
  token: getToken(),
  user: {},
  roles: [],
  // 第一次加载菜单时用到
  loadMenus: false
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_LOAD_MENUS: (state, loadMenus) => {
    state.loadMenus = loadMenus
  }
}

const actions = {
  // 登录
  login({ commit }) {
    return new Promise((resolve, reject) => {
      login().then(res => {
        setToken(res.token)
        commit('SET_TOKEN', res.token)
        // 第一次加载菜单时用到， 具体见 src 目录下的 permission.js
        commit('SET_LOAD_MENUS', true)

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 更新路由状态
  updateLoadMenus({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SET_LOAD_MENUS', false)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
