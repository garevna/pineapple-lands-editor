<template>
  <v-card flat max-width="600" class="mx-auto mb-12 pa-5">
    <h5 class="mx-8 mb-8">Main Navigation Menu Buttons</h5>
    <v-card class="pa-4">
      <!-- <div v-if="mainNavButtons"> -->
        <ButtonConfig
            v-for="(button, ind) in buttons"
            :key="ind"
            :value.sync="button.text"
            :goto.sync="button.goto"
            :sections="sections"
            :jumps="jumps"
            :delete.sync="remove[ind]"
        />
      <!-- </div> -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
               dark
               small
               color="info"
               @click.stop="addNewButton"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
            large
            dark
            color="info"
            text
            @click="saveData"
            v-if="authorized"
      >
        Save
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

import ButtonConfig from '@/components/editor/ButtonConfig.vue'

export default {
  name: 'PageInfoCard',
  components: {
    ButtonConfig
  },
  data: () => ({
    buttons: [],
    remove: []
  }),
  computed: {
    ...mapState(['authorized', 'currentLand', 'pages']),
    ...mapState('editor', ['configs']),
    ...mapState('content', ['mainNavButtons', 'mainNavSectors']),
    ...mapGetters(['contentHost']),
    index () {
      return this.pages.findIndex(page => page.id === this.$route.path.slice(6))
    },
    endpoint () {
      return `${this.contentHost}/${this.currentLand}`
    },
    pageConfigs () {
      return this.configs['live-page']
    },
    sections () {
      return this.pageConfigs.map(item => item.title)
    },
    jumps () {
      return this.pageConfigs.map(item => item.value)
    }
  },
  watch: {
    buttons: {
      deep: true,
      handler (val) {
        this.$store.commit('content/UPDATE_MAIN_NAV', val)
      }
    },
    remove: {
      deep: true,
      handler (val) {
        if (val.filter(item => item).length === 0) return
        this.remove = val.map((item, num) => {
          if (item) {
            this.buttons.splice(num, 1)
          }
          return false
        })
      }
    }
  },
  methods: {
    addNewButton () {
      this.buttons.push({ text: '...', goto: '#top' })
    }
  },
  mounted () {
    this.buttons = Object.assign([], this.mainNavButtons.map((item, index) => ({ text: item, goto: this.mainNavSectors[index] })))
  }
}
</script>
