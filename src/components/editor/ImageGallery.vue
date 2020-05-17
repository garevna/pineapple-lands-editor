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
              <v-btn fab icon @click="askToRemovePicture(index)">
                <v-icon color="red darken-2">mdi-delete</v-icon>
              </v-btn>
            </v-fab-transition>
            <v-card-text>
              <v-img :src="`${staticEndpoint}/${file}`"
                     :max-height="maxHeight"
                     :max-width="maxWidth"
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

// import { mapGetters } from 'vuex'

import RemovePopup from '@/components/editor/RemovePopup.vue'

export default {
  name: 'ImageGallery',
  components: {
    RemovePopup
  },
  props: {
    staticEndpoint: String,
    endpoint: String,
    selectedImageURL: String,
    activate: Boolean,
    fileLimit: Number,
    imageSize: Number
  },
  data: () => ({
    images: [],
    removePopupVisible: false,
    confirmRemoving: false,
    details: null,
    removing: null
  }),
  computed: {
    gallery: {
      get () {
        return this.activate
      },
      set (val) {
        this.$emit('update:activate', val)
      }
    },
    maxWidth () {
      return this.imageSize || 120
    },
    maxHeight () {
      return this.imageSize || 120
    },
    margin () {
      return this.imageType === 'image' ? 0 : '-32px'
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
      console.log('SELECT!')
      this.$emit('update:selectedImageURL', `${this.staticEndpoint}/${this.images[index]}`)
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
  },
  mounted () {
    console.log('MOUNTED\n', this.images)
  },
  beforeDestroy () {
    console.log('DESTROY GALLERY')
  }
}
</script>
