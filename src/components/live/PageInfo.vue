<template>
  <v-row>
    <!-- ============================= LIVE PAGE INFO ============================= -->

    <v-row justify="center">
      <v-dialog
        v-model="showPageInfo"
        persistent
        max-width="1440"
      >
        <v-card class="pa-5" v-if="subpage">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="buttons"
              icon
              @click="$store.commit('HIDE_PAGE_INFO')"
            >
              <v-icon large>$close</v-icon>
            </v-btn>
          </v-card-actions>
          <v-row align="center">
            <v-col cols="6">
              <PageCard />
            </v-col>
            <v-col cols="6">
              <PageInfoCard />
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </v-row>
  </v-row>
</template>

<script>

import { mapState } from 'vuex'

import PageCard from '@/components/live/PageCard.vue'
import PageInfoCard from '@/components/live/PageInfoCard.vue'

export default {
  name: 'PageInfo',
  components: {
    PageCard,
    PageInfoCard
  },
  computed: {
    ...mapState(['showPageInfo']),
    ...mapState('content', ['mainNavButtons']),
    show: {
      get () {
        return this.editInfo
      },
      set (val) {
        this.$emit('update:editInfo', val)
      }
    },
    ready () {
      return !!this.mainNavButtons
    },
    subpage () {
      return this.$route.name === 'live-page'
    }
  }
}
</script>
