<template>
  <v-container fluid class="homefone">
    <v-system-bar app color="primary" height="50">
      <v-tooltip bottom color="#09b">
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon
            dark
            text
            @click.stop="drawer = !drawer"
            large
            v-on="on"
          ></v-app-bar-nav-icon>
        </template>
        <span>Landing pages</span>
      </v-tooltip>

      <h5 style="color: #fff">{{ title }}</h5>

      <v-spacer></v-spacer>

      <v-tooltip bottom color="info">
        <template v-slot:activator="{ on }">
          <v-btn text color="transparent" v-on="on" @click="$route.name === 'home' || $router.push({ name: 'home' })">
            <v-icon large color="white" v-if="$route.name !== 'home'">mdi-home-circle-outline</v-icon>
            <v-icon large color="white" v-else>mdi-home-circle</v-icon>
          </v-btn>
        </template>
        <span>General Info About Pineapple NET</span>
      </v-tooltip>

      <v-tooltip bottom color="info">
        <template v-slot:activator="{ on }">
          <v-btn
            text
            color="transparent"
            v-on="on"
            @click="$route.name === 'testimonials' || $router.push({ name: 'testimonials' })"
          >
            <v-icon large color="white">mdi-message-draw</v-icon>
          </v-btn>
        </template>
        <span>Edit Reviews</span>
      </v-tooltip>

      <v-tooltip bottom color="info">
        <template v-slot:activator="{ on }">
          <v-btn
            text
            color="transparent"
            v-on="on"
            @click="$route.name === 'plans' || $router.push({ name: 'plans' })"
          >
            <v-icon large color="white">mdi-calculator</v-icon>
          </v-btn>
        </template>
        <span>Edit Inernet Plans</span>
      </v-tooltip>
    </v-system-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
        left
        temporary
        width="480"
        style="z-index: 11"
    >
      <ListOfLands :drawer.sync="drawer" :nav="true" />
    </v-navigation-drawer>
    <v-progress-linear
      v-if="progress"
      class="mt-12"
      color="#09b"
      indeterminate
      style="z-index: 999"
    ></v-progress-linear>
  </v-container>
</template>

<script>

import { mapState } from 'vuex'

import { ListOfLands } from '@/components/editor'
const { routesNames } = require('@/configs/main-nav-bar-titles')

export default {
  name: 'MainNavigationDriver',
  components: {
    ListOfLands
  },
  props: ['land'],
  data () {
    return {
      drawer: false,
      group: null,
      selected: undefined,
      secondLandPage: undefined,
      routesNames
    }
  },
  computed: {
    ...mapState(['progress']),
    title () {
      return this.routesNames[this.$route.name]
    }
  },
  watch: {
    group (val) {
      this.drawer = false
    },
    selected (val) {
      this.$emit('update:land', val)
    }
  }
}
</script>
