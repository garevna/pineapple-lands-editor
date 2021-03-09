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

import { mapMutations } from 'vuex'

import { SubSubHeader, Paragraph } from '@/components/inputs'

import { ChangePicture } from '@/components/editor'

export default {
  name: 'ListItem',
  components: {
    ChangePicture,
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
        this.update('title', val)
      }
    },
    text: {
      get () { return this.item.text },
      set (val) {
        this.update('text', val)
      }
    }
  },
  watch: {
    iconSrc (val) {
      this.update('icon', val)
    },
    deleteItem (val) {
      if (!val) return
      this.$emit('update:remove', this.index)
      this.deleteItem = null
    }
  },
  methods: {
    ...mapMutations('content', {
      updateListItem: 'UPDATE_LIST_ITEM'
    }),
    update (prop, value) {
      this.updateListItem({ num: this.index, prop, value })
    }
  },
  mounted () {
    this.iconSrc = this.item.icon
  }
}
</script>
