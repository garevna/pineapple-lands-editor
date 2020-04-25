<template>
  <v-container fluid class="homefone">

    <v-card flat class="transparent mx-auto my-12 text-center" max-width="1360">
      <v-card-title class="text-center" max-width="940">
        <h1 style="width: 100%; text-align: center">{{ content.header }}</h1>
      </v-card-title>

      <v-slide-group
        v-if="screen >= 600"
        v-model="model"
        class="pa-4"
        center-active
        show-arrows
      >
        <v-slide-item
          v-for="(testimonial, index) in testimonials"
          :key="index"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            class="ma-4"
            height="340"
            width="376"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-card flat hover :width="cardWidth" height="340" style="position: relative" pa-4>
                  <img :src="testimonial.photo" class="testimonial-photo" width="40" height="40" style="border-radius: 50%" :alt="testimonial.name" />
                  <p class="testimonial-name">{{ testimonial.name }}</p>
                  <p class="testimonial-text" :style="{ fontSize: textSize }">{{ testimonial.text }}</p>
                  <p class="testimonial-date">{{ testimonial.date }}</p>
                </v-card>
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
            height="340"
            width="100%"
            light
            class="testimonials transparent"
      >
        <v-carousel-item
          v-for="(testimonial, index) in testimonials"
          :key="index"
        >
          <v-sheet height="100%" tile class="transparent">
            <v-row align="center" justify="center">
              <v-card hover width="70%" height="320" style="position: relative" pa-4>
                <img :src="testimonial.photo" class="testimonial-photo" width="40" height="40" style="border-radius: 50%" :alt="testimonial.name" />
                <p class="testimonial-name">{{ testimonial.name }}</p>
                <p class="testimonial-text" :style="{ fontSize: textSize }" v-html="testimonial.text"></p>
                <p class="testimonial-date">{{ testimonial.date }}</p>
              </v-card>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
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
          {{ content.button }}
      </v-btn>
    </v-card-text>
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

.testimonial-name,
.testimonial-text,
.testimonial-date,
.testimonial-photo {
  position: absolute;
}

.testimonial-name, .testimonial-date { text-align: left; }

.testimonial-photo {
  top: 30px;
  left: 20px;
  border-radius: 50%!important;
}
.testimonial-name {
  top: 36px;
  left: 70px;
  font-size: 15px;
  font-weight: bold;
}
.testimonial-text {
  position: absolute;
  top: 80px;
  left: 20px;
  width: calc(100% - 40px);
  text-align: justify;
  /* font-size: 14px; */
  font-weight: normal;
}
.testimonial-date {
  position: absolute;
  bottom: 4px;
  left: 12px;
  font-size: 12px;
  font-weight: normal;
}
</style>

<script>

import { mapState } from 'vuex'

// import CardsShow from '@/components/CardsShow.vue'

export default {
  name: 'Testimonials',

  data: () => ({
    model: 0
  }),

  computed: {
    ...mapState('content', {
      content: 'testimonials'
    }),
    ...mapState('testimonials', ['testimonials']),
    ...mapState({
      screen: 'viewportWidth'
    }),
    cardWidth () {
      return this.screen < 600 ? this.screen - 100 : 376
    },
    textSize () {
      return this.screen < 600 ? '12px' : '14px'
    }
  },
  methods: {
    action () {
      console.log('Testimonials action')
    }
  },
  mounted () {
    this.$store.dispatch('testimonials/GET_CONTENT')
  }
}

</script>
