<template>
  <v-tooltip top color="info">
    <template v-slot:activator="{ on }">
      <v-btn
          :fab="fab"
          dark
          :width="width || 240"
          :height="height || 48"
          :color="color || 'info'"
          :style="style"
          v-on="on"
          @click="$emit('update:clicked', true)"
      >
        <v-icon v-if="icon">{{ icon }}</v-icon>
        <span v-if="text">{{ text }}</span>
      </v-btn>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'ButtonWithTooltip',
  props: {
    text: String,
    tooltip: String,
    icon: String,
    width: Number,
    height: Number,
    color: String,
    fab: Boolean,
    top: Number,
    left: Number,
    bottom: Number,
    right: Number,
    clicked: Boolean
  },
  computed: {
    style () {
      return `
        margin-top: ${this.top || 0}px;
        margin-left: ${this.left || 0}px;
        margin-bottom: ${this.bottom || 0}px;
        margin-right: ${this.right || 0}px;
      `
    }
  }
}
</script>
