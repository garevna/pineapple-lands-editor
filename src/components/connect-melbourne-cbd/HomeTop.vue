<template>
<v-container fluid style="overflow: visible; margin-top: 160px; margin-bottom: 64px;" v-if="top">
  <v-card flat class="homefone mx-auto" width="100%" max-width="1440">
      <v-row align="center" justify="center" style="height: 100%">
        <v-col cols="12" md="6" class="mx-auto my-auto">
          <v-card flat width="100%" max-width="480" class="transparent mx-auto">
            <v-card-text class="text-center text-md-left">
              <SubHeader :value.sync=header />
            </v-card-text>
            <v-card-text class="mx-0">
              <Paragraph :value.sync="text" />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="mx-auto my-auto">
          <v-card flat width="100%" max-width="480" class="transparent mx-auto">
            <v-card-text
                  class="text-left"
                  v-if="viewportWidth > 700"
            >
            <v-btn
              v-for="(button, index) in mainNavButtons"
              :key="index"
              dark
              rounded
              color="buttons"
              class="my-2"
              width="340"
              height="48"
            >{{ button }}</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
  </v-card>
</v-container>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

import { SubHeader, Paragraph } from '@/components/inputs'

export default {
  name: 'Top',
  components: {
    SubHeader,
    Paragraph
  },
  props: ['page'],
  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('content', ['top', 'mainNavButtons']),
    header: {
      get () {
        return this.top.header
      },
      set (val) {
        this.update({ prop: 'header', value: val })
      }
    },
    text: {
      get () {
        return this.top.text.split('<br>').join('\n')
      },
      set (val) {
        this.update({ prop: 'text', value: val.split('\n').join('<br>') })
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

<!-- /* <style>
.v-image__image .v-image__image--cover {
  transition: all 0.5s!important;
}
.v-image__image .v-image__image--cover:hover {
  filter: blur(8px)!important;
  -webkit-filter: blur(8px)!important;
}
</style> */ -->

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
