<template>
    <v-container fluid class="homefone">
        <v-card flat class="transparent text-center mx-auto" width="100%">
          <v-card-text class="mx-auto text-center">
            <SubHeader :value.sync="header" class="mx-auto" />
          </v-card-text>
          <v-card-text>
            <Paragraph :value.sync="text" />
          </v-card-text>
        </v-card>

        <v-container fluid class="mt-5 mb-12">
          <v-card flat class="d-flex flex-wrap justify-center transparent">
            <v-card flat class="card--offer transparent text-center mx-1 mx-sm-10" width="240">
              <v-card flat class="transparent mx-auto text-center">
                <ChangePicture destination="icon" :pictureURL.sync="iconSrc1" />
                <v-img :src="howToConnect.items[0].icon" />
              </v-card>
              <v-card-title>
                <SubSubHeader :value.sync="title1" />
              </v-card-title>
              <v-card-text>
                <Paragraph :value.sync="text1" />
              </v-card-text>
            </v-card>
            <v-card flat class="card--offer transparent text-center mx-1 mx-sm-10" width="240">
              <v-card flat class="transparent mx-auto text-center">
                <ChangePicture destination="icon" :pictureURL.sync="iconSrc2" />
                <v-img :src="howToConnect.items[1].icon" />
              </v-card>
              <v-card-title>
                <SubSubHeader :value.sync="title2" />
              </v-card-title>
              <v-card-text>
                <Paragraph :value.sync="text2" />
              </v-card-text>
            </v-card>
            <v-card flat class="card--offer transparent text-center mx-1 mx-sm-10" width="240">
              <v-card flat class="transparent mx-auto text-center">
                <ChangePicture destination="icon" :pictureURL.sync="iconSrc3" />
                <v-img :src="howToConnect.items[2].icon" />
              </v-card>
              <v-card-title with="100%">
                <SubSubHeader :value.sync="title3" />
              </v-card-title>
              <v-card-text>
                <Paragraph :value.sync="text3" />
              </v-card-text>
            </v-card>
          </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>
h3, p {
  width: 100%;
  text-align: center;
  color: #000;
}
.card--offer {
  width: 240px;
}

@media (max-width: 420px), (max-height: 420px) {
  .card--offer {
    width: 90%!important;
  }
}
</style>

<script>

import { mapState } from 'vuex'

import SubHeader from '@/components/inputs/SubHeader.vue'
import SubSubHeader from '@/components/inputs/SubSubHeader.vue'
import Paragraph from '@/components/inputs/Paragraph.vue'
import ChangePicture from '@/components/editor/ChangePicture.vue'

export default {
  name: 'HowToConnect',
  props: ['page'],
  components: {
    SubHeader,
    SubSubHeader,
    Paragraph,
    ChangePicture
  },
  data () {
    return {
      contact: false,
      iconSrc1: '',
      iconSrc2: '',
      iconSrc3: ''
    }
  },
  computed: {
    ...mapState('content', ['howToConnect']),
    header: {
      get () {
        return this.howToConnect.header
      },
      set (val) {
        this.$store.commit('content/UPDATE_CONNECT', { prop: 'header', value: val })
      }
    },
    text: {
      get () {
        return this.howToConnect.text
      },
      set (val) {
        this.$store.commit('content/UPDATE_CONNECT', { prop: 'text', value: val })
      }
    },
    title1: {
      get () {
        return this.howToConnect.items[0].title
      },
      set (val) {
        this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 0, prop: 'title', value: val })
      }
    },
    title2: {
      get () {
        return this.howToConnect.items[1].title
      },
      set (val) {
        this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 1, prop: 'title', value: val })
      }
    },
    title3: {
      get () {
        return this.howToConnect.items[2].title
      },
      set (val) {
        this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 2, prop: 'title', value: val })
      }
    },
    text1: {
      get () {
        return this.howToConnect.items[0].text
      },
      set (val) {
        this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 0, prop: 'text', value: val })
      }
    },
    text2: {
      get () {
        return this.howToConnect.items[1].text
      },
      set (val) {
        this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 1, prop: 'text', value: val })
      }
    },
    text3: {
      get () {
        return this.howToConnect.items[2].text
      },
      set (val) {
        this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 2, prop: 'text', value: val })
      }
    }
  },
  watch: {
    iconSrc1 (val) {
      console.log('WATCHER: Icon src 1 changed: ', val)
      this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 0, prop: 'icon', value: val })
    },
    iconSrc2 (val) {
      console.log('WATCHER: Icon src 2 changed: ', val)
      this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 1, prop: 'icon', value: val })
    },
    iconSrc3 (val) {
      console.log('WATCHER: Icon src 3 changed: ', val)
      this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 2, prop: 'icon', value: val })
    }
  },
  mounted () {
    console.log(this.howToConnect.items[0].icon)
    console.log(this.howToConnect.items[1].icon)
    console.log(this.howToConnect.items[2].icon)
  }
}
</script>
