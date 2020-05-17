<template>
  <v-container fluid class="homefone" v-if="ready">
    <AppHeader :page.sync="page" />
    <Top />
    <!-- ============================= USER CONTACT ============================= -->

      <v-row justify="center" class="pa-0 ma-0">
        <v-sheet
          width="100%"
          max-width="1440"
          color="homefone"
          tile
          class="mx-auto"
        >
          <v-row class="mx-0 px-0">
            <v-col cols="12" md="6" class="aside-col">
              <Aside />
            </v-col>
            <v-col cols="12" md="6" class="mx-0 px-0">
              <v-card flat class="transparent mx-0">
                <!-- <v-img src="@/img/map-picture.svg" height="800" contain style="opacity:0.2;"></v-img> -->
                <v-card
                        flat
                        class="user-contact transparent mx-auto pa-0"
                        style="margin-bottom: 80px"
                >
                  <UserContact />
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-row>

      <!-- ============================= HOW TO CONNECT ============================= -->
      <v-row width="100%">
        <HowToConnect :contact.sync="contactUs" :connect.sync="getConnected" />
      </v-row>
      <!-- ============================= INTERNET PLANS ============================= -->
      <v-row width="100%" justify="center">
        <section id="plans">
          <div class="base-title">
            <a href="#plans" class="core-goto"></a>
            <InternetPlans :page.sync="page"/>
          </div>
        </section>
      </v-row>
      <!-- ============================= TESTIMONIALS ============================= -->
      <section id="testimonials" style="width: 100%">
        <div class="base-title">
          <a href="#testimonials" class="core-goto"></a>
          <Testimonials :page.sync="page"/>
        </div>
      </section>
      <!-- ============================= FAQ ============================= -->
      <v-row width="100%">
        <section id="faq" style="width: 100%">
          <div class="base-title">
            <a href="#faq" class="core-goto"></a>
            <FAQ :page.sync="page"/>
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
</template>

<script>

import { mapState, mapActions } from 'vuex'

import AppHeader from '@/components/AppHeader.vue'
import Top from '@/components/Top.vue'
import Aside from '@/components/Aside.vue'
import UserContact from '@/components/UserContact.vue'
import HowToConnect from '@/components/HowToConnect.vue'
import Testimonials from '@/components/Testimonials.vue'
import InternetPlans from '@/components/InternetPlans.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'

import Popup from '@/components/editor/Popup.vue'

export default {
  name: 'First',
  components: {
    AppHeader,
    Top,
    Aside,
    UserContact,
    HowToConnect,
    Testimonials,
    InternetPlans,
    FAQ,
    Footer,
    // ImageGallery,
    Popup
  },
  data () {
    return {
      ready: false,
      page: 0,
      section: null,
      contactUs: false,
      getConnected: false,
      user: {}
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth', 'authorized'])
  },
  watch: {
    page (val) {
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
    // ...mapActions('editor', {
    //   getAllPictures: 'GET_ALL_PICTURES'
    // }),
    ...mapActions('testimonials', {
      getTestimonials: 'GET_CONTENT'
    }),
    async savePageContent () {
      // let response = await this.saveTestimonials()
      const response = await this.saveContent(1)
      const actionName = response === 200 ? 'saveSuccess' : response === 403 || response === 401 ? 'accessDenied' : 'saveFailure'
      this[actionName]()
    }
  },
  beforeMount () {
    this.getContent(1)
      .then((response) => {
        this.ready = !!response
        document.title = response
        this.$store.commit('UPDATE_PAGES', {
          pages: this.$store.state.content.mainNavButtons,
          selectors: this.$store.state.content.selectors
        })
      })
    this.getTestimonials()
  },
  mounted () {
    // this.getAllPictures()
    // this.getAllAvatars()
  }
}
</script>
