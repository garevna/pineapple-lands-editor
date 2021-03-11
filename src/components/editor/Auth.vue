<template>
  <v-row justify="center">
      <v-dialog v-model="opened" persistent max-width="360">
        <v-card class="pa-2">
          <v-toolbar flat class="transparent mb-8">
            <v-toolbar-title>
              <h3><v-icon x-large color="#444">$login</v-icon> Sign In</h3>
            </v-toolbar-title>
            <v-spacer />
            <v-btn icon @click="$emit('update:opened', false)">
              <v-icon x-large>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text v-if="!spinner">
            <v-text-field
              label="Login"
              v-model="login"
              outlined
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              outlined
            ></v-text-field>
          </v-card-text>
          <Spinner v-if="spinner" />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="sendRequest" v-if="!spinner">SUBMIT</v-btn>
            <v-btn text @click="$emit('update:opened', false)">CLOSE</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<style scoped>
</style>

<script>

import { auth } from '@/helpers'
import { mapMutations } from 'vuex'

export default {
  name: 'Auth',
  props: ['opened', 'auth'],
  data () {
    return {
      login: '',
      password: '',
      submit: null,
      spinner: false
    }
  },
  methods: {
    ...mapMutations({
      accessDenied: 'AUTH_FAILURE',
      accessGranted: 'AUTH_SUCCESS'
    }),
    sendRequest () {
      this.spinner = true
      const { login, password } = auth(this.login, this.password)
      this.__authorization(login, password)
    },
    validate: async function (event) {
      this.spinner = false
      const { action, status } = event.data
      if (action !== 'auth') return
      status !== 200 ? this.accessDenied() : this.accessGranted()
      this.$emit('update:opened', false)
    }
  },
  mounted () {
    this.__authWorker.addEventListener('message', this.validate)
  }
}
</script>
