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
        path: '/security_objects_entity/:id',
        name: 'SecurityObjectEntityInf',
        component: ()=> import('@/components/SecurityObjectEntityInf.vue')
      },
      {
        path: '/security_objects_entity/:id/documents',
        name: 'SecurityObjectEntityDocuments',
        component: ()=> import('@/components/SecurityObjectEntityDocuments.vue')
      },
      {
        path: '/security_objects_entity/:id/trip_history',
        name: 'SecurityObjectEntityTrips',
        component: ()=> import('@/components/SecurityObjectEntityTrips.vue')
      },
      {
        path: '/security_objects_phys/:id',
        name: 'SecurityObjectPhysInf',
        component: ()=> import('@/components/SecurityObjectPhysInf.vue')
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
      },
      {
        path: '/map',
        name: 'SecuriteObjectMap',
        component: ()=> import('@/components/SecuriteObjectMap.vue')
      },
      {
        path: '/statistics',
        name: 'Statistics',
        component: ()=> import('@/components/Statistics.vue')
      }
    ],
  },

  {
    path: '/client',
    component: () => import('@/layouts/default/DefaultClient.vue'),
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
        path: 'client/objects_of_protection',
        name: 'ObjectsOfProtectionClient',
        component: ()=> import('@/components/ObjectsOfProtectionClient.vue')

      },
      {
        path: 'client/security_objects_entity/:id',
        name: 'SecurityObjectEntityInfClient',
        component: ()=> import('@/components/SecurityObjectEntityInfClient.vue')
      },
      {
        path: 'client/security_objects_entity/:id/documents',
        name: 'SecurityObjectEntityDocumentsClient',
        component: ()=> import('@/components/SecurityObjectEntityDocumentsClient.vue')
      },
      {
        path: 'client/security_objects_entity/:id/trip_history',
        name: 'SecurityObjectEntityTripsClient',
        component: ()=> import('@/components/SecurityObjectEntityTripsClient.vue')
      },
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
