<template>
  <v-container fluid class="homefone" v-if="pageContentReady">
      <MainNavBar :page.sync="page" />

      <!-- ============================= TOP ============================= -->
      <section id="top">
        <div class="base-title">
          <a href="#top" class="core-goto"></a>
          <TopOfPage />
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

      <v-row justify="center" class="pa-0 ma-0 mt-12">
        <v-sheet
          width="100%"
          max-width="1440"
          color="homefone"
          tile
          class="mx-auto mt-12"
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
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

import {
  TopOfPage,
  Aside,
  UserContact,
  Testimonials,
  FAQ
} from '@/components'

export default {
  name: 'Page',
  components: {
    TopOfPage,
    Aside,
    UserContact,
    Testimonials,
    FAQ
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
    ...mapState(['pageContentReady'])
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
        this.$openExternalLink(val)
        this.page = undefined
        return
      }

      /* Go to main page */
      this.$router.push({ path: '/connect-melbourne-cbd' })
      this.page = undefined
    }
  },
  mounted () {
    this.page = undefined
  }
}
</script>
