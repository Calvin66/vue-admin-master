<template>
  <div :class="{navCollapsed: isSidebarNavCollapse}">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <tags-view />
      <app-main />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters([
      'isSidebarNavCollapse'
    ])
  }
}
</script>

<style lang='scss'>
</style>
