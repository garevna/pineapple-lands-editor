<template>
  <v-container fluid class="homefone" v-if="ready" style="overflow-x: hidden">
      <AppHeader :pages="pages" :page.sync="page" />
      <!-- <v-sheet
        width="100%"
        max-width="1440"
        color="homefone"
        tile
        class="mx-auto"
      > -->
        <section id="top" style="width: 100%">
          <div class="base-title">
            <a href="#top" class="core-goto"></a>
            <Top :page.sync="page" />
          </div>
        </section>

      <!-- </v-sheet> -->

      <!-- ============================= LIST ============================= -->

      <section id="list" style="width: 100%">
        <div class="base-title">
          <a href="#list" class="core-goto"></a>
          <List :page.sync="page" />
        </div>
      </section>

      <!-- ============================= CREEN SECTION ============================= -->
      <!-- <section id="dgtek" style="width: 100%">
        <div class="base-title">
          <a href="#dgtek" class="core-goto"></a>
          <GreenSection />
        </div>
      </section> -->

      <!-- ============================= USER CONTACT ============================= -->
      <section id="contact" style="width: 100%">
        <div class="base-title">
          <a href="#contact" class="core-goto"></a>
          <v-row justify="center" class="pa-0 ma-0">
            <v-col cols="12" md="6" class="aside-col">
              <GreenSection />
            </v-col>
            <v-col cols="12" md="6" class="mx-0 px-0">
              <v-card flat class="transparent mx-0">
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
        </div>
      </section>

      <!-- ============================= HOW TO CONNECT ============================= -->

      <section id="how-to-connect" style="width: 100%">
        <div class="base-title">
          <a href="#how-to-connect" class="core-goto"></a>
          <HowToConnect :page.sync="page" />
        </div>
      </section>

      <!-- ============================= TESTIMONIALS ============================= -->

      <section id="testimonials" style="width: 100%">
        <div class="base-title">
          <a href="#testimonials" class="core-goto"></a>
          <Testimonials :page.sync="page"/>
        </div>
      </section>

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
  </v-container>
</template>

<style scoped>

</style>

<script>

import { mapState, mapActions } from 'vuex'

import AppHeader from '@/components/AppHeader.vue'
import Top from '@/components/multipage/Top.vue'
import List from '@/components/List.vue'
import GreenSection from '@/components/GreenSection.vue'
import UserContact from '@/components/UserContact.vue'
import HowToConnect from '@/components/HowToConnect.vue'
import Testimonials from '@/components/Testimonials.vue'
import InternetPlans from '@/components/InternetPlans.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'

const userFormInitial = require('@/store/modules/userFormInitial.js').default

export default {
  name: 'App',
  components: {
    AppHeader,
    Top,
    List,
    // Aside,
    UserContact,
    HowToConnect,
    GreenSection,
    Testimonials,
    InternetPlans,
    FAQ,
    Footer
  },
  data () {
    return {
      ready: false,
      pages: [],
      page: null,
      user: {
        name: '',
        email: '',
        phone: ''
      },
      plans: false
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth', 'authorized']),
    ...mapState('content', {
      title: 'browserTabTitle',
      subject: 'emailSubject',
      emailText: 'emailText',
      // pages: 'mainNavButtons',
      // selectors: 'selectors',
      top: 'top',
      info: 'info',
      userForm: 'userForm',
      howToConnect: 'howToConnect',
      testimonials: 'testimonials',
      faq: 'faq',
      footer: 'footer'
    })
  },
  watch: {
    page (val) {
      if (!val) return
      this.$vuetify.goTo(val, {
        duration: 500,
        offset: 200,
        easing: 'easeInOutCubic'
      })
      this.page = undefined
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
      const response = await this.saveContent(3)
      const actionName = response === 200 ? 'saveSuccess' : response === 403 || response === 401 ? 'accessDenied' : 'saveFailure'
      this[actionName]()
    }
  },
  beforeMount () {
    this.getContent(3)
      .then((response) => {
        if (!this.$store.state.content.userForm) this.$store.state.content.userForm = userFormInitial
        this.ready = !!response
      })
    this.getTestimonials()
  }
}
</script>
