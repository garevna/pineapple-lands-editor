<template>
  <v-text-field
          class="green-text"
          v-model="inputValue"
          hide-details
          color="#72BF44"
          prepend-inner-icon="mdi-pencil"
  ></v-text-field>
</template>

<style>
.theme--light.v-input.green-text input,
.theme--light.v-input.green-text textarea {
  color: #72BF44!important;
}
</style>

<style scoped>
.green-text {
  font-size: 16px!important;
  font-weight: bold!important;
}

</style>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'GreenText',
  props: ['index'],
  computed: {
    ...mapState('content', ['info']),
    inputValue: {
      get () {
        return this.info.offer[this.index].greenText
      },
      set (value) {
        this.update({ num: this.index, value })
      }
    }
  },
  watch: {
    index (val) {
      console.log('Index changed: ', val, this.inputValue)
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_OFFER_GREEN_TEXT'
    })
  }
}
</script>
