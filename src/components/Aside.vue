<template>
  <v-card
        flat
        class="aside-card transparent mx-auto my-12"
        width="480"
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
            @click="$store.commit('content/REMOVE_OFFER', index)"
            v-if="info.offer.length > 0"
        >
          <v-icon>$delete</v-icon>
        </v-btn>

        <v-row>
          <v-col>
            <GreenText :index="index" />
          </v-col>
          <v-col>
            <BlackText :index="index" />
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

// import { mapState } from 'vuex'

import SubHeader from '@/components/inputs/SubHeader.vue'
import Paragraph from '@/components/inputs/Paragraph.vue'
import GreenText from '@/components/inputs/GreenText.vue'
import BlackText from '@/components/inputs/BlackText.vue'

export default {
  name: 'Aside',
  components: {
    SubHeader,
    Paragraph,
    GreenText,
    BlackText
  },
  data () {
    return {
      changed: false,
      offer: this.$store.state.content.info.offer
    }
  },
  computed: {
    info () {
      return this.$store.state.content.info
    },
    header: {
      get () {
        return this.info.header
      },
      set (val) {
        this.$store.commit('content/UPDATE_INFO', { prop: 'header', value: val })
      }
    },
    text: {
      get () {
        return this.info.text
      },
      set (val) {
        this.$store.commit('content/UPDATE_INFO', { prop: 'text', value: val })
      }
    }
  },
  watch: {
    changed (val) {
      if (!val) return
      this.offer = this.$store.state.content.info.offer
      this.changed = false
    },
    offer: function (val) {
      console.log('Info offer changed:\n', val)
    }
  },
  methods: {
    addOffer () {
      this.$store.commit('content/ADD_OFFER')
      this.changed = true
    },
    removeOffer (index) {
      this.$store.commit('content/REMOVE_OFFER', index)
      this.changed = true
    }
  }
}
</script>
