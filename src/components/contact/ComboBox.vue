<template>
    <InputWithValidation
        :placeholder="label"
        propName="combo"
        :validator="validate"
    />
</template>

<style scoped>
</style>

<script>

import InputWithValidation from '@/components/contact/InputWithValidation.vue'

export default {
  name: 'ComboBox',
  components: {
    InputWithValidation
  },
  props: ['label', 'values'],
  data () {
    return {

    }
  },
  computed: {
    fieldLabel: {
      get () {
        return this.label
      },
      set (val) {
        this.$emit('update:label', val)
      }
    },
    fieldValues: {
      get () {
        return this.values
      },
      set (val) {
        this.$emit('update:values', val)
      }
    }
  },
  methods: {
    validate (val) {
      return this.values.indexOf(val) !== -1
    }
  }
}
</script>
