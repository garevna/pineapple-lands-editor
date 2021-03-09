<template>
  <v-card flat class="card--offer transparent text-center mx-1 mx-sm-10" width="300">
    <v-card flat class="transparent mx-auto text-center">
      <ChangePicture
        destination="icon"
        :pictureURL.sync="url"
        :link.sync="link"
      />
      <v-img
        v-if="link"
        :src="src"
      />
      <Spinner v-else class="spinner" />
    </v-card>
    <v-card-title with="100%">
      <SubSubHeader :value.sync="title" />
    </v-card-title>
    <v-card-text>
      <Paragraph :value.sync="text" />
    </v-card-text>
  </v-card>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex'

import { SubSubHeader, Paragraph } from '@/components/inputs'

export default {
  name: 'HowToConnectItem',
  components: {
    SubSubHeader,
    Paragraph,
    Spinner: () => import('@/components/editor/Spinner.vue'),
    ChangePicture: () => import('@/components/editor/ChangePicture.vue')
  },
  props: {
    index: Number
  },
  data: () => ({
    src: null
  }),
  computed: {
    ...mapState('content', ['howToConnect']),
    ...mapGetters('media', ['getIconLink']),
    item () {
      return this.howToConnect.items[this.index]
    },
    title: {
      get () {
        return this.item.title
      },
      set (val) {
        this.updateTitle(val)
      }
    },
    text: {
      get () {
        return this.item.text
      },
      set (val) {
        this.updateText(val)
      }
    },
    url: {
      get () {
        return this.item.icon
      },
      set (val) {
        this.updateIcon(val)
      }
    },
    link: {
      get () {
        return this.getIconLink(this.url)
      },
      set (val) {
        this.$nextTick(function () {
          this.src = val
        })
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_CONNECT_ITEM'
    }),
    updateTitle (value) {
      this.update({ num: this.index, prop: 'title', value })
    },
    updateText (value) {
      this.update({ num: this.index, prop: 'text', value })
    },
    updateIcon (value) {
      this.update({ num: this.index, prop: 'icon', value })
    }
  },
  watch: {
    link: {
      immediate: true,
      handler (val) {
        this.src = val
      }
    }
  }
}

</script>

<style scoped>

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-20%,-50%);
}

h3, p {
  width: 100%;
  text-align: center;
  color: #000;
}
.card--offer {
  width: 240px;
}

@media (max-width: 420px), (max-height: 420px) {
  .card--offer {
    width: 90%!important;
  }
}
</style>
