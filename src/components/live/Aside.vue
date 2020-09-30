<template>
  <v-card
        flat
        class="aside-card transparent mx-auto my-12"
        width="480"
        v-if="pages"
  >
    <v-card flat class="transparent">
      <v-card-title>
        <SubHeader :value.sync=header />
      </v-card-title>
      <v-card-text>
        <Paragraph :value.sync="text" />
      </v-card-text>
      <v-card
            flat class="ml-4"
            v-for="(item, index) in offer"
            :key="index"
      >
        <v-btn
            absolute
            fab
            dark
            small
            top
            left
            color="delete"
            width="28"
            height="28"
            style="margin-left: -40px; margin-top: 48px"
            @click="removeOffer(index)"
            v-if="info.offer.length > 0"
        >
          <v-icon>$delete</v-icon>
        </v-btn>

        <v-row>
          <v-col>
            <GreenText :index="index" :pageNum="pageNum" />
          </v-col>
          <v-col>
            <BlackText :index="index" :pageNum="pageNum" />
          </v-col>
        </v-row>
      </v-card>

      <v-btn
          absolute
          fab
          dark
          small
          bottom
          right
          color="#09b"
          style="margin-bottom: -8px"
          @click="addOffer"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card>
    <v-card-text class="my-12">
      <span class="small text-left" style="margin-right: 16px">Pineapple NET is powered by</span>
      <v-img src="@/assets/dgtek-logo.png" width="50" style="display: inline-block; vertical-align: middle;"></v-img>
    </v-card-text>
  </v-card>
</template>

<style scoped>
p {
  line-height: 180%!important;
}

.small {
  font-size: 14px;
}
strong {
  font-weight: 600;
}

@media screen and (max-width: 900px) {
  .aside-card {
    margin-bottom: 40px;
  }
}

</style>

<script>

import { mapState } from 'vuex'

import SubHeader from '@/components/inputs/SubHeader.vue'
import Paragraph from '@/components/inputs/Paragraph.vue'
import GreenText from '@/components/inputs/GreenText.vue'
import BlackText from '@/components/inputs/BlackText.vue'

export default {
  name: 'Aside',
  props: ['pageNum'],
  components: {
    SubHeader,
    Paragraph,
    GreenText,
    BlackText
  },
  data () {
    return {
      offer: this.$store.state.content.pages[this.pageNum - 1].info.offer
    }
  },
  computed: {
    ...mapState('content', ['pages']),
    info () {
      return this.pages[this.pageNum - 1].info
    },
    header: {
      get () {
        return this.info.header
      },
      set (val) {
        this.change('header', val)
      }
    },
    text: {
      get () {
        return this.info.text.split('<br>').join('\n')
      },
      set (val) {
        this.change('text', val.split('\n').join('<br>'))
      }
    }
  },
  methods: {
    change (propName, propValue) {
      this.$store.commit('content/UPDATE_PAGE_SECTION', {
        pageNum: this.pageNum - 1,
        sectionName: 'info',
        propName,
        propValue
      })
    },
    addOffer () {
      this.$store.commit('content/ADD_LIVE_ASIDE_OFFER', this.pageNum - 1)
      this.offer = this.$store.state.content.pages[this.pageNum - 1].info.offer
    },
    removeOffer (num) {
      this.$store.commit('content/REMOVE_LIVE_ASIDE_OFFER', {
        pageNum: this.pageNum - 1,
        num
      })
      this.offer = this.$store.state.content.pages[this.pageNum - 1].info.offer
    }
  }
}
</script>
