<template>
  <v-container fluid style="overflow: visible; margin-top: 80px; margin-bottom: 64px;">
    <v-card flat tile class="mx-auto homefone" width="100%" max-width="1180">
      <v-row align="center" justify="center">
        <v-col sm="12" md="6">
          <v-card flat tile width="100%" max-width="480" class="transparent left-col">
            <v-card-text class="text-center text-lg-left">
              <SubHeader :value.sync="header" />
            </v-card-text>
            <v-card-text class="mx-auto mx-lg-0">
              <Paragraph :value.sync="text" />
            </v-card-text>
            <v-card-text class="text-center text-md-left">
              <Button :value.sync="topButton" :goto.sync="topButtonGoto" />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="6" order="first" order-md="last" class="right-col mx-auto">
          <TopPicture />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex'

import { SubHeader, Paragraph, Button } from '@/components/inputs'

export default {
  name: 'TopOfPage',
  components: {
    TopPicture: () => import('@/components/multipage/TopPicture.vue'),
    SubHeader,
    Paragraph,
    Button
  },
  props: ['page'],
  computed: {
    ...mapState('content', ['top', 'mainNavButtons']),
    ...mapGetters('media', ['getImageLink']),
    header: {
      get () {
        return this.top.header
      },
      set (value) {
        this.update({ prop: 'header', value })
      }
    },
    text: {
      get () {
        return this.top.text.split('<br>').join('\n')
      },
      set (val) {
        this.update({ prop: 'text', value: val.split('\n').join('<br>') })
      }
    },
    topButton: {
      get () {
        return this.top ? this.top.button : ''
      },
      set (value) {
        this.update({ prop: 'button', value })
      }
    },
    topButtonGoto: {
      get () {
        return this.top ? this.top.goto : ''
      },
      set (value) {
        this.update({ prop: 'goto', value })
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_TOP'
    })
  }
}
</script>

<style scoped>
.top-element {
  margin-top: 120px;
  margin-bottom: 64px;
}
p {
  line-height: 180%!important;
}
@media screen and (max-width: 500px) {
  .top-element {
    margin-top: 80px;
    margin-bottom: 48px;
  }
}
</style>
