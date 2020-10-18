<template>
  <v-container fluid>
    <v-card class="mx-auto pa-6" max-width="600">
      <h2 style="color: #09b">General Info About Pineapple NET</h2>
      <v-card-text>
        <p><b>Address:</b></p>
        <Paragraph :value.sync="address" />
      </v-card-text>
      <v-card-text>
        <p><b>Phone:</b></p>
        <Paragraph :value.sync="phone" />
      </v-card-text>
      <v-card-text>
        <p><b>Email:</b></p>
        <Paragraph :value.sync="email" />
      </v-card-text>
      <v-card-text>
        <p><b>ABN:</b></p>
        <Paragraph :value.sync="abn" />
      </v-card-text>
      <v-card-text>
        <p><b>LinkedIn:</b></p>
        <Paragraph :value.sync="linkedin" />
      </v-card-text>
      <v-card-text>
        <p><b>Facebook:</b></p>
        <Paragraph :value.sync="fb" />
      </v-card-text>
    </v-card>

    <!-- ============================= BOTTOM NAV ============================= -->
    <!-- <v-bottom-navigation
          fixed
          dark
          class="buttons"
          v-if="authorized"
    >
      <v-btn @click="saveData" v-if="authorized">
        <span>Save</span>
        <v-icon>mdi-content-save-edit</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
  </v-container>
</template>

<style>
.v-btn.v-size--large {
  font-size: 1.2rem!important;
  font-weight: bold;
}
</style>

<script>

import { mapState } from 'vuex'

import Paragraph from '@/components/inputs/Paragraph.vue'

export default {
  name: 'Home',
  components: {
    Paragraph
  },
  computed: {
    ...mapState(['authorized', 'generalInfoEndpoint', 'officeAddress', 'officePhone', 'officeEmail', 'officeABN', 'linkedIn', 'faceBook']),
    address: {
      get () {
        return this.officeAddress
      },
      set (val) {
        this.$store.commit('UPDATE_GENERAL_INFO', { prop: 'officeAddress', value: val })
      }
    },
    phone: {
      get () {
        return this.officePhone
      },
      set (val) {
        this.$store.commit('UPDATE_GENERAL_INFO', { prop: 'officePhone', value: val })
      }
    },
    email: {
      get () {
        return this.officeEmail
      },
      set (val) {
        this.$store.commit('UPDATE_GENERAL_INFO', { prop: 'officeEmail', value: val })
      }
    },
    abn: {
      get () {
        return this.officeABN
      },
      set (val) {
        this.$store.commit('UPDATE_GENERAL_INFO', { prop: 'officeABN', value: val })
      }
    },
    linkedin: {
      get () {
        return this.linkedIn
      },
      set (val) {
        this.$store.commit('UPDATE_GENERAL_INFO', { prop: 'linkedIn', value: val })
      }
    },
    fb: {
      get () {
        return this.faceBook
      },
      set (val) {
        this.$store.commit('UPDATE_GENERAL_INFO', { prop: 'faceBook', value: val })
      }
    }
  },
  methods: {
    async saveData ({ state }) {
      const response = await fetch(state.generalInfoEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify({
          officeAddress: this.address,
          officePhone: this.phone,
          officeEmail: this.email,
          officeABN: this.abn,
          linkedIn: this.linkedin,
          faceBook: this.fb
        })
      })
      return response
    }
  }
}
</script>
