<template>
  <v-container fluid style="overflow-x: hidden; margin-top: 80px; margin-bottom: 64px;">
    <v-card flat tile class="mx-auto homefone" width="100%" max-width="1180">
      <v-row align="center" justify="center">
        <v-col sm="12" md="6">
          <v-card flat tile width="100%" max-width="480" class="transparent left-col">
            <v-card-text class="text-center text-lg-left">
              <SubHeader :value.sync=header />
            </v-card-text>
            <v-card-text class="mx-auto mx-lg-0">
              <Paragraph :value.sync="text" />
            </v-card-text>
            <v-card-text class="text-center text-md-left">
              <Button :value.sync="topButton" :goto.sync="topButtonGoto" />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="6" order="first" order-md="last" class="right-col mx-auto">
          <v-row justify="end" align="end" style="position: relative;">
            <ChangePicture destination="image" :pictureURL.sync="imageSrc" />
          </v-row>
          <TopPicture :url="top.pictureURL" class="top-picture" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.top-element {
  margin-top: 120px;
  margin-bottom: 64px;
}
p {
  line-height: 180%!important;
}
@media screen and (max-width: 500px) {
  .top-element {
    margin-top: 80px;
    margin-bottom: 48px;
  }
}
</style>

<script>

import { mapState } from 'vuex'

import TopPicture from '@/components/multipage/TopPicture.vue'
import ChangePicture from '@/components/editor/ChangePicture.vue'
import SubHeader from '@/components/inputs/SubHeader.vue'
import Paragraph from '@/components/inputs/Paragraph.vue'
import Button from '@/components/inputs/Button.vue'

export default {
  name: 'Top',
  components: {
    TopPicture,
    ChangePicture,
    SubHeader,
    Paragraph,
    Button
  },
  props: ['pageNum'],
  data: () => ({
    imageSrc: ''
  }),
  computed: {
    ...mapState('content', ['pages']),
    top () {
      return this.pages[this.pageNum - 1].top
    },
    header: {
      get () {
        return this.top.header
      },
      set (val) {
        this.change('header', val)
      }
    },
    text: {
      get () {
        return this.top.text.split('<br>').join('\n')
      },
      set (val) {
        this.change('text', val.split('\n').join('<br>'))
      }
    },
    topButton: {
      get () {
        return this.top ? this.top.button : ''
      },
      set (val) {
        this.change('button', val)
      }
    },
    topButtonGoto: {
      get () {
        return this.top ? this.top.goto : ''
      },
      set (val) {
        this.change('goto', val)
      }
    }
  },
  methods: {
    change (propName, propValue) {
      this.$store.commit('content/UPDATE_PAGE_SECTION', {
        pageNum: this.pageNum - 1,
        sectionName: 'top',
        propName,
        propValue
      })
    }
  },
  watch: {
    imageSrc (val) {
      this.change('pictureURL', val)
    }
  }
}
</script>
