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

import { mapState, mapMutations } from 'vuex'

import {
  SubHeader,
  Paragraph
} from '@/components/inputs'

import { ListItem } from '@/components/editor'

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
      // items: [],
      imageSrc: []
    }
  },
  computed: {
    ...mapState('content', ['list']),
    header: {
      get () {
        return this.list?.header
      },
      set (val) {
        this.update({ prop: 'header', value: val })
      }
    },
    text: {
      get () {
        return this.list?.text
      },
      set (val) {
        this.update({ prop: 'text', value: val })
      }
    },
    button: {
      get () {
        return this.list?.button
      },
      set (val) {
        this.update({ prop: 'button', value: val })
      }
    },
    items: {
      get () {
        return this.list?.items
      },
      set (val) {
        this.updateItems(val)
      }
    }
  },
  watch: {
    items: {
      deep: true,
      immediate: true,
      handler (val) {
        if (val) {
          this.update(val)
        }
      }
    },
    remove (val) {
      if (typeof val !== 'number') return
      this.removeItem(val)
      this.remove = false
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_LIST',
      updateItem: 'UPDATE_LIST_ITEM',
      updateItems: 'UPDATE_LIST_ITEMS',
      addItem: 'ADD_LIST_ITEM',
      removeItem: 'REMOVE_LIST_ITEM'
    }),
    addListItem () {
      this.addItem()
      this.changed = true
    },
    removeListItem (index) {
      this.removeItem(index)
      this.changed = true
    }
  }
}
</script>
