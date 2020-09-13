<template>
  <v-text-field
          class="small-grey-text"
          v-model="inputValue"
          hide-details
          color="#777"
          prepend-inner-icon="mdi-pencil"
  ></v-text-field>
</template>

<style scoped>
.small-grey-text {
  font-size: 14px;
  font-weight: normal;
  color: #777;
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
