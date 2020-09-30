<template>
  <v-list nav dense class="transparent" v-if="ready">
    <v-list-item-group
          active-class="info--text text--info"
    >
      <v-list-item>
        <v-list-item-icon>
          <PineappleLogo />
        </v-list-item-icon>

        <v-list-item-content @click="$emit('update:selected', home)">
          <v-list-item-title>
            live.pineapple.net.au
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
             v-for="(item, index) in pages"
             :key="index"
             class="mt-4"
      >
        <v-list-item-content>
          <v-row>
            <v-col cols="2">
              <v-btn
                  fab
                  dark
                  small
                  top
                  left
                  color="delete"
                  width="28"
                  height="28"
                  @click="$store.commit('content/REMOVE_PAGE', index)"
                  v-if="pages.length > 0"
              >
                <v-icon>$delete</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="8">
              <v-list-item-title @click="clickHandler(item)">
                {{ item.name }}
              </v-list-item-title>
            </v-col>
            <v-col cols="2">
              <v-btn
                  fab
                  dark
                  small
                  top
                  left
                  color="buttons"
                  width="28"
                  height="28"
                  @click="$emit('update:selected', item)"
                  v-if="pages.length > 0"
              >
                <v-icon>$edit</v-icon>
              </v-btn>
            </v-col>
          </v-row>

        </v-list-item-content>

      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import PineappleLogo from '@/components/PineappleLogo.vue'

export default {
  name: 'SelectPage',
  components: {
    PineappleLogo
  },
  props: ['selected'],
  data: () => ({
    home: {},
    ready: false
  }),
  computed: {
    ...mapState('content', ['pages']),
    ...mapState('content', ['top', 'aside', 'userForm', 'info', 'list', 'greenSection', 'testimonials', 'plans', 'howToConnect', 'faq', 'footer'])
  },
  methods: {
    ...mapActions('content', {
      getContent: 'GET_CONTENT'
    })
  },
  beforeMount () {
    this.getContent('live').then(() => {
      console.log(this.pages)
      this.home = {
        top: this.top,
        aside: this.aside,
        userForm: this.userForm,
        info: this.info,
        list: this.list,
        greenSection: this.greenSection,
        testimonials: this.testimonials,
        plans: this.plans,
        howToConnect: this.howToConnect,
        faq: this.faq,
        footer: this.footer
      }
      this.ready = true
    })
  }
}
</script>
