<template>
    <v-dialog
          v-model="modal"
          fullscreen
          transition="dialog-bottom-transition"
    >
      <v-card flat with="100%" heigh="100%" class="homefone">
        <v-card>
          <v-toolbar dark color="primary" fixed>
            <v-btn icon dark @click="modal = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>
              Customizing the contact form
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="reflectAllChanges">
                Save
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-card>

        <v-row>
          <!-- ================ AVAILABLE FIELDS ================ -->
          <v-col cols="12" md="6">

            <v-card
                  width="30%"
                  max-width="300"
                  style="position: absolute; top: 64px; right: 0; bottom:0; overflow-y: auto;"
            >
                  <v-card flat class="transparent">
                    <v-card-title style="color: #09b">
                      Available fields
                    </v-card-title>
                    <v-card-text
                           v-for="(item, prop) in description"
                           :key="prop"
                           style="padding: 0 16px"
                    >
                      <v-btn icon fab @click.stop="addField(prop)">
                        <v-icon color="#09b">mdi-plus-circle</v-icon>
                      </v-btn>

                      <span>{{ item }}</span>

                    </v-card-text>
                  </v-card>
                </v-card>
          </v-col>

          <!-- ================ SELECTED FIELDS ================ -->

          <v-col cols="12" md="6">
             <v-card
                  width="70%"
                  id="card-with-table"
            >
              <v-card flat class="transparent">
                <v-card-title style="color: #09b">
                  Fields of contact form
                </v-card-title>

                <v-simple-table
                      dense
                      fixed-header
                >
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-center">Order</th>
                        <th class="text-left">Placeholder</th>
                        <th class="text-left">Type</th>
                        <th class="text-left">Required</th>
                        <th class="text-center">Config</th>
                        <th class="text-center">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                          v-for="(item, index) in formFields"
                          :key="index"
                      >
                        <td class="text-center">
                          <v-btn icon @click.stop="moveUp(index)" v-if="index > 0">
                            <v-icon>mdi-arrow-up-bold-circle</v-icon>
                          </v-btn>
                          <v-btn icon @click.stop="moveDown(index)" v-if="index < formFields.length">
                            <v-icon>mdi-arrow-down-bold-circle</v-icon>
                          </v-btn>
                        </td>
                        <td>
                          <v-text-field v-model="item.placeholder"></v-text-field>
                        </td>
                        <td>{{ description[item.type] }}</td>
                        <td class="text-center">
                          <v-checkbox v-model="item.required"></v-checkbox>
                        </td>
                        <td class="text-center">
                          <v-btn
                                 fab
                                 small
                                 width="24"
                                 height="24"
                                 dark
                                 color="#09b"
                                 @click.stop="configField(index)"
                                 v-if="item.type === 'list' || item.type === 'combo'"
                          >
                            <v-icon small>mdi-cog</v-icon>
                          </v-btn>
                        </td>
                        <td class="text-center">
                          <v-btn
                                 fab
                                 small
                                 width="24"
                                 height="24"
                                 dark color="#900"
                                 @click.stop="formFields.splice(index, 1)"
                          >
                            <v-icon small>mdi-delete-forever</v-icon>
                          </v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <Config
          v-if="typeof currentField === 'number'"
          :dialog.sync="config"
          :fieldIndex="currentField"
      />
    </v-dialog>
</template>

<style scoped>
#card-with-table {
  position: absolute;
  top: 64px;
  left: 0;
  bottom: 0;
  padding-bottom: 72px;
  box-sizing:border-box;
  overflow-y: auto;
}
</style>

<script>

import { mapState, mapMutations, mapActions } from 'vuex'

import { Config } from '@/components/contact'

export default {
  name: 'UserFormCustomization',
  components: {
    Config
  },
  props: ['dialog'],
  data () {
    return {
      config: false,
      currentField: undefined,
      height: '',
      formFields: []
    }
  },
  computed: {
    ...mapState(['description', 'fieldTypes']),
    ...mapState('content', ['userForm']),
    modal: {
      get () {
        return this.dialog
      },
      set (val) {
        this.$emit('update:dialog', val)
      }
    }
  },
  watch: {
    config (val) {
      if (!val) this.currentField = undefined
    },
    'userForm.fieldsToShow': {
      deep: true,
      immediate: true,
      handler (val) {
        this.formFields = val
      }
    },
    modal (val) {
      document.body.style.overflow = val ? 'hidden' : 'auto'
      this.$root.$el.style.overflow = val ? 'hidden' : 'auto'
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_USER_FORM_FIELDS'
    }),
    ...mapActions('contact', {
      setFields: 'SET_FIELDS_TO_SHOW'
    }),
    moveUp (index) {
      this.formFields.splice(index - 1, 0, this.formFields.splice(index, 1)[0])
    },
    moveDown (index) {
      this.formFields.splice(index + 1, 0, this.formFields.splice(index, 1)[0])
    },
    getTitle (type) {
      return this.description[type]
    },
    configField (num) {
      this.currentField = num
      this.config = true
    },
    addField (arg) {
      this.formFields.push({
        type: arg,
        placeholder: 'New field...',
        required: false,
        available: []
      })
      const card = document.getElementById('card-with-table')
      card.scrollTop = card.scrollHeight
    },
    reflectAllChanges () {
      // this.update(this.userForm.fieldsToShow)
      this.update(this.formFields)
      this.setFields(this.userForm.fieldsToShow)
        .then(() => { this.modal = false })
    }
  },
  mounted () {
    this.height = window.innerHeight * 0.8
    this.formFields = this.$store.state.content.userForm.fieldsToShow
  }
}
</script>
