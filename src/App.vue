<template>
  <v-app class="homefone">
    <v-system-bar app fixed color="primary" height="40" width="100%">
      <v-row d-flex align="center" justify="end" class="mr-10">
        <v-spacer class="d-none d-lg-flex d-xl-flex"></v-spacer>

        <v-tooltip bottom color="info">
          <template v-slot:activator="{ on }">
            <v-btn text color="transparent" v-on="on" @click="$router.push({ name: 'home' })">
              <v-icon large color="white" v-if="$route.name !== 'home'">mdi-home-circle-outline</v-icon>
              <v-icon large color="white" v-else>mdi-home-circle</v-icon>
            </v-btn>
          </template>
          <span>Reviews</span>
        </v-tooltip>

        <v-tooltip bottom color="info">
          <template v-slot:activator="{ on }">
            <v-btn text color="transparent" v-on="on" @click="$router.push({ name: 'first' })">
              <v-icon large color="white" v-if="$route.name !== 'first'">mdi-numeric-1-box-outline</v-icon>
              <v-icon large color="white" v-else>mdi-numeric-1-box</v-icon>
            </v-btn>
          </template>
          <span>Landing page 1</span>
        </v-tooltip>

        <v-tooltip bottom color="info">
          <template v-slot:activator="{ on }">
            <v-btn text color="transparent" v-on="on" @click="$router.push({ name: 'second' })">
              <v-icon large color="white" v-if="$route.name !== 'second'">mdi-numeric-2-box-outline</v-icon>
              <v-icon large color="white" v-else>mdi-numeric-2-box</v-icon>
            </v-btn>
          </template>
          <span>Landing page 2</span>
        </v-tooltip>

        <v-tooltip bottom color="info">
          <template v-slot:activator="{ on }">
            <v-btn text color="transparent" v-on="on" @click="$router.push({ name: 'third' })">
              <v-icon large color="white" v-if="$route.name !== 'third'">mdi-numeric-3-box-outline</v-icon>
              <v-icon large color="white" v-else>mdi-numeric-3-box</v-icon>
            </v-btn>
          </template>
          <span>Landing page 3</span>
        </v-tooltip>

        <v-tooltip bottom color="info">
          <template v-slot:activator="{ on }">
            <v-btn text color="transparent" v-on="on" @click="$router.push({ name: 'fourth' })">
              <v-icon large color="white" v-if="$route.name !== 'fourth'">mdi-numeric-4-box-outline</v-icon>
              <v-icon large color="white" v-else>mdi-numeric-4-box</v-icon>
            </v-btn>
          </template>
          <span>Landing page 4</span>
        </v-tooltip>

        <v-tooltip bottom color="info">
          <template v-slot:activator="{ on }">
            <v-btn text color="transparent" v-on="on" @click="$router.push({ name: 'testimonials' })">
              <v-icon large color="white" v-if="$route.name !== 'testimonials'">mdi-message-text-outline</v-icon>
              <v-icon large color="white" v-else>mdi-message-text</v-icon>
            </v-btn>
          </template>
          <span>Reviews</span>
        </v-tooltip>
      </v-row>
    </v-system-bar>

    <v-container class="homefone mx-auto px-auto">
      <router-view class="mt-12 mx-0 pa-12"></router-view>
    </v-container>

    <!-- ============================= BOTTOM NAV ============================= -->
    <v-bottom-navigation
          fixed
          dark
          :class="authorized ? 'buttons' : 'warning'"
          v-if="!authorized"
    >
      <v-btn @click="login = true" v-if="!authorized">
        <span>Sign In</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <Popup />
    <Auth :opened.sync="login" />
  </v-app>
</template>

<style lang="scss">
html, body {
  width: 100%;
  max-width: 100%;
  font-family: Gilroy;
}
.v-application--wrap {
  background: #FAFAFA!important;
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
  font-family: Gilroy;
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
h4, h5 {
  font-weight: 600;
}

p {
  font-size: 16px;
  font-weight: normal;
  line-height: 180%;
  letter-spacing: 0.02em;
}

.contenteditable, [contenteditable] {
  outline-style: dotted;
  outline-color: #f50;
  outline-width: thin;
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
.submit-button {
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 16px!important;
  line-height: 100%;
  text-transform: uppercase;
  width: 340px;
  color: #fff!important;
  text-align:center!important;
  background-color: #72BF44;
  padding: 8px 16px;
  border-radius: 32px;
}

@media (max-width: 600px), (max-height: 600px) {
  h1 { font-size: 28px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
  h4, h5 {
    font-size: 18px;
  }
  p { font-size: 16px; }
  .user-contact {
    width: 480px;
  }
  .submit-button {
    font-size: 14px!important;
  }
}

@media (max-width: 400px), (max-height: 400px) {
  h1 { font-size: 26px; }
  h2 { font-size: 24px; }
  h3 { font-size: 20px; }
  h4, h5 {
    font-size: 16px;
  }
  p {
    font-size: 14px!important;
    width: 100%!important;
  }
  .user-contact {
    width: 300px;
  }
  .submit-button {
    font-size: 13px!important;
    width: 100%!important;
    border-radius: 8px!important;
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

import { mapState, mapGetters, mapActions } from 'vuex'

import Popup from '@/components/editor/Popup.vue'
import Auth from '@/components/editor/Auth.vue'

export default {
  name: 'App',
  components: {
    Popup,
    Auth
  },
  data () {
    return {
      page: 0,
      login: false
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth', 'authorized']),
    ...mapGetters('editor', ['contentEndpoint'])
  },
  methods: {
    ...mapActions({
      validateToken: 'VALIDATE_TOKEN',
      saveSuccess: 'SAVE_SUCCESS',
      saveFailure: 'SAVE_FAILURE',
      accessDenied: 'ACCESS_DENIED'
    }),
    onResize () {
      this.$store.commit('CHANGE_VIEWPORT')
    },
    async savePageContent () {
      const pageNum = this.pages.indexOf(this.$route.name)
      let response = null
      if (pageNum === 5) {
        response = await this.saveTestimonials()
      } else {
        response = await this.savePageContent()
      }

      response = await this.saveContent(this.contentEndpoint)
      const actionName = response === 200 ? 'saveSuccess' : response === 403 || response === 401 ? 'accessDenied' : 'saveFailure'
      this[actionName]()
    }
  },
  beforeMount () {
    this.validateToken()
  },
  mounted () {
    this.$store.dispatch('testimonials/GET_CONTENT').then(() => console.log(this.$store.state.testimonials.testimonials))
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
