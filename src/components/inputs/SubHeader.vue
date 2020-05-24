<template>
  <v-textarea
          class="h2"
          v-model="inputValue"
          auto-grow
          hide-details
          flat
          rows="1"
          row-height="34"
  ></v-textarea>
</template>

<style scoped>
.h2 {
  font-size: 32px;
  font-weight: 900;
}
</style>

<script>
export default {
  name: 'SubHeader',
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
