<template>
  <v-textarea
          :class="classExpression"
          v-model="inputValue"
          auto-grow
          hide-details
          flat
          rows="1"
          row-height="34"
          prepend-inner-icon="mdi-pencil"
  ></v-textarea>
</template>

<style scoped>
.h5 {
  font-size: 28px;
  font-weight: 900;
  width:80%;
  margin-left:10%;
}
</style>

<script>
export default {
  name: 'SubSubHeader',
  props: ['value', 'className'],
  computed: {
    classExpression () {
      return `${this.className ? this.className : ''} h5 mx-auto`
    },
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
