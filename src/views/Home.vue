<template>
  <v-container fluid v-if="generalInfoReady">
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
  </v-container>
</template>

<style>
.v-btn.v-size--large {
  font-size: 1.2rem!important;
  font-weight: bold;
}
</style>

<script>

import { mapState, mapMutations } from 'vuex'

import { Paragraph } from '@/components/inputs'

export default {
  name: 'Home',
  components: {
    Paragraph
  },
  computed: {
    ...mapState(['authorized', 'officeAddress', 'officePhone', 'officeEmail', 'officeABN', 'linkedIn', 'faceBook', 'generalInfoReady']),
    address: {
      get () {
        return this.officeAddress
      },
      set (val) {
        this.update({ officeAddress: val })
      }
    },
    phone: {
      get () {
        return this.officePhone
      },
      set (val) {
        this.update({ officePhone: val })
      }
    },
    email: {
      get () {
        return this.officeEmail
      },
      set (val) {
        this.update({ officeEmail: val })
      }
    },
    abn: {
      get () {
        return this.officeABN
      },
      set (val) {
        this.update({ officeABN: val })
      }
    },
    linkedin: {
      get () {
        return this.linkedIn
      },
      set (val) {
        this.update({ linkedIn: val })
      }
    },
    fb: {
      get () {
        return this.faceBook
      },
      set (val) {
        this.update({ faceBook: val })
      }
    }
  },
  methods: {
    ...mapMutations({
      update: 'UPDATE_GENERAL_INFO'
    })
  }
}
</script>
