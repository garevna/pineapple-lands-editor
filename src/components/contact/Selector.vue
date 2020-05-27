<template>
  <v-select
      :items="values"
      outlined
      hide-details
      class="combo-box-input"
      v-model="selected"
      :label="label"
  ></v-select>
</template>

<style scoped>
  .combo-box-input {
    margin-top: 24px;
    margin-bottom: 16px;
  }
</style>

<script>

export default {
  name: 'Selector',
  props: ['label', 'values'],
  data () {
    return {
      //
    }
  },
  computed: {
    selected: {
      get () {
        return this.propName
      },
      set (val) {
        console.log('SELECTED: ', val)
        this.$store.commit('contact/UPDATE_USER_INFO', {
          field: 'list',
          value: val
        })
      }
    }
  }
}
</script>
