<template>
  <Page />
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'live-page',
  components: {
    Page: () => import('@/components/live/Page.vue')
  },
  props: ['route'],
  computed: {
    ...mapState(['currentLand', 'pageContentReady'])
  },
  methods: {
    ...mapMutations({
      setReady: 'SET_PAGE_CONTENT_READY'
    })
  },
  beforeRouteLeave (to, from, next) {
    this.setReady(false)
    next()
  }
}

</script>
