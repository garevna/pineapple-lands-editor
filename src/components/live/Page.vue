<template>
  <v-app class="homefone">
    <v-container fluid class="homefone">
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
          <v-row align="start" justify="center" class="my-12">
            <v-card dark width="100%" class="deepgreen mx-auto my-12 pa-8">
              <h3 style="color: #fff!important; text-wrap: normal;">
                {{ address.formatted }}
              </h3>
              <h5 style="color: #fff!important; text-align: center;">
                {{ addressLine }}
              </h5>
            </v-card>
          </v-row>

          <v-row class="mx-0 px-0">
            <v-col cols="12" md="6" class="aside-col">
              <Aside />
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
    </v-container>

    <v-snackbar
        v-model="hidden"
        top
        center
        :timeout="1000 * 60 * 60 * 6"
      >
        This page is hidden
      </v-snackbar>
  </v-app>
</template>

<script>

import { mapState } from 'vuex'

const {
  MultipageTop,
  Aside,
  UserContact,
  Testimonials,
  FAQ,
  Footer
} = require('@/components').default

export default {
  name: 'Page',
  components: {
    Top: MultipageTop,
    Aside,
    UserContact,
    Testimonials,
    FAQ,
    Footer
  },
  data () {
    return {
      page: null,
      goto: null,
      editInfo: false,
      addressLine: ''
    }
  },
  computed: {
    ...mapState(['pages', 'currentLand']),
    ...mapState('content', ['address']),
    buildingName () {
      return this.address?.formatted
    },
    hidden () {
      const page = this.pages.find(item => item.id === this.currentLand.slice(5))
      return page.hidden
    }
  },
  watch: {
    address: {
      deep: true,
      immediate: true,
      handler (addr) {
        this.addressLine = this.getAddressLine(addr)
      }
    },
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
      if (val === 'home') this.$router.push({ path: '/live' })
      this.page = undefined
    }
  },
  methods: {
    getAddressLine (address) {
      const {
        streetNumber = '',
        streetName = '',
        city = '',
        state = '',
        postcode = ''
      } = address
      return `${streetNumber} ${streetName}${streetName ? ',' : ''} ${city} ${state} ${postcode}`
    }
  },
  mounted () {
    this.page = undefined
  }
}
</script>
