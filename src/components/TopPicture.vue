<template>
  <figure class="mx-auto">
    <ChangePicture
      destination="image"
      :pictureURL.sync="pictureURL"
      :link.sync="link"
    />

    <img
      v-if="src"
      :src.sync="src"
    />
    <Spinner v-else class="spinner" />
  </figure>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex'

import { Spinner, ChangePicture } from '@/components/editor'

export default {
  name: 'TopPicture',
  components: {
    Spinner,
    ChangePicture
  },
  data: () => ({
    src: null
  }),
  computed: {
    ...mapState(['imagesReady']),
    ...mapState('content', ['top']),
    ...mapGetters('media', ['getImageLink']),
    pictureURL: {
      get () {
        return this.top.pictureURL
      },
      set (value) {
        this.update({ prop: 'pictureURL', value })
      }
    },
    link: {
      get () {
        return this.getImageLink(this.pictureURL)
      },
      set (val) {
        this.$nextTick(function () {
          this.src = val
        })
      }
    }
  },
  watch: {
    link: {
      immediate: true,
      handler (val) {
        this.$nextTick(function () {
          this.src = val
        })
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

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-20%,-50%);
}

figure {
  position: relative;
  width: 800px;
  height:800px;
  overflow: hidden;
  transform: translate(-120px, 0);
}

.path {
  fill: none;
  stroke: #000;
  stroke-width: 1;
}
.blur {
  filter: url('#dropshadow');
}

@media screen and (max-width: 1360px) {
  figure {
    transform: scale(0.8,0.8) translate(-120px, 0);
  }
}

@media screen and (max-width: 1110px) {
  figure {
    transform: scale(0.8,0.8) translate(-160px, 0);
  }
}

@media screen and (max-width: 960px) {
  figure {
    margin-top: -70px;
    margin-bottom: -80px;
    transform: scale(0.8,0.8) translate(-0px, 0);
  }
}

@media screen and (max-width: 700px) {
  figure {
    transform: scale(0.8,0.8) translate(-60px, 0);
  }
}

@media screen and (max-width: 600px) {
  figure {
    transform: scale(0.7,0.7) translate(-150px, 0);
  }
}

@media screen and (max-width: 500px) {
  figure {
    transform: scale(0.6,0.6) translate(-260px, 0);
  }
}

@media screen and (max-width: 460px) {
  figure {
    transform: scale(0.6,0.6) translate(-280px, 0);
  }
}

@media screen and (max-width: 430px) {
  figure {
    transform: scale(0.6,0.6) translate(-320px, 0);
  }
}

@media screen and (max-width: 400px) {
  figure {
    transform: scale(0.6,0.6) translate(-340px, 0);
  }
}

@media screen and (max-width: 375px) {
  figure {
    transform: scale(0.6,0.6) translate(-355px, 0);
  }
}

@media screen and (max-width: 360px) {
  figure {
    transform: scale(0.55,0.55) translate(-400px, 0);
  }
}

@media screen and (max-width: 340px) {
  figure {
    transform: scale(0.5,0.5) translate(-470px, 0);
  }
}

@media screen and (max-width: 320px) {
  figure {
    transform: scale(0.5,0.5) translate(-490px, 0);
  }
}

img {
  position: absolute;
  min-width: 600px;
  max-width: 800px;
  top:80px;
  left: 80px;
}
.clip-svg {
  clip-path: url(#clipping-mask);
}
</style>
