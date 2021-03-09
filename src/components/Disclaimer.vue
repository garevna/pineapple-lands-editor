<template>
  <v-card
        flat
        class="disclaimer transparent mx-auto my-12"
        max-width="900"
  >
    <v-card-text class="text-center">
      <!-- <h2>{{ disclaimer.header }}</h2> -->
      <SubHeader :value.sync=header />
    </v-card-text>
    <v-card-text>
      <!-- <p class="text-left" v-html="html"></p> -->
      <Paragraph :value.sync="text" />
    </v-card-text>
  </v-card>
</template>

<style scoped>

@media screen and (max-width: 900px) {
  .disclaimer {
    margin-bottom: 40px;
  }
}

</style>

<script>

import { mapState } from 'vuex'

import { SubHeader, Paragraph } from '@/components/inputs'

export default {
  name: 'Aside',
  components: {
    SubHeader,
    Paragraph
  },
  computed: {
    ...mapState('content', ['disclaimer']),
    html () {
      return this.disclaimer.text.split('\n').map(line => `<p>${line}</p>`).join('')
    },
    header: {
      get () {
        return this.disclaimer.header
      },
      set (val) {
        this.$store.commit('content/UPDATE_DISCLAIMER', { prop: 'header', value: val })
      }
    },
    text: {
      get () {
        return this.disclaimer.text
      },
      set (val) {
        this.$store.commit('content/UPDATE_DISCLAIMER', { prop: 'text', value: val })
      }
    }
  }
}
</script>
