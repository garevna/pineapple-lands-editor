<template>
  <v-card hover :width="cardWidth" :height="cardHeight" style="position: relative" pa-4>
    <ChangePicture :pictureURL.sync="avatar" pictureType="avatar" :saveContent.sync="save" />
    <img
        :src="photo"
        class="testimonial-photo"
        width="40"
        height="40"
        style="border-radius: 50%"
        alt=""
    />
    <p
        class="testimonial-name"
        ref="testimonial"
        v-text="name"
    >{{ name }}</p>
    <p class="testimonial-text" :style="{ fontSize: textSize }" v-html="text"></p>
    <p class="testimonial-text-ellipsis" :style="{ fontSize: textSize }" v-if="ellipsis">...</p>
    <p class="testimonial-date">{{ date }}</p>
  </v-card>
</template>

<style scoped>

p {
  line-height: 150%!important;
}

.testimonial-name,
.testimonial-text,
.testimonial-date,
.testimonial-photo {
  position: absolute;
}

.testimonial-name, .testimonial-date { text-align: left; }

.testimonial-photo {
  top: 30px;
  left: 20px;
  border-radius: 50%!important;
}
.testimonial-name {
  top: 36px;
  left: 70px;
  font-size: 15px;
  font-weight: bold;
}
.testimonial-text {
  position: absolute;
  top: 80px;
  width: 80%!important;
  left: 10%;
  height: 86px;
  overflow: hidden;
  text-align: justify;
  font-weight: normal;
}
.testimonial-text-ellipsis {
  position: absolute;
  top: 166px;
  left: 10%;
  text-align: left;
}
.testimonial-date {
  position: absolute;
  bottom: 4px;
  left: 24px;
  font-size: 12px;
  font-weight: normal;
}
</style>

<script>

import { mapState } from 'vuex'

import ChangePicture from '@/components/editor/ChangePicture.vue'

export default {
  name: 'TestimonialsCard',
  components: {
    ChangePicture
  },
  props: ['index', 'date', 'photo', 'name', 'text'],
  data: () => ({
    ellipsis: false,
    cardHeight: '240px',
    save: false
  }),
  computed: {
    ...mapState(['viewportWidth']),
    cardWidth () {
      return this.viewportWidth < 600 ? this.viewportWidth - 100 : 376
    },
    textSize () {
      return this.viewportWidth < 600 ? '12px' : '14px'
    },
    avatar: {
      get () {
        return this.photo
      },
      set (val) {
        this.$store.commit('testimonials/UPDATE_PHOTO', { num: this.index, value: val })
      }
    }
  },
  watch: {
    avatar (val) {
      this.$emit('update:this.photo', val)
    },
    save (val) {
      if (!val) return
      this.saveContent()
      this.save = false
      this.$store.commit('SET_POPUP_TITLE', 'CARD CONTENT')
      this.$store.commit('SET_POPUP_TEXT', 'Data successfully saved')
      this.$store.commit('SHOW_POPUP')
    }
  },
  methods: {
    saveContent () {
      this.$store.commit('content/UPDATE_TOP', { prop: 'header', value: this.$refs.topHeader.innerText })
      this.$store.commit('content/UPDATE_TOP', { prop: 'text', value: this.$refs.topText.innerText })
      this.$store.commit('content/UPDATE_TOP', { prop: 'button', value: this.$refs.topButton.innerText })
    }
  },
  mounted () {
    const textElement = document.body.appendChild(document.createElement('p'))
    textElement.style.marginTop = '-1000px'
    textElement.style.width = (this.cardWidth - 40) + 'px'
    textElement.textContent = this.text
    this.ellipsis = textElement.offsetHeight > 86
    textElement.remove()
  }
}

</script>
