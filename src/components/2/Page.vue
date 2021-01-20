<template>
  <v-app class="homefone">
    <v-container fluid class="homefone" v-if="ready">
      <MainNavBar :page.sync="page" />

      <!-- ============================= TOP ============================= -->
      <section id="top">
        <div class="base-title">
          <a href="#top" class="core-goto"></a>
          <Top />
        </div>
      </section>
      <!-- ============================= TESTIMONIALS ============================= -->

      <section id="testimonials" style="width: 100%">
        <div class="base-title">
          <a href="#testimonials" class="core-goto"></a>
          <Testimonials :page.sync="goto" />
        </div>
      </section>

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
              <section id="benefits" style="width: 100%">
                <div class="base-title">
                  <a href="#benefits" class="core-goto"></a>
                  <Aside />
                </div>
              </section>
            </v-col>
            <v-col cols="12" md="6" class="mx-0 px-0">
              <section id="contact" style="width: 100%">
                <div class="base-title">
                  <a href="#contact" class="core-goto"></a>
                  <UserContact />
                </div>
              </section>
            </v-col>
          </v-row>
        </v-sheet>
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
            v-if="authorized"
      >
        <v-btn @click="savePageContent" v-if="authorized">
          <span>Save</span>
          <v-icon>mdi-content-save-edit</v-icon>
        </v-btn>
      </v-bottom-navigation>

    </v-container>
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex'

const {
  MultipageTop: Top,
  Aside,
  UserContact,
  Testimonials,
  FAQ,
  Footer
} = require('@/components').default

export default {
  name: 'Page',
  components: {
    Top,
    Aside,
    UserContact,
    Testimonials,
    FAQ,
    Footer
  },
  props: ['homePageName', 'pageNum'],
  data () {
    return {
      ready: false,
      page: null,
      goto: null
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth', 'authorized'])
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

      /* Go to main page */
      this.$router.push({ path: '/connect-melbourne-cbd' })
      this.page = undefined
    }
  },
  methods: {
    ...mapActions('content', {
      getContent: 'GET_CONTENT',
      saveContent: 'SAVE_CONTENT'
    }),
    ...mapActions('testimonials', {
      getTestimonials: 'GET_CONTENT'
    }),
    async savePageContent () {
      await this.saveContent(`${this.homePageName}-${this.pageNum}`)
    }
  },
  beforeMount () {
    this.getTestimonials()
    this.getContent(`${this.homePageName}-${this.pageNum}`)
      .then((response) => {
        this.ready = true
      })
  },
  mounted () {
    this.page = undefined
  }
}
</script>
