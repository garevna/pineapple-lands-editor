<template>
  <Page homePageName="2" pageNum="2" />
</template>

<script>

export default {
  name: 'page-2',
  components: {
    Page: () => import('@/components/2/Page.vue')
  }
}

</script>
