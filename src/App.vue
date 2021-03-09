<template>
  <v-app class="homefone">
    <MainNavigationDriver :land.sync="land" />

    <v-container class="homefone mx-auto px-auto">
      <router-view class="mt-12 mx-0 pa-12"></router-view>
    </v-container>

    <!-- ============================= BOTTOM NAV ============================= -->
    <BottomNavigation />
    <popup />
  </v-app>
</template>

<script>

import 'pineapple-main-nav-bar'
import 'pineapple-main-nav-bar/dist/pineapple-main-nav-bar.css'

import '@/css/main.css'

import { errorHandler } from '@/helpers/errorHandler'

import { mapState, mapGetters, mapMutations } from 'vuex'

const {
  BottomNavigation,
  MainNavigationDriver
} = require('@/components')

export default {
  name: 'App',
  components: {
    BottomNavigation,
    MainNavigationDriver
  },
  data () {
    return {
      page: 0,
      login: false,
      land: null,
      events: {}
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth', 'authorized']),
    ...mapGetters('editor', ['contentEndpoint'])
  },
  methods: {
    ...mapMutations({
      setProgress: 'SET_PROGRESS',
      changeViewport: 'CHANGE_VIEWPORT'
    }),
    onResize () {
      this.changeViewport()
    }
  },
  created () {
    this.__init()
  },
  errorCaptured: errorHandler,
  // errorCaptured (error, component, info) {
  //   errorHandler(error, component, info)
  // },
  // errorCaptured (error, component, info) {
  //   console.group(`${error}\n(${info})`)
  //   console.log('  In component: ', component.$options._componentTag)
  //   const parentLevelOne = component.$options.parent.$options._componentTag
  //   parentLevelOne && console.log('    From: ', parentLevelOne)
  //   const parentLevelTwo = component.$options.parent.$options.parent.$options._componentTag
  //   parentLevelTwo && console.log('      From: ', parentLevelTwo)
  //   const parentLevelThree = component.$options.parent.$options.parent.$options.parent.$options._componentTag
  //   parentLevelThree && console.log('        From: ', parentLevelThree)
  //   console.groupEnd(`${error}\n(${info})`)
  //   return false
  // },
  beforeMount () {
    this.setProgress(true)
    this.__authWorker.postMessage({ store: 'auth', action: 'token' })
    document.title = 'CRM'
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>
