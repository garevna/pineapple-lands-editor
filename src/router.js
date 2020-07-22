import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/1',
    name: 'first',
    component: () => import(/* webpackChunkName: "first" */ '@/views/First.vue')
  },
  {
    path: '/2',
    name: 'second',
    component: () => import(/* webpackChunkName: "second" */ '@/views/Second.vue')
  },
  {
    path: '/3',
    name: 'third',
    component: () => import(/* webpackChunkName: "third" */ '@/views/Third.vue')
  },
  {
    path: '/4',
    name: 'fourth',
    component: () => import(/* webpackChunkName: "fourth" */ '@/views/Fourth.vue')
  },
  {
    path: '/5',
    name: 'fifth',
    component: () => import(/* webpackChunkName: "fifth" */ '@/views/Fifth.vue')
  },
  {
    path: '/overall',
    name: 'overall',
    component: () => import(/* webpackChunkName: "testimonials" */ '@/views/LandsOveral.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import(/* webpackChunkName: "testimonials" */ '@/views/Testimonials.vue')
  },
  {
    path: '/plans',
    name: 'plans',
    component: () => import(/* webpackChunkName: "testimonials" */ '@/views/InternetPlans.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
