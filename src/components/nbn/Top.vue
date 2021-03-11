<template>
  <v-container fluid class="deepgreen px-auto nbn" v-if="pageContentReady" style="overflow: visible">
    <v-card flat class="transparent mx-auto" width="100%" max-width="1440">
      <v-row align="center" justify="center">
        <v-col sm="12" md="7" class="text-center mx-auto">
          <v-card flat width="100%" max-width="540" class="transparent mx-auto">
            <v-card-text class="text-center text-md-left">
              <TopHeader :value.sync="header" class="footer" />
            </v-card-text>
            <v-card-text class="mx-auto mx-lg-0">
              <Paragraph :value.sync="text" class="footer" />
            </v-card-text>
            <v-card-text class="text-center text-md-left">
              <Button :value.sync="button" config="false" class="mx-auto" />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="5">
            <v-card flat width="100%" max-width="400" class="transparent mx-auto">
              <v-img
                v-if="link"
                :src="link"
                max-width="320"
                class="nbn-logo mx-auto"
                contain
              />
              <Spinner v-else />
            </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

import { TopHeader, Paragraph, Button } from '@/components/inputs'

export default {
  name: 'Top',
  components: {
    TopHeader,
    Paragraph,
    Button
  },
  props: ['page'],
  computed: {
    ...mapState(['pageContentReady']),
    ...mapState('content', ['top']),
    ...mapGetters('media', ['getImageLink']),
    header: {
      get () {
        return this.top ? this.top.header : 'loading...'
      },
      set (value) {
        this.update({ prop: 'header', value })
      }
    },
    text: {
      get () {
        return this.top ? this.top.text : 'loading...'
      },
      set (value) {
        this.update({ prop: 'text', value })
      }
    },
    button: {
      get () {
        return this.top?.button || 'loading...'
      },
      set (value) {
        this.update({ prop: 'button', value })
      }
    },
    fileName () {
      return this.top.pictureURL.split('/').splice(-1)[0]
    },
    link: {
      get () {
        return this.getImageLink(this.fileName)
      },
      set (val) {
        console.log('LINK CHANGED:\n', val)
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_TOP'
    })
  },
  mounted () {
    if (!this.link) {
      this.__sendImageRequest(this.fileName)
    }
  }
}
</script>

<style scoped>
.nbn {
  overflow-x: hidden;
  margin-top: 160px;
  margin-bottom: 64px;
}
.top-element {
  margin-top: 120px;
  margin-bottom: 64px;
  overflow-x: hidden;
}
p {
  line-height: 180%!important;
  font-weight: 600;
  font-size: 20px;
}
h1, p {
  text-shadow: 0 0 3px #fff;
}
@media screen and (max-width: 500px) {
  .top-element {
    margin-top: 80px;
    margin-bottom: 48px;
  }
  p {
    font-size: 14px!important;
    line-height: 150%!important;
    color: #fff!important;
  }
}
</style>
