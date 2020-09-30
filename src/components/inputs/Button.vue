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
              :class="{ 'pineapple-submit-button': !isDGtek, 'dgtek-submit-button': isDGtek }"
              v-model="inputValue"
              hide-details
              prepend-inner-icon="mdi-pencil"
        ></v-text-field>
    </v-row>
  </v-card>
</template>

<style scoped>

.pineapple-submit-button, .dgtek-submit-button {
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 16px!important;
  line-height: 100%;
  text-transform: uppercase;
  padding: 12px 16px;
  text-align:center!important;
  color: #fff!important;
  width: 340px;
}
.pineapple-submit-button {
  background-color: #72BF44;
  border-radius: 32px;
}
.dgtek-submit-button {
  background-color: #f44336;
  border-radius: 8px;
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
    ...mapState(['currentLand', 'lands']),
    ...mapState('editor', ['configs']),
    route () {
      let land = this.lands.find(land => land.route === this.$route.name)
      if (!land) {
        land = this.lands
          .flatMap(land => land.childs)
          .filter(item => item)
          .find(item => item.route === this.$route.name)
      }
      return land.short
    },
    sections () {
      return this.configs[this.route].map(item => item.title)
    },
    jumps () {
      console.log(this.route, this.configs)
      return this.configs[this.route].map(item => item.value)
    },
    isDGtek () {
      return this.$route.name === 'dgtek'
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
