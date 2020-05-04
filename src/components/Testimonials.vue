<template>
  <v-container fluid class="homefone">
    <v-card flat class="transparent mx-auto mt-12 mb-0 text-center" max-width="1360">
      <v-tooltip top color="info">
        <template v-slot:activator="{ on }">
          <v-btn fab dark small color="warning" v-on="on" @click="saveContent">
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </template>
        <span>Save section content</span>
      </v-tooltip>
      <v-card-title class="text-center" max-width="940">
        <h2
            style="width: 100%;
            text-align: center"
            ref="testimonialsTitle"
            contenteditable
            v-text="content.header"
        ></h2>
      </v-card-title>

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
            class="ma-4"
            height="250"
            width="376"
            @click="toggle"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <TestimonialsCard
                      :index="index"
                      :date="testimonial.date"
                      :name="testimonial.name"
                      :photo.sync="testimonial.photo"
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
                    :date="testimonial.date"
                    :name="testimonial.name"
                    :photo="testimonial.photo"
                    :text="testimonial.text"
              />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card-text class="text-center text-md-left">
      <p class="submit-button mx-auto"
          contenteditable
          ref="testimonialsButton"
          v-text="content.button"
          color="buttons"
          dark
          rounded
          width="220"
          height="48"
      ></p>
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

</style>

<script>

import { mapState } from 'vuex'

import TestimonialsCard from '@/components/TestimonialsCard.vue'

export default {
  name: 'Testimonials',
  components: {
    TestimonialsCard
  },
  props: ['page'],
  data: () => ({ model: 0 }),
  computed: {
    ...mapState('content', {
      content: 'testimonials'
    }),
    ...mapState('testimonials', ['testimonials']),
    ...mapState(['viewportWidth']),
    cardWidth () {
      return this.viewportWidth < 600 ? this.viewportWidth - 100 : 376
    },
    textSize () {
      return this.viewportWidth < 600 ? '12px' : '14px'
    }
  },
  methods: {
    saveContent () {
      this.$store.commit('content/UPDATE_TESTIMONIALS', { prop: 'header', value: this.$refs.testimonialsTitle.innerText })
      this.$store.commit('content/UPDATE_TESTIMONIALS', { prop: 'button', value: this.$refs.testimonialsButton.innerText })
      this.$store.commit('SET_POPUP_TITLE', 'SECTION CONTENT')
      this.$store.commit('SET_POPUP_TEXT', 'Data successfully saved')
      this.$store.commit('SHOW_POPUP')
    }
  },
  mounted () {
    this.$store.dispatch('testimonials/GET_CONTENT')
  }
}

</script>
