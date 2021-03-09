<template>
  <v-container fluid style="overflow-x: hidden; margin-top: 100px; margin-bottom: 64px;">
    <v-img
          :src="top.pictureURL"
          scroll-threshold="500"
          min-height="300"
          max-height="500"
          max-width="1904"
          position="center"
    >
      <ChangePicture destination="image" :pictureURL.sync="imageSrc" />
      <v-row align="center" justify="start" class="mx-0">
        <v-col cols="12" md="6" class="text-left mx-0">
          <v-card flat class="transparent" width="100%" max-width="1440">
            <v-card flat width="100%" max-width="500" class="transparent">
              <v-card-text class="text-left">
                <TopHeader :value.sync="topHeader" />
              </v-card-text>
              <v-card-text class="mx-auto mx-lg-0" style="background: #ffffffa0">
                <Paragraph :value.sync="topText" />
              </v-card-text>
              <!-- <v-card-text class="text-center text-md-left">
                <v-btn
                    color="buttons"
                    dark
                    rounded
                    height="48"
                    class="submit-button px-auto mx-auto"
                    @click="$emit('update:page', 'contact')"
                >
                  {{ top.button }}
                </v-btn>
              </v-card-text> -->
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
        </v-col>
      </v-row>
    </v-img>
  </v-container>
</template>

<style scoped>
p {
  line-height: 180%!important;
  color: #000!important;
  background: #fff7!important;
  padding: 8px 16px;
  box-shadow: 0 0 32px #fff9!important;
}
</style>

<script>

import { mapState, mapMutations } from 'vuex'

import { ChangePicture } from '@/components/editor'
import { TopHeader, Paragraph } from '@/components/inputs'

export default {
  name: 'Top',
  components: {
    ChangePicture,
    TopHeader,
    Paragraph
  },
  props: ['page'],
  data () {
    return {
      link: '',
      imageSrc: '',
      clicked: false
    }
  },
  computed: {
    ...mapState('content', ['top']),
    topHeader: {
      get () {
        return this.top ? this.top.header : ''
      },
      set (value) {
        this.update({ prop: 'header', value })
      }
    },
    topText: {
      get () {
        return this.top ? this.top.text : ''
      },
      set (value) {
        this.update({ prop: 'text', value })
      }
    },
    topButton: {
      get () {
        return this.top ? this.top.button : ''
      },
      set (value) {
        this.update({ prop: 'button', value })
      }
    },
    topButtonGoto: {
      get () {
        return this.top ? this.top.goto : ''
      },
      set (value) {
        this.update({ prop: 'goto', value })
      }
    }
  },
  watch: {
    imageSrc (value) {
      this.update({ prop: 'pictureURL', value })
    },
    clicked (value) {
      if (!value) return
      this.clicked = false
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_TOP'
    })
  }
}
</script>
