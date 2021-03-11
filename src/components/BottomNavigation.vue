<template>
  <v-row>
    <v-bottom-navigation
      v-model="navigation"
      fixed
      dark
      :class="authorized ? 'buttons' : 'warning'"
    >
      <v-row align="center" justify="center">
        <v-btn
          v-if="live || subpage"
          value="listOfPages"
          @click="$router.push({ path: '/live-pages' })"
          dark
          text
        >
          <span>List of pages</span>
          <v-icon>mdi-view-list</v-icon>
        </v-btn>

        <!--                 GOTO /LIVE                 -->
        <v-btn
          value="main"
          dark
          text
          @click="$router.push({ path: '/live' })"
          v-if="subpage || listOfPages"
        >
          <span>Main page</span>
          <v-icon>$home</v-icon>
        </v-btn>

        <!--             CONFIG PAGE INFO             -->
        <v-btn
          dark
          text
          value="info"
          @click="config = true"
          v-if="pageConfig"
        >
          <span>Config page</span>
          <v-icon>$config</v-icon>
        </v-btn>

        <!--               HIDE LIVE SUBPAGE              -->
        <v-btn dark text @click="$store.commit('HIDE_CURRENT_PAGE')" v-if="subpage && !hidden">
          <span>Hide</span>
          <v-icon>$hidden</v-icon>
        </v-btn>

        <!--               SHOW LIVE SUBPAGE              -->
        <v-btn dark text @click="$store.commit('SET_CURRENT_PAGE_ACTIVE')" v-if="subpage && hidden">
          <span>Set active</span>
          <v-icon>$active</v-icon>
        </v-btn>

        <!--                        SAVE                        -->
        <v-btn dark text @click="save" v-if="authorized && !listOfPages">
          <span>Save</span>
          <v-icon>mdi-content-save-edit</v-icon>
        </v-btn>

        <!--                  AUTH                  -->
        <v-btn dark text @click="login = true" v-if="!authorized">
          <span>Sign In</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </v-row>

    </v-bottom-navigation>
    <Auth :opened.sync="login" />
    <LandConfig :opened.sync="config" :routeName="$route.name" />
  </v-row>
</template>

<script>

import { mapState } from 'vuex'

import { Auth, LandConfig } from '@/components/editor'

export default {
  name: 'BottomNavigation',
  components: {
    Auth,
    LandConfig
  },
  props: [],
  data: () => ({
    login: false,
    navigation: null,
    page: undefined,
    saveActions: {
      home: 'saveGeneralInfo',
      testimonials: 'saveTestimonials',
      plans: 'savePlans'
    },
    config: false
  }),
  computed: {
    ...mapState(['authorized', 'currentLand', 'pages']),
    index () {
      return this.subpage ? this.pages.findIndex(page => page.id === this.currentLand.slice(5)) : null
    },
    hidden () {
      return this.subpage && this.pages[this.index]?.hidden
    },
    pageConfig () {
      return this.$route.name !== 'home' && this.$route.name !== 'testimonials' && this.$route.name !== 'plans' && !this.listOfPages
    },
    live () {
      return this.$route.name === 'live'
    },
    listOfPages () {
      return this.$route.name === 'live-pages'
    },
    subpage () {
      return this.$route.name === 'live-page'
    }
  },
  methods: {
    async saveGeneralInfo () {
      const { scheme } = require('@/configs/generalInfo')
      const data = Object.assign({}, ...Object.keys(scheme).map(key => ({ [key]: this.$store.state[key] })))
      this.__saveGeneralInfo(data)
    },

    savePageContent () {
      const data = JSON.parse(JSON.stringify(this.$store.state.content))

      if (this.currentLand.indexOf('live') === -1) {
        this.__saveLand(this.currentLand, data)
      } else {
        if (this.currentLand === 'live') this.__saveLiveHome(data)
        else this.__saveLivePage(this.currentLand.slice(5), data)
      }
    },

    savePlans () {
      this.__saveInternetPlans(this.$store.state.internetPlans)
    },

    async saveTestimonials () {
      this.__saveTestimonials(this.$store.state.testimonials.testimonials)
    },

    editSelectedPage () {
      if (!this.page) return
      this.$store.commit('SET_CURRENT_LAND', `live-${this.pages[this.page - 1].id}`)
      this.$router.push({ path: this.currentLand })
    },

    async save () {
      const action = this.saveActions[this.$route.name] || 'savePageContent'
      await this[action]()
    }
  }
}
</script>
