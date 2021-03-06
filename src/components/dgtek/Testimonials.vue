<template>
  <v-container fluid class="homefone">
    <v-card flat class="transparent mx-auto mt-12 mb-0 text-center" max-width="960">
      <v-card-text class="text-center">
        <SubHeader :value.sync="header" class="mx-auto" />
      </v-card-text>

      <v-slide-group
        v-if="viewportWidth >= 600"
        v-model="model"
        class="pa-12"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="(testimonial, index) in testimonials"
          :key="index"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            flat
            class="transparent ma-4"
            height="320"
            width="auto"
            @click="toggle"
          >
            <v-row
              class="transparent fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <TestimonialsCard
                      :date="testimonial.published_at"
                      :name="testimonial.name"
                      :photo="testimonial.logo"
                      :text="testimonial.text"
                />
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-carousel
            v-else
            :continuous="true"
            :show-arrows="true"
            hide-delimiters
            height="280"
            width="100%"
            light
            class="testimonials transparent my-10"
      >
        <v-carousel-item
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <v-sheet height="100%" flat tile class="transparent">
            <v-row align="center" justify="center">
              <TestimonialsCard
                    :date="testimonial.published_at"
                    :name="testimonial.name"
                    :photo="testimonial.logo"
                    :text="testimonial.text"
              />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
</template>

<style>
.testimonials .v-btn__content,
.testimonials .mdi::before,
.testimonials .mdi-chevron-right::before,
.testimonials .v-icon::after {
  color: #fff!important;
}

.testimonials .theme--light.v-btn.v-btn--icon {
  background: #7b79!important;
  color: #fff!important;
}
</style>

<style scoped>

.v-carousel__controls {
  z-index: 0!important;
}

</style>

<script>

import { mapState, mapMutations } from 'vuex'

import { SubHeader } from '@/components/inputs'

export default {
  name: 'Testimonials',
  components: {
    TestimonialsCard: () => import('@/components/TestimonialsCard.vue'),
    SubHeader
  },
  props: ['page'],
  data: () => ({
    model: 0,
    testimonials: null
  }),
  computed: {
    ...mapState('content', {
      content: 'testimonials'
    }),
    ...mapState(['viewportWidth']),
    cardWidth () {
      return this.viewportWidth < 600 ? this.viewportWidth - 100 : 376
    },
    textSize () {
      return this.viewportWidth < 600 ? '12px' : '14px'
    },
    header: {
      get () {
        return this.content.header
      },
      set (val) {
        this.update({ prop: 'header', value: val })
      }
    },
    button: {
      get () {
        return this.content.button
      },
      set (val) {
        this.update({ prop: 'button', value: val })
      }
    },
    goto: {
      get () {
        return this.content.goto
      },
      set (val) {
        this.update({ prop: 'goto', value: val })
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_TESTIMONIALS'
    }),
    async getReviews () {
      this.testimonials = (await (await fetch('https://dka.dgtek.net/api/frontend/testimonials')).json()).data
    }
  },
  created () {
    this.getReviews()
  }
}

</script>
