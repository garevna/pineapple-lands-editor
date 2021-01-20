<template>
  <v-container fluid class="homefone" v-if="ready" style="overflow-x: hidden">
      <MainNavBar :page.sync="page" />
        <section id="top" style="width: 100%">
          <div class="base-title">
            <a href="#top" class="core-goto"></a>
            <Top :page.sync="page" />
          </div>
        </section>

      <!-- ============================= LIST ============================= -->

      <section id="list" style="width: 100%">
        <div class="base-title">
          <a href="#list" class="core-goto"></a>
          <List :page.sync="page" />
        </div>
      </section>

      <!-- ============================= USER CONTACT ============================= -->

      <v-row justify="center" class="pa-0 ma-0">
        <v-col cols="12" md="6" class="aside-col">
          <section id="dgtek" style="width: 100%">
            <div class="base-title">
              <a href="#dgtek" class="core-goto"></a>
              <GreenSection />
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
  </v-container>
</template>

<style scoped>

</style>

<script>

import { mapActions } from 'vuex'

const {
  MultipageTop,
  List,
  GreenSection,
  UserContact,
  HowToConnect,
  Testimonials,
  InternetPlans,
  FAQ,
  Footer
} = require('@/components').default

const userFormInitial = require('@/configs/userFormInitial.js').default

export default {
  name: 'App',
  components: {
    Top: MultipageTop,
    List,
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
    ...mapActions('content', {
      getContent: 'GET_CONTENT'
    })
  },
  beforeMount () {
    this.getContent(3)
      .then((response) => {
        if (!this.$store.state.content.userForm) this.$store.state.content.userForm = userFormInitial
        this.ready = !!response
      })
  }
}
</script>
