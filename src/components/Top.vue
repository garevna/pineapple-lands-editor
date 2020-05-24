<template>
<v-container style="overflow-x: hidden; margin-top: 160px; margin-bottom: 64px; padding: 40px!important;">
  <v-card flat class="mx-auto homefone" width="100%" max-width="1440">
    <v-row align="center" justify="center">
      <v-col sm="12" md="6" class="text-center mx-auto">
        <v-card flat width="100%" max-width="480" class="transparent mx-auto top-element">
          <v-card-text class="text-center text-md-left">
            <TopHeader :value.sync="topHeader" />
          </v-card-text>
          <v-card-text class="mx-auto mx-lg-0">
            <Paragraph :value.sync="topText" />
          </v-card-text>
          <v-card-text class="text-center text-md-left">
            <Button :value.sync="topButton" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" md="6">
        <v-card flat width="100%" max-width="600" class="transparent">

          <ChangePicture destination="image" :pictureURL.sync="imageSrc" />

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
import TopHeader from '@/components/inputs/TopHeader.vue'
import Paragraph from '@/components/inputs/Paragraph.vue'
import Button from '@/components/inputs/Button.vue'

// import ButtonWithTooltip from '@/components/editor/ButtonWithTooltip.vue'

export default {
  name: 'Top',
  components: {
    ChangePicture,
    // ButtonWithTooltip,
    TopHeader,
    Paragraph,
    Button
  },
  props: ['page'],
  data () {
    return {
      imageSrc: '',
      clicked: false
    }
  },
  computed: {
    ...mapState('content', ['top']),
    topHeader: {
      get () {
        return this.top.header
      },
      set (val) {
        this.$store.commit('content/UPDATE_TOP', { prop: 'header', value: val })
      }
    },
    topText: {
      get () {
        return this.top.text
      },
      set (val) {
        this.$store.commit('content/UPDATE_TOP', { prop: 'text', value: val })
      }
    },
    topButton: {
      get () {
        return this.top.button
      },
      set (val) {
        this.$store.commit('content/UPDATE_TOP', { prop: 'button', value: val })
      }
    }
  },
  watch: {
    imageSrc (val) {
      console.log('WATCHER: Image src changed: ', val)
      this.$store.commit('content/UPDATE_TOP', { prop: 'pictureURL', value: val })
    },
    clicked (val) {
      if (!val) return
      console.log('Clicked!')
      this.clicked = false
    }
  }
}
</script>
