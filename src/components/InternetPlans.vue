<template>
  <v-card
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
        <PriceCard class="d-none d-md-block"
                  v-for="(item, index) in plans[plan]"
                  :key="index"
                  :item="item"
                  :index="index"
                  :contact.sync="contact"
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
                        :contact.sync="contact"
              />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </v-slide-x-transition>
  </v-card>
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

import SubHeader from '@/components/inputs/SubHeader.vue'
import PriceCard from '@/components/plans/PriceCard.vue'
import SwitchMode from '@/components/plans/SwitchToggle.vue'

export default {
  name: 'InternetPlans',
  components: {
    SubHeader,
    PriceCard,
    SwitchMode
  },
  props: ['page'],
  data () {
    return {
      contact: false,
      ready: false
    }
  },
  computed: {
    ...mapState(['viewportWidth', 'plan']),
    ...mapState('internetPlans', ['plans']),
    ...mapState('content', ['internetPlans']),
    carouselHeight () {
      return this.viewportWidth < 960 ? this.viewportWidth < 600 ? 420 : 480 : 420
    },
    header: {
      get () {
        return this.internetPlans ? this.internetPlans.header : 'FIBRE INTERNET PLANS'
      },
      set (val) {
        this.$store.commit('content/UPDATE_INTERNET_PLANS_CONTENT', { prop: 'header', value: val })
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
