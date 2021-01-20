<template>

  <v-container fluid class="deepgreen px-auto" width="100%" style="overflow-x: hidden; margin-top: 160px; margin-bottom: 64px;">
    <v-card flat class="transparent mx-auto" width="100%" max-width="1440">
      <v-row align="center" justify="center">
        <v-col sm="12" md="7" class="text-center mx-auto">
          <v-card flat width="100%" max-width="540" class="transparent mx-auto">
            <v-card-text class="text-center text-md-left">
              <TopHeader :value.sync="top.header" class="footer" />
            </v-card-text>
            <v-card-text class="mx-auto mx-lg-0">
              <Paragraph :value.sync="top.text" class="footer" />
            </v-card-text>
            <v-card-text class="text-center text-md-left">
              <Button :value.sync="top.button" class="mx-auto" />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="12" md="5">
            <v-card flat width="100%" max-width="400" class="transparent mx-auto">
              <v-img :src="top.pictureURL" max-width="320" class="nbn-logo mx-auto" contain></v-img>
            </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
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

<script>

import { mapState } from 'vuex'

const {
  TopHeader,
  Paragraph,
  Button
} = require('@/components/inputs').default

export default {
  name: 'Top',
  components: {
    TopHeader,
    Paragraph,
    Button
  },
  props: ['page'],
  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('content', ['top'])
  }
}
</script>
