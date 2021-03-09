<template>
  <v-container v-if="internetPlansReady">
    <v-card-text class="text-center">
      <h1>FIBRE <span class="green--text">INTERNET PLANS</span></h1>
    </v-card-text>
    <v-row align="center" justify="center">
      <v-card-text width="100%" class="mx-0 px-0 text-center">
        <h2 style="color: #090">Residential</h2>
      </v-card-text>

      <v-col
          cols="12"
          md="4"
          lg="3"
          v-for="(plan, num) in plans.residential"
          :key="`residential_${num}`"
      >
        <PriceCard plan="residential" :item="plan" :index="num" />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-card-text width="100%" class="mx-0 px-0 text-center">
        <h2 style="color: #090">Business</h2>
      </v-card-text>

      <v-col
          cols="12"
          md="4"
          lg="3"
          v-for="(item, index) in plans.business"
          :key="index"
      >
        <PriceCard plan="business" :item="item" :index="index" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-btn.v-btn--icon {
  background: #94C578!important;
}
.v-window__prev .v-btn:hover,
.v-window__next .v-btn:hover {
  background: #20731C!important;
}
</style>

<script>

import { mapState } from 'vuex'

import { PriceCard } from '@/components/editor'

export default {
  name: 'InternetPlans',
  components: {
    PriceCard
  },
  props: ['page'],
  data () {
    return {
      ready: false
    }
  },
  computed: {
    ...mapState(['plan', 'internetPlansReady']),
    ...mapState('internetPlans', ['plans'])
  },
  watch: {
    contact (val) {
      if (!val) return
      this.$emit('update:page', '#footer')
      this.contact = false
    }
  }
}
</script>
