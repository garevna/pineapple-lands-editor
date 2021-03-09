import Vue from 'vue'
import VueRouter from 'vue-router'

const requestsNames = ['__sendLandRequest', '__sendLiveRequest', '__sendListRequest', '__sendPageRequest']

Object.assign(VueRouter.prototype, ...requestsNames.map(name => ({ [name]: Vue.prototype[name] })))

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
    component: () => import(/* webpackChunkName: "fast-fibre-internet" */ '@/views/fast-fibre-internet.vue'),
    beforeEnter: (to, from, next) => {
      router.__sendLandRequest('fast-fibre-internet')
      next()
    }
  },
  {
    path: '/connect-melbourne-cbd',
    name: 'connect-melbourne-cbd',
    component: () => import(/* webpackChunkName: "connect-melbourne-cbd" */ '@/views/connect-melbourne-cbd.vue'),
    beforeEnter: (to, from, next) => {
      router.__sendLandRequest('connect-melbourne-cbd')
      next()
    }
  },
  {
    path: '/conservatory',
    name: 'conservatory',
    component: () => import(/* webpackChunkName: "conservatory" */ '@/views/Conservatory.vue'),
    beforeEnter: (to, from, next) => {
      router.__sendLandRequest('conservatory')
      next()
    }
  },
  {
    path: '/qv1',
    name: 'qv1',
    component: () => import(/* webpackChunkName: "qv1" */ '@/views/QV1.vue'),
    beforeEnter: (to, from, next) => {
      router.__sendLandRequest('qv1')
      next()
    }
  },
  {
    path: '/aurora',
    name: 'aurora',
    component: () => import(/* webpackChunkName: "aurora" */ '@/views/Aurora.vue'),
    beforeEnter: (to, from, next) => {
      router.__sendLandRequest('aurora')
      next()
    }
  },
  {
    path: '/3months',
    name: '3months',
    component: () => import(/* webpackChunkName: "3months" */ '@/views/3months.vue'),
    beforeEnter: (to, from, next) => {
      router.__sendLandRequest('3months')
      next()
    }
  },
  {
    path: '/refer-a-friend',
    name: 'refer-a-friend',
    component: () => import(/* webpackChunkName: "refer-a-friend" */ '@/views/refer-a-friend.vue'),
    beforeEnter: (to, from, next) => {
      router.__sendLandRequest('refer-a-friend')
      next()
    }
  },
  {
    path: '/nbn',
    name: 'nbn',
    component: () => import(/* webpackChunkName: "nbn" */ '@/views/NBN.vue'),
    beforeEnter: (to, from, next) => {
      router.__sendLandRequest('nbn')
      next()
    }
  },
  {
    path: '/dgtek-free-upgrade',
    name: 'dgtek-free-upgrade',
    component: () => import(/* webpackChunkName: "dgtek-free-upgrade" */ '@/views/dgtek-free-upgrade.vue'),
    beforeEnter: (to, from, next) => {
      router.__sendLandRequest('dgtek-free-upgrade')
      next()
    }
  },
  // {
  //   path: '/overall',
  //   name: 'overall',
  //   component: () => import(/* webpackChunkName: "overall" */ '@/views/LandsOveral.vue')
  // },
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
    component: () => import(/* webpackChunkName: "live" */ '@/views/Live.vue'),
    beforeEnter: (to, from, next) => {
      // router.__liveWorker.postMessage({ action: 'get', store: 'live', key: 'home' })
      router.__sendLiveRequest()
      next()
    }
  },
  {
    path: '/live-pages',
    name: 'live-pages',
    component: () => import(/* webpackChunkName: "live-list" */ '@/views/LivePages.vue'),
    beforeEnter: (to, from, next) => {
      // router.__liveWorker.postMessage({ action: 'get', store: 'live', key: 'list' })
      router.__sendListRequest()
      next()
    }
  },
  {
    path: '/:route',
    name: 'live-page',
    component: () => import(/* webpackChunkName: "live-page" */ '@/views/LivePage.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      if (from.name !== 'live-pages') next({ name: 'live-pages' })
      // router.__liveWorker.postMessage({ action: 'get', store: 'live', key: to.path.slice(6) })
      router.__sendPageRequest(to.path.slice(6))
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  Vue: Vue,
  base: process.env.BASE_URL,
  routes
})

export default router
