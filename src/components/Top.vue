<template>
<v-container fluid style="overflow-x: hidden; margin-top: 160px;">
  <v-card flat class="mx-auto homefone" width="100%" max-width="1440">
    <v-row align="center" justify="center">
      <v-col sm="12" md="6">
        <v-card flat width="100%" class="transparent mx-auto">
          <v-card-text class="text-center text-md-left">
            <h1 class="text-center text-md-left">{{ top.header }}</h1>
          </v-card-text>
          <v-card-text class="mx-auto mx-lg-0">
            <p class="text-center text-md-left">
              {{ top.text }}
            </p>
          </v-card-text>
          <v-card-text class="text-center text-md-left">
            <v-btn
                color="buttons"
                dark
                rounded
                width="220"
                height="48"
                class="px-auto mx-auto"
                @click="action"
            >
                {{ top.button }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" md="6">
          <v-card flat class="transparent">
            <v-img :src="familyPicture" max-width="750" class="mx-auto"></v-img>
          </v-card>
      </v-col>
    </v-row>
  </v-card>
</v-container>
</template>

<style scoped>
</style>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Top',
  computed: {
    ...mapState('content', ['top']),
    ...mapGetters(['familyPicture'])
  },
  methods: {
    action () {
      console.log('Action')
    }
  },
  mounted () {
    console.log(this.familyPicture)
  }
}
</script>
