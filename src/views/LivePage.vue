<template>
  <Page />
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'live-page',
  components: {
    Page: () => import('@/components/live/Page.vue')
  },
  props: ['route'],
  computed: {
    ...mapState(['currentLand'])
  }
}

</script>
