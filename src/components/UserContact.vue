<template>
  <v-card class="user-info mx-auto pa-6 homefone" width="480">
    <v-tooltip top color="info">
      <template v-slot:activator="{ on }">
        <v-btn fab dark small color="warning" v-on="on" @click="saveContent">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </template>
      <span>Save section content</span>
    </v-tooltip>
    <v-card-title>
      <h4
          ref="userContactHeader"
          contenteditable
          v-text="userForm.title"
      ></h4>
    </v-card-title>
    <v-card-text class="mx-0 px-0" width="100%">
      <v-text-field
            v-for="(item, prop) in items"
            :key="prop"
            :placeholder="item.placeholder"
            outlined
            dense
            hide-details
            height="32"
            class="user-inputs"
      ></v-text-field>
      <v-textarea
            :placeholder="userForm.messagePlaceholder"
            outlined
            color="#656565"
            auto-grow
            v-model="message"
            class="user-inputs"
      ></v-textarea>
    </v-card-text>
    <v-card-actions>
      <!-- <v-btn
          color="buttons"
          dark
          rounded
          width="220"
          height="48"
          class="submit-button px-auto mx-auto"
          @click="sendUserRequest"
      >
        {{ userForm.button }}
      </v-btn> -->
      <p class="submit-button mx-auto"
          contenteditable
          ref="userContactButton"
          v-text="userForm.button"
      ></p>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

.v-text-field.v-text-field--enclosed {
  margin-bottom: 4px!important;
}

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

import { mapState } from 'vuex'

export default {
  name: 'UserContact',
  data () {
    return {
      message: '',
      items: {
        name: {
          value: '',
          placeholder: 'Full name*'
        },
        email: {
          value: '',
          placeholder: 'Email*'
        },
        //   address: {
        //     value: '',
        //     placeholder: 'Address*',
        //     error: false,
        //     color: '',
        //     validationIcon: '',
        //     validator () { this.error = this.value.length < 5 }
        //   },
        //   postcode: {
        //     value: '',
        //     placeholder: 'Postcode*',
        //     error: false,
        //     color: '',
        //     validationIcon: '',
        //     validator () {
        //       this.error = !Number(this.value) || Number(this.value) < 3000 || Number(this.value) > 9999
        //     }
        //   },
        //   state: {
        //     value: '',
        //     placeholder: 'State*',
        //     error: false,
        //     color: '',
        //     validationIcon: '',
        //     validator () { this.error = this.value.length < 5 }
        //   },
        phone: {
          value: '',
          placeholder: 'Phone'
        }
      }
    }
  },
  computed: {
    ...mapState('content', ['userForm'])
  },
  methods: {
    initFields () {
      for (const item in this.items) {
        this.items[item].value = ''
      }
      this.message = ''
    },
    saveContent () {
      this.$store.commit('content/UPDATE_USER_FORM', { prop: 'title', value: this.$refs.userContactHeader.innerText })
      this.$store.commit('content/UPDATE_USER_FORM', { prop: 'button', value: this.$refs.userContactButton.innerText })
      this.$store.commit('content/UPDATE_USER_FORM', { prop: 'messagePlaceholder', value: this.message })
    }
  },
  mounted () {
    this.initFields()
  }
}

</script>
