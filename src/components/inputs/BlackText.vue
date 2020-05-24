<template>
  <v-textarea
          class="black-text"
          v-model="inputValue"
          hide-details
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
export default {
  name: 'BlackText',
  props: ['index'],
  computed: {
    inputValue: {
      get () {
        return this.$store.state.content.info.offer[this.index].blackText
      },
      set (val) {
        this.$store.commit('content/UPDATE_OFFER_BLACK_TEXT', {
          num: this.index,
          value: val
        })
      }
    }
  }
}
</script>
