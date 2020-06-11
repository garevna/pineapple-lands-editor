<template>
  <v-dialog v-model="dialog" persistent max-width="600px" v-if="field">
    <v-card class="pa-8">
      <v-card-title>
        <h3 style="text-align: left; color: #09b">
          {{ field.type }}
        </h3>
      </v-card-title>
      <v-card-text>
        <p style="text-align: left; color: #09b">
          Define the name for the field (it will be shown as field label)
        </p>
        <v-text-field
              label="Field label (prompt text)"
              v-model="field.placeholder"
              prompt="Field label (prompt text)"
              prepend-inner-icon="mdi-pencil"
        ></v-text-field>
      </v-card-text>
      <v-card-text>
        <v-checkbox v-model="field.required" class="mx-2" label="Required"></v-checkbox>
      </v-card-text>
      <v-card-title v-if="field.type === 'combo' || field.type === 'list'">
        <p style="color: #09b">Define the set of available values</p>
      </v-card-title>
      <v-card-text v-if="field.type === 'combo' || field.type === 'list'">
        <v-simple-table dense>
          <template v-slot:default>
            <tbody dense>
              <tr v-if="field.available.length === 0">
                <td>(Empty)</td>
              </tr>
              <tr v-for="(item, index) in field.available" :key="index">
                <td width="10%">
                  <v-btn
                         dark
                         fab
                         small
                         width="28"
                         height="28"
                         color="delete"
                         @click.stop="field.available.splice(index, 1)"
                  >
                    <v-icon>$delete</v-icon>
                  </v-btn>
                </td>
                <td width="80%">
                  <v-text-field v-model="field.available[index]"></v-text-field>
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
                         @click.stop="field.available.push('...')"
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

export default {
  name: 'Config',
  props: ['dialog', 'fieldIndex'],
  data () {
    return {
      field: null
    }
  },
  watch: {
    field: {
      deep: true,
      handler (val) {
        console.log('Field handler:\n', val)
        for (const prop in val) {
          this.$store.commit('content/UPDATE_USER_FORM_FIELD_OPTION', {
            num: this.fieldIndex,
            prop,
            value: val[prop]
          })
        }
      }
    }
  },
  mounted () {
    this.field = this.$store.state.content.userForm.fieldsToShow[this.fieldIndex]
    delete this.field.undefined
    console.log('Config mounted: ', this.field)
  }
}
</script>
