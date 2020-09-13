<template>
  <!-- <v-card-text> -->
  <v-text-field
          :class="{ 'aside--red-text': isRed, 'aside--black-text': !isRed }"
          v-model="inputValue"
          hide-details
          prepend-inner-icon="mdi-pencil"
  ></v-text-field>
</template>

<style>
.theme--light.v-input.aside--red-text input, .aside--red-text.v-input__slot {
  color: #F54436 !important;
}
</style>

<style scoped>
.aside--red-text, .aside--black-text {
  font-size: 18px!important;
  font-weight: bold!important;
}
.aside--red-text {
  color: #F54436 !important;
}
</style>

<script>
export default {
  name: 'AsideColoredText',
  props: ['color', 'index'],
  data: () => ({
    isRed: false
  }),
  computed: {
    mutationName () {
      return `content/UPDATE_ASIDE_${this.color.toUpperCase()}_TEXT`
    },
    inputValue: {
      get () {
        return this.$store.state.content.aside.items[this.index][this.color]
      },
      set (val) {
        this.$store.commit(this.mutationName, {
          num: this.index,
          value: val
        })
      }
    }
  },
  mounted () {
    this.isRed = this.color === 'red'
  }
}
</script>
