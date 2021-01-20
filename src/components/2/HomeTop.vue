<template>
<v-container fluid style="overflow-x: hidden; margin-top: 160px; margin-bottom: 64px;" v-if="top">
  <v-card flat class="homefone mx-auto" width="100%" max-width="1440">

      <!-- =======================  VIEWPORT > 700 ======================== -->

      <v-row align="center" justify="center" style="height: 100%">
        <v-col cols="12" lg="6" class="mx-auto my-auto">
          <v-card flat width="100%" max-width="480" class="transparent mx-auto">
            <v-card-text class="text-center text-md-left">
              <SubHeader :value.sync=header />
            </v-card-text>
            <v-card-text class="mx-0" v-if="viewportWidth > 700">
              <Paragraph :value.sync="text" />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" class="mx-auto my-auto">
          <v-card flat width="100%" max-width="480" class="transparent mx-auto">
            <v-card-text
                  class="text-left"
                  v-if="viewportWidth > 700"
            >
            <Button
                v-for="(btn, index) in mainNavButtons"
                :key="index"
                :value="btn"
                :hideConfig="true"
            />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    <!-- =======================  VIEWPORT <= 700 ======================== -->

    <v-row align="center" justify="center" style="height: 100%" v-if="viewportWidth <= 700">
      <v-card flat width="100%" max-width="480" class="transparent mx-auto">
        <v-card-text class="mx-auto mx-lg-0">
          <p
              class="text-center"
              v-html="top.text"
          ></p>
        </v-card-text>
        <v-card-text class="text-center text-md-left">
          <v-btn
              v-for="(btn, index) in mainNavButtons"
              :key="index"
              color="buttons"
              dark
              rounded
              height="48"
              class="submit-button px-auto mx-auto my-2"
              @click="$emit('update:page', mainNavSectors[index])"
          >
              {{ btn }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-row>
  </v-card>
</v-container>
</template>

<script>

import { mapState } from 'vuex'

const {
  SubHeader,
  Paragraph,
  Button
} = require('@/components/inputs').default

export default {
  name: 'Top',
  components: {
    SubHeader,
    Paragraph,
    Button
  },
  props: ['page'],
  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('content', ['top', 'mainNavButtons', 'mainNavSectors']),
    header: {
      get () {
        return this.top.header
      },
      set (val) {
        this.$store.commit('content/UPDATE_TOP', { prop: 'header', value: val })
      }
    },
    text: {
      get () {
        return this.top.text.split('<br>').join('\n')
      },
      set (val) {
        this.$store.commit('content/UPDATE_TOP', { prop: 'text', value: val.split('\n').join('<br>') })
      }
    },
    button: {
      get () {
        return this.top.button
      },
      set (val) {
        this.$store.commit('content/UPDATE_TOP', { prop: 'button', value: val })
      }
    }
  }
}
</script>

<style>
.v-image__image .v-image__image--cover {
  transition: all 0.5s!important;
}
.v-image__image .v-image__image--cover:hover {
  filter: blur(8px)!important;
  -webkit-filter: blur(8px)!important;
}
</style>

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
