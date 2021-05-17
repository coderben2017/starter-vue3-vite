export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../pages/login/login.vue')
  },
  {
    path: '/index',
    component: () => import('../pages/index/index.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/home/home.vue')
      }
    ]
  }
]
