<template>
  <v-card
    v-if="internetPlansReady"
    flat
    width="100%"
    class="transparent my-10"
  >
    <v-card-title>
      <SubHeader :value.sync=header />
    </v-card-title>

    <v-card-text width="100%" class="mx-0 px-0 text-center">
      <SwitchMode />
    </v-card-text>

    <v-slide-x-transition leave-absolute>
      <v-card
        flat
        class="d-flex flex-wrap justify-center transparent"
      >
        <!-- <Tariff
          v-for="(item, index) in plans[plan]"
          :key="index"
          plan="plan"
          :index="index"
        /> -->
        <PriceCard class="d-none d-md-block"
          v-for="(item, index) in plans[plan]"
          :key="index"
          :item="item"
          :index="index"
        />

      <v-carousel
          :height="carouselHeight"
          hide-delimiter-background
          show-arrows-on-hover
          class="d-block d-md-none"
        >
          <v-carousel-item
            v-for="(item, index) in plans[plan]"
            :key="index"
          >
            <v-sheet
              height="320"
              light
              class="transparent"
            >
              <v-row
                class="fill-height transparent"
                align="center"
                justify="center"
              >
              <PriceCard
                :mode="plan"
                :item="item"
                :index="index"
              />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-slide-x-transition>
    <v-card-text class="text-center">
      <Button
        v-if="button"
        :value.sync="button"
        :goto.sync="goto"
        class="mx-auto"
        style="max-width: 480px"
      />
    </v-card-text>
  </v-card>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

import { SubHeader, Button } from '@/components/inputs'

import { SwitchToggle, PriceCard } from '@/components/plans'

export default {
  name: 'InternetPlans',
  components: {
    SubHeader,
    SwitchMode: SwitchToggle,
    Button,
    PriceCard
  },
  props: ['page'],
  data () {
    return {
      contact: false
    }
  },
  computed: {
    ...mapState(['viewportWidth', 'plan', 'internetPlansReady']),
    ...mapState('internetPlans', ['plans']),
    ...mapState('content', ['internetPlans']),
    header: {
      get () {
        return this.internetPlans ? this.internetPlans.header : 'FIBRE INTERNET PLANS'
      },
      set (value) {
        this.update({ prop: 'header', value })
      }
    },
    button: {
      get () {
        // return this.internetPlans ? this.internetPlans.button || 'Contact Us' : 'Contact Us'
        return this.internetPlans ? this.internetPlans.button : null
      },
      set (value) {
        this.update({ prop: 'button', value })
      }
    },
    goto: {
      get () {
        return this.internetPlans ? this.internetPlans.goto || '#contact' : '#contact'
      },
      set (value) {
        this.update({ prop: 'goto', value })
      }
    },
    carouselHeight () {
      return this.viewportWidth < 960 ? this.viewportWidth < 600 ? 420 : 480 : 420
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_INTERNET_PLANS'
    })
  }
}
</script>

<style scoped>
.v-btn.v-btn--icon {
  background: #94C578!important;
}
.v-window__prev .v-btn:hover,
.v-window__next .v-btn:hover {
  background: #20731C!important;
}
</style>
