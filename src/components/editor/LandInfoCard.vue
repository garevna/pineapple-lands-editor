<template>
  <v-card max-width="700" class="mx-auto mb-12 pa-5">
    <v-card-title class="primary text-center">
      <v-row>
        <v-col cols="2">
          <h2 style="color: #fff">{{index}}</h2>
        </v-col>
        <v-col cols="10">
          <h3 style="color: #fff">
            {{ header }}
          </h3>
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-text-field
              label="Browser tab title"
              outlined
              v-model="browserTabTitle"
      ></v-text-field>
      <v-text-field
              label="Email subject"
              outlined
              v-model="emailSubject"
      ></v-text-field>
      <v-text-field
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
      <v-btn large dark color="info" text @click="saveData">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import { mapGetters } from 'vuex'

import ButtonConfig from '@/components/editor/ButtonConfig.vue'

export default {
  name: 'LandInfoCard',
  components: {
    ButtonConfig
  },
  props: {
    index: Number
  },
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
    ...mapGetters(['contentHost']),
    endpoint () {
      return `${this.contentHost}/${this.index}`
    },
    sections () {
      return this.$store.state.editor.configs[this.index - 1].map(item => item.title)
    },
    jumps () {
      return this.$store.state.editor.configs[this.index - 1].map(item => item.value)
    }
  },
  watch: {
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
    addNewButton () {
      this.mainNavButtons.push('...')
      this.mainNavSectors.push(null)
    },
    async getData () {
      const response = await (await fetch(this.endpoint)).json()
      // console.log(response)
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
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(pageContent)
      })
      console.log('Data has been saved:\n', response)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
