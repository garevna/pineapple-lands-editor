<template>
<div>
  <v-speed-dial
      v-model="edit"
      top
      left
      direction="right"
      transition="slide-x-transition"
  >
    <template v-slot:activator>
      <v-btn
          v-model="edit"
          color="info"
          dark
          small
          fab
      >
        <v-icon v-if="edit">mdi-close</v-icon>
        <v-icon v-else>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-tooltip top color="info" v-if="action">
      <template v-slot:activator="{ on }">
        <v-btn fab dark small color="error" v-on="on" @click="$emit('update:perform', index || true)">
          <v-icon>$delete</v-icon>
        </v-btn>
      </template>
      <span>Remove current item</span>
    </v-tooltip>

    <v-tooltip top color="info">
      <template v-slot:activator="{ on }">
        <v-btn fab dark small color="magenta" @click="$refs.picture.click()" v-on="on" v-if="authorized">
          <v-icon>mdi-file-upload</v-icon>
        </v-btn>
      </template>
      <span>Change picture via upload</span>
    </v-tooltip>

    <v-tooltip top color="info">
      <template v-slot:activator="{ on }">
        <v-btn fab dark small color="warning" v-on="on" @click="gallery = true">
          <v-icon>mdi-image-search</v-icon>
        </v-btn>
      </template>
      <span>Select picture from server</span>
    </v-tooltip>
  </v-speed-dial>
  <input
        type="file"
        ref="picture"
        style="display: none"
        @input="uploadFile($event.target.files[0])"
  >
  <ImageGallery
        :activate.sync="gallery"
        :destination="destination"
        :selectedImageURL.sync="imageURL"
  />
</div>
</template>

<style scoped>
.v-speed-dial {
  position: absolute;
}
.v-btn--floating {
  position: relative;
}
</style>

<script>

import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'ChangePicture',
  components: {
    ImageGallery: () => import('@/components/editor/ImageGallery.vue')
  },
  props: {
    destination: String, /* required; must be 'image', 'icon' or 'avatar' */
    pictureURL: String, /* (sync) required; static url of image */
    index: Number, /* optional; if this is the array element */
    action: Boolean, /* optional; if we need the additional button */
    perform: Boolean /* (sync) optional; if the additinal button was clicked */
  },
  data () {
    return {
      edit: false,
      gallery: false,
      availableSections: ['avatar', 'icon', 'image'],
      availableMethods: ['uploadAvatar', 'uploadIcon', 'uploadImage']
    }
  },
  computed: {
    ...mapState(['authorized']),
    sectionNum () {
      return this.availableSections.indexOf(this.destination)
    },
    method () {
      return this.availableMethods[this.sectionNum]
    },
    imageURL: {
      get () {
        return this.pictureURL
      },
      set (val) {
        this.$emit('update:pictureURL', val)
      }
    }
  },
  methods: {
    ...mapMutations({
      invalidFileType: 'INVALID_FILE_TYPE',
      invalidFileSize: 'INVALID_FILE_SIZE',
      saveError: 'SAVE_FAILURE'
    }),
    ...mapActions('editor', {
      showGallery: 'SHOW_GALLERY',
      hideGallery: 'HIDE_GALLERY',
      uploadImage: 'UPLOAD_IMAGE',
      uploadIcon: 'UPLOAD_ICON'
    }),
    ...mapActions('testimonials', {
      uploadAvatar: 'UPLOAD_AVATAR'
    }),

    testFile (file) {
      if (!file.type.startsWith('image')) {
        this.invalidFileType()
        return false
      }
      if (file.size > this.fileLimit) {
        this.invalidFileSize()
        return false
      }
      return Boolean(file)
    },

    async uploadFile (file) {
      if (!this.testFile(file)) return
      try {
        const url = await this[this.method](file)
        this.$emit('update:pictureURL', url)
      } catch (err) {
        this.saveError()
      }
    }
  }
}
</script>
