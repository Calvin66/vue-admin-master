<template>
  <div class="menu-container">
    <template v-for="v in menuList">
      <el-submenu
        v-if="v.children && v.children.length > 0"
        :key="v.name"
        :index="v.name"
      >
        <template slot="title">
          <i
            class="iconfont"
            :class="v.meta.icon"
          />
          <span>{{ v.meta.name }}</span>
        </template>
        <el-menu-item-group>
          <SidebarItem :menu-list="v.children" />
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item
        v-else
        :key="v.name"
        :index="v.name"
        @click="gotoRoute(v.name)"
      >
        <i
          class="iconfont"
          :class="v.meta.icon"
        />
        <span slot="title">{{ v.meta.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },
  mounted() { },
  methods: {
    gotoRoute(name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style>
</style>
