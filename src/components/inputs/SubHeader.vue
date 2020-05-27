<template>
  <v-textarea
          :class="classExpression"
          max-width="600"
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
.h2 {
  font-size: 32px;
  font-weight: 900;
  width:80%;
  margin-left:10%;
}

</style>

<style>
.footer.theme--light.v-input input, .footer.theme--light.v-input textarea {
  color: #fff!important;
}
</style>

<script>
export default {
  name: 'SubHeader',
  props: ['value', 'className'],
  computed: {
    classExpression () {
      return `${this.className ? this.className : ''} h2 mx-auto`
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
