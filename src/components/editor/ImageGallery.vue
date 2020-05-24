<template>
<v-row justify="center">
  <v-dialog v-model="gallery" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card v-if="images" class="pa-4">
      <v-toolbar dark color="secondary">
        <v-toolbar-items>
          <v-btn icon @click="getImages">
            <v-icon large color="#555">mdi-reload</v-icon>
          </v-btn>
        </v-toolbar-items>
        <v-toolbar-title>Select image from below</v-toolbar-title>
        <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="$emit('update:activate', false)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
      </v-toolbar>
      <v-row>
        <v-col
          v-for="(file, index) in images"
          :key="index"
        >
          <v-card hover class="pa-0" tile @click="select(index)">
            <v-fab-transition>
              <v-btn fab icon @click.stop="askToRemovePicture(index)">
                <v-icon color="red darken-2">mdi-delete</v-icon>
              </v-btn>
            </v-fab-transition>
            <v-card-text>
              <v-img :src="`${staticEndpoint}/${file}`"
                     :max-height="imageSize"
                     :max-width="imageSize"
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

import { mapGetters } from 'vuex'

import RemovePopup from '@/components/editor/RemovePopup.vue'

export default {
  name: 'ImageGallery',
  components: {
    RemovePopup
  },
  props: {
    destination: String,
    selectedImageURL: String,
    activate: Boolean
  },
  data: () => ({
    images: [],
    removePopupVisible: false,
    confirmRemoving: false,
    details: null,
    removing: null
  }),
  computed: {
    ...mapGetters('testimonials', {
      __uploadAvatar: 'uploadEndpoint',
      __staticAvatar: 'staticEndpoint',
      __avatarts: 'avatarsEndpoint'
    }),
    ...mapGetters('editor', {
      __uploadImage: 'uploadImageEndpoint',
      __staticImage: 'staticImageEndpoint',
      __images: 'imagesEndpoint',
      __uploadIcon: 'uploadIconEndpoint',
      __staticIcon: 'staticIconEndpoint',
      __icons: 'iconsEndpoint'
    }),

    uploadEndpoint () {
      return this.destination === 'avatar' ? this.__uploadAvatar : this.destination === 'image' ? this.__uploadImage : this.__uploadIcon
    },
    staticEndpoint () {
      return this.destination === 'avatar' ? this.__staticAvatar : this.destination === 'image' ? this.__staticImage : this.__staticIcon
    },
    endpoint () {
      return this.destination === 'avatar' ? this.__avatarts : this.destination === 'image' ? this.__images : this.__icons
    },
    fileLimit () {
      return this.destination === 'avatar' ? 50000 : this.destination === 'image' ? 1000000 : 100000
    },
    imageSize () {
      return this.destination === 'avatar' ? 50 : this.destination === 'image' ? 300 : 150
    },
    gallery: {
      get () {
        return this.activate
      },
      set (val) {
        this.$emit('update:activate', val)
      }
    }
  },
  watch: {
    activate (val) {
      if (val) this.getImages()
    },
    confirmRemoving (val) {
      if (!val) return
      this.removePicture(this.removing)
      this.getImages()
      this.removePopupVisible = false
    }
  },
  methods: {
    async getImages () {
      try {
        this.images = (await (await fetch(this.endpoint)).json())
          .filter(img => img !== '.gitkeep')
        this.ready = true
      } catch (err) {
        console.error(err)
        this.ready = false
      }
    },
    select (index) {
      const val = `${this.staticEndpoint}/${this.images[index]}`
      this.$emit('update:selectedImageURL', val)
      this.$emit('update:activate', false)
    },
    askToRemovePicture (index) {
      this.confirmRemoving = false
      this.removing = index
      this.details = `<img src="${this.staticEndpoint}/${this.images[index]}" width="120"/>`
      this.removePopupVisible = true
    },
    async removePicture (index) {
      try {
        const response = await fetch(`${this.endpoint}/${this.images[index]}`, {
          method: 'DELETE',
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        console.log(response)
      } catch (err) {
        console.error(err)
        this.ready = false
      }
    }
  }
}
</script>
