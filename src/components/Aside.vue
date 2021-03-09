<template>
  <v-card
    v-if="info"
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
        flat class="transparent ml-4"
        v-for="(item, index) of offer"
        :key="id(index)"
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
            @click="deleteOffer(index)"
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
          @click="newOffer"
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

<script>

import { mapState, mapMutations } from 'vuex'

const {
  SubHeader,
  Paragraph,
  GreenText,
  BlackText
} = require('@/components/inputs')

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
      changeGreen: false,
      changeBlack: false,
      offer: this.$store.state.content.offer
    }
  },
  computed: {
    ...mapState('content', ['info']),
    header: {
      get () {
        return this.info?.header
      },
      set (val) {
        this.update({ prop: 'header', value: val })
      }
    },
    text: {
      get () {
        return this.info?.text
      },
      set (val) {
        this.update({ prop: 'text', value: val })
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_INFO',
      addOffer: 'ADD_OFFER',
      removeOffer: 'REMOVE_OFFER'
    }),
    id (index) {
      return `item-${Date.now() + index}`
    },
    init () {
      this.offer = this.info ? this.info.offer : []
    },
    newOffer () {
      this.addOffer()
      this.changeGreen = true
    },
    deleteOffer (index) {
      this.removeOffer(index)
      this.changeGreen = true
    }
  },
  mounted () {
    this.init()
  }
}
</script>

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
