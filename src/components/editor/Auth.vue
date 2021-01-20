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
          <v-card-text>
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
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="validate">SUBMIT</v-btn>
            <v-btn text @click="$emit('update:opened', false)">CLOSE</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<style scoped>
</style>

<script>

import { mapMutations } from 'vuex'

const { auth } = require('@/helpers').default

export default {
  name: 'Auth',
  props: ['opened', 'auth'],
  data () {
    return {
      login: '',
      password: '',
      submit: null
    }
  },
  methods: {
    ...mapMutations({
      accessDenied: 'AUTH_FAILURE',
      accessGranted: 'AUTH_SUCCESS'
    }),
    validate: async function () {
      const response = await auth(this.login, this.password)
      response.status !== 200 ? this.accessDenied() : this.accessGranted()
      this.$emit('update:opened', false)
    }
  }
}
</script>
