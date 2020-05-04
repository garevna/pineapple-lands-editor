<template>
  <v-row justify="center">
      <v-dialog v-model="opened" persistent max-width="290">
        <v-card class="pa-6">
          <v-card-title>
            <h2 text-color="primary">Sign In</h2>
          </v-card-title>
          <v-card-text>
            <p>login</p>
            <v-text-field
                v-model="login"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <p>Password</p>
            <v-text-field
                v-model="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="submit-button" text @click="$emit('update:opened', false)">CLOSE</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<style scoped>
</style>

<script>

import { mapGetters } from 'vuex'

const crypto = require("crypto-js")

export default {
  name: 'Popup',
  props: ['opened', 'title', 'text'],
  data () {
    return {
      login: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters('editor',['hostEndpoint'])
  },
  methods: {
    async validate () {
      const passw = crypto.AES.encrypt(this.password, process.env.SECRET).toString()
      this.password = ''
      const admin = await fetch(`${hostEndpoint}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: this.login,
          pass: passw
        })
      })
      console.log(admin)
    }
  }
}
</script>
