import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from "../views/Home.vue";
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: '/',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/communes',
        component: () => import('@/views/AffichageCommunes.vue')
      },
      {
        path: '/departements',
        component: () => import('@/views/AffichageDepartements.vue')
      },
      {
        path: '/regions',
        component: () => import('@/views/AffichageRegion.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
