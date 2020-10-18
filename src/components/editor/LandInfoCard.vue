<template>
  <v-card max-width="900" class="mx-auto mb-12 pa-5">
    <p>{{ 'https://' + url }}</p>
    <v-card-title class="primary text-center">
      <h4 style="color: #fff">
          {{ header }}
      </h4>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-text-field
              v-if="browserTabTitle"
              label="Browser tab title"
              outlined
              v-model="browserTabTitle"
      ></v-text-field>
      <v-text-field
              v-if="emailSubject"
              label="Email subject"
              outlined
              v-model="emailSubject"
      ></v-text-field>
      <v-text-field
              v-if="emailText"
              label="Email text for user"
              outlined
              v-model="emailText"
      ></v-text-field>
    </v-card-text>
    <h5 class="mx-8 mb-8">Main Navigation Menu Items</h5>
    <v-card>
      <ButtonConfig
          v-for="(button, ind) in mainNavButtons"
          :key="ind"
          :value.sync="mainNavButtons[ind]"
          :goto.sync="mainNavSectors[ind]"
          :sections="sections"
          :jumps="jumps"
          :delete.sync="remove[ind]"
      />
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
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn large dark color="info" text @click="saveData" v-if="authorized">
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

import ButtonConfig from '@/components/editor/ButtonConfig.vue'

export default {
  name: 'LandInfoCard',
  components: {
    ButtonConfig
  },
  props: ['route', 'url'],
  data () {
    return {
      header: '',
      browserTabTitle: '',
      emailSubject: '',
      emailText: '',
      mainNavButtons: [],
      mainNavSectors: [],
      remove: []
    }
  },
  computed: {
    ...mapState(['authorized']),
    ...mapGetters(['contentHost']),
    endpoint () {
      return `${this.contentHost}/${this.route}`
    },
    pageConfigs () {
      return this.$store.state.editor.configs[this.route]
    },
    sections () {
      return this.pageConfigs.map(item => item.title)
    },
    jumps () {
      return this.pageConfigs.map(item => item.value)
    }
  },
  watch: {
    route (val) {
      if (val) {
        this.getData()
      }
    },
    remove: {
      deep: true,
      handler (val) {
        if (val.filter(item => item).length === 0) return
        this.remove = val.map((item, num) => {
          if (item) {
            this.mainNavButtons.splice(num, 1)
            this.mainNavSectors.splice(num, 1)
          }
          return false
        })
      }
    }
  },
  methods: {
    ...mapActions({
      saveSuccess: 'SAVE_SUCCESS',
      saveFailure: 'SAVE_FAILURE',
      accessDenied: 'ACCESS_DENIED'
    }),
    addNewButton () {
      this.mainNavButtons.push('...')
      this.mainNavSectors.push(null)
    },
    async getData () {
      const response = await (await fetch(this.endpoint)).json()
      this.browserTabTitle = response.browserTabTitle
      this.emailSubject = response.emailSubject
      this.emailText = response.emailText
      this.mainNavButtons = Object.assign([], response.mainNavButtons)
      this.mainNavSectors = Object.assign([], response.mainNavSectors)
      this.header = response.top.header
    },
    async saveData () {
      const pageContent = await (await fetch(this.endpoint)).json()
      Object.assign(pageContent, {
        browserTabTitle: this.browserTabTitle,
        emailSubject: this.emailSubject,
        emailText: this.emailText,
        mainNavButtons: this.mainNavButtons,
        mainNavSectors: this.mainNavSectors
      })

      if (!this.authorized) return this.accessDenied()
      // if (location && location.hostname !== 'pa.pineapple.net.au') return this.accessDenied()

      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(pageContent)
      })
      const showResponse = response.status === 200 ? 'saveSuccess' : response.status === 403 || response.status === 401 ? 'accessDenied' : 'saveFailure'
      this[showResponse]()
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
