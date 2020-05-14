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
            <v-btn text @click.native="submit">SUBMIT</v-btn>
            <v-btn text @click="$emit('update:opened', false)">CLOSE</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<style scoped>
</style>

<script>

import { mapGetters, mapActions } from 'vuex'

const crypto = require('cryptico')
const keyRSA = crypto.generateRSAKey(process.env.VUE_APP_SECRET, 1024)
const publicKey = crypto.publicKeyString(keyRSA)

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
  computed: {
    ...mapGetters('editor', ['hostEndpoint'])
  },
  methods: {
    ...mapActions({
      accessDenied: 'AUTH_FAIL',
      accessGranted: 'AUTH_SUCCESS'
    }),
    authFail () {
      this.accessDenied()
      this.$emit('update:opened', false)
    },
    authSuccess () {
      this.accessGranted()
      this.$emit('update:opened', false)
    },
    validate: async function () {
      const userlogin = crypto.encrypt(this.login, publicKey)
      const pass = crypto.encrypt(this.password, publicKey)
      this.login = ''
      this.password = ''
      if (!userlogin.status || !pass.status) return this.authFail()

      const response = await fetch(`${this.hostEndpoint}/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: userlogin.cipher,
          password: pass.cipher
        })
      })
      console.log(response)
      if (response.status !== 200) return this.authFail()
      this.authSuccess()
      const token = await response.text()
      localStorage.setItem('token', token)
      this.$emit('update:opened', false)
    }
  },
  mounted () {
    this.submit = this.validate.bind(this)
  }
}
</script>
