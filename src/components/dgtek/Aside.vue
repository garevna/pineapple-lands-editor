<template>
  <v-card
        flat
        class="aside-card transparent mx-auto my-12"
        width="480"
  >
    <v-card flat class="transparent">
      <v-card-title>
        <SubHeader :value.sync=header />
      </v-card-title>
      <v-card-text>
        <Paragraph :value.sync="text" />
      </v-card-text>
      <v-card
            flat class="ml-4"
            v-for="(item, index) in items"
            :key="index"
      >
        <v-btn
            absolute
            fab
            dark
            small
            top
            left
            color="delete"
            width="28"
            height="28"
            style="margin-left: -40px; margin-top: 48px"
            @click="removeItem(index)"
            v-if="items.length > 0"
        >
          <v-icon>$delete</v-icon>
        </v-btn>

        <v-row>
          <v-col cols="6">
            <AsideColoredText color="black" :index="index" />
          </v-col>
          <v-col cols="6">
            <AsideColoredText color="red" :index="index" />
          </v-col>
        </v-row>
      </v-card>

      <v-btn
          absolute
          fab
          dark
          small
          bottom
          right
          color="#09b"
          style="margin-bottom: -8px"
          @click="addItem"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card>
    <v-card-text>
      <SmallText :value.sync="smallTextOne" />
      <SmallText :value.sync="smallTextTwo" />
    </v-card-text>
  </v-card>
</template>

<style scoped>
p {
  line-height: 180%!important;
}

.small {
  font-size: 14px;
}
strong {
  font-weight: 600;
}

@media screen and (max-width: 900px) {
  .aside-card {
    margin-bottom: 40px;
  }
}

</style>

<script>

import SubHeader from '@/components/inputs/SubHeader.vue'
import Paragraph from '@/components/inputs/Paragraph.vue'
import AsideColoredText from '@/components/inputs/AsideColoredText.vue'
import SmallText from '@/components/inputs/SmallText.vue'

export default {
  name: 'Aside',
  components: {
    SubHeader,
    Paragraph,
    AsideColoredText,
    SmallText
  },
  data () {
    return {
      changed: false,
      items: this.$store.state.content.aside.items
    }
  },
  computed: {
    aside () {
      return this.$store.state.content.aside
    },
    header: {
      get () {
        return this.$store.state.content.aside.header
      },
      set (val) {
        this.$store.commit('content/UPDATE_ASIDE', { prop: 'header', value: val })
      }
    },
    text: {
      get () {
        return this.$store.state.content.aside.text
      },
      set (val) {
        this.$store.commit('content/UPDATE_ASIDE', { prop: 'text', value: val })
      }
    },
    smallTextOne: {
      get () {
        return this.$store.state.content.aside.smallText[0]
      },
      set (val) {
        this.$store.commit('content/UPDATE_ASIDE_SMALL_TEXT', { num: 0, value: val })
      }
    },
    smallTextTwo: {
      get () {
        return this.$store.state.content.aside.smallText[1]
      },
      set (val) {
        this.$store.commit('content/UPDATE_ASIDE_SMALL_TEXT', { num: 1, value: val })
      }
    }
  },
  watch: {
    changed (val) {
      if (!val) return
      this.items = this.$store.state.content.aside.items
      this.changed = false
    }
  },
  methods: {
    addItem () {
      this.$store.commit('content/ADD_ASIDE_ITEM')
      this.changed = true
    },
    removeItem (index) {
      this.$store.commit('content/REMOVE_ASIDE_ITEM', index)
      this.changed = true
    }
  }
}
</script>
