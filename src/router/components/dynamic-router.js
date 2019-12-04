/* 需要权限判断的动态路由 */

const dynamicRoutes = [
  {
    path: '/order',
    name: 'order-manage',
    meta: {
      name: '订单管理',
      icon: 'icon-email'
    },
    component: () => import(/* webpackChunkName: "order" */'@/views/OrderManage')
  },
  {
    path: '/goods',
    name: 'goods-manage',
    meta: {
      name: '产品管理',
      icon: 'icon-email'
    },
    component: () => import(/* webpackChunkName: "goods" */'@/views/GoodsManage')
  },
  {
    path: '/multilevelMenu',
    name: 'multilevel-menu',
    meta: {
      name: '多级菜单',
      icon: 'icon-email'
    },
    component: () => import(/* webpackChunkName: "multilevelMenu" */'@/views/MultilevelMenu'),
    children: [
      {
        path: 'menu1',
        name: 'multilevel-menu-menu1',
        meta: {
          name: '菜单1'
        },
        component: () => import(/* webpackChunkName: "multilevelMenu" */'@/views/MultilevelMenu/Menu1'),
        children: [
          {
            path: 'menu1-1',
            name: 'multilevel-menu-menu1-1',
            meta: {
              name: '菜单1-1'
            },
            component: () => import(/* webpackChunkName: "multilevelMenu" */'@/views/MultilevelMenu/Menu1/Menu1-1')
          },
          {
            path: 'menu1-2',
            name: 'multilevel-menu-menu1-2',
            meta: {
              name: '菜单1-2'
            },
            component: () => import(/* webpackChunkName: "multilevelMenu" */'@/views/MultilevelMenu/Menu1/Menu1-2'),
            children: [
              {
                path: 'menu1-2-1',
                name: 'multilevel-menu-menu1-2-1',
                meta: {
                  name: '菜单1-2-1'
                },
                component: () => import(/* webpackChunkName: "multilevelMenu" */'@/views/MultilevelMenu/Menu1/Menu1-2/Menu1-2-1')
              },
              {
                path: 'menu1-2-2',
                name: 'multilevel-menu-menu1-2-2',
                meta: {
                  name: '菜单1-2-2'
                },
                component: () => import(/* webpackChunkName: "multilevelMenu" */'@/views/MultilevelMenu/Menu1/Menu1-2/Menu1-2-2')
              }
            ]
          }
        ]
      },
      {
        path: 'menu2',
        name: 'multilevel-menu-menu2',
        meta: {
          name: '菜单2'
        },
        component: () => import(/* webpackChunkName: "multilevelMenu" */'@/views/MultilevelMenu/Menu2')
      }
    ]
  }
]

export default dynamicRoutes
