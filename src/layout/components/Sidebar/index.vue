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
.sidebar-wrapper {
  transition: width 0.28s;
  width: 210px !important;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  > div.menu-container > li.el-menu-item,
  > div.menu-container > li.el-submenu > .el-submenu__title {
    border-bottom: 1px solid rgba(238, 238, 238, 0.1);
  }
  .el-menu-item {
    background: #304156 !important;
  }
  /* 菜单hover时的背景 */
  .el-submenu__title:hover,
  .el-menu-item:hover {
    background: #223041 !important;
  }
}
/* 折叠菜单下的样式 */
.navCollapsed {
  .sidebar-wrapper {
    width: 64px !important;
    ul {
      display: none;
    }
    .iconfont + span {
      display: none;
    }
    .el-submenu__icon-arrow {
      display: none;
    }
  }
  .main-container {
    margin-left: 64px;
  }
  .aside__top {
    left: 64px !important;
  }
}
</style>
