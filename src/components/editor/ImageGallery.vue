<template>
<v-row justify="center">
  <v-dialog v-model="gallery" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card v-if="pictures" class="pa-4">
      <v-toolbar dark color="secondary">
        <v-toolbar-items>
          <v-btn icon @click="getImages()">
            <v-icon large color="#555">mdi-reload</v-icon>
          </v-btn>
        </v-toolbar-items>
        <v-toolbar-title>Select image from below</v-toolbar-title>
        <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="$store.commit('editor/HIDE_GALLERY')">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
      </v-toolbar>
      <v-row>
        <v-col
          v-for="(file, index) in pictures"
          :key="index"
        >
          <v-card hover class="pa-0" tile>
            <v-fab-transition>
              <v-btn fab icon @click="removePicture(index)">
                <v-icon color="red darken-2">mdi-delete</v-icon>
              </v-btn>
            </v-fab-transition>
            <v-card-text>
              <v-img :src="`${staticEndpoint}/${file}`"
                     :max-height="maxHeight"
                     :max-width="maxWidth"
                     v-model="img"
                     @click="select(index)"
                     contain
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>

  <RemovePopup :visibility.sync="removePopupVisible"
               :confirm.sync="confirmRemoving"
               removing="Image"
               :details="details"
  />
</v-row>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

import RemovePopup from '@/components/editor/RemovePopup.vue'

export default {
  name: 'ImageGallery',

  components: {
    RemovePopup
  },

  props: ['image'],

  data: () => ({
    img: null,
    removePopupVisible: false,
    confirmRemoving: false,
    details: null,
    removing: null
  }),

  computed: {
    ...mapState('editor', ['gallery', 'selectedImage', 'pictureType', 'galleryPictures', 'galleryAvatars']),
    ...mapGetters('editor', [
      'staticPictureEndpoint',
      'staticAvatarEndpoint',
      'picturesEndpoint',
      'avatarsEndpoint',
      'uploadPictureEndpoint',
      'uploadAvatarEndpoint'
    ]),
    pictures: {
      get () {
        return this.pictureType === 'image' ? this.galleryPictures : this.galleryAvatars
      },
      set (payload) {

      }
    },
    dialog: {
      get () {
        return this.gallery
      },
      set (val) {
        if (val) this.$store.commit('editor/SHOW_GALLERY')
        else this.$store.commit('editor/HIDE_GALLERY')
      }
    },
    staticEndpoint () {
      return this.pictureType === 'image' ? this.staticPictureEndpoint : this.staticAvatarEndpoint
    },
    dynamicEndpoint () {
      return this.pictureType === 'image' ? this.picturesEndpoint : this.avatarsEndpoint
    },
    fileLimit () {
      return this.pictureType === 'image' ? 1000000 : 50000
    },
    maxWidth () {
      return this.pictureType === 'image' ? 300 : 80
    },
    maxHeight () {
      return this.pictureType === 'image' ? 300 : 80
    },

    imageURL: {
      get () {
        return this.selectedImage
      },
      set (val) {
        // this.$emit('update:pictureURL', val)
        this.$store.commit('editor/UPDATE_SELECTED_IMAGE', val)
      }
    },
    margin () {
      return this.pictureType === 'image' ? 0 : '-32px'
    },
    removeAction () {
      return this.pictureType === 'image' ? 'editor/REMOVE_PICTURE' : 'editor/REMOVE_AVATAR'
    }
  },

  watch: {
    confirmRemoving (val) {
      if (!val) return
      this.$store.dispatch(this.removeAction, this.pictures[this.removing])
      this.getImages()
      this.removePopupVisible = false
    }
  },

  methods: {
    select (index) {
      this.$store.commit('editor/UPDATE_SELECTED_IMAGE', `${this.staticEndpoint}/${this.pictures[index]}`)
      this.$emit('update:image', this.imageURL)
      this.$store.commit('editor/HIDE_GALLERY')
    },
    async getImages () {
      const action = this.pictureType === 'image' ? 'editor/GET_ALL_PICTURES' : 'editor/GET_ALL_AVATARS'
      this.pictures = await this.$store.dispatch(action)
    },
    removePicture (index) {
      this.confirmRemoving = false
      this.removing = index
      this.details = `<img src="${this.staticEndpoint}/${this.pictures[index]}" width="100"/>`
      this.removePopupVisible = true
    },
    selectPicture (index) {
      this.$store.commit('SET_SELECTED_LOGO', this.pictures[index])
      this.dialog = false
    }
  },
  mounted () {
    if (!this.pictures) this.getImages()
  }
}
</script>
