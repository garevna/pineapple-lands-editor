<template>
  <v-card flat class="transparent py-2">
    <v-simple-table dense>
      <template v-slot:default>
        <tbody dense>
          <tr>
            <td width="40">
              <v-btn
                     dark
                     fab
                     small
                     width="28"
                     height="28"
                     color="delete"
                     @click.stop="$emit('update:delete', true)"
              >
                <v-icon>$delete</v-icon>
              </v-btn>
            </td>
            <td width="400">
              <v-card-text>
                <v-text-field
                        outlined
                        dense
                        hide-details
                        label="Button text"
                        width="400"
                        v-model="text"
                        class="px-12"
                ></v-text-field>
              </v-card-text>
            </td>
            <td>
              <v-card-text>
                <!-- BUTTON CLICK ACTION -->
                <!-- <span><small>click-through</small></span> -->
                <v-menu bottom left>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      large
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
                      :value.sync="jump"
                      @click="$emit('update:goto', jumps[i])"
                    >
                      <v-list-item-title>
                        {{ section }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <span><small>{{ jump }}</small></span>
              </v-card-text>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<style scoped>
</style>

<script>

// import { mapState } from 'vuex'

export default {
  name: 'ButtonConfig',
  props: ['value', 'goto', 'sections', 'jumps', 'delete'],
  computed: {
    text: {
      get () { return this.value },
      set (val) {
        this.$emit('update:value', val)
      }
    },
    jump: {
      get () { return this.goto },
      set (val) {
        this.$emit('update:goto', this.jumps[this.sections.indexOf(val)])
      }
    }
  }
}
</script>
