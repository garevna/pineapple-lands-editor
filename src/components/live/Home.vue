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
      <!-- ============================= BOTTOM NAV ============================= -->
      <!-- <BottomNavigation /> -->
      <!-- <div slot='nav'>
        <v-row justify="center">
          <v-card flat class="transparent mx-auto pa-2">
            <div class="text-center">
              <v-pagination
                v-model="page"
                light
                color="#fa0"
                :length="pages.length"
                :total-visible="5"
                v-if="pagination"
              ></v-pagination>
            </div>
          </v-card>
          <v-btn icon @click="pagination=true" v-if="!pagination">
            <span>Pages</span>
            <v-icon>mdi-file-search</v-icon>
          </v-btn>
          <v-btn icon @click="editSelectedPage" v-if="pagination">
            <span>Edit current page</span>
            <v-icon>mdi-file-edit</v-icon>
          </v-btn>
          <v-btn icon @click="pagination=false" v-if="pagination">
            <span>Close</span>
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-btn @click="savePageContent" v-if="authorized">
            <span>Save</span>
            <v-icon>mdi-content-save-edit</v-icon>
          </v-btn>
        </v-row>
      </div> -->
  </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import Top from '@/components/live/HomeTop.vue'
import List from '@/components/List.vue'
import GreenSection from '@/components/GreenSection.vue'
import HowToConnect from '@/components/HowToConnect.vue'
import Testimonials from '@/components/Testimonials.vue'
import InternetPlans from '@/components/InternetPlans.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'

// import BottomNavigation from '@/components/live/BottomNavigation.vue'

export default {
  name: 'Live',
  components: {
    // BottomNavigation,
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
      page: 0
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth'])
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
    ...mapActions('contact', {
      userFormConfig: 'UPDATE_USER_FORM_CONFIGURATION'
    }),
    ...mapActions('testimonials', {
      getTestimonials: 'GET_CONTENT'
    })
  },
  beforeMount () {
    this.getTestimonials()
  }
}
</script>
