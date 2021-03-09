<template>
  <v-container fluid class="homefone" v-if="pageContentReady">
    <MainNavBar :page.sync="page" />
    <v-card flat class="transparent" width="100%">
      <Home />
    </v-card>
  </v-container>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Live',
  components: {
    Home: () => import('@/components/live/Home.vue')
  },
  data () {
    return {
      ready: false,
      navigationOpened: false,
      page: undefined,
      goto: undefined,
      section: 0,
      pageIndex: undefined,
      contactUs: false,
      getConnected: false
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth', 'authorized', 'pages', 'error', 'pageContentReady']),
    ...mapState('content', ['mainNavButtons', 'mainNavSectors']),
    pageId () {
      return this.pages[this.pageIndex].id
    }
  },
  watch: {
    page (val) {
      if (!val) return

      /* Inside page transition */
      if (val.indexOf('#') === 0) {
        this.$vuetify.goTo(val, {
          duration: 500,
          offset: 80,
          easing: 'easeInOutCubic'
        })
        this.page = undefined
        return
      }

      /* Go to external url */
      if (val.indexOf('http') === 0) {
        window.open(val, '_blank')
        this.page = undefined
        return
      }

      this.page = undefined
    }
  },
  methods: {
    ...mapMutations({
      setReady: 'SET_PAGE_CONTENT_READY'
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setReady(false)
    next()
  }
}
</script>
