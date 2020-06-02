<template>
  <ImageGallery v-if="gallery" :src.sync="pictureURL" :gallery.sync=gallery />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PicturesGallery',
  props: ['open', 'pictureURL', ''],
  data () {
    return {
      //
    }
  },
  computed: {
    endpoint () {
      /* eslint-disable no-undef */
      return `${hostEndpoint}/images`
    },
    gallery: {
      get () {
        return this.open
      },
      set (val) {
        this.$emit('update:open', val)
      }
    }
  },
  watch: {

  },
  methods: {
    ...mapActions('editor', ['GET_'])
  },
  mounted () {

  }
}
</script>
