<template>
  <v-card
    v-if="aside"
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

<script>

import { mapState, mapMutations } from 'vuex'

import {
  SubHeader,
  Paragraph,
  AsideColoredText,
  SmallText
} from '@/components/inputs'

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
      changed: false
      // items: this.aside.items
    }
  },
  computed: {
    ...mapState(['pageContentReady']),
    ...mapState('content', ['aside']),
    header: {
      get () {
        return this.aside.header
      },
      set (val) {
        this.update({ prop: 'header', value: val })
      }
    },
    text: {
      get () {
        return this.aside && this.aside.text
      },
      set (val) {
        this.update({ prop: 'text', value: val })
      }
    },
    smallTextOne: {
      get () {
        return this.aside && Array.isArray(this.aside.smallText) && this.aside.smallText[0]
      },
      set (val) {
        this.updateSmallText({ num: 0, value: val })
      }
    },
    smallTextTwo: {
      get () {
        return this.aside && Array.isArray(this.aside.smallText) && this.aside.smallText[1]
      },
      set (val) {
        this.updateSmallText({ num: 1, value: val })
      }
    }
  },
  watch: {
    aside: {
      deep: true,
      immediate: true,
      handler (val) {
        if (val) {
          this.items = val.items
        }
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      addItem: 'ADD_ASIDE_ITEM',
      removeItem: 'REMOVE_ASIDE_ITEM',
      updateSmallText: 'UPDATE_ASIDE_SMALL_TEXT',
      update: 'UPDATE_ASIDE'
    }),
    addItem () {
      this.addItem()
      this.changed = true
    },
    removeItem (index) {
      this.removeItem(index)
      this.changed = true
    }
  }
}
</script>

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
