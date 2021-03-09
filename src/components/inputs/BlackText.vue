<template>
    <v-textarea
            class="black-text"
            v-model="inputValue"
            hide-details
            prepend-inner-icon="mdi-pencil"
    ></v-textarea>
</template>

<style scoped>
.paragraph {
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: #000;
}
</style>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'BlackText',
  props: ['index'],
  computed: {
    ...mapState('content', ['info']),
    inputValue: {
      get () {
        return this.info.offer[this.index].blackText
      },
      set (value) {
        this.update({ num: this.index, value })
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_OFFER_BLACK_TEXT'
    })
  }
}
</script>
