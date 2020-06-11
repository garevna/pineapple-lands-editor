<template>
    <InputWithValidation
        :placeholder="field.placeholder"
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
  props: ['fieldIndex'],
  data () {
    return {

    }
  },
  computed: {
    field () {
      return this.$store.state.contact.contactFormFields[this.fieldIndex]
    },
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
