/* 需要权限判断的动态路由 */

const dynamicRoutes = [
  {
    path: '/order',
    name: 'order-manage',
    meta: {
      name: '订单管理',
      icon: 'icon-email'
    },
    component: () => import(/* webpackChunkName: "order" */'@/views/order-manage')
  },
  {
    path: '/goods',
    name: 'goods-manage',
    meta: {
      name: '产品管理',
      icon: 'icon-email'
    },
    component: () => import(/* webpackChunkName: "goods" */'@/views/goods-manage')
  }
]

export default dynamicRoutes
