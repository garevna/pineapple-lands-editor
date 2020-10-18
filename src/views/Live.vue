<template>
  <v-container fluid class="homefone" v-if="ready">
    <MainNavBar :page.sync="page" />
    <v-card flat class="transparent" width="100%">
      <Home />
    </v-card>
  </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import Home from '@/components/live/Home.vue'

export default {
  name: 'Live',
  components: {
    Home
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
    ...mapState(['viewport', 'viewportWidth', 'authorized', 'pages', 'error']),
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
    ...mapActions('content', {
      getContent: 'GET_CONTENT'
    }),
    ...mapActions({
      getPages: 'GET_PAGES',
      errorMessage: 'READ_FAILURE'
    }),
    async getData () {
      await this.getContent('live')
      if (this.error) this.errorMessage()
      if (!this.pages || !this.pages.length) {
        await this.getPages()
        if (this.error) this.errorMessage()
      }
      this.ready = !this.error
    }
  },
  beforeMount () {
    this.getData()
  }
}
</script>
