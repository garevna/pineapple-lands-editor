<template>
    <v-container fluid class="homefone">
        <v-card flat class="transparent text-center mx-auto" width="100%">
          <v-card-text class="text-center">
            <SubHeader :value.sync="header" class="mx-auto" />
          </v-card-text>
          <v-card-text>
            <Paragraph :value.sync="text" />
          </v-card-text>
        </v-card>

        <v-container fluid class="mt-5 mb-12">
          <v-card flat class="d-flex flex-wrap justify-center transparent">
            <v-card flat class="card--offer transparent text-center mx-auto" width="240">
              <IconFirst />
              <v-card-title>
                <SubSubHeader :value.sync="title1" />
              </v-card-title>
              <v-card-text>
                <Paragraph :value.sync="text1" />
              </v-card-text>
            </v-card>
            <v-card flat class="card--offer transparent text-center mx-auto" width="240">
              <IconSecond />
              <v-card-title>
                <SubSubHeader :value.sync="title2" />
              </v-card-title>
              <v-card-text>
                <Paragraph :value.sync="text2" />
              </v-card-text>
            </v-card>
            <v-card flat class="card--offer transparent text-center mx-auto" width="240">
              <IconThird />
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
.benefit-image {
  width: 30%;
  margin-left: 35%;
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
import IconFirst from '@/components/dgtek/IconFirst.vue'
import IconSecond from '@/components/dgtek/IconSecond.vue'
import IconThird from '@/components/dgtek/IconThird.vue'

export default {
  name: 'Benefits',
  components: {
    SubHeader,
    SubSubHeader,
    Paragraph,
    IconFirst,
    IconSecond,
    IconThird
  },
  props: ['page'],
  data () {
    return {
      contact: false
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
    contact (val) {
      if (!val) return
      this.$emit('update:page', 'contact')
      this.contact = false
    }
  }
}
</script>
