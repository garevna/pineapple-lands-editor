<template>
  <v-app class="homefone">
    <v-container fluid class="homefone" v-if="top">
      <AppHeader :page.sync="section" />
      <v-sheet
        width="100%"
        max-width="1440"
        color="homefone"
        tile
        class="mx-auto"
      >
        <section id="top" style="width: 100%">
          <div class="base-title">
            <a href="#top" class="core-goto"></a>
            <Top :pageNum="pageNum" />
          </div>
        </section>

      </v-sheet>
      <!-- ============================= TESTIMONIALS ============================= -->

      <section id="testimonials" style="width: 100%">
        <div class="base-title">
          <a href="#testimonials" class="core-goto"></a>
          <Testimonials :content.sync="testimonials" :page.sync="section" />
        </div>
      </section>

      <!-- ============================= USER CONTACT ============================= -->

      <v-sheet
          width="100%"
          max-width="1440"
          color="homefone"
          tile
          class="mx-auto"
      >
        <v-row align="center" class="mx-0 px-0">
          <v-col cols="12" md="6" class="aside-col">
            <section id="benefits" style="width: 100%">
              <div class="base-title">
                <a href="#benefits" class="core-goto"></a>
                <Aside :pageNum="pageNum" />
              </div>
            </section>
          </v-col>
          <v-col cols="12" md="6" class="mx-0 px-0">
            <v-row align="center" justify="center" class="pa-0 my-12">
              <section id="contact" style="width: 100%">
                <div class="base-title">
                  <a href="#contact" class="core-goto"></a>
                  <v-card flat class="transparent mx-0">
                      <v-card
                            flat
                            class="user-contact transparent mx-auto pa-0"
                            style="margin-bottom: 80px"
                      >
                        <UserContact
                              :pageNum="pageNum"
                              :userForm="userForm"
                              emailSubject=""
                              emailText=""
                              emailEndpoint=""
                              v-if="userForm"
                        />
                      </v-card>
                    </v-card>
                  </div>
                </section>
              </v-row>
          </v-col>
        </v-row>
      </v-sheet>

      <!-- ============================= FAQ ============================= -->
      <v-row width="100%">
        <section id="faq" style="width: 100%">
          <div class="base-title">
            <a href="#faq" class="core-goto"></a>
            <FAQ :faq.sync="faq" :page.sync="section"/>
          </div>
        </section>
      </v-row>

      <!-- ============================= FOOTER ============================= -->
      <v-row width="100%">
        <section id="footer" style="width: 100%">
          <div class="base-title">
            <a href="#footer" class="core-goto"></a>
            <Footer :footer.sync="footer" :page.sync="section"/>
          </div>
        </section>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

import { mapState } from 'vuex'

import AppHeader from '@/components/AppHeader.vue'
import Top from '@/components/live/PageTop.vue'
import Aside from '@/components/live/Aside.vue'
import UserContact from '@/components/live/UserContact.vue'
import Testimonials from '@/components/Testimonials.vue'
import FAQ from '@/components/FAQ.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Page',
  components: {
    AppHeader,
    Top,
    Aside,
    UserContact,
    Testimonials,
    FAQ,
    Footer
  },
  props: ['pageNum'],
  data () {
    return {
      section: null,
      goto: null
    }
  },
  computed: {
    ...mapState(['viewportWidth', 'mainContentHeight', 'footerHeight']),
    ...mapState('content', ['pages']),
    page () {
      return this.pages[this.pageNum - 1]
    },
    footer: {
      get () {
        return this.page.footer
      },
      set (val) {
        this.changeValue('footer', val)
      }
    },
    top: {
      get () {
        return this.page.top
      },
      set (val) {
        this.changeValue('top', val)
      }
    },
    info: {
      get () {
        return this.page.info
      },
      set (val) {
        this.changeValue('info', val)
      }
    },
    faq: {
      get () {
        return this.page.faq
      },
      set (val) {
        this.changeValue('faq', val)
      }
    },
    testimonials: {
      get () {
        return this.page.testimonials
      },
      set (val) {
        this.changeValue('', 'testimonials', val)
      }
    },
    userForm: {
      get () {
        return this.page.userForm
      },
      set (val) {
        this.changeValue('userForm', val)
      }
    }
  },
  methods: {
    changeValue (sectionName, propName, propValue) {
      this.$store.commit('content/UPDATE_PAGE_SECTION', {
        pageNum: this.pageNum,
        sectionName,
        propName,
        propValue
      })
    }
  },
  watch: {
    /* Buttons on page */
    goto (val) {
      if (!val) return
      this.$vuetify.goTo(val, {
        duration: 500,
        offset: 20,
        easing: 'easeInOutCubic'
      })
      this.goto = undefined
    },

    /* Buttons of main nav bar */
    section (val) {
      if (!val) return

      /* Inside page transition */
      if (val.indexOf('#') === 0) {
        this.$vuetify.goTo(val, {
          duration: 500,
          offset: 50,
          easing: 'easeInOutCubic'
        })
        this.section = undefined
        return
      }

      /* Go to external url */
      if (val.indexOf('http') === 0) {
        window.open(val, '_blank')
        this.section = undefined
        return
      }

      /* Go to page */
      this.$router.push({ name: val })
      this.section = undefined
    }
  },
  mounted () {
    this.section = undefined
  }
}
</script>
