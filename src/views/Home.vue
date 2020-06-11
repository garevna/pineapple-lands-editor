<template>
  <v-container fluid>
    <h2 style="color: #09b">Overall about landing pages</h2>
    <v-row>
      <v-col
            cols="12"
            v-for="cardNum in [1, 2, 3, 4]"
            :key="cardNum"
        >
          <LandInfoCard :index="cardNum" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.v-btn.v-size--large {
  font-size: 1.2rem!important;
  font-weight: bold;
}
</style>

<script>

import LandInfoCard from '@/components/editor/LandInfoCard.vue'

export default {
  name: 'Home',
  components: {
    LandInfoCard
  }
}
</script>
