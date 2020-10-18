<template>
  <v-container fluid class="homefone" v-if="ready">
      <MainNavBar :page.sync="page" />
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
  </v-container>
</template>

<script>

import { mapActions } from 'vuex'

import Top from '@/components/2/HomeTop.vue'
import List from '@/components/List.vue'
import GreenSection from '@/components/GreenSection.vue'
import HowToConnect from '@/components/HowToConnect.vue'
import Testimonials from '@/components/Testimonials.vue'
import InternetPlans from '@/components/InternetPlans.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Second',
  components: {
    Top,
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
      page: 0,
      goto: undefined,
      contactUs: false,
      getConnected: false
    }
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

      /* Go to page */
      const routeName = ['conservatory', 'qv1', 'aurora'][['page-1', 'page-2', 'page-3'].indexOf(val)]
      this.$route.name === routeName || this.$router.push({ name: routeName })
      this.page = undefined
    }
  },
  methods: {
    ...mapActions('content', {
      getContent: 'GET_CONTENT'
    })
  },
  beforeMount () {
    this.getContent(2)
      .then((response) => {
        this.ready = !!response
      })
  }
}
</script>
