<template>
  <v-app class="homefone">
    <MainNavigationDriver :land.sync="land" />

    <v-container class="homefone mx-auto px-auto">
      <router-view class="mt-12 mx-0 pa-12"></router-view>
    </v-container>

    <!-- ============================= BOTTOM NAV ============================= -->
    <BottomNavigation>
      <!-- <div slot='navigation'>
        <slot name="nav" />
      </div> -->
    </BottomNavigation>
    <popup />
  </v-app>
</template>

<style>
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

.v-textarea textarea {
  line-height: 150%!important;
  word-break: normal!important;
}

.theme--light.v-icon.v-icon {
  font-size: 20px;
  color: #09b;
}

.theme--light.v-system-bar .v-icon {
  font-size: 22px!important;
  color: #fff!important;
}

.v-system-bar--fixed, .v-system-bar--absolute {
  z-index: 9;
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

.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #ddd4!important;
}
.theme--dark.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #fff4;
}

.user-contact {
  width: 640px;
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

import 'pineapple-main-nav-bar'
import 'pineapple-main-nav-bar/dist/pineapple-main-nav-bar.css'

import { mapState, mapGetters, mapActions } from 'vuex'

const {
  BottomNavigation,
  MainNavigationDriver
} = require('@/components').default

export default {
  name: 'App',
  components: {
    BottomNavigation,
    MainNavigationDriver
  },
  data () {
    return {
      page: 0,
      login: false,
      land: null
    }
  },
  computed: {
    ...mapState(['viewport', 'viewportWidth', 'authorized']),
    ...mapGetters('editor', ['contentEndpoint'])
  },
  methods: {
    ...mapActions({
      validateToken: 'VALIDATE_TOKEN',
      getGeneralInfo: 'GET_GENERAL_INFO'
    }),
    ...mapActions('testimonials', {
      getTestimonials: 'GET_CONTENT'
    }),
    ...mapActions('internetPlans', {
      getPlans: 'GET_DATA'
    }),
    onResize () {
      this.$store.commit('CHANGE_VIEWPORT')
    }
  },
  created () {
    this.getTestimonials()
    this.getPlans()
  },
  beforeMount () {
    this.validateToken()
    this.getGeneralInfo()
    document.title = 'CRM'
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
