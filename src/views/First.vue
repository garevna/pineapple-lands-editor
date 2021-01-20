<template>
  <v-container fluid class="homefone" v-if="ready">
    <MainNavBar :page.sync="page" />

    <!-- ============================= TOP ============================= -->
    <section id="top">
      <div class="base-title">
        <a href="#top" class="core-goto"></a>
        <Top />
      </div>
    </section>
    <!-- ============================= USER CONTACT ============================= -->
    <v-row justify="center" class="pa-0 ma-0">
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

    <!-- ============================= HOW TO CONNECT ============================= -->
    <v-row width="100%" justify="center">
      <section id="how-to-connect">
        <div class="base-title">
          <a href="#how-to-connect" class="core-goto"></a>
          <HowToConnect :contact.sync="contactUs" :connect.sync="getConnected" />
        </div>
      </section>
    </v-row>

    <!-- ============================= INTERNET PLANS ============================= -->
      <v-row width="100%" justify="center">
        <section id="plans">
          <div class="base-title">
            <a href="#plans" class="core-goto"></a>
            <InternetPlans :page.sync="page" />
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
  </v-container>
</template>

<script>

import { mapActions } from 'vuex'

const {
  Top,
  Aside,
  UserContact,
  HowToConnect,
  Testimonials,
  InternetPlans,
  FAQ,
  Footer
} = require('@/components').default

export default {
  name: 'First',
  components: {
    Top,
    Aside,
    UserContact,
    HowToConnect,
    Testimonials,
    InternetPlans,
    FAQ,
    Footer
  },
  data () {
    return {
      ready: false,
      page: 0,
      goto: undefined,
      section: null,
      contactUs: false,
      getConnected: false,
      user: {}
    }
  },
  watch: {
    page (val) {
      this.$vuetify.goTo(val, {
        duration: 500,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    }
  },
  methods: {
    ...mapActions('content', {
      getContent: 'GET_CONTENT'
    })
  },
  beforeMount () {
    this.getContent(1)
      .then((response) => {
        this.ready = !!response
      })
  }
}
</script>
