<template>
  <v-app class="homefone mb-12">
    <MainNavigationDriver :land.sync="land" />

    <v-container class="homefone mx-auto px-auto">
      <router-view class="mt-12 mx-0 pa-12"></router-view>
    </v-container>
    <!-- ============================= FOOTER ============================= -->
    <section id="footer" class="homefone mb-12" style="width: 100%" v-if="showFooter">
      <div class="base-title">
        <a href="#footer" class="core-goto"></a>
          <v-row width="100%">
            <Footer :page.sync="page" />
          </v-row>
      </div>
    </section>

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
  MainNavigationDriver,
  Footer
} = require('@/components')

export default {
  name: 'App',
  components: {
    Footer,
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
    ...mapGetters('editor', ['contentEndpoint']),
    showFooter () {
      const pages = ['live-pages', 'dgtek-free-upgrade', 'testimonials', 'plans', 'home']
      return pages.indexOf(this.$route.name) === -1
    }
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
  beforeMount () {
    this.__authentication()
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
