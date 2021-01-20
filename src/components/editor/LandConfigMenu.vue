<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <h5>Main Navigation Menu Items</h5>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <ButtonConfig
        v-for="(button, ind) in navButtons"
        :key="ind"
        :value.sync="navButtons[ind]"
        :goto.sync="navSectors[ind]"
        :sections="sections"
        :jumps="jumps"
        :delete.sync="remove[ind]"
      />
      <v-toolbar flat>
        <v-spacer></v-spacer>
        <v-btn
          dark
          small
          color="info"
          @click.stop="addNewButton"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'LandConfigMenu',
  components: {
    ButtonConfig: () => import('@/components/editor/ButtonConfig.vue')
  },
  data: () => ({
    navConfigs: require('@/configs/mainNavMenu').default,
    navButtons: [],
    navSectors: [],
    configs: [],
    remove: []
  }),
  computed: {
    ...mapState('content', ['mainNavButtons', 'mainNavSectors']),
    sections () {
      return this.configs.map(item => item.title)
    },
    jumps () {
      return this.configs.map(item => item.value)
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler (route) {
        if (route) {
          this.configs = this.navConfigs[route.name]
          this.navButtons = this.mainNavButtons
          this.navSectors = this.mainNavSectors
        }
      }
    },
    navButtons: {
      deep: true,
      handler (buttons) {
        this.updateNavigation({
          mainNavButtons: buttons,
          mainNavSectors: this.navSectors
        })
      }
    },
    navSectors: {
      deep: true,
      handler (sectors) {
        this.updateNavigation({
          mainNavButtons: this.navButtons,
          mainNavSectors: sectors
        })
      }
    },
    remove: {
      deep: true,
      handler (val) {
        if (val.filter(item => item).length === 0) return
        this.remove = val.map((item, num) => {
          if (item) {
            this.navButtons.splice(num, 1)
            this.navSectors.splice(num, 1)
            this.updateNavigation({
              mainNavButtons: this.navButtons,
              mainNavSectors: this.navSectors
            })
          }
          return false
        })
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      updateNavigation: 'UPDATE_MAIN_NAV'
    }),
    addNewButton () {
      this.navButtons.push('...')
      this.navSectors.push(null)
      this.updateNavigation({
        mainNavButtons: this.navButtons,
        mainNavSectors: this.navSectors
      })

      this.mainNavSectors.push(null)
    }
  }
}
</script>
