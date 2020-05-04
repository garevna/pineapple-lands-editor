<template>
  <v-card
        flat
        class="aside-card transparent mx-auto my-12"
        width="480"
  >
    <v-tooltip top color="info">
      <template v-slot:activator="{ on }">
        <v-btn fab dark small color="warning" v-on="on" @click="saveContent">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </template>
      <span>Save section content</span>
    </v-tooltip>
    <v-card-title>
      <h2
          class="text-left"
          contenteditable
          ref="infoHeader"
          v-text="info.header"
      ></h2>
    </v-card-title>
    <v-card-text>
      <p
          class="text-left"
          contenteditable
          ref="infoText"
          v-text="info.text"
      ></p>
    </v-card-text>
    <v-card flat class="ml-4">
      <h5
          style="margin-bottom: 16px"
          v-if="info.offer[0]"
      >
        <strong
            style="color: #72BF44; margin-right: 8px;"
            contenteditable
            ref="offerGreen_1"
            v-text="info.offer[0].greenText"
        ></strong>
        <strong
            contenteditable
            ref="offerBlack_1"
            v-text="info.offer[0].blackText"
        ></strong>
      </h5>
      <h5
          style="margin-bottom: 16px"
          v-if="info.offer[1]"
      >
        <strong
            style="color: #72BF44; margin-right: 8px;"
            contenteditable
            ref="offerGreen_2"
            v-text="info.offer[1].greenText"
        ></strong>
        <strong
            contenteditable
            ref="offerBlack_2"
            v-text="info.offer[1].blackText"
        ></strong>
      </h5>
      <h5
          style="margin-bottom: 16px"
          v-if="info.offer[2]"
      >
        <strong
            style="color: #72BF44; margin-right: 8px;"
            contenteditable
            ref="offerGreen_3"
            v-text="info.offer[2].greenText"
        ></strong>
        <strong
            contenteditable
            ref="offerBlack_3"
            v-text="info.offer[2].blackText"
        ></strong>
      </h5>
      <v-btn absolute fab dark small bottom right color="warning"
          @click="addOffer"
          v-if="!info.offer[2]"
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

export default {
  name: 'Aside',
  computed: {
    ...mapState('content', ['info'])
  },
  methods: {
    addOffer () {
      this.$store.commit('content/ADD_OFFER')
    },
    saveContent () {
      this.$store.commit('content/UPDATE_INFO', { prop: 'header', value: this.$refs.infoHeader.innerText })
      this.$store.commit('content/UPDATE_INFO', { prop: 'text', value: this.$refs.infoText.innerText })
      this.$store.commit('content/UPDATE_OFFER', {
        num: 0,
        greenText: this.$refs.offerGreen_1.innerText,
        blackText: this.$refs.offerBlack_1.innerText
      })
      this.$store.commit('content/UPDATE_OFFER', {
        num: 1,
        greenText: this.$refs.offerGreen_2.innerText,
        blackText: this.$refs.offerBlack_2.innerText
      })
      this.$store.commit('content/UPDATE_OFFER', {
        num: 2,
        greenText: this.$refs.offerGreen_3.innerText,
        blackText: this.$refs.offerBlack_3.innerText
      })
      this.$store.commit('content/FILTER_OFFERS')
    }
  }
}
</script>
