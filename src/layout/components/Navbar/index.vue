<template>
  <div class="navbar-wrapper">
    <span
      class="iconfont el-icon-s-fold toggleNavCollapse"
      :class="{active:isSidebarNavCollapse}"
      @click="toggleNavCollapse"
    />
    <div class="navbar-right">
      <div
        class="quit-system"
        @click="loginOut"
      >
        <span class="iconfont icon-quit" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  components: {},
  data() {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'isSidebarNavCollapse'
    ])
  },

  watch: {},

  created() { },

  mounted() { },

  methods: {
    toggleNavCollapse() {
      this.$store.commit('permission/toggleNavCollapse')
    },
    loginOut() {
      this.$store.commit('LOGIN_OUT')
      /* 防止切换角色时addRoutes重复添加路由导致出现警告 */
      window.location.reload()
    }
  }

}

</script>
<style lang='scss' scoped>
</style>
