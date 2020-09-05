<template>
  <v-card class="user-info mx-auto my-auto pa-6 homefone" width="480">
    <v-card-title>
      <SubHeader5 :value.sync="title" />
    </v-card-title>
    <v-tooltip top color="info">
        <template v-slot:activator="{ on }">
          <v-spacer></v-spacer>
          <v-btn icon large color="info" v-on="on" @click.stop="dialog = true">
            <v-icon large style="font-size: 48px!important">mdi-playlist-edit</v-icon>
          </v-btn>
        </template>
        <span>Customize Contact Form</span>
    </v-tooltip>

    <v-card-text class="mx-0 px-0" width="100%" v-if="fields">
      <div v-for="(field, index) in fields" :key="index">
            <InputWithValidation
                    v-if="field.type === 'input-with-validation'"
                    :fieldIndex="index"
              />
              <InputPhoneNumber
                    v-if="field.type === 'phone-number'"
                    :fieldIndex="index"
              />
              <Selector
                    v-if="field.type === 'selector'"
                    :fieldIndex="index"
              />
              <Combo
                    v-if="field.type === 'combobox'"
                    :fieldIndex="index"
              />
              <DateInput
                    :field="field"
                    :value.sync="field.value"
                    :error.sync="field.error"
                    v-if="field.type === 'date-input'"
              />
              <TimeInput
                    :field="field"
                    :value.sync="field.value"
                    :error.sync="field.error"
                    v-if="field.type === 'time-input'"
              />
              <InputMessage
                    v-if="field.type === 'textarea'"
                    :fieldIndex="index"
              />
      <!-- </v-row> -->
      </div>
    </v-card-text>

    <v-card-actions>
      <Button :value.sync="button" :hideConfig="true" />
    </v-card-actions>

    <Popup :opened.sync="popupOpened" />
    <PopupError :opened.sync="popupErrorOpened" />
    <UserFormCustomization :dialog.sync="dialog" />
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

import UserFormCustomization from '@/components/editor/UserFormCustomization.vue'

import Selector from '@/components/contact/Selector.vue'
import Combo from '@/components/contact/Combo.vue'
import InputWithValidation from '@/components/contact/InputWithValidation.vue'
import InputPhoneNumber from '@/components/contact/InputPhoneNumber.vue'
import DateInput from '@/components/contact/DateInput.vue'
import TimeInput from '@/components/contact/TimeInput.vue'
import InputMessage from '@/components/contact/InputMessage.vue'

import Popup from '@/components/contact/Popup.vue'
import PopupError from '@/components/contact/PopupError.vue'

// const emailValidator = require('email-validator')

export default {
  name: 'UserContact',
  components: {
    UserFormCustomization,
    InputPhoneNumber,
    InputMessage,
    InputWithValidation,
    Selector,
    Combo,
    DateInput,
    TimeInput,
    Popup,
    PopupError,
    SubHeader5,
    Button
  },
  data () {
    return {
      dialog: false,
      popupOpened: false,
      popupErrorOpened: false,
      clicked: false,
      fields: this.$store.state.contact.contactFormFields
    }
  },
  computed: {
    ...mapState('content', ['userForm']),
    ...mapState('contact', ['contactFormFields']),
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
    contactFormFields: {
      deep: true,
      immediate: true,
      handler (val) {
        this.fields = JSON.parse(JSON.stringify(this.$store.state.contact.contactFormFields))
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
    this.fields = JSON.parse(JSON.stringify(this.$store.state.contact.contactFormFields))
  }
}

</script>
