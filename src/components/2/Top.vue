<template>
<v-container fluid style="overflow-x: hidden; margin-top: 160px; margin-bottom: 64px;">
  <v-card flat class="mx-auto homefone" width="100%" max-width="1440">
    <v-row align="center" justify="center">
      <v-col sm="12" md="6" class="text-center mx-auto">
        <v-card flat width="100%" max-width="480" class="transparent mx-auto">
          <v-card-text class="text-center text-md-left">
            <h1
                class="text-center text-md-left"
                v-text="top.header"
                ref="topHeader"
                contenteditable
            ></h1>
          </v-card-text>
          <v-card-text class="mx-auto mx-lg-0">
            <p
                class="text-center text-md-left"
                v-text="top.text"
                ref="topText"
                contenteditable
            ></p>
          </v-card-text>
          <v-card-text class="text-center text-md-left">
            <p class="submit-button mx-auto"
                contenteditable
                ref="topButton"
                v-text="top.button"
            ></p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col sm="12" md="6" order="first" order-sm="last">
        <ChangePicture
              :gallery.sync="gallery"
              :action.sync="save"
        />
        <ImageGallery
              :activate.sync="gallery"
              :staticEndpoint="staticEndpoint"
              :endpoint="imagesEndpoint"
              :selectedImageURL.sync="imageURL"
              :fileLimit="fileLimit"
              :imageSize="imageSize"
        />
        <v-card flat width="100%" max-width="600" class="transparent">
          <v-img :src="top.pictureURL" max-width="750" class="mx-auto"></v-img>
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

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Top',
  props: ['page'],
  computed: {
    ...mapState('content', ['top']),
    ...mapGetters(['familyPicture'])
  }
}
</script>
