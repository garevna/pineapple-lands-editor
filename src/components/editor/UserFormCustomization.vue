<template>
  <v-dialog
        v-model="modal"
        fullscreen
        scrollable
        hide-overlay
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
                :height="height"
                style="position: absolute; top: 72px; right: 0"
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
                :height="height"
                style="position: absolute; top: 72px; left: 0"
          >
            <v-card flat class="transparent">
              <v-card-title style="color: #09b">
                Fields of contact form
              </v-card-title>
              <v-row
                     v-for="(item, index) in formFields"
                     :key="index"
              >
                <v-col cols="1">
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
                </v-col>
                <v-col cols="8">
                  <p>{{ item.placeholder }} ({{ description[item.type] }})</p>
                </v-col>
                <v-col cols="2">
                  <v-btn
                         fab
                         small
                         width="24"
                         height="24"
                         dark
                         color="#09b"
                         @click.stop="configField(index)"
                  >
                    <v-icon small>mdi-cog</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
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
</style>

<script>

import { mapState } from 'vuex'

import Config from '@/components/contact/Config.vue'

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
    }
  },
  methods: {
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
        placeholder: '...',
        required: false,
        available: []
      })
    },
    reflectAllChanges () {
      this.$store.dispatch('contact/SET_FIELDS_TO_SHOW', this.formFields)
      this.modal = false
    }
  },
  mounted () {
    this.height = `${window.innerHeight - 80}px`
    this.formFields = this.$store.state.content.userForm.fieldsToShow
  }
}
</script>
