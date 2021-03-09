<template>
<v-row justify="center">
  <v-dialog v-model="gallery" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card v-if="galleryPictures" class="pa-4">
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
          v-for="(link, fileName) in galleryPictures"
          :key="fileName"
        >
          <v-card hover class="pa-0" tile @click="select(fileName)">
            <!-- <v-fab-transition>
              <v-btn fab icon @click.stop="remove(fileName)" v-if="authorized">
                <v-icon color="red darken-2">mdi-delete</v-icon>
              </v-btn>
            </v-fab-transition> -->
            <v-card-text>
              <v-img :src="link"
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

export default {
  name: 'ImageGallery',
  props: {
    destination: String,
    selectedImageURL: String, /* sync! */
    selectedImageLink: String, /* sync! */
    activate: Boolean
  },
  data: () => ({
    galleryPictures: [],
    confirmRemoving: false,
    details: null,
    removing: null,
    stores: {
      avatar: 'avatars',
      icon: 'icons',
      image: 'images'
    },
    limits: {
      avatar: 50000,
      image: 1000000,
      icon: 100000
    },
    size: {
      avatar: 48,
      image: 300,
      icon: 150
    }
  }),
  computed: {
    ...mapState(['authorized']),
    ...mapState('media', ['images', 'icons', 'avatars', 'staticEndpoints']),
    mediaStore () {
      return this.stores[this.destination]
    },
    staticEndpoint () {
      return this.staticEndpoints[this.mediaStore]
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
      if (val) this.galleryPictures = this[this.mediaStore]
    },
    'popup.action': {
      handler (val) {
        val && this.removePicture()
      }
    }
  },
  methods: {
    ...mapActions({
      removeImage: 'DELETE_IMAGE'
    }),
    ...mapMutations({
      dialogDelete: 'DIALOG_DELETE'
    }),
    async getImages () {
      this.galleryPictures = this[this.mediaStore]
    },
    select (fileName) {
      this.$emit('update:selectedImageURL', `${this.staticEndpoint}/${fileName}`)
      this.$emit('update:selectedImageLink', this.galleryPictures[fileName])
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
        file: this.galleryPictures[this.removing]
      })
      this.getImages()
      this.removing = null
    }
  }
}
</script>
