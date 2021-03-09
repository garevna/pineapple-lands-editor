<template>
  <Page
    v-if="pageContentReady"
    homePageName="2"
    pageNum="1"
  />
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Conservatory',
  components: {
    Page: () => import('@/components/connect-melbourne-cbd/Page.vue')
  },
  computed: {
    ...mapState(['pageContentReady'])
  }
}

</script>
