<template>
  <v-card flat class="transparent">
    <table>
      <tbody>
        <tr>
          <td>
            <v-text-field
              v-model="streetNumber"
              label="Street Number"
              outlined
            />
          </td>
          <td>
            <v-text-field
              v-model="streetName"
              label="Street Name"
              outlined
            />
          </td>
          <td>
            <v-text-field
              v-model="city"
              label="Location"
              outlined
            />
          </td>
          <td>
            <v-text-field
              v-model="state"
              label="State"
              outlined
            />
          </td>
          <td>
            <v-text-field
              v-model="postcode"
              label="Post code"
              outlined
            />
          </td>
        </tr>
        <tr class="mt-4">
          <td colspan="5">
            <v-text-field
              v-model="formatted"
              label="Building name"
              outlined
              hide-details
            />
          </td>
        </tr>
      </tbody>
    </table>
    <v-card-actions>
      <v-spacer />
      <v-btn
        dark
        color="#09b"
        @click="save"
      >Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'LandConfigAddress',
  computed: {
    ...mapState(['pages', 'currentLand']),
    ...mapState('content', ['address']),

    pageId () {
      return this.currentLand.slice(5)
    },
    pageIndex () {
      return this.pages.findIndex(page => page.id === this.pageId)
    },

    streetNumber: {
      get () {
        return this.address.streetNumber
      },
      set (val) {
        this.update('streetNumber', val)
      }
    },
    streetName: {
      get () {
        return this.address.streetName
      },
      set (val) {
        this.update('streetName', val)
      }
    },
    city: {
      get () {
        return this.address.city
      },
      set (val) {
        this.update('city', val)
      }
    },
    state: {
      get () {
        return this.address.state
      },
      set (val) {
        this.update('state', val)
      }
    },
    postcode: {
      get () {
        return this.address.postcode
      },
      set (val) {
        this.update('postcode', val)
      }
    },
    formatted: {
      get () {
        return this.address.formatted
      },
      set (val) {
        this.update('formatted', val)
      }
    }
  },
  methods: {
    ...mapMutations({
      updatePages: 'UPDATE_PAGE_ADDRESS'
    }),
    ...mapMutations('content', {
      updateContent: 'UPDATE_PAGE_ADDRESS'
    }),
    save () {
      for (const propName in this.address) {
        this.updatePages({ index: this.pageIndex, propName, propValue: this.address[propName] })
      }
      this.__saveLivePage(this.pageId, this.$store.state.content)
      this.__saveLivePages(this.pages)
    },
    update (propName, propValue) {
      this.updateContent({ propName, propValue })
    }
  }
}
</script>

<style scoped>
table, tbody, tr, td {
  border: none!important;
}
</style>
