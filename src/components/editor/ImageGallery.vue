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
              <v-btn fab icon @click.stop="remove(index)" v-if="authorized">
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
</v-row>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex'

const { hostname, avatar, image, icon } = require('@/configs/host').default

export default {
  name: 'ImageGallery',
  props: {
    destination: String,
    selectedImageURL: String,
    activate: Boolean
  },
  data: () => ({
    images: [],
    confirmRemoving: false,
    details: null,
    removing: null,
    limits: {
      avatar: 50000,
      image: 1000000,
      icon: 100000
    },
    size: {
      avatar: 48,
      image: 300,
      icon: 150
    },
    hostname,
    endpoints: {
      avatar,
      image,
      icon
    }
  }),
  computed: {
    ...mapState(['authorized', 'popup']),
    staticEndpoint () {
      return `${this.hostname}/${this.endpoints[this.destination].static}`
    },
    fileLimit () {
      return this.limits[this.destination]
    },
    imageSize () {
      return this.size[this.destination]
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
    'popup.action': {
      handler (val) {
        val && this.removePicture()
      }
    }
  },
  methods: {
    ...mapActions({
      getAllImages: 'GET_IMAGES',
      removeImage: 'DELETE_IMAGE'
    }),
    ...mapMutations({
      dialogDelete: 'DIALOG_DELETE'
    }),
    async getImages () {
      const response = await this.getAllImages(this.destination)
      this.images = response.filter(img => img !== '.gitkeep' && img !== 'logo.png' && img !== 'facebook.png' && img !== 'linkedin.png')
    },
    select (index) {
      const val = `${this.staticEndpoint}/${this.images[index]}`
      this.$emit('update:selectedImageURL', val)
      this.$emit('update:activate', false)
    },
    remove (index) {
      this.removing = index
      this.dialogDelete()
    },
    async removePicture () {
      if (this.index === null) return
      await this.removeImage({
        destination: this.destination,
        file: this.images[this.removing]
      })
      this.getImages()
      this.removing = null
    }
  }
}
</script>
