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
          :style="{ marginLeft: margin, marginTop: margin }"
      >
        <v-icon v-if="edit">mdi-close</v-icon>
        <v-icon v-else>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-tooltip top color="info">
      <template v-slot:activator="{ on }">
        <v-btn fab dark small color="warning" v-on="on" @click="$emit('update:saveContent', true)">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </template>
      <span>Save section content</span>
    </v-tooltip>
    <v-tooltip top color="info">
      <template v-slot:activator="{ on }">
        <v-btn fab dark small color="deepgreen" @click="$refs.picture.click()" v-on="on">
          <v-icon>mdi-file-upload</v-icon>
        </v-btn>
      </template>
      <span>Change picture via upload</span>
    </v-tooltip>
    <v-tooltip top color="info">
      <template v-slot:activator="{ on }">
        <v-btn fab dark small color="red" v-on="on" @click="selectFromGallery">
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
        @input="uploadPicture($event.target.files[0])"
  >
  <ErrorPopup :visibility.sync="errorPopupVisible" :errorName="errorName" :details="errorStack"/>
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

import { mapState, mapGetters } from 'vuex'

import ErrorPopup from '@/components/editor/ErrorPopup.vue'

export default {
  name: 'ChangePicture',
  components: {
    ErrorPopup
  },
  props: ['pictureURL', 'pictureType', 'saveContent'],
  data () {
    return {
      edit: false,
      imageDialog: false,
      errorPopupVisible: false,
      removePopupVisible: false,
      confirmRemoving: false,
      uploadDailog: false,
      errorName: '',
      errorStack: '',
      gallery: false
    }
  },
  computed: {
    ...mapState('editor', ['selectedImage']),
    ...mapGetters('editor', [
      'uploadPictureEndpoint',
      'uploadAvatarEndpoint'
    ]),
    fileLimit () {
      return this.pictureType === 'image' ? 1000000 : 50000
    },
    imageURL: {
      get () {
        return this.selectedImage
      },
      set (val) {
        this.$emit('update:pictureURL', val)
      }
    },
    margin () {
      return this.pictureType === 'image' ? 0 : '-32px'
    }
  },
  watch: {
    selectedImage (val) {
      if (!this.gallery) return
      this.$emit('update:pictureURL', val)
      this.gallery = false
    }
  },
  methods: {
    testFile (file) {
      if (!file.type.startsWith('image')) {
        this.errorName = 'Invalid file type'
        this.errorStack = 'File must be an image of any type such as: jpg, png, gif...'
        this.errorPopupVisible = true
        return false
      }
      if (file.size > this.fileLimit) {
        this.errorName = 'Invalid file size'
        this.errorStack = `File is too large. Please select file up to ${Math.round(this.fileLimit / 1000)}Kb`
        this.errorPopupVisible = true
        return false
      }
      return Boolean(file)
    },

    async uploadPicture (file) {
      if (!this.testFile(file)) return
      if (!this.pictureType) return
      let res = null
      if (this.pictureType === 'image') {
        res = await this.$store.dispatch('editor/SAVE_TOP_PICTURE', file)
      } else {
        res = await this.$store.dispatch('editor/SAVE_AVATAR', file)
      }
      if (res) { this.$emit('update:pictureURL', res) }
    },

    async selectFromGallery () {
      this.$store.commit('editor/UPDATE_PICTURE_TYPE', this.pictureType)
      this.$store.commit('editor/SHOW_GALLERY')
      this.gallery = true
    }
  },
  mounted () {
    // if (!this.pictureLimit) this.pictureLimit = 1000000
  }
}
</script>
