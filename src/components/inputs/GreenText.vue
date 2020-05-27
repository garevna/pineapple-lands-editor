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
export default {
  name: 'GreenText',
  props: ['index'],
  computed: {
    inputValue: {
      get () {
        return this.$store.state.content.info.offer[this.index].greenText
      },
      set (val) {
        this.$store.commit('content/UPDATE_OFFER_GREEN_TEXT', {
          num: this.index,
          value: val
        })
      }
    }
  }
}
</script>
