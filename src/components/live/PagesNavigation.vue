<template>
  <v-bottom-sheet v-model="opened">
    <v-sheet class="text-center" height="240px">
      <v-row align="center" justify="space-between">
        <v-col>
          <v-btn
                icon
                fab
                dark
                large
                color="primary"
                width="48"
                height="48"
                @click="$emit('update:selected', 'home')"
          >
            <v-icon large dark style="font-size: 48px!important">
              mdi-home-edit
            </v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
                class="mt-6"
                icon
                color="#888"
                @click="$emit('update:opened', false)"
          >
            <v-icon large color="error">mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-card class="transparent text-center mx-auto" max-width="600">
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
                @click="$store.commit('content/REMOVE_PAGE', page - 1)"
            >
              <v-icon>$delete</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="8">
            <v-card-text @click="clickHandler(item)">
              <h4>{{ pages[page - 1].name }}</h4>
            </v-card-text>
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
                @click="$emit('update:selected', page)"
            >
              <v-icon>$edit</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
      <v-pagination
            v-model="page"
            :length="pages.length"
            :total-visible="5"
            circle
      ></v-pagination>
    </v-sheet>
  </v-bottom-sheet>
</template>

<style>
.theme--light.v-pagination .v-pagination__item--active,
.v-pagination > li {
  outline: none !important;
}
</style>

<script>

import { mapState } from 'vuex'

// import PineappleLogo from '@/components/PineappleLogo.vue'

export default {
  name: 'PagesNavigation',
  components: {
    // PineappleLogo
  },
  props: ['opened', 'selected'],
  data: () => ({
    home: {},
    ready: false,
    page: 1
  }),
  computed: {
    ...mapState('content', ['pages']),
    ...mapState('content', ['top', 'aside', 'userForm', 'info', 'list', 'greenSection', 'testimonials', 'plans', 'howToConnect', 'faq', 'footer'])
  },
  watch: {
    page (val) {
      console.log('Page: ', val)
    }
  }
}
</script>
