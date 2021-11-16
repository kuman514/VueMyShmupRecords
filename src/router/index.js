import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/criteria',
    name: 'Criteria',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Criteria.vue')
  },
  {
    path: '/myrecords',
    name: 'MyRecords',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyRecords.vue')
  },
  {
    path: '/licence',
    name: 'Licence',
    component: () => import(/* webpackChunkName: "about" */ '../views/License.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
