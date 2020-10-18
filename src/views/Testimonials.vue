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
          <TestimonialsCard :index="index" :content="testimonial" :removed.sync="removed" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn
              fab
              dark
              small
              max-width="320"
              color="info"
              @click.stop="addReview"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>
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

import { mapState, mapActions } from 'vuex'

import TestimonialsCard from '@/components/editor/TestimonialsCard.vue'

export default {
  name: 'Testimonials',
  components: {
    TestimonialsCard
  },
  props: ['page'],
  data: () => ({
    model: 0,
    testimonials: [],
    removed: false
  }),
  computed: {
    ...mapState('testimonials', {
      reviews: 'testimonials'
    })
  },
  watch: {
    removed (val) {
      if (typeof val !== 'number') return console.log('Nothing to remove')
      this.$store.commit('testimonials/REMOVE_ITEM', val)
      this.testimonials = this.$store.state.testimonials.testimonials
      this.removed = null
    },
    testimonials: {
      deep: true,
      handler () {
        this.testimonials = this.$store.state.testimonials.testimonials
      }
    }
  },
  methods: {
    ...mapActions('testimonials', {
      getTestimonials: 'GET_CONTENT'
    }),
    addReview () {
      this.$store.commit('testimonials/ADD_ITEM')
    }
  },
  mounted () {
    this.getTestimonials().then(() => {
      this.testimonials = this.reviews
    })
  }
}

</script>
