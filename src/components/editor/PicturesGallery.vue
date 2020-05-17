<template>
  <ImageGallery v-if="gallery" :src.sync="pictureURL" :gallery.sync=gallery />
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'PicturesGallery',
  props: ['open', 'pictureURL'],
  data () {
    return {
      //
    }
  },
  computed: {
    ...mapGetters('editor', ['hostEndpoint']),
    endpoint () {
      return `${hostEndpoint}/images`
    }
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
  mounted () {

  }
}
</script>
