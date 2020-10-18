<template>
  <v-container style="max-width:1600px" class="mx-auto">
    <v-row align="center" justify="space-around">
      <v-col cols="12" md="5">
        <v-card
              flat
              class="aside-card transparent mx-auto my-12"
              width="480"
        >
          <v-card-title>
            <SubHeader :value.sync="header" />
          </v-card-title>
          <v-card-text>
            <Paragraph :value.sync="text" />
          </v-card-text>
          <v-card-text>
            <Button :value.sync="button" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="7">
        <v-card
              flat
              class="transparent ml-12"
              v-for="(item, index) in items"
              :key="index"
        >
          <ListItem
                :index="index"
                :item="item"
                :remove.sync="remove"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>

<script>

import { mapState } from 'vuex'

import SubHeader from '@/components/inputs/SubHeader.vue'
import Paragraph from '@/components/inputs/Paragraph.vue'
import ListItem from '@/components/editor/ListItem.vue'

export default {
  name: 'List',
  components: {
    SubHeader,
    Paragraph,
    ListItem
  },
  data () {
    return {
      changed: false,
      remove: null,
      items: this.$store.state.content.list.items,
      imageSrc: []
    }
  },
  computed: {
    ...mapState('content', ['list']),
    header: {
      get () {
        return this.list.header
      },
      set (val) {
        this.$store.commit('content/UPDATE_LIST', { prop: 'header', value: val })
      }
    },
    text: {
      get () {
        return this.list.text
      },
      set (val) {
        this.$store.commit('content/UPDATE_LIST', { prop: 'text', value: val })
      }
    },
    button: {
      get () {
        return this.list.button
      },
      set (val) {
        this.$store.commit('content/UPDATE_LIST', { prop: 'button', value: val })
      }
    }
  },
  watch: {
    changed (val) {
      if (!val) return
      this.items = this.$store.state.content.list.items
      this.changed = false
    },
    items: {
      deep: true,
      handler (val) {
        // console.log(val)
      }
    },
    remove (val) {
      if (typeof val !== 'number') return
      this.$store.commit('content/REMOVE_LIST_ITEM', val)
      this.remove = false
    }
  },
  methods: {
    addListItem () {
      this.$store.commit('content/ADD_LIST_ITEM')
      this.changed = true
    },
    removeListItem (index) {
      this.$store.commit('content/REMOVE_LIST_ITEM', index)
      this.changed = true
    }
  }
}
</script>
