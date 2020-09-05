<template>
  <v-container fluid class="homefone" v-if="ready">
      <AppHeader :page.sync="page"/>
      <Top :page.sync="page" />

      <!-- ============================= LIST ============================= -->
      <v-row width="100%" justify="center">
        <section id="list" style="width: 100%">
          <div class="base-title">
            <a href="#list" class="core-goto"></a>
            <List />
          </div>
        </section>
      </v-row>

      <!-- ============================= CREEN SECTION ============================= -->
      <v-row width="100%">
        <section id="dgtek" style="width: 100%">
          <div class="base-title">
            <a href="#dgtek" class="core-goto"></a>
            <GreenSection />
          </div>
        </section>
      </v-row>

      <!-- ============================= HOW TO CONNECT ============================= -->
      <v-row width="100%" justify="center">
        <section id="how-to-connect">
          <div class="base-title">
            <a href="#how-to-connect" class="core-goto"></a>
            <HowToConnect :contact.sync="contactUs" :connect.sync="getConnected" />
          </div>
        </section>
      </v-row>

      <!-- ============================= TESTIMONIALS ============================= -->
      <v-row width="100%">
        <Testimonials />
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
              <Footer :page.sync="page" />
            </v-row>
        </div>
      </section>
      <!-- ============================= BOTTOM NAV ============================= -->
      <v-bottom-navigation
            fixed
            dark
            class="buttons"
      >

        <v-btn @click="savePageContent" v-if="authorized">
          <span>Save</span>
          <v-icon>mdi-content-save-edit</v-icon>
        </v-btn>

        <v-btn @click="login = true" v-if="!authorized">
          <span>Sign In</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <!-- <ImageGallery /> -->
      <Popup />
  </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import AppHeader from '@/components/AppHeader.vue'
import Top from '@/components/2/HomeTop.vue'
import List from '@/components/List.vue'
import GreenSection from '@/components/GreenSection.vue'
import HowToConnect from '@/components/HowToConnect.vue'
import Testimonials from '@/components/Testimonials.vue'
import InternetPlans from '@/components/InternetPlans.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'

// import ImageGallery from '@/components/editor/ImageGallery.vue'
import Popup from '@/components/editor/Popup.vue'
// import Auth from '@/components/editor/Auth.vue'

export default {
  name: 'Second',
  components: {
    AppHeader,
    Top,
    List,
    GreenSection,
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
      contactUs: false,
      getConnected: false
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
    ...mapActions('contact', {
      userFormConfig: 'UPDATE_USER_FORM_CONFIGURATION'
    }),
    ...mapActions('content', {
      getContent: 'GET_CONTENT',
      saveContent: 'SAVE_CONTENT'
    }),
    ...mapActions('testimonials', {
      getTestimonials: 'GET_CONTENT',
      saveTestimonials: 'SAVE_CONTENT'
    }),
    async savePageContent () {
      const response = await this.saveContent(2)
      const actionName = response === 200 ? 'saveSuccess' : response === 403 || response === 401 ? 'accessDenied' : 'saveFailure'
      this[actionName]()
    }
  },
  beforeMount () {
    this.getContent(2)
      .then((response) => {
        this.ready = !!response
      })
    this.getTestimonials()
  }
}
</script>
