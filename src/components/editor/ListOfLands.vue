<template>
  <v-list nav dense class="transparent">
    <v-list-item-group
          v-model="group"
          active-class="info--text text--info"
    >
      <v-list-item v-if="nav">
        <v-list-item-icon>
          <v-icon large>mdi-pencil-circle</v-icon>
        </v-list-item-icon>

        <v-list-item-content v-if="nav">
          <v-list-item-title>Landing Pages Editor</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider v-if="nav"></v-divider>

      <v-list-item
             v-for="(item, index) in items"
             :key="index"
             class="mt-4"
      >
        <v-list-item-icon>
          <PineappleLogo v-if="item.route !== 'dgtek'" />
          <DGtekLogo v-else />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title @click="clickHandler(item)">
            {{ item.title }}
          </v-list-item-title>
          <v-card flat class="transparent ml-2" v-if="item.childs">
            <v-list nav dense class="transparent">
              <v-list-item-group
                    active-class="info--text text--info"
              >
                <v-list-item
                       v-for="(subpage, num) in item.childs"
                       :key="num"
                       @click="selected = num + 1"
                >
                  <v-list-item-icon>
                    <PineappleLogo />
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title @click="clickHandler(subpage)">
                      {{ subpage.title }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<style>
.v-list--dense .v-list-item .v-list-item__title,
.v-list-item--dense .v-list-item__title {
  font-size: 16px!important;
}
</style>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'ListOfLands',
  components: {
    PineappleLogo: () => import('@/components/PineappleLogo.vue'),
    DGtekLogo: () => import('@/components/dgtek/Logo.vue')
  },
  props: ['drawer', 'nav', 'route'],
  data: () => ({
    group: null
  }),
  computed: {
    ...mapState({
      items: 'lands'
    })
  },
  methods: {
    ...mapMutations({
      setReady: 'SET_PAGE_CONTENT_READY'
    }),
    clickHandler (item) {
      if (this.nav && this.$route.name !== item.route) {
        this.setReady(false)
        this.$router.push({ name: item.route })
      } else {
        this.$emit('update:route', item)
      }
      this.$emit('update:drawer', false)
    }
  }
}
</script>
