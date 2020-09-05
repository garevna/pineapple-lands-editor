<template>
  <v-container fluid class="homefone">
    <v-system-bar app color="primary" height="50">
      <v-tooltip bottom color="#09b">
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon
              color="#09b"
              @click.stop="drawer = !drawer"
              large
              v-on="on"
          ></v-app-bar-nav-icon>
        </template>
        <span>Landing pages</span>
      </v-tooltip>

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

      <v-menu
            bottom
            left
            width="320"
            transition="slide-x-transition"
            :offset-y="true"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              dark
              icon
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
                v-if="$route.name !== 'overall'"
                @click="$router.push({ name: 'overall' })"
          >
            <v-list-item-title>Landing pages overall</v-list-item-title>
          </v-list-item>

          <v-list-item
                v-if="$route.name !== 'testimonials'"
                @click="$router.push({ name: 'testimonials' })"
          >
            <v-list-item-title>Reviews</v-list-item-title>
          </v-list-item>

          <v-list-item
                v-if="$route.name !== 'plans'"
                @click="$router.push({ name: 'plans' })"
          >
            <v-list-item-title>InternetPlans</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-system-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
        left
        temporary
        width="480"
    >
      <ListOfLands :drawer.sync="drawer" :nav="true" />
      <!-- <v-list nav dense>
        <v-list-item-group
              v-model="group"
              active-class="info--text text--info"
        >
          <v-list-item>
            <v-list-item-avatar tile>
              <v-img src="https://api.pineapple.net.au/icons/android-chrome-512x512.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>pineapple.net.au</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
                 v-for="(item, index) in items"
                 :key="index"
                 @click="selected = index + 1"
          >
            <v-list-item-icon>
              <v-icon color="green">mdi-pencil-circle</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title @click="$route.name === item.route || $router.push({ name: item.route })">
                {{ item.title }}
              </v-list-item-title>
              <v-card flat class="transparent ml-2" v-if="item.childs">
                <v-list nav dense>
                  <v-list-item-group
                        v-model="secondLandPage"
                        active-class="info--text text--info"
                  >
                    <v-list-item
                           v-for="(subpage, num) in item.childs"
                           :key="num"
                           @click="selected = num + 1"
                    >
                      <v-list-item-icon>
                        <v-icon color="green">mdi-pencil-circle</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title @click="$route.name === subpage.route || $router.push({ name: subpage.route })">
                          {{ subpage.title }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list> -->
    </v-navigation-drawer>
  </v-container>
</template>

<script>

import ListOfLands from '@/components/editor/ListOfLands.vue'

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
      secondLandPage: undefined
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
