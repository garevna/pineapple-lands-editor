<template>
  <Page />
</template>

<script>

import { mapState } from 'vuex'
import Page from '@/components/live/Page.vue'

export default {
  name: 'live-page',
  components: {
    Page
  },
  props: ['route'],
  computed: {
    ...mapState(['currentLand'])
  }
}

</script>
