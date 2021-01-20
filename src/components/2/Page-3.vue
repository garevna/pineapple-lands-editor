<template>
  <Page homePageName="2" pageNum="3" />
</template>

<script>

export default {
  name: 'page-3',
  components: {
    Page: () => import('@/components/2/Page.vue')
  }
}

</script>
