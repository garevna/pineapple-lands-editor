<template>
  <v-row>
    <v-bottom-navigation
      fixed
      dark
      :class="authorized ? 'buttons' : 'warning'"
    >
      <v-row align="center" justify="center">

        <!--     PAGINATION FOR MULTIPAGE LAND     -->

        <!-- <v-card flat class="transparent mx-auto pa-2" v-if="live"> -->
          <div class="text-center" v-if="live">
            <v-pagination
              v-model="page"
              light
              color="#fa09"
              :length="pages.length"
              :total-visible="5"
              v-if="pagination"
              @click="snackbar = true"
            ></v-pagination>
          </div>

          <v-btn icon @click="pagination=true" v-if="live && !pagination">
            <span>Pages</span>
            <v-icon>mdi-file-search</v-icon>
          </v-btn>
          <v-btn icon @click="editSelectedPage" v-if="live && pagination && page">
            <span>Edit page</span>
            <v-icon>mdi-file-edit</v-icon>
          </v-btn>
          <v-btn icon @click="pagination=false" v-if="live && pagination">
            <span>Close</span>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        <!-- </v-card> -->

        <!--                 GOTO /LIVE                 -->
        <v-btn @click="$router.push({ path: '/live' })" v-if="subpage">
          <span>Main page</span>
          <v-icon>$home</v-icon>
        </v-btn>

        <!--             EDIT LIVE SUBPAGE INFO             -->
        <v-btn @click="$store.commit('SHOW_PAGE_INFO')" v-if="subpage">
          <span>Edit Info</span>
          <v-icon>$edit</v-icon>
        </v-btn>

        <!--               HIDE LIVE SUBPAGE              -->
        <v-btn @click="$store.commit('HIDE_CURRENT_PAGE')" v-if="subpage && !hidden">
          <span>Hide</span>
          <v-icon>$hidden</v-icon>
        </v-btn>

        <!--               SHOW LIVE SUBPAGE              -->
        <v-btn @click="$store.commit('SET_CURRENT_PAGE_ACTIVE')" v-if="subpage && hidden">
          <span>Set active</span>
          <v-icon>$active</v-icon>
        </v-btn>

        <!--              ADD NEW LIVE SUBPAGE              -->
        <v-btn @click="addNewPage" v-if="live">
          <span>New page</span>
          <v-icon>mdi-note-plus</v-icon>
        </v-btn>

        <!--                        SAVE                        -->
        <v-btn @click="save" v-if="authorized && $route.name !== 'overall'">
          <span>Save</span>
          <v-icon>mdi-content-save-edit</v-icon>
        </v-btn>

        <!--                  AUTH                  -->
        <v-btn @click="login = true" v-if="!authorized">
          <span>Sign In</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </v-row>

    </v-bottom-navigation>
    <Popup />
    <Auth :opened.sync="login" />
    <!-- ============================= LIVE PAGE INFO ============================= -->

    <v-snackbar
      v-model="snackbar"
      right
      multi-line
      color="deepgreen"
    >
      {{ buildingAddress }}

      <template>
        <v-btn
          color="buttons"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import Popup from '@/components/editor/Popup.vue'
import Auth from '@/components/editor/Auth.vue'

export default {
  name: 'BottomNavigation',
  components: {
    Popup,
    Auth
  },
  props: [],
  data: () => ({
    login: false,
    pagination: false,
    page: undefined,
    snackbar: false,
    saveActions: {
      home: 'saveGeneralInfo',
      overall: '',
      testimonials: 'saveTestimonials',
      plans: 'savePlans'
    }
  }),
  computed: {
    ...mapState(['host', 'authorized', 'currentLand', 'pages']),
    hidden () {
      if (this.subpage) {
        if (typeof this.page !== 'number') {
          var index = this.pages.findIndex(page => page.id === this.$route.path.slice(6))
          return index < 0 ? null : this.pages[index].hidden
        } else return this.pages[this.page - 1].hidden
      } else return null
    },
    live () {
      return this.$route.name === 'live'
    },
    subpage () {
      return this.$route.name === 'live-page'
    },
    address () {
      return (!this.live || !this.page) ? null : this.pages[this.page - 1].address
    },
    buildingName () {
      return !this.address ? '' : this.address.formatted
    },
    buildingAddress () {
      return !this.address ? '' : `${this.address.streetNumber} ${this.address.streetName}, ${this.address.city} ${this.address.state} ${this.address.postcode}`
    }
  },
  watch: {
    page (val) {
      this.snackbar = true
    }
  },
  methods: {
    ...mapActions({
      validateToken: 'VALIDATE_TOKEN',
      saveSuccess: 'SAVE_SUCCESS',
      saveFailure: 'SAVE_FAILURE',
      accessDenied: 'ACCESS_DENIED',
      saveGeneralInfo: 'SAVE_GENERAL_INFO',
      savePages: 'SAVE_PAGES'
    }),
    ...mapActions('content', {
      saveContent: 'SAVE_CONTENT',
      addNewPage: 'ADD_NEW_PAGE'
    }),
    ...mapActions('testimonials', {
      saveTestimonials: 'SAVE_CONTENT'
    }),
    ...mapActions('internetPlans', {
      savePlans: 'SAVE_PLANS'
    }),

    editSelectedPage () {
      if (!this.page) return
      this.snackbar = false
      this.$store.commit('SET_CURRENT_LAND', `live-${this.pages[this.page - 1].id}`)
      this.$router.push({ path: this.currentLand })
    },

    async addNewPage () {
      const id = Date.now().toString()
      this.$store.commit('SET_CURRENT_LAND', `live-${id}`)
      this.$router.push({ path: `/live-${id}` })
    },

    async savePageContent () {
      return await this.saveContent(this.currentLand)
    },

    async save () {
      const action = this.saveActions[this.$route.name] || 'savePageContent'
      const response = await this[action]()
      const showResponse = response === 200 ? 'saveSuccess' : response === 403 || response === 401 ? 'accessDenied' : 'saveFailure'
      this[showResponse]()
      if (this.$route.name === 'live-page') this.savePages()
    }
  }
}
</script>
