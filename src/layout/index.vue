<template>
  <div class="app-wrapper">
    <sidebar />
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
.main-container {
  margin-left: 210px;
}
</style>
