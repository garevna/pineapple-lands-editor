<template>
  <v-container fluid class="homefone" v-if="howToConnect">
    <v-card flat class="transparent text-center mx-auto" width="100%">
      <v-card-text class="mx-auto text-center">
        <SubHeader :value.sync="header" class="mx-auto" />
      </v-card-text>
      <v-card-text>
        <Paragraph :value.sync="text" />
      </v-card-text>
    </v-card>

    <v-container fluid class="mt-5 mb-12">
      <v-row justify="center">
        <HowToConnectItem :index="0" />
        <HowToConnectItem :index="1" />
        <HowToConnectItem :index="2" />
      </v-row>
    </v-container>
    <v-card-text class="text-center">
      <Button :value.sync="button" :goto.sync="goto" class="mx-auto" style="max-width: 480px" />
    </v-card-text>
  </v-container>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

import {
  SubHeader,
  Paragraph,
  Button
} from '@/components/inputs'

import { HowToConnectItem } from '@/components/editor'

export default {
  name: 'HowToConnect',
  props: ['page'],
  components: {
    SubHeader,
    Paragraph,
    Button,
    HowToConnectItem
  },
  data () {
    return {
      contact: false
    }
  },
  computed: {
    ...mapState(['pageContentReady']),
    ...mapState('content', ['howToConnect']),
    header: {
      get () {
        return this.howToConnect?.header
      },
      set (val) {
        this.updateConnect({ prop: 'header', value: val })
      }
    },
    text: {
      get () {
        return this.howToConnect?.text
      },
      set (val) {
        this.updateConnect({ prop: 'text', value: val })
      }
    },
    button: {
      get () {
        return this.howToConnect?.button
      },
      set (val) {
        this.updateButton(val)
      }
    },
    goto: {
      get () {
        return this.howToConnect?.goto
      },
      set (val) {
        this.updateGoto(val)
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      updateGoto: 'UPDATE_BUTTON_GOTO',
      updateButton: 'UPDATE_BUTTON_TEXT',
      updateConnect: 'UPDATE_CONNECT'
    })
  }
}
</script>
