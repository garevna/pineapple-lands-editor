<template>
  <v-container fluid class="homefone" v-if="pageContentReady">
      <MainNavBar :page.sync="page" />
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
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

import {
  Top,
  Aside,
  UserContact,
  HowToConnect,
  Testimonials,
  InternetPlans,
  FAQ
} from '@/components'

export default {
  name: 'refer-a-friend',
  components: {
    Top,
    Aside,
    UserContact,
    HowToConnect,
    Testimonials,
    InternetPlans,
    FAQ
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
    ...mapState(['pageContentReady'])
  },
  watch: {
    page (val) {
      this.$vuetify.goTo(val, {
        duration: 500,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    }
  }
}
</script>
