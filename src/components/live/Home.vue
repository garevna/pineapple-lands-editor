<template>
  <v-container fluid class="homefone">
    <v-row width="100%" justify="center">
      <section id="top" style="width: 100%">
        <div class="base-title">
          <a href="#top" class="core-goto"></a>
          <Top :page.sync="page" />
        </div>
      </section>
    </v-row>

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
            <HowToConnect :page.sync="page" />
          </div>
        </section>
      </v-row>

      <!-- ============================= TESTIMONIALS ============================= -->
      <v-row width="100%" justify="center">
        <section id="testimonials">
          <div class="base-title">
            <a href="#testimonials" class="core-goto"></a>
            <Testimonials />
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
  </v-container>
</template>

<script>

import { mapState /*, mapActions */ } from 'vuex'

const {
  LiveHomeTop,
  HowToConnect,
  GreenSection,
  List,
  InternetPlans,
  Testimonials,
  FAQ,
  Footer
} = require('@/components')

export default {
  name: 'Live',
  components: {
    Top: LiveHomeTop,
    List,
    GreenSection,
    HowToConnect,
    Testimonials,
    InternetPlans,
    FAQ,
    Footer
  },
  data () {
    return {
      ready: false,
      page: 0
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth'])
  }
  // methods: {
  //   ...mapActions('contact', {
  //     userFormConfig: 'UPDATE_USER_FORM_CONFIGURATION'
  //   }),
  //   ...mapActions('testimonials', {
  //     getTestimonials: 'GET_CONTENT'
  //   })
  // },
  // beforeMount () {
  //   this.getTestimonials()
  // }
}
</script>
