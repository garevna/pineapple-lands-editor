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
          <v-row align="start" justify="center" class="my-12">
            <v-card dark width="100%" class="deepgreen mx-auto my-12 pa-8">
              <h3 style="color: #fff!important; text-wrap: normal;">
                {{ address.formatted }}
              </h3>
              <h5 style="color: #fff!important; text-align: center;">
                {{ address.streetNumber }} {{ address.streetName }}, {{ address.city }} {{ address.state }} {{ address.postcode }}
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
        left
        :timeout="1000 * 60 * 60 * 6"
      >
        This page is hidden
      </v-snackbar>

    <PageInfo />
  </v-app>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import Top from '@/components/multipage/Top.vue'
import Aside from '@/components/Aside.vue'
import UserContact from '@/components/UserContact.vue'
import Testimonials from '@/components/Testimonials.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'

import PageInfo from '@/components/live/PageInfo.vue'

export default {
  name: 'Page',
  components: {
    Top,
    Aside,
    UserContact,
    Testimonials,
    FAQ,
    Footer,
    PageInfo
  },
  data () {
    return {
      address: {},
      ready: false,
      page: null,
      goto: null,
      editInfo: false
    }
  },
  computed: {
    ...mapState(['browserTabTitle', 'currentLand', 'pages', 'error']),
    currentPage () {
      return this.pages.find(item => item.id === this.$route.path.slice(6))
    },
    hidden: {
      get () {
        return this.currentPage ? this.currentPage.hidden : false
      },
      set (val) {
        console.log(val)
      }
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

      /* Go to main page */
      if (val === 'home') this.$router.push({ path: '/live' })
      this.page = undefined
    }
  },
  methods: {
    ...mapActions({
      getPages: 'GET_PAGES',
      errorMessage: 'READ_FAILURE'
    }),
    ...mapActions('content', {
      getContent: 'GET_CONTENT'
    }),
    ...mapActions('contact', {
      setFieldsToShow: 'SET_FIELDS_TO_SHOW'
    }),
    editPageInfo () {
      this.editInfo = true
    },
    async getPageData () {
      if (!this.pages.length) await this.getPages()
      if (this.pages.find(item => item.id === this.$route.path.slice(6))) {
        await this.getContent(this.$route.path.slice(1))
        if (this.error) {
          console.warn(this.error, '\nIt looks like this page does not exist yet.\nEmpty content will be created for this page')
          this.errorMessage()
          this.$store.commit('content/SET_NEW_PAGE_CONTENT')
        }
      } else {
        this.$store.commit('content/CLEAR_ALL')
        this.$store.commit('content/SET_NEW_PAGE_CONTENT')
        this.setFieldsToShow(this.$store.state.content.userForm.fieldsToShow)
        this.$store.commit('SET_CURRENT_LAND', this.$route.path.slice(1))
        this.$store.commit('ADD_PAGE', {
          id: this.$route.path.slice(6),
          address: this.$store.state.content.address,
          hidden: true
        })
      }
      this.address = this.$store.state.content.address
      this.ready = !this.error
    }
  },
  beforeMount () {
    this.getPageData()
  },
  mounted () {
    this.page = undefined
  }
}
</script>
