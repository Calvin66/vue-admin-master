<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <tags-view />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar, AppMain, TagsView } from './components'

export default {
  components: {
    AppMain,
    Navbar,
    Sidebar,
    TagsView
  },
  data() {
    return {

    }
  }
}
</script>

<style lang='scss'>
.sidebar-container {
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
}
.main-container {
  margin-left: 210px;
}
</style>
