import { createRouter, createWebHashHistory } from 'vue-router'
import TheCommand from '../views/TheCommand.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheCommand
  },
  {
    path: '/command',
    name: 'command',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TheCommand.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
