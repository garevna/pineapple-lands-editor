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
      <v-btn
            fab
            dark
            small
            color="info"
            @click.stop="addReview"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card>

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
import Popup from '@/components/editor/Popup.vue'

export default {
  name: 'Testimonials',
  components: {
    TestimonialsCard,
    Popup
  },
  props: ['page'],
  data: () => ({
    model: 0,
    testimonials: [],
    removed: false
  }),
  computed: {
    ...mapState(['authorized'])
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
    addReview () {
      this.$store.commit('testimonials/ADD_ITEM')
    },
    async saveContent () {
      const response = await this.$store.dispatch('testimonials/SAVE_CONTENT')
      if (response === 200) {
        this.$store.commit('SET_POPUP_TITLE', 'REVIEWS')
        this.$store.commit('SET_POPUP_TEXT', 'Data successfully saved')
        this.$store.commit('SHOW_POPUP')
      } else {
        this.$store.commit('SET_POPUP_TITLE', 'REVIEWS')
        this.$store.commit('SET_POPUP_TEXT', 'Something wrong...')
        this.$store.commit('SHOW_POPUP')
      }
    }
  },
  mounted () {
    this.$store.dispatch('testimonials/GET_CONTENT')
      .then(() => {
        this.testimonials = this.$store.state.testimonials.testimonials
      })
  }
}

</script>
