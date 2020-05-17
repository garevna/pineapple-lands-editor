<template>
  <v-card max-width="500" class="mx-auto mb-12 pa-5">
    <v-card-title class="primary text-center">
      <h3 style="color: #fff">
        {{ header }}
      </h3>
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
    <!-- <v-divider></v-divider> -->
    <v-card-text class="">
      <h5 class="mx-8 mb-8">Main Nav Panel Buttons</h5>
      <v-text-field
              v-for="(button, index) in mainNavButtons"
              :key="index"
              outlined
              dense
              hide-details
              width="120"
              v-model="mainNavButtons[index]"
              class="px-12"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="info" text @click="saveData">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'LandInfoCard',
  props: {
    index: Number
  },
  data () {
    return {
      header: '',
      browserTabTitle: '',
      emailSubject: '',
      emailText: '',
      mainNavButtons: []
    }
  },
  computed: {
    ...mapGetters(['contentHost']),
    endpoint () {
      return `${this.contentHost}/${this.index}`
    }
  },
  methods: {
    async getData () {
      const { browserTabTitle, emailSubject, emailText, mainNavButtons, top } = await (await fetch(this.endpoint)).json()
      this.browserTabTitle = browserTabTitle
      this.emailSubject = emailSubject
      this.emailText = emailText
      this.mainNavButtons = mainNavButtons
      this.header = top.header
    },
    async saveData () {
      const pageContent = await (await fetch(this.endpoint)).json()
      Object.assign(pageContent, {
        browserTabTitle: this.browserTabTitle,
        emailSubject: this.emailSubject,
        emailText: this.emailText,
        mainNavButtons: this.mainNavButtons
      })
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(pageContent)
      })
      console.log('Save data:\n', response)
    }
  },
  mounted () {
    console.log(this.endpoint)
    this.getData()
  }
}
</script>
