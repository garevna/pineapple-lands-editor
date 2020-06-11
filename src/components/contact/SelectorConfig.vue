<template>
  <v-card flat class="transparent mx-auto">
    <v-card-title>
      <ButtonWithTooltip
          :fab="true"
          color="#f0f"
          icon="$config"
          :width="32"
          :height="32"
          tooltip="Customize the field"
          :clicked.sync="clicked"
          :left="-40"
          :top="-32"
      />
      <h5>{{ fieldLabel }}</h5>
    </v-card-title>
    <Selector :fieldIndex="fieldIndex" />
    <Config :dialog.sync="config" :label.sync="fieldLabel" :values.sync="fieldValues" />
  </v-card>
</template>

<style scoped>
</style>

<script>

import Selector from '@/components/contact/Selector.vue'
import Config from '@/components/contact/Config.vue'
import ButtonWithTooltip from '@/components/editor/ButtonWithTooltip.vue'

export default {
  name: 'SelectorConfig',
  components: {
    Selector,
    Config,
    ButtonWithTooltip
  },
  props: ['fieldIndex'],
  data () {
    return {
      clicked: false,
      config: false
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
    },
    tooltip () {
      return this.config ? 'Hide customization' : 'Customize the field'
    }
  },
  watch: {
    clicked (val) {
      if (!val) return
      this.config = true
      this.clicked = false
    }
  }
}
</script>
