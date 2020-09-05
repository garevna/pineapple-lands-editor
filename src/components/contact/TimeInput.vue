<template>
  <div class="time-input">
    <p>{{ field.placeholder }}</p>
    <v-card flat width="240" class="transparent mx-auto my-0">
      <input type="number" max="12" min="00" v-model="hours" @input="inputHours" />
      <b>:</b>
      <input type="number" max="59" min="00" v-model="minutes"  @input="inputMinutes"/>
      <v-select
            v-model="timeFormat"
            :items="items"
            label=""
            solo
            flat
            hide-details
            dense
            height="24"
            class="select"
      >
      </v-select>
    </v-card>
  </div>
</template>

<style scoped>

.time-input {
  border: solid 1px #aaa;
  border-radius: 4px;
  margin: 8px;
  padding: 8px 16px;
}

input[type="number"] {
  border: solid 1px #ddd;
  width: 54px;
  border-radius: 4px;
  padding: 4px;
  outline: none;
}
.select {
  display: inline-block;
  width: 88px;
  border: 0!important;
  padding: 0;
}
</style>

<script>

import { VSelect, VCard } from 'vuetify/lib'

export default {
  name: 'DateInput',
  components: {
    VSelect,
    VCard
  },
  props: ['field', 'value', 'error'],
  data: () => ({
    hours: '10',
    minutes: '00',
    items: ['AM', 'PM'],
    timeFormat: 'PM'
  }),
  computed: {
    result () {
      this.$emit('update:value', `${this.hours}:${this.minutes} ${this.timeFormat}`)
      return this.value
    }
  },
  methods: {
    inputHours () {
      if (this.hours > 12) this.hours = '12'
      if (this.hours === '12') this.minutes = '00'
      else {
        this.hours = this.hours.length < 2 ? this.hours = '0' + this.hours
          : this.hours.length > 2 ? this.hours.slice(1) : this.hours
      }
    },
    inputMinutes () {
      if (this.hours === '12') {
        this.minutes = '00'
        return
      }
      if (this.minutes > 59) {
        this.minutes = 50
        return
      }
      this.minutes = this.minutes.length < 2 ? '0' + this.minutes
        : this.minutes.length > 2 ? this.minutes.slice(1) : this.minutes
    }
  }
}
</script>
