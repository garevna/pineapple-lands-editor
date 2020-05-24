<template>
  <v-textarea
          class="h3"
          v-model="inputValue"
          auto-grow
          hide-details
          flat
          rows="1"
          row-height="34"
  ></v-textarea>
</template>

<style scoped>
.h3 {
  font-size: 28px;
  font-weight: 900;
}
</style>

<script>
export default {
  name: 'SubSubHeader',
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
