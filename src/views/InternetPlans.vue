<template>
  <v-container v-if="internetPlansReady">
    <v-card-text class="text-center">
      <h1>FIBRE <span class="green--text">INTERNET PLANS</span></h1>
    </v-card-text>
    <v-row align="center" justify="center">
      <v-card-text width="100%" class="mx-0 px-0 text-center">
        <h2 style="color: #090">Residential</h2>
      </v-card-text>

      <table>
        <thead>
          <tr>
            <th></th>
            <th> Name </th>
            <th> Download </th>
            <th> Upload </th>
            <th> Data limit </th>
            <th> Price </th>
            <th>Tariff id</th>
          </tr>
        </thead>
        <tbody>
            <Tariff
              v-for="(plan, index) in residential"
              :key="`residential-${index}`"
              :index="index"
              plan="residential"
            />
        </tbody>
      </table>
    </v-row>

    <v-row align="center" justify="center">
      <v-card-text width="100%" class="mx-0 px-0 text-center">
        <h2 style="color: #090">Business</h2>
      </v-card-text>
        <Tariff
          v-for="(plan, num) in business"
          :key="`business-${num}`"
          :index="num"
          plan="business"
        />
    </v-row>
  </v-container>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

import { Tariff } from '@/components/plans'

export default {
  name: 'InternetPlans',
  components: {
    Tariff
  },
  props: ['page'],
  data () {
    return {
      ready: false
    }
  },
  computed: {
    ...mapState(['plan', 'internetPlansReady']),
    ...mapState('internetPlans', ['plans']),
    ...mapMutations('internetPlans', {
      updateResidential: 'SET_RESIDENTIAL',
      updateBusiness: 'SET_BUSINESS'
    }),
    residential: {
      get () {
        return this.plans.residential
      },
      set (val) {
        this.updateResidential(val)
      }
    },
    business: {
      get () {
        return this.plans.business
      },
      set (val) {
        this.updateResidential(val)
      }
    }
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

<style scoped>

table {
  display: block;
  width: 100%;
}
.v-btn.v-btn--icon {
  background: #94C578!important;
}
.v-window__prev .v-btn:hover,
.v-window__next .v-btn:hover {
  background: #20731C!important;
}
</style>
