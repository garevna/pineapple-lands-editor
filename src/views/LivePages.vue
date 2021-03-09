<template>
  <v-container v-if="liveListReady">
    <v-data-table
      fixed-header
      :headers="headers"
      :items="items"
      item-key="id"
      :options.sync="options"
      :single-expand="true"
      :expanded.sync="expanded"

      show-expand
      class="elevation-1"
      height="70vh"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <h4>List of pages</h4>
          </v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-tooltip bottom color="info" v-if="pages.length">
            <template v-slot:activator="{ on }">
              <v-btn
                fab
                small
                color="buttons"
                dark
                v-on="on"
                @click="createNewPage"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Add new page</span>
          </v-tooltip>
        </v-toolbar>
      </template>

      <template v-slot:expanded-item="{ headers }">
        <td :colspan="headers.length">
          <v-progress-linear
            v-if="!pageContentReady"
            color="primary"
            value="15"
            indeterminate
          />
          <v-expansion-panels class="my-4">
            <LandConfigAddress v-if="pageContentReady" />
          </v-expansion-panels>
        </td>
      </template>

      <template v-slot:item.eye="{ item }">
        <v-icon :color="item.eye ? '#333' : '#09b'">
          {{ item.eye ? 'mdi-eye-off' : 'mdi-eye' }}
        </v-icon>
      </template>

      <template v-slot:item.hidden="{ item }">
        <v-checkbox
          v-model="item.hidden"
          color="#777"
          @change="setHiddenPropertyValue(item)"
        ></v-checkbox>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          v-if="item.id === selectedId"
          small
          class="mr-2"
          @click="$router.push({ path: `live-${item.id}` })"
        >
          mdi-pencil
        </v-icon>
        <!-- <v-icon
          small
          @click="dialogDelete"
          color="#900"
        >
          mdi-delete
        </v-icon> -->
      </template>
    </v-data-table>
  </v-container>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'LivePages',
  components: {
    LandConfigAddress: () => import('@/components/editor/LandConfigAddress.vue')
  },
  data: () => ({
    selectedId: null,
    dialog: false,
    headers: [
      { text: 'Hidden', value: 'eye' },
      { text: 'Address', value: 'addressString' },
      { text: 'Building Name', value: 'formatted' },
      { text: 'Hide', value: 'hidden' },
      { text: 'Actions', value: 'actions', sortable: false },
      { text: '', value: 'data-table-expand' }
    ],
    items: [],
    expanded: [],
    options: {
      page: 1,
      itemsPerPage: 10
    },
    ready: false
  }),
  computed: {
    ...mapState(['pages', 'liveListReady', 'pageContentReady']),
    currentPageId () {
      return this.expanded.length ? this.expanded[0].id : null
    }
  },
  watch: {
    liveListReady: {
      immediate: true,
      handler (val) {
        if (!val) return
        this.items = this.pages.map(page => ({
          eye: page.hidden,
          address: page.address,
          addressString: this.getAddressString(page.address),
          formatted: page.address.formatted,
          buildingName: page.address.formatted,
          hidden: page.hidden,
          id: page.id
        }))
      }
    },
    items: {
      deep: true,
      handler (val) {
        //
      }
    },
    expanded: {
      deep: true,
      handler (items) {
        if (!items.length) return
        this.selectedId = items[0].id
        this.setReady(false)
        this.__liveWorker.postMessage({
          store: 'live',
          action: 'get',
          key: items[0].id
        })
      }
    }
  },
  methods: {
    ...mapMutations({
      setCurrentLand: 'SET_CURRENT_LAND',
      setReady: 'SET_PAGE_CONTENT_READY',
      addPageToPages: 'ADD_PAGE'
    }),
    ...mapMutations('content', {
      updatePageContent: 'UPDATE_ALL'
    }),

    getAddressString (address) {
      const {
        streetNumber = '...',
        streetName = '...',
        city = '...',
        state = '...',
        postcode = '...'
      } = address
      return `${streetNumber} ${streetName}, ${city} ${state} ${postcode}`
    },

    setHiddenPropertyValue (item) {
      const page = this.pages.find(p => p.id === item.id)
      item.eye = item.hidden
      page.hidden = item.hidden
    },

    async createNewPage () {
      this.setReady(false)
      const id = Date.now().toString()
      const content = require('@/configs/empty-building-page').default
      this.updatePageContent(content)
      this.addPageToPages({
        address: Object.assign({}, content.address, { formatted: 'New Page' }),
        hidden: true,
        id
      })
      this.setCurrentLand(`live-${id}`)
      // await this.saveCurrentPageContent(`live-${id}`)
      // await this.savePageList()
      this.expanded = [this.items[0]]
      Object.assign(this.options, { page: 1 })
      this.setReady(true)
    }
  }
}
</script>

<style>
.black {
  background-color: #000!important;
  color: #fff!important;
}

</style>
