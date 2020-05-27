<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card class="pa-8">
      <v-card-title>
        <p style="text-align: left; color: #09b">Define the name for the field (it will be shown as field label)</p>
      </v-card-title>
      <v-card-text>
        <v-text-field
              label="Field label"
              v-model="fieldLabel"
              prompt="Field label"
              prepend-inner-icon="mdi-pencil"
        ></v-text-field>
      </v-card-text>
      <v-card-title>
        <p style="color: #09b">Define the set of available values</p>
      </v-card-title>
      <v-card-text>
        <v-simple-table dense>
          <template v-slot:default>
            <tbody dense>
              <tr v-for="(item, index) in list" :key="index">
                <td width="10%">
                  <v-btn
                         dark
                         fab
                         small
                         width="28"
                         height="28"
                         color="delete"
                         @click.stop="list.splice(index, 1)"
                  >
                    <v-icon>$delete</v-icon>
                  </v-btn>
                </td>
                <td width="80%">
                  <v-text-field v-model="list[index]"></v-text-field>
                </td>
                <td width="10%"></td>
              </tr>
              <tr>
                <td width="10%"></td>
                <td width="80%"></td>
                <td width="10%">
                  <v-spacer></v-spacer>
                  <v-btn
                         dark
                         small
                         color="info"
                         @click.stop="list.push('...')"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
      <v-btn
          fab
          top
          right
          dark
          color="info"
          text
          @click="$emit('update:dialog', false)"
      >CLOSE</v-btn>
    </v-card>
  </v-dialog>
</template>

<style scoped>
</style>

<script>

// import ButtonWithTooltip from '@/components/editor/ButtonWithTooltip.vue'

export default {
  name: 'Config',
  components: {
    // ButtonWithTooltip
  },
  props: ['dialog', 'label', 'values'],
  data () {
    return {
      list: []
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
    }
  },
  watch: {
    list: {
      deep: true,
      handler (val) {
        this.$emit('update:values', val)
      }
    }
  },
  mounted () {
    this.list = this.values || ['...']
  }
}
</script>
