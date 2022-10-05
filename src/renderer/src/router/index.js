import { createRouter, createWebHashHistory } from 'vue-router'

// const routes = [
//   {
//     path: '/',
//     name: 'index',
//     component: () => import('../views/index.vue'),
//     children: [
//       {
//         path: '/dashboard',
//         name: 'dashboard',
//         component: () => import('../views/dashboard.vue')
//       }
//     ]
//   }
// ]

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/dashboard.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user.vue')
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('../views/tasks.vue')
  }
]

// 创建 Vue-router 实例
const router = createRouter({
  // hash模式
  history: createWebHashHistory(),
  routes: routes
})

export default router
