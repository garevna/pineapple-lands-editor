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
        <v-btn
          v-if="authorized"
          fab
          dark
          small
          color="magenta"
          @click="$refs.picture.click()"
          v-on="on"
        >
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
    v-if="ready"
    :activate.sync="gallery"
    :destination="destination"
    :selectedImageURL.sync="selectedImageURL"
    :selectedImageLink.sync="selectedImageLink"
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

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'ChangePicture',
  components: {
    ImageGallery: () => import('@/components/editor/ImageGallery.vue')
  },
  props: {
    destination: String, /* required; must be 'image', 'icon' or 'avatar' */
    pictureURL: String, /* (sync) required; static url of image */
    link: String, /* (sync) required; blob URL */
    index: Number, /* optional; if this is the array element */
    action: Boolean, /* optional; if we need the additional button */
    perform: Boolean /* (sync) optional; if the additinal button was clicked */
  },
  data () {
    return {
      edit: false,
      gallery: false,
      selectedImageLink: '',
      availableDestinations: ['avatar', 'icon', 'image'],
      stores: {
        avatar: 'avatars',
        icon: 'icons',
        image: 'images'
      },
      readiness: {
        avatar: 'avatarsReady',
        icon: 'iconsReady',
        image: 'imagesReady'
      },
      requestInitiatorId: undefined
    }
  },
  computed: {
    ...mapState(['authorized', 'imagesReady', 'iconsReady', 'avatarsReady']),
    ...mapState('media', ['images', 'icons', 'avatars']),
    ...mapGetters('media', ['getRequestInitiatorId']),
    store () {
      return this.stores[this.destination]
    },
    ready () {
      return this.readiness[this.destination]
    },
    selectedImageURL: {
      get () {
        return this.pictureURL
      },
      set (val) {
        this.$emit('update:pictureURL', val)
      }
    },
    fileName () {
      return this.pictureURL.split('/').slice(-1)[0]
    }
  },
  watch: {
    selectedImageLink (val) {
      this.$emit('update:link', val)
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
      hideGallery: 'HIDE_GALLERY'
    }),

    testFile (file) {
      if (!file) return false
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
      const blob = new Blob([file], { type: file.type })

      this.__filesWorker.postMessage({
        store: this.stores[this.destination],
        action: 'save',
        key: file.name,
        blob,
        requestInitiatorId: this.requestInitiatorId
      })
    },

    getURL (event) {
      const { status, store, action, key, result, requestInitiatorId } = event.data
      if (!requestInitiatorId || requestInitiatorId !== this.requestInitiatorId || status !== 200) return
      if (action !== 'save') return
      this.__filesWorker.postMessage({
        store,
        action: 'get',
        key,
        requestInitiatorId
      })
      this.$emit('update:pictureURL', result)
    },

    updated (val) {
      this.$emit('update:link', val)
    },

    getLink (event) {
      if (event.data.action !== 'get') return
      const { status, result, requestInitiatorId } = event.data
      if (requestInitiatorId === this.requestInitiatorId && status === 200) {
        this.updated(result)
      }
    }
  },
  mounted () {
    this.requestInitiatorId = this.getRequestInitiatorId()
    this.__filesWorker.addEventListener('message', this.getURL)
    this.__filesWorker.addEventListener('message', this.getLink)
  },
  beforeDestroy () {
    this.__filesWorker.removeEventListener('message', this.getURL)
    this.__filesWorker.removeEventListener('message', this.getLink)
  }
}
</script>
