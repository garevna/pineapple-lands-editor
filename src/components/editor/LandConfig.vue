<template>
  <v-row justify="center" v-if="opened">
    <v-dialog
      v-model="opened"
      max-width="960"
      transition="dialog-bottom-transition"
    >
      <v-toolbar dark color="info">
        <v-toolbar-title>
          {{ getURL() }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            icon
            dark
            @click="$emit('update:opened', false)"
          >
            <v-icon large>$close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card flat class="pa-4" >
        <v-expansion-panels>
          <LandConfigCommonInfo />
          <!-- <v-expansion-panel v-if="$route.name !=='live-page'">
            <v-expansion-panel-header>
              <h5>{{ header }}</h5>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field
                      v-if="tabTitle"
                      label="Browser tab title"
                      outlined
                      v-model="tabTitle"
              ></v-text-field>
              <v-text-field
                      v-if="mailSubject"
                      label="Email subject"
                      outlined
                      v-model="mailSubject"
              ></v-text-field>
              <v-text-field
                      v-if="mailText"
                      label="Email text for user"
                      outlined
                      v-model="mailText"
              ></v-text-field>
            </v-expansion-panel-content>
          </v-expansion-panel> -->
          <LandConfigMenu />
        </v-expansion-panels>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'LandConfig',
  components: {
    LandConfigMenu: () => import('@/components/editor/LandConfigMenu.vue'),
    LandConfigCommonInfo: () => import('@/components/editor/LandConfigCommonInfo.vue')
  },
  props: ['opened'],
  data: () => ({
    routesConfig: require('@/configs/routesConfig').default
  }),
  computed: {
    ...mapState('content', ['top', 'browserTabTitle', 'emailSubject', 'emailText', 'address']),

    header: {
      get () {
        return this.top.header
      },
      set (val) {
        this.updateTop(Object.assign({}, this.top, { header: val }))
      }
    },
    tabTitle: {
      get () {
        return this.browserTabTitle
      },
      set (val) {
        this.updateBrowserTabTitle(val)
      }
    },
    mailSubject: {
      get () {
        return this.emailSubject
      },
      set (val) {
        this.updateEmailSubject(val)
      }
    },
    mailText: {
      get () {
        return this.emailText
      },
      set (val) {
        this.updateEmailText(val)
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      updateBrowserTabTitle: 'UPDATE_BROWSER_TAB_TITLE',
      updateEmailSubject: 'UPDATE_EMAIL_SUBJECT',
      updateEmailText: 'UPDATE_EMAIL_TEXT',
      updateTop: 'UPDATE_TOP'
    }),
    addressToString () {
      const {
        streetNumber: number,
        streetName: name,
        city,
        state,
        postcode
      } = this.address
      return `${number}_${name.split(' ').join('-')}_${city}_${state}_${postcode}`
    },
    getURL () {
      if (this.$route.name !== 'live-page') return this.routesConfig.getURL(this.$route.name)
      return `${this.routesConfig.getURL('live')}/${this.addressToString()}`
    }
  }
}
</script>
