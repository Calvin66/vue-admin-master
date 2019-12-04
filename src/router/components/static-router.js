
import Layout from '@/layout'

/* 静态路由 */
const staticRoutes = [
  {
    path: '/',
    name: 'redirect',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */'@/views/Home'),
        name: '首页',
        meta: { title: '首页', icon: 'el-icon-s-goods' }
      }
    ]
  }
]

export default staticRoutes
