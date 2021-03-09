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
                    v-if="field.type === 'input-with-validation' || field.type === 'phone-number'"
                    :fieldIndex="index"
              />
              <!-- <InputPhoneNumber
                    v-if="field.type === 'phone-number'"
                    :fieldIndex="index"
              /> -->
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
      </div>
    </v-card-text>

    <v-card-actions>
      <Button :value.sync="button" :hideConfig="true" />
    </v-card-actions>

    <UserFormCustomization :dialog.sync="dialog" />
  </v-card>
</template>

<style scoped>

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

import { mapState, mapMutations } from 'vuex'

import {
  Selector,
  Combo,
  InputWithValidation,
  DateInput,
  TimeInput,
  InputMessage
} from '@/components/contact'

import { UserFormCustomization } from '@/components/editor'

import { SubHeader5, Button } from '@/components/inputs'

export default {
  name: 'UserContact',
  components: {
    UserFormCustomization,
    SubHeader5,
    Button,
    InputMessage,
    InputWithValidation,
    Selector,
    Combo,
    DateInput,
    TimeInput
  },
  data () {
    return {
      dialog: false,
      clicked: false,
      fields: null
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
        this.update({ prop: 'title', value: val })
      }
    },
    button: {
      get () {
        return this.userForm.button
      },
      set (val) {
        this.update({ prop: 'button', value: val })
      }
    }
  },
  watch: {
    contactFormFields: {
      deep: true,
      immediate: true,
      handler (val) {
        this.fields = JSON.parse(JSON.stringify(val))
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_USER_FORM'
    }),
    initFields () {
      this.fields = JSON.parse(JSON.stringify(this.contactFormFields))
    }
  },
  mounted () {
    this.fields = JSON.parse(JSON.stringify(this.contactFormFields))
  }
}

</script>
