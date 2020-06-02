<template>
  <v-card flat width="100%" max-width="600" class="transparent">
    <ChangePicture
          :gallery.sync="gallery"
          :action.sync="save"
    />
    <ImageGallery
          :activate.sync="gallery"
          destination="destination"
          :selectedImageURL.sync="imageURL"
    />
    <v-img :src="imageSrc" :max-width="imageSize"></v-img>
  </v-card>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'Button',
  props: ['imageSrc', 'destination'],
  data () {
    return {
      gallery: false

    }
  },
  computed: {
    imageURL: {
      get () {
        return this.imageSrc
      },
      set (val) {
        this.$emit('update:imageSrc', val)
      }
    }
  }
}
</script>
