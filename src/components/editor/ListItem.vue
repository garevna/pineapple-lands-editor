<template>
  <v-row align="center">
    <v-col cols="2">
      <ChangePicture
            destination="icon"
            :pictureURL.sync="iconSrc"
            :index="index"
            :action="true"
            :perform.sync="deleteItem"
      />
        <v-img :src="iconSrc" width="70" contain></v-img>
    </v-col>
    <v-col cols="9">
      <SubSubHeader :value.sync="title" />
      <Paragraph :value.sync="text" />
    </v-col>
  </v-row>
</template>

<style scoped>
</style>

<script>

const {
  SubSubHeader,
  Paragraph
} = require('@/components/inputs').default

// const { ChangePicture } = require('@/components/editor').default

export default {
  name: 'ListItem',
  components: {
    ChangePicture: () => import('@/components/editor/ChangePicture.vue'),
    SubSubHeader,
    Paragraph
  },
  props: ['item', 'index', 'remove'],
  data () {
    return {
      iconSrc: '',
      deleteItem: null
    }
  },
  computed: {
    title: {
      get () { return this.item.title },
      set (val) {
        this.$store.commit('content/UPDATE_LIST_ITEM', {
          num: this.index,
          prop: 'title',
          value: val
        })
      }
    },
    text: {
      get () { return this.item.text },
      set (val) {
        this.$store.commit('content/UPDATE_LIST_ITEM', {
          num: this.index,
          prop: 'text',
          value: val
        })
      }
    }
  },
  watch: {
    iconSrc (val) {
      this.$store.commit('content/UPDATE_LIST_ITEM', {
        num: this.index,
        prop: 'icon',
        value: val
      })
    },
    deleteItem (val) {
      if (!val) return
      this.$emit('update:remove', this.index)
      this.deleteItem = null
    }
  },
  mounted () {
    this.iconSrc = this.item.icon
  }
}
</script>
