<template>
  <v-container fluid class="homefone" v-if="ready">
    <PagesNavigation :selected.sync="page" :opened.sync="navigationOpened" />
    <v-card flat class="transparent" width="100%">
      <Home v-if="showHome" :home="home" />
      <Page :pageNum="page" v-else />
    </v-card>

    <!-- ============================= BOTTOM NAV ============================= -->
    <v-bottom-navigation
            fixed
            dark
            class="buttons"
            style="z-index: 7 !important"
    >
      <v-btn @click="navigationOpened = true">
        <span>Navigation</span>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn @click="savePageContent" v-if="authorized">
        <span>Save</span>
        <v-icon>mdi-content-save-edit</v-icon>
      </v-btn>

      <v-btn @click="login = true" v-if="!authorized">
        <span>Sign In</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import PagesNavigation from '@/components/live/PagesNavigation.vue'
import Home from '@/components/live/Home.vue'
import Page from '@/components/live/Page.vue'

export default {
  name: 'Live',
  components: {
    PagesNavigation,
    Home,
    Page
  },
  data () {
    return {
      ready: false,
      showHome: true,
      navigationOpened: true,
      section: 0,
      page: 'home', /* home page */
      contactUs: false,
      getConnected: false
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth', 'authorized']),
    ...mapState('content', ['pages', 'mainNavButtons', 'mainNavSectors']),
    ...mapState('content', ['top', 'aside', 'userForm', 'info', 'list', 'greenSection', 'testimonials', 'plans', 'howToConnect', 'faq', 'footer'])
  },
  watch: {
    page (val) {
      console.log(val)
      this.showHome = val === 'home'
    }
  },
  methods: {
    ...mapActions({
      validateToken: 'VALIDATE_TOKEN',
      saveSuccess: 'SAVE_SUCCESS',
      saveFailure: 'SAVE_FAILURE',
      accessDenied: 'ACCESS_DENIED'
    }),
    ...mapActions('content', {
      getContent: 'GET_CONTENT',
      saveContent: 'SAVE_CONTENT'
    }),
    async savePageContent () {
      const response = await this.saveContent('live')
      const actionName = response === 200 ? 'saveSuccess' : response === 403 || response === 401 ? 'accessDenied' : 'saveFailure'
      this[actionName]()
    }
  },
  beforeMount () {
    this.getContent('live').then(() => {
      this.home = {
        mainNavButtons: this.mainNavButtons,
        mainNavSectors: this.mainNavSectors,
        top: this.top,
        aside: this.aside,
        userForm: this.userForm,
        info: this.info,
        list: this.list,
        greenSection: this.greenSection,
        testimonials: this.testimonials,
        plans: this.plans,
        howToConnect: this.howToConnect,
        faq: this.faq,
        footer: this.footer
      }
      this.ready = true
    })
  }
}
</script>
