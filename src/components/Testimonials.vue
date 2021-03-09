<template>
  <v-container fluid class="homefone" v-if="testimonialsReady">
    <v-card flat class="transparent mx-auto mt-12 mb-0 text-center" max-width="1360">
      <v-card-title class="text-center" max-width="940">
        <SubHeader :value.sync="header" class="mx-auto" />
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
                      :date="testimonial.date"
                      :name="testimonial.name"
                      :photo="testimonial.photo"
                      :text="testimonial.text"
                      :removed.sync="removed"
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
                    :removed.sync="removed"
              />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card-text class="text-center">
      <Button
        v-if="content.button"
        :value.sync="content.button"
        :goto.sync="goto"
        class="mx-auto"
        style="max-width: 480px"
      />
    </v-card-text>
  </v-container>
</template>

<style>

</style>

<style scoped>

.v-carousel__controls {
  z-index: 0!important;
}

</style>

<script>

import { mapState, mapMutations } from 'vuex'

import { SubHeader, Button } from '@/components/inputs'

export default {
  name: 'Testimonials',
  components: {
    TestimonialsCard: () => import('@/components/TestimonialsCard.vue'),
    SubHeader,
    Button
  },
  props: ['page'],
  data: () => ({
    model: 0,
    removed: null
  }),
  computed: {
    ...mapState('content', {
      content: 'testimonials'
    }),
    ...mapState('testimonials', ['testimonials']),
    ...mapState(['viewportWidth', 'testimonialsReady']),
    header: {
      get () {
        return this.content?.header || 'Loading...'
      },
      set (val) {
        this.update('header', val)
      }
    },
    button: {
      get () {
        return this.content?.button || 'Loading...'
      },
      set (val) {
        this.update('button', val)
      }
    },
    goto: {
      get () {
        return this.content?.goto || null
      },
      set (val) {
        this.update('goto', val)
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      updateTestimonials: 'UPDATE_TESTIMONIALS'
    }),
    // ...mapActions('testimonials', {
    //   getContent: 'GET_CONTENT'
    // }),
    update (prop, value) {
      this.updateTestimonials({ prop, value })
    }
  },
  mounted () {
    // this.getContent()
  }
}

</script>
