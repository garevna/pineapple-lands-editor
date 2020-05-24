<template>
<v-container fluid>
    <v-app-bar
            app
            fixed
            height="80"
            flat
            class="homefone app-bar d-none d-lg-block"
    >
        <v-row align="center" justify="center">
          <span height="45" width="150" class="ml-10">
            <v-img src="@/assets/logo.svg" contain width="150" height="45"></v-img>
          </span>
          <v-spacer></v-spacer>
      <v-btn-toggle
            group
            flat
            class="mr-10 d-none d-lg-flex"
            color="transparent"
            v-model="toggle"
      >
        <v-btn text
               v-for="(page, index) in pages"
               :key="index"
               :class="getClassName(page)"
               @click="$emit('update:page', selectors[index]); panel = []">
              {{ page }}
        </v-btn>
      </v-btn-toggle>
    </v-row>
  </v-app-bar>
</v-container>
</template>

<style scoped>
.v-btn-toggle > .v-btn.v-btn--active {
  color: #72BF44!important;
}
.app-bar-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
}
.app-bar-menu {
  font-size: 13px;
  line-height: 24px;
  text-transform: none!important;
  font-style: normal;
  font-weight: 500;
  color: #000;
}
.app-bar-menu-bordered {
  border: solid 2px #51AD30!important;
  border-radius: 100px!important;
}

.main-menu-content {
  background: #FAFAFA!important;
}
.main-menu-items {
  font-size: 18px;
  line-height: 40px;
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'AppHeader',
  props: ['page'],
  data () {
    return {
      toggle: 0,
      panel: undefined
    }
  },
  computed: {
    ...mapState(['pages', 'selectors']),
    burgerMenuClassFirst () {
      return this.panel === 0 ? 'burger-menu-active--first' : 'burger-menu--first'
    },
    burgerMenuClassSecond () {
      return this.panel === 0 ? 'burger-menu-active--second' : 'burger-menu--second'
    }
  },
  methods: {
    getClassName (pageName) {
      const className = pageName === 'Contact Us' ? ' app-bar-menu-bordered py-2 px-12' : ''
      return `app-bar-menu${className}`
    },
    returnPage () {

    }
  }
}
</script>
