// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/objects_of_protection',
        name: 'ObjectsOfProtection',
        component: ()=> import('@/components/ObjectsOfProtection.vue')

      },
      {
        path: '/add_client',
        name: 'AddClient',
        component: ()=> import('@/components/AddClient.vue')
      }

    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('@/views/Login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
