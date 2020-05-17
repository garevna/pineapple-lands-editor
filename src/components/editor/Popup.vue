<template>
  <v-row justify="center">
      <v-dialog v-model="popup" persistent max-width="290">
        <v-card class="pa-6">
          <v-card-title>
            <h2 text-color="primary">{{ popupTitle }}</h2>
          </v-card-title>
          <v-card-text>
            <p>{{ popupText }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="$store.commit('HIDE_POPUP')">CLOSE</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<style scoped>
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Popup',
  computed: {
    ...mapState(['popup', 'popupTitle', 'popupText', 'popapAction'])
  },
  methods: {
    action () {
      this.$emit('update:action', true)
      this.$store.commit('HIDE_POPUP')
    }
  }
}
</script>
