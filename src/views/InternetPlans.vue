<template>
  <v-container v-if="ready">

    <v-card-text class="text-center">
      <h1>FIBRE <span class="green--text">INTERNET PLANS</span></h1>
    </v-card-text>

    <!-- <v-card
          flat
          width="100%"
          class="transparent my-10"
    > -->
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

    <!-- </v-card> -->

    <!-- ============================= BOTTOM NAV ============================= -->
    <v-bottom-navigation
          fixed
          dark
          class="buttons"
          v-if="authorized"
    >
      <v-btn @click="saveData" v-if="authorized">
        <span>Save</span>
        <v-icon>mdi-content-save-edit</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <!-- <Popup /> -->
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

import { mapState, mapActions } from 'vuex'

import PriceCard from '@/components/editor/PriceCard.vue'

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
    ...mapState(['viewportWidth', 'plan', 'authorized']),
    ...mapState('internetPlans', ['plans'])
  },
  watch: {
    contact (val) {
      if (!val) return
      this.$emit('update:page', '#footer')
      this.contact = false
    }
  },
  methods: {
    ...mapActions('internetPlans', {
      getData: 'GET_DATA',
      saveData: 'SAVE_DATA'
    })
  },
  beforeMount () {
    this.getData().then((response) => {
      console.log(response)
      this.ready = true
    })
  }
}
</script>
