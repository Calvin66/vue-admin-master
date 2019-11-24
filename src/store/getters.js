const getters = {
  permissionRouters: state => state.permission.permissionList,
  sidebarMenu: state => state.permission.sidebarMenu,
  currentMenu: state => state.permission.currentMenu,
  isSidebarNavCollapse: state => state.permission.isSidebarNavCollapse
}
export default getters
