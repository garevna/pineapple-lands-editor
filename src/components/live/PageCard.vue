<template>
  <!-- <v-row align="center" justify="center"> -->
    <v-card class="mx-auto pa-4" max-width="1440">
      <h5 class="mx-8 mb-8">Building Address Details</h5>
      <v-row>
        <v-col cols="4">
          <v-text-field v-model="streetNumber" label="Number"></v-text-field>
        </v-col>
        <v-col cols="8">
          <v-text-field v-model="streetName" label="Street"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="city" label="City"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="state" label="State"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="postcode" label="Post code"></v-text-field>
        </v-col>
      </v-row>
      <v-text-field v-model="formatted" label="Building name"></v-text-field>
    </v-card>
  <!-- </v-row> -->
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'PageCard',
  // props: ['current'],
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['pages', 'currentLand']),
    ...mapState('content', ['address']),
    current () {
      return this.pages.findIndex(page => page.id === this.$route.path.slice(6))
    },
    city: {
      get () {
        return this.pages[this.current].address.city
      },
      set (val) {
        this.updatePageAddress(this.current, 'city', val)
      }
    },
    postcode: {
      get () {
        return this.pages[this.current].address.postcode
      },
      set (val) {
        this.updatePageAddress(this.current, 'postcode', val)
      }
    },
    state: {
      get () {
        return this.pages[this.current].address.state
      },
      set (val) {
        this.updatePageAddress(this.current, 'state', val)
      }
    },
    streetName: {
      get () {
        return this.pages[this.current].address.streetName
      },
      set (val) {
        this.updatePageAddress(this.current, 'streetName', val)
      }
    },
    streetNumber: {
      get () {
        return this.pages[this.current].address.streetNumber
      },
      set (val) {
        this.updatePageAddress(this.current, 'streetNumber', val)
      }
    },
    formatted: {
      get () {
        return this.pages[this.current].address.formatted
      },
      set (val) {
        this.updatePageAddress(this.current, 'formatted', val)
      }
    }
  },
  methods: {
    updatePageAddress (index, propName, propValue) {
      this.$store.commit('UPDATE_PAGE_ADDRESS', {
        index,
        propName,
        propValue
      })
      this.$store.commit('content/UPDATE_PAGE_ADDRESS', {
        propName,
        propValue
      })
    }
  }
}
</script>
