import { login } from '@/api/login'
import { getToken } from '@/utils/auth'

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
  Login({ commit }) {
    return new Promise((resolve, reject) => {
      login().then(res => {
        console.log(res, '登录')

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
