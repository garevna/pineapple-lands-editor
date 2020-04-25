<template>
  <v-app class="homefone">
    <v-container fluid class="homefone">
      <AppHeader :pages="pages" :selected.sync="page"/>
      <Top />

      <!-- ============================= USER CONTACT ============================= -->

      <v-row justify="center" class="pa-0 ma-0">
        <v-sheet
          width="100%"
          max-width="1440"
          color="homefone"
          tile
          class="mx-auto"
        >
          <v-row class="mx-0 px-0">
            <v-col cols="12" md="6" class="aside-col">
              <Aside />
            </v-col>
            <v-col cols="12" md="6" class="mx-0 px-0">
              <v-card flat class="transparent mx-0">
                <!-- <v-img src="@/img/map-picture.svg" height="800" contain style="opacity:0.2;"></v-img> -->
                <v-card
                        flat
                        class="user-contact transparent mx-auto pa-0"
                        style="margin-bottom: 80px"
                >
                  <UserContact />
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-row>

      <!-- ============================= HOW TO CONNECT ============================= -->
      <v-row width="100%">
        <HowToConnect :contact.sync="contactUs" :connect.sync="getConnected" />
      </v-row>
      <!-- ============================= TESTIMONIALS ============================= -->
      <v-row width="100%">
        <Testimonials />
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
  </v-app>
</template>

<style lang="scss">

html, body {
  width: 100%;
  max-width: 100%;
}

.container,
.container--fluid,
.container.fill-height {
  padding: 0!important;
}
.container.fill-height > .row {
  max-width: 100%!important;
}

h1, h2, h3, h4, h5 {
  white-space: normal;
  word-break: normal;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #000;
}
h1 {
  font-size: 46px;
}
h2 {
  font-size: 32px;
  text-align: center;
  width: 100%;
}
h3 {
  font-size: 28px;
}
h4 {
  font-size: 24px;
}
h5 {
  font-size: 20px;
}

p {
  font-size: 16px;
  font-weight: normal;
  line-height: 150%;
  letter-spacing: 0.02em;
}

.row {
  margin-left: 0!important;
  margin-right: 0!important;
}

svg.defs-only {
  display: block;
  position: absolute;
  height: 0;
  width: 0;
  margin: 0;
  padding: 0;
  border: none;
  overflow: hidden;
}

.user-contact {
  width: 640px;
}

@media (max-width: "600px"), (max-height: "600px") {
  h1 { font-size: 28px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
  h4, h5 { font-size: 18px; }
  p { font-size: 16px; }
  .user-contact {
    width: 480px;
  }
}

@media (max-width: '400px'), (max-height: '400px') {
  h1 { font-size: 26px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
  h4, h5 { font-size: 16px; }
  .user-contact {
    width: 300px;
  }
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #20731C;
}
::-webkit-scrollbar-thumb {
  background: #4CAF50;
}
::-webkit-scrollbar-thumb:hover {
  background: #72BF44;
}

</style>

<script>

import { mapState } from 'vuex'

import AppHeader from '@/components/AppHeader.vue'
import Top from '@/components/Top.vue'
import Aside from '@/components/Aside.vue'
import UserContact from '@/components/UserContact.vue'
import HowToConnect from '@/components/HowToConnect.vue'
import Testimonials from '@/components/Testimonials.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Top,
    Aside,
    UserContact,
    HowToConnect,
    Testimonials,
    Footer
  },
  data () {
    return {
      page: 0,
      user: {
        name: '',
        email: '',
        phone: ''
      },
      contactUs: false,
      getConnected: false
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth', 'pages', 'selectors'])
  },
  watch: {
    contactUs (val) {
      if (val) this.$router.push({ name: 'contact' })
    },
    getConnected (val) {
      if (val) this.$router.push({ name: 'connect' })
    },
    business (val) {
      if (val) {
        this.page = this.pages.indexOf('Business')
      }
    },
    residential (val) {
      this.page = this.pages.indexOf('Residential')
    },
    page (val) {
      if (this.selectors[val] === '#connect') {
        if (this.addressAvalable) {
          this.$router.push({ name: 'connect' })
        } else {
          this.$vuetify.goTo('#check', {
            duration: 500,
            offset: 200,
            easing: 'easeInOutCubic'
          })
        }
        this.page = undefined
        return
      }
      if (this.selectors[val] === '#contact') {
        this.$router.push({ name: 'contact' })
        return
      }
      if (this.selectors[val] === '#plans') {
        this.$store.commit('CHANGE_PLAN', this.pages[this.page].toLowerCase())
      }
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
    onResize () {
      this.$store.commit('CHANGE_VIEWPORT')
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  }
}
</script>
