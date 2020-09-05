<template>
  <div class="date-input">
    <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290"
          max-width="100%"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
                v-model="date"
                :label="field.placeholder"
                prepend-icon="mdi-calendar-range"
                readonly
                v-bind="attrs"
                v-on="on"
          ></v-text-field>
        </template>
      <v-date-picker v-model="date" @input="menu = false"></v-date-picker>
    </v-menu>
  </div>
</template>

<style scoped>
.date-input {
  border: solid 1px #aaa;
  border-radius: 4px;
  margin: 8px;
  padding: 8px 16px;
}
</style>

<script>

import { VMenu, VDatePicker, VTextField } from 'vuetify/lib'

export default {
  name: 'DateInput',
  components: {
    VMenu,
    VDatePicker,
    VTextField
  },
  data: () => ({
    menu: false
  }),
  props: ['field', 'value', 'error'],
  computed: {
    date: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:error', this.field.required && !val)
        this.$emit('update:value', val)
      }
    }
  }
}
</script>
