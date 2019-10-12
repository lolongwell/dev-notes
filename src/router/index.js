import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/git',
    component: Layout,
    redirect: '/git/password',
    alwaysShow: true,
    name: 'Git',
    meta: { title: 'Git', icon: 'example' },
    children: [
      {
        path: 'password',
        name: 'Password',
        component: () => import('@/views/git/password/index'),
        meta: { title: '免密设置', icon: 'table' }
      },
      {
        path: 'delUser',
        name: 'Delete',
        component: () => import('@/views/git/delUser/index'),
        meta: { title: '删除git账户', icon: 'table' }
      },
      {
        path: 'command',
        name: 'Command',
        component: () => import('@/views/git/command/index'),
        meta: { title: 'git命令', icon: 'table' }
      },
    ]
  },

  {
    path: '/fabric',
    component: Layout,
    redirect: '/fabric/tutorial',
    name: 'Fabric',
    meta: { title: 'FabricJs', icon: 'form'},
    children: [
      {
        path: 'tutorial',
        name: 'Tutorial',
        component: () => import('@/views/fabric/tutorial/index'),
        meta: { title: '教程' },
        children: [
          {
            path: 'menu',
            component: () => import('@/views/fabric/tutorial/menu'),
            name: 'Menu',
            meta: { title: '目录' }
          },
          {
            path: 'part1',
            component: () => import('@/views/fabric/tutorial/part1'),
            name: 'Part1',
            meta: { title: 'Part1' }
          },
          {
            path: 'part2',
            component: () => import('@/views/fabric/tutorial/part2'),
            name: 'Part2',
            meta: { title: 'Part2' }
          },
          {
            path: 'part3',
            component: () => import('@/views/fabric/tutorial/part3'),
            name: 'Part3',
            meta: { title: 'Part3' }
          },
          {
            path: 'part4',
            component: () => import('@/views/fabric/tutorial/part4'),
            name: 'Part4',
            meta: { title: 'Part4' }
          },
          {
            path: 'part5',
            component: () => import('@/views/fabric/tutorial/part5'),
            name: 'Part5',
            meta: { title: 'Part5' }
          },
          {
            path: 'part6',
            component: () => import('@/views/fabric/tutorial/part6'),
            name: 'Part6',
            meta: { title: 'Part6' }
          },
          {
            path: 'part7',
            component: () => import('@/views/fabric/tutorial/part7'),
            name: 'Part7',
            meta: { title: 'Part7' }
          },
          {
            path: 'part8',
            component: () => import('@/views/fabric/tutorial/part8'),
            name: 'Part8',
            meta: { title: 'Part8' }
          },
          {
            path: 'notes',
            component: () => import('@/views/fabric/tutorial/notes'),
            name: 'Notes',
            meta: { title: '笔记' }
          },
          {
            path: 'readme',
            component: () => import('@/views/fabric/tutorial/readme/readme'),
            name: 'Readme',
            meta: { title: '项目经验' }
          },
        ]
      },
      {
        path: 'demo',
        name: 'Demo',
        component: () => import('@/views/fabric/demo/demo'),
        meta: { title: '示例' },
        children: [
          {
            path: 'demo1',
            component: () => import('@/views/fabric/demo/demo1/demo1'),
            name: 'Demo1',
            meta: { title: '层级相关' }
          },
          {
            path: 'demo2',
            component: () => import('@/views/fabric/demo/demo2/demo2'),
            name: 'Demo2',
            meta: { title: '事件相关' }
          },
          {
            path: 'demo3',
            component: () => import('@/views/fabric/demo/demo3/demo3'),
            name: 'Demo3',
            meta: { title: '自定义属性' }
          },
          {
            path: 'demo4',
            component: () => import('@/views/fabric/demo/demo4/demo4'),
            name: 'Demo4',
            meta: { title: 'demo4' }
          }
        ]
      },
    ]
  },

  {
    path: '/others',
    component: Layout,
    redirect: '/others/window-service',
    name: 'Others',
    meta: {
      title: '周边',
      icon: 'nested'
    },
    children: [
      {
        path: 'window-service',
        component: () => import('@/views/others/window-service/index'), 
        name: 'WindowService',
        meta: { title: 'win10删除服务' },
      },
      {
        path: 'getmp3',
        component: () => import('@/views/others/getmp3/index'), 
        name: 'Getmp3',
        meta: { title: '获取MP3地址' },
      },
      {
        path: 'img-map',
        component: () => import('@/views/others/img-map/index'), 
        name: 'imgToMap',
        meta: { title: '图片转成地图' },
      },
    ]
  },

  {
    path: '/test',
    component: Layout,
    redirect: '/test/test',
    name: 'Test',
    meta: {
      title: '测试',
      icon: 'nested'
    },
    children: [
      {
        path: 'test',
        component: () => import('@/views/test/test'), 
        name: 'Test',
        meta: { title: '代码测试' },
      },
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
