<template>
<v-container fluid style="overflow-x: hidden; margin-top: 160px; margin-bottom: 64px;">
  <v-card flat class="mx-auto homefone" width="100%" max-width="1440">
    <v-row align="center" justify="center">
      <v-col sm="12" md="6" class="text-center mx-auto">
        <v-card flat width="100%" max-width="480" class="transparent mx-auto top-element">
          <v-card-text class="text-center text-md-left">
            <h1
                class="text-center text-md-left"
                v-text="top.header"
                ref="topHeader"
                contenteditable
            >
            </h1>
          </v-card-text>
          <v-card-text class="mx-auto mx-lg-0">
            <p
                class="text-center text-md-left"
                v-text="top.text"
                ref="topText"
                contenteditable
            ></p>
          </v-card-text>
          <v-card-text class="text-center text-md-left">
            <p class="submit-button mx-auto"
                contenteditable
                ref="topButton"
                v-text="top.button"
            ></p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" md="6">
        <ChangePicture
              :pictureURL.sync="imageURL"
              pictureType="image"
              :saveContent.sync="save"
              section="top"
        />
        <v-card flat width="100%" max-width="600" class="transparent">
          <v-img :src="top.pictureURL" max-width="750" class="mx-auto"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</v-container>
</template>

<style scoped>
p {
  line-height: 180%!important;
}
</style>

<script>

import { mapState } from 'vuex'

import ChangePicture from '@/components/editor/ChangePicture.vue'

export default {
  name: 'Top',
  components: {
    ChangePicture
  },
  props: ['page'],
  data () {
    return {
      close: false,
      save: false
    }
  },
  computed: {
    ...mapState('content', ['top']),
    imageURL: {
      get () {
        return this.top.pictureURL
      },
      set (url) {
        this.$store.commit('content/UPDATE_TOP', {
          prop: 'pictureURL',
          value: url
        })
      }
    }
  },
  watch: {
    save (val) {
      if (!val) return
      this.saveContent()
      this.save = false
      this.$store.commit('SET_POPUP_TITLE', 'SECTION CONTENT')
      this.$store.commit('SET_POPUP_TEXT', 'Data successfully saved')
      this.$store.commit('SHOW_POPUP')
    }
  },
  methods: {
    saveContent () {
      this.$store.commit('content/UPDATE_TOP', { prop: 'header', value: this.$refs.topHeader.innerText })
      this.$store.commit('content/UPDATE_TOP', { prop: 'text', value: this.$refs.topText.innerText })
      this.$store.commit('content/UPDATE_TOP', { prop: 'button', value: this.$refs.topButton.innerText })
    }
  },
  mounted () {}
}
</script>
