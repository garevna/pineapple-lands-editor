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
    path: '/fast-fibre-internet',
    name: 'fast-fibre-internet',
    component: () => import(/* webpackChunkName: "first" */ '@/views/First.vue')
  },
  {
    path: '/connect-melbourne-cbd',
    name: 'connect-melbourne-cbd',
    component: () => import(/* webpackChunkName: "second" */ '@/views/Second.vue')
  },
  {
    path: '/conservatory',
    name: 'conservatory',
    component: () => import(/* webpackChunkName: "second-1" */ '@/components/2/Page-1.vue')
  },
  {
    path: '/qv1',
    name: 'qv1',
    component: () => import(/* webpackChunkName: "second-2" */ '@/components/2/Page-2.vue')
  },
  {
    path: '/aurora',
    name: 'aurora',
    component: () => import(/* webpackChunkName: "second-3" */ '@/components/2/Page-3.vue')
  },
  {
    path: '/3months',
    name: '3months',
    component: () => import(/* webpackChunkName: "third" */ '@/views/Third.vue')
  },
  {
    path: '/refer-a-friend',
    name: 'refer-a-friend',
    component: () => import(/* webpackChunkName: "fourth" */ '@/views/Fourth.vue')
  },
  {
    path: '/nbn',
    name: 'nbn',
    component: () => import(/* webpackChunkName: "fifth" */ '@/views/Fifth.vue')
  },
  {
    path: '/dgtek',
    name: 'dgtek',
    component: () => import(/* webpackChunkName: "dgtek" */ '@/views/DGtek.vue')
  },
  {
    path: '/overall',
    name: 'overall',
    component: () => import(/* webpackChunkName: "overall" */ '@/views/LandsOveral.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import(/* webpackChunkName: "testimonials" */ '@/views/Testimonials.vue')
  },
  {
    path: '/plans',
    name: 'plans',
    component: () => import(/* webpackChunkName: "plans" */ '@/views/InternetPlans.vue')
  },
  {
    path: '/live',
    name: 'live',
    component: () => import(/* webpackChunkName: "live" */ '@/views/Live.vue')
  },
  {
    path: '/:route',
    name: 'live-page',
    component: () => import(/* webpackChunkName: "live-page" */ '@/views/LivePage.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
