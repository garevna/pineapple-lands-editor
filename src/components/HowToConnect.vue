<template>
    <v-container fluid class="homefone">
        <v-card flat class="transparent text-center mx-auto" width="100%">
          <v-tooltip top color="info">
            <template v-slot:activator="{ on }">
              <v-btn fab dark small color="warning" v-on="on" @click="saveContent">
                <v-icon>mdi-content-save</v-icon>
              </v-btn>
            </template>
            <span>Save section content</span>
          </v-tooltip>
          <v-card-title>
            <h2
                ref="howToConnectHeader"
                contenteditable
                v-text="howToConnect.header"
            ></h2>
          </v-card-title>
          <v-card-text>
            <p
                ref="howToConnectText"
                contenteditable
                v-text="howToConnect.text"
            ></p>
          </v-card-text>
        </v-card>

        <v-container fluid class="mt-5 mb-12">
          <v-card flat class="d-flex flex-wrap justify-center transparent">
            <v-card flat class="card--offer transparent text-center mx-1 mx-sm-10" width="240">
              <ContactUs :contact.sync="contact" />
              <v-card-title>
                <h3
                    ref="howToConnectTitle_1"
                    contenteditable
                    v-text="howToConnect.items[0].title"
                ></h3>
              </v-card-title>
              <v-card-text>
                <p
                    ref="howToConnectText_1"
                    contenteditable
                    v-text="howToConnect.items[0].text"
                ></p>
              </v-card-text>
            </v-card>
            <v-card flat class="card--offer transparent text-center mx-1 mx-sm-10" width="240">
              <GetConnected :contact.sync="contact" />
              <v-card-title>
                <h3
                  ref="howToConnectTitle_2"
                  contenteditable
                  v-text="howToConnect.items[1].title"
                ></h3>
              </v-card-title>
              <v-card-text>
                <p
                    ref="howToConnectText_2"
                    contenteditable
                    v-text="howToConnect.items[1].text"
                ></p>
              </v-card-text>
            </v-card>
            <v-card flat class="card--offer transparent text-center mx-1 mx-sm-10" width="240">
              <Enjoy :contact.sync="contact" />
              <v-card-title with="100%">
                <h3
                    ref="howToConnectTitle_3"
                    contenteditable
                    v-text="howToConnect.items[2].title"
                ></h3>
              </v-card-title>
              <v-card-text>
                <p
                    ref="howToConnectText_3"
                    contenteditable
                    v-text="howToConnect.items[2].text"
                ></p>
              </v-card-text>
            </v-card>
          </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>
h3, p {
  width: 100%;
  text-align: center;
  color: #000;
}
.card--offer {
  width: 240px;
}

@media (max-width: 420px), (max-height: 420px) {
  .card--offer {
    width: 90%!important;
  }
}
</style>

<script>

import { mapState } from 'vuex'

import ContactUs from '@/components/svg/ContactUs.vue'
import GetConnected from '@/components/svg/GetConnected.vue'
import Enjoy from '@/components/svg/Enjoy.vue'

export default {
  name: 'HowToConnect',
  props: ['page'],
  components: {
    ContactUs,
    GetConnected,
    Enjoy
  },
  data () {
    return {
      contact: false
    }
  },
  computed: {
    ...mapState('content', ['howToConnect'])
  },
  methods: {
    saveContent () {
      this.$store.commit('content/UPDATE_CONNECT', { prop: 'header', value: this.$refs.howToConnectHeader.innerText })
      this.$store.commit('content/UPDATE_CONNECT', { prop: 'text', value: this.$refs.howToConnectText.innerText })
      this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 0, prop: 'title', value: this.$refs.howToConnectTitle_1.innerText })
      this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 0, prop: 'text', value: this.$refs.howToConnectText_1.innerText })
      this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 1, prop: 'title', value: this.$refs.howToConnectTitle_2.innerText })
      this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 1, prop: 'text', value: this.$refs.howToConnectText_2.innerText })
      this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 2, prop: 'title', value: this.$refs.howToConnectTitle_3.innerText })
      this.$store.commit('content/UPDATE_CONNECT_ITEM', { num: 2, prop: 'text', value: this.$refs.howToConnectText_3.innerText })
      this.$store.commit('SET_POPUP_TITLE', 'SECTION CONTENT')
      this.$store.commit('SET_POPUP_TEXT', 'Data successfully saved')
      this.$store.commit('SHOW_POPUP')
    }
  }
}
</script>
