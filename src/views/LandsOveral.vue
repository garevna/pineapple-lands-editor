<template>
  <v-container fluid>
    <h2 style="color: #09b">Overall about landing pages</h2>
    <v-card flat max-width="1440" class="transparent mx-auto">
      <v-row align="start" justify="center">
        <v-col cols="5">
          <ListOfLands :route.sync="routeItem" />
        </v-col>
        <v-col cols="7">
          <LandInfoCard
            v-if="routeItem"
            :route="routeItem.short"
            :url="routeItem.url ? routeItem.url : routeItem.title"
          />
        </v-col>
      </v-row>
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

export default {
  name: 'Home',
  components: {
    ListOfLands: () => import('@/components/editor/ListOfLands.vue'),
    LandInfoCard: () => import('@/components/editor/LandConfig.vue')
  },
  data: () => ({
    routeItem: null
  })
}
</script>
