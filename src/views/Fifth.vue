<template>
  <v-app class="homefone">
    <v-container fluid class="homefone" v-if="ready">
      <AppHeader :page.sync="page"/>
      <v-sheet
        width="100%"
        max-width="1440"
        color="homefone"
        tile
        class="mx-auto"
      >
        <Top :page.sync="page" />
      </v-sheet>

      <!-- ============================= USER CONTACT ============================= -->

      <section id="contact" style="width: 100%">
        <div class="base-title">
          <a href="#contact" class="core-goto"></a>

          <v-sheet
              width="100%"
              max-width="1440"
              color="homefone"
              tile
              class="mx-auto"
          >
            <v-row align="center" justify="center" class="pa-0 my-12">
              <v-col cols="12" md="6" class="aside-col">
                <Aside />
              </v-col>
              <v-col cols="12" md="6" class="mx-0 px-0">
                <v-card
                      flat
                      class="user-contact transparent mx-auto pa-0"
                      style="margin-bottom: 80px"
                >
                  <UserContact />
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </div>
      </section>

      <!-- ============================= HOW TO CONNECT ============================= -->
      <v-row width="100%">
        <section id="how-to-connect" style="width: 100%">
          <div class="base-title">
            <a href="#how-to-connect" class="core-goto"></a>
            <HowToConnect :page.sync="page" />
          </div>
        </section>
      </v-row>
      <!-- ============================= TESTIMONIALS ============================= -->
      <v-row width="100%">
        <section id="testimonials" style="width: 100%">
          <div class="base-title">
            <a href="#testimonials" class="core-goto"></a>
            <Testimonials :page.sync="page"/>
          </div>
        </section>
      </v-row>
      <!-- ============================= FAQ ============================= -->
      <v-row width="100%">
        <section id="faq" style="width: 100%">
          <div class="base-title">
            <a href="#faq" class="core-goto"></a>
            <FAQ :page.sync="page"/>
          </div>
        </section>
      </v-row>
      <!-- ============================= DISCLAIMER ============================= -->
      <v-row width="100%">
        <section id="disclaimer" style="width: 100%">
          <div class="base-title">
            <a href="#disclaimer" class="core-goto"></a>
            <Disclaimer :page.sync="page"/>
          </div>
        </section>
      </v-row>
      <!-- ============================= FOOTER ============================= -->
      <section id="footer" class="homefone">
        <div class="base-title">
          <a href="#footer" class="core-goto"></a>
            <v-row width="100%">
              <Footer :page.sync="page" :user.sync="user" />
            </v-row>
        </div>
      </section>

      <!-- ============================= BOTTOM NAV ============================= -->
      <v-bottom-navigation
            fixed
            dark
            class="buttons"
            v-if="authorized"
      >
        <v-btn @click="savePageContent" v-if="authorized">
          <span>Save</span>
          <v-icon>mdi-content-save-edit</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <Popup />
    </v-container>
  </v-app>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

import AppHeader from '@/components/AppHeader.vue'
import Top from '@/components/5/Top.vue'
import Aside from '@/components/Aside.vue'
import UserContact from '@/components/UserContact.vue'
import HowToConnect from '@/components/HowToConnect.vue'
import Testimonials from '@/components/Testimonials.vue'
import FAQ from '@/components/FAQ.vue'
import Disclaimer from '@/components/Disclaimer.vue'
import Footer from '@/components/Footer.vue'

import Popup from '@/components/editor/Popup.vue'

export default {
  name: 'Fifth',
  components: {
    AppHeader,
    Top,
    Aside,
    UserContact,
    HowToConnect,
    Testimonials,
    FAQ,
    Disclaimer,
    Footer,
    Popup
  },
  data () {
    return {
      section: null,
      contactUs: false,
      getConnected: false,
      ready: false,
      page: 0,
      user: {}
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth', 'pages', 'selectors', 'authorized']),
    ...mapGetters('editor', ['contentEndpoint'])
  },
  watch: {
    business (val) {
      if (val) {
        this.page = this.pages.indexOf('Business')
      }
    },
    residential (val) {
      this.page = this.pages.indexOf('Residential')
    },
    section (val) {
      if (this.selectors[val] === '#connect') {
        if (this.addressAvalable) {
          this.$router.push({ name: 'connect' })
        } else {
          this.$vuetify.goTo('#check', {
            duration: 500,
            offset: 200,
            easing: 'easeInOutCubic'
          })
        }
        this.page = undefined
        return
      }
      if (this.selectors[val] === '#contact') {
        this.$router.push({ name: 'contact' })
        return
      }
      if (this.selectors[val]) {
        this.$vuetify.goTo(this.selectors[val], {
          duration: 500,
          offset: 0,
          easing: 'easeInOutCubic'
        })
      }
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
    ...mapActions('testimonials', {
      getTestimonials: 'GET_CONTENT'
    }),
    async savePageContent () {
      const response = await this.saveContent(5)
      const actionName = response === 200 ? 'saveSuccess' : response === 403 || response === 401 ? 'accessDenied' : 'saveFailure'
      this[actionName]()
    }
  },
  beforeMount () {
    this.getContent(5)
      .then((response) => {
        this.ready = !!response
      })
    this.getTestimonials()
  }
}
</script>
