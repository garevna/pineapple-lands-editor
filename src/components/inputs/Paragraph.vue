<template>
  <v-textarea
          class="h2"
          v-model="inputValue"
          auto-grow
          rows="1"
          row-height="24"
          hide-details
          flat
  ></v-textarea>
</template>

<style scoped>
.paragraph {
  font-size: 16px;
  font-weight: normal;
}
</style>

<script>
export default {
  name: 'Paragraph',
  props: ['value'],
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:value', val)
      }
    }
  }
}
</script>
