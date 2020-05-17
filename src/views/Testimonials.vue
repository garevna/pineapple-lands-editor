<template>
  <v-container fluid class="homefone pt-12" v-if="testimonials">
    <v-card flat class="transparent mx-auto mt-0 mb-12 text-center" max-width="1440">
      <v-row justify="center">
        <v-col
                cols="12"
                md="6"
                lg="4"
                v-for="(testimonial, index) in testimonials"
                :key="index"
        >
                <TestimonialsCard
                      :index="index"
                      :date="testimonial.date"
                      :name="testimonial.name"
                      :photo.sync="testimonial.photo"
                      :text="testimonial.text"
                />
        </v-col>
      </v-row>
    </v-card>

    <v-tooltip top dark color="#09b" v-if="$route.name === 'testimonials'">
      <template v-slot:activator="{ on }">
        <v-btn
              absolute
              fab
              dark
              small
              bottom
              right
              color="#09b"
              class="button-plus"
              @click="$store.commit('testimonials/ADD_ITEM')"
               v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Add item</span>
    </v-tooltip>

    <!-- ============================= BOTTOM NAV ============================= -->
    <v-bottom-navigation
          fixed
          dark
          class="buttons"
          v-if="authorized"
    >
      <v-btn @click="saveContent" v-if="authorized">
        <span>Save</span>
        <v-icon>mdi-content-save-edit</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <ImageGallery />
    <Popup />
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

import TestimonialsCard from '@/components/editor/TestimonialsCard.vue'
import ImageGallery from '@/components/editor/ImageGallery.vue'
import Popup from '@/components/editor/Popup.vue'

export default {
  name: 'Testimonials',
  components: {
    TestimonialsCard,
    ImageGallery,
    Popup
  },
  props: ['page'],
  data: () => ({ model: 0 }),
  computed: {
    ...mapState('content', {
      content: 'testimonials'
    }),
    ...mapState('testimonials', ['testimonials']),
    ...mapState(['viewportWidth', 'authorized']),
    cardWidth () {
      return this.viewportWidth < 600 ? this.viewportWidth - 100 : 376
    },
    textSize () {
      return this.viewportWidth < 600 ? '12px' : '14px'
    }
  },
  methods: {
    saveContent () {
      this.$store.commit('SET_POPUP_TITLE', 'REVIEWS')
      this.$store.commit('SET_POPUP_TEXT', 'Data successfully saved')
      this.$store.commit('SHOW_POPUP')
    }
  },
  mounted () {
    this.$store.dispatch('testimonials/GET_CONTENT')
  }
}

</script>
