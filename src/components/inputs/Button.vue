<template>
  <v-card flat class="transparent mx-auto text-center">
    <v-row style="margin-top: 16px; margin-left: 20px!important" v-if="!hideConfig">
        <span style="margin-top: 16px"><small>{{ goto }}</small></span>
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn
              fab
              color="#09b"
              icon
              v-on="on"
            >
              <v-icon large>
                mdi-gesture-tap-button
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(section, i) in sections"
              :key="i"
              @click="selectSection(i)"
            >
              <v-list-item-title>
                {{ section }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </v-row>
      <v-row>
        <v-text-field
              dark
              class="submit-button mx-auto"
              v-model="inputValue"
              hide-details
              prepend-inner-icon="mdi-pencil"
        ></v-text-field>
    </v-row>
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

import { mapState } from 'vuex'

export default {
  name: 'Button',
  props: ['value', 'goto', 'hideConfig'],
  data () {
    return {
      clicked: false
    }
  },
  computed: {
    ...mapState(['currentLand']),
    ...mapState('editor', ['configs', 'subPagesConfigs']),
    sections () {
      if (typeof this.currentLand === 'string' && this.currentLand.indexOf('2-') === 0) return this.subPagesConfigs[this.currentLand.slice(2) - 1].map(item => item.title)
      return this.configs[this.currentLand - 1].map(item => item.title)
    },
    jumps () {
      if (typeof this.currentLand === 'string' && this.currentLand.indexOf('2-') === 0) return this.subPagesConfigs[this.currentLand.slice(2) - 1].map(item => item.value)
      return this.configs[this.currentLand - 1].map(item => item.value)
    },
    inputValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:value', val)
      }
    }
  },
  methods: {
    selectSection (num) {
      this.$emit('update:goto', this.jumps[num])
    }
  }
}
</script>
