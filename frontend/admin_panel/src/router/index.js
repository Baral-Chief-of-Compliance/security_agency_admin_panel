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
        path: '/security_objects/:id',
        name: 'SecurityObjectInf',
        component: ()=> import('@/components/SecurityObjectInf.vue')
      },
      {
        path: '/add_client',
        name: 'AddClient',
        component: ()=> import('@/components/AddClient.vue')
      },
      {
        path: '/phys_clients',
        name: 'PhysClients',
        component: ()=> import('@/components/PhysClients.vue')
      },
      {
        path: '/phys_clients/:id',
        name: 'PhysClientInf',
        component: ()=> import('@/components/PhysClientInf.vue')
      },
      {
        path: '/entity_clients',
        name: 'EntityClients',
        component: ()=> import('@/components/EntityClients.vue')
      },
      {
        path: '/entity_clients:id',
        name: 'EntityClientInf',
        component: ()=> import('@/components/EntityClientInf.vue')
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
