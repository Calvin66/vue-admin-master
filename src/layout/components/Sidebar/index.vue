<template>
  <div :class="{navCollapsed: isSidebarNavCollapse}">
    <el-menu
      :collapse="isSidebarNavCollapse"
      class="sidebar-wrapper"
      background-color="#304156"
      text-color="#eee"
      active-text-color="#4dbcff"
      :default-active="currentMenu"
    >
      <SidebarItem :menu-list="sidebarMenu" />
    </el-menu>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {

  components: { SidebarItem },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'sidebarMenu',
      'currentMenu',
      'isSidebarNavCollapse'
    ])
  },
  methods: {

  }
}

</script>
<style lang='scss' scoped>
</style>
