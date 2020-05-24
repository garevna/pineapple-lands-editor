<template>
  <v-card flat class="transparent mx-auto text-center">
    <ButtonWithTooltip
          icon="mdi-cog"
          :fab="true"
          :text="null"
          tooltip="Define action (go to)"
          :width="32"
          :height="32"
          :bottom="-40"
          :left="-280"
          color="#f0f"
          :clicked.sync="clicked"
    />
    <v-card-text class="mx-auto text-center">
      <v-text-field
            dark
            class="submit-button mx-auto"
            v-model="inputValue"
            hide-details
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.submit-button {
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 16px!important;
  line-height: 100%;
  text-transform: uppercase;
  width: 340px;
  color: #fff!important;
  text-align:center!important;
  background-color: #72BF44;
  padding: 8px 16px;
  border-radius: 32px;
}
</style>

<script>

import ButtonWithTooltip from '@/components/editor/ButtonWithTooltip.vue'

export default {
  name: 'Button',
  components: {
    ButtonWithTooltip
  },
  props: ['value', 'click'],
  data () {
    return {
      clicked: false
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:value', val)
      }
    }
  },
  watch: {
    clicked (val) {
      if (!val) return
      this.$emit('update:click', true)
      this.clicked = false
    }
  }
}
</script>
