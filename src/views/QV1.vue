<template>
  <Page
    v-if="pageContentReady"
    homePageName="2"
    pageNum="2"
  />
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'QV1',
  components: {
    Page: () => import('@/components/connect-melbourne-cbd/Page.vue')
  },
  computed: {
    ...mapState(['pageContentReady'])
  }
}

</script>
