<template>
  <Page homePageName="2" pageNum="1" />
</template>

<script>

export default {
  name: 'page-1',
  components: {
    Page: () => import('@/components/2/Page.vue')
  }
}

</script>
