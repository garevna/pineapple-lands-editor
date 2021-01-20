<template>
  <v-expansion-panel v-if="$route.name !=='live-page'">
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
  </v-expansion-panel>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'LandConfigCommonInfo',
  computed: {
    ...mapState('content', ['top', 'browserTabTitle', 'emailSubject', 'emailText']),
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
    })
  }
}
</script>
