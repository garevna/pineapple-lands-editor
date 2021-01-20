<template>
  <v-row justify="center">
    <v-dialog v-model="popup.open" persistent min-width="360" max-width="480">
      <v-card class="pa-4">
        <v-toolbar flat class="transparent mb-8">
          <v-toolbar-title>
            <h5>
              {{ popup.title }}
            </h5>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon large @click="hide">
            <v-icon large>$close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <p :style="{ color: popup.color }"><b>{{ popup.text }}</b></p>
        </v-card-text>
        <v-card-actions v-if="popup.label">
          <v-spacer></v-spacer>
          <v-btn text @click="setAction">
            {{ popup.label }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>
</style>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Popup',
  computed: {
    ...mapState(['popup'])
  },
  methods: {
    ...mapMutations({
      hide: 'HIDE_POPUP',
      action: 'CONFIRM_ACTION'
    }),
    setAction () {
      this.action()
      this.hide()
    }
  }
}
</script>
