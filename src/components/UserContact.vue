<template>
  <v-card class="user-info mx-auto my-auto pa-6 homefone" width="480">
    <v-card-title>
      <SubHeader5 :value.sync="title" />
    </v-card-title>
    <v-card-text class="mx-0 px-0" width="100%" v-if="fields">
      <v-row
            v-for="(field, prop) in fields"
            :key="prop"
            class="bordered my-0"
      >
          <v-col cols="10">
            <InputWithValidation
                    v-if="field.type === 'input-with-validation'"
                    :label="field.placeholder"
                    :placeholder="field.placeholder"
                    :propName="prop"
                    :validator="field.validator"
                    :value.sync="field.value"
              />
              <InputPhoneNumber
                    v-if="field.type === 'phone-number'"
                    propName="phone"
              />
              <SelectorConfig
                    v-if="field.type === 'selector'"
                    :label.sync="field.placeholder"
                    :values.sync="field.available"
              />
              <ComboBoxConfig
                    v-if="field.type === 'combobox'"
                    :label.sync="field.placeholder"
                    :values.sync="field.available"
              />
              <InputMessage
                    v-if="field.type === 'textarea'"
                    :label.sync="field.placeholder"
              />
              <v-divider></v-divider>
          </v-col>
          <v-col cols="2">
            <v-tooltip top color="info">
              <template v-slot:activator="{ on }">
                <v-checkbox
                      name="checks"
                      :value="prop"
                      v-model="selected"
                      color="info"
                      v-on="on"
                ></v-checkbox>
              </template>
              <span>Select field</span>
            </v-tooltip>
          </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <Button :value.sync="button" />
    </v-card-actions>

    <Popup :opened.sync="popupOpened" />
    <PopupError :opened.sync="popupErrorOpened" />
  </v-card>
</template>

<style scoped>

/* .v-text-field.v-text-field--enclosed {
  margin-bottom: 4px!important;
} */

.user-info {
  width: 640px;
  padding-left: 80px;
  border-radius: 15px!important;
}
h4 {
  width: 100%;
  text-align: center;
  margin-top: 0;
  margin-bottom: 8px;
}
.user-inputs {
  font-family: Gilroy;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #656565;
}

@media screen and (max-width: 600px) {
  .v-btn__content {
    font-size: 16px!important;
  }
  .user-info {
    width: 480px!important;
    padding-left: 40px;
  }
  .user-inputs {
    font-size: 14px;
  }
}
@media screen and (max-width: 320px) {
  .user-info {
    width: 300px!important;
    padding-left: 0px;
  }
  .user-inputs {
    font-size: 13px;
  }
}
</style>

<script>

import { mapState, mapActions } from 'vuex'

import SubHeader5 from '@/components/inputs/SubHeader5.vue'
import Button from '@/components/inputs/Button.vue'

// import ButtonWithTooltip from '@/components/editor/ButtonWithTooltip.vue'

import SelectorConfig from '@/components/contact/SelectorConfig.vue'
import ComboBoxConfig from '@/components/contact/ComboBoxConfig.vue'
import InputWithValidation from '@/components/contact/InputWithValidation.vue'
import InputPhoneNumber from '@/components/contact/InputPhoneNumber.vue'
import InputMessage from '@/components/contact/InputMessage.vue'

import Popup from '@/components/contact/Popup.vue'
import PopupError from '@/components/contact/PopupError.vue'

// const emailValidator = require('email-validator')

export default {
  name: 'UserContact',
  components: {
    InputPhoneNumber,
    InputMessage,
    InputWithValidation,
    SelectorConfig,
    ComboBoxConfig,
    Popup,
    PopupError,
    SubHeader5,
    Button
  },
  data () {
    return {
      popupOpened: false,
      popupErrorOpened: false,
      selected: [],
      clicked: false
    }
  },
  computed: {
    ...mapState('content', ['userForm']),
    ...mapState('contact', {
      fields: 'contactFormFields'
    }),

    title: {
      get () {
        return this.userForm.title
      },
      set (val) {
        this.$store.commit('content/UPDATE_USER_FORM', {
          prop: 'title',
          value: val
        })
      }
    },
    button: {
      get () {
        return this.userForm.button
      },
      set (val) {
        this.$store.commit('content/UPDATE_USER_FORM', {
          prop: 'button',
          value: val
        })
      }
    }
  },
  watch: {
    selected (selectedFields) {
      const option = 'show'
      for (const field in this.fields) {
        const value = selectedFields.indexOf(field) !== -1
        this.$store.commit('content/UPDATE_USER_FORM_FIELD_OPTION', { field, option, value })
        this.$store.commit('contact/UPDATE_FIELD', { field, prop: option, value })
      }
    },
    fields: {
      deep: true,
      handler (val) {
        for (const field in val) {
          if (val[field].available) {
            this.$store.commit('content/UPDATE_USER_FORM_FIELD_OPTION', {
              field,
              option: 'available',
              value: val[field].available
            })
          }
          if (val[field].placeholder) {
            this.$store.commit('content/UPDATE_USER_FORM_FIELD_OPTION', {
              field,
              option: 'placeholder',
              value: val[field].placeholder
            })
          }
          for (const prop in val[field]) {
            this.$store.commit('contact/UPDATE_FIELD', {
              field,
              prop,
              value: val[field][prop]
            })
          }
        }
      }
    }
  },
  methods: {
    ...mapActions('contact', {
      sendEmail: 'SEND_EMAIL'
    }),
    initFields () {
      this.$store.commit('contact/CLEAR_ALL_FIELDS')
    },

    async sendUserRequest () {
      if (await this.sendEmail()) this.popupOpened = true
      else this.popupErrorOpened = true
    }
  },
  mounted () {
    const fields = this.userForm.fieldsToShow
    this.selected = []
    for (const field in fields) {
      for (const prop in fields[field]) {
        this.$store.commit('contact/UPDATE_FIELD', {
          field,
          prop,
          value: fields[field][prop]
        })
      }
      if (fields[field].show) this.selected.push(field)
    }
  }
}

</script>
