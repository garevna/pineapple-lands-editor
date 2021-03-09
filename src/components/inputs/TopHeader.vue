<template>
  <v-textarea
    class="h1"
    v-model="inputValue"
    auto-grow
    rows="1"
    :row-height="48"
    hide-details
    flat
    prepend-inner-icon="mdi-pencil"
  ></v-textarea>
</template>

<style scoped>
.h1 {
  font-size: 46px;
  font-weight: 900;
}
</style>

<script>
export default {
  name: 'TopHeader',
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
