<template>
  <v-card width="360" height="360" style="position: relative" pa-4>
    <ChangePicture
          :pictureURL.sync="avatar"
          pictureType="avatar"
          :saveContent.sync="save"
          section="testimonials"
    />
    <img
        :src="photo"
        class="testimonial-photo"
        width="40"
        height="40"
        style="border-radius: 50%"
        alt=""
    />
    <v-text-field class="testimonial-name" v-model="author"></v-text-field>
    <v-textarea class="testimonial-text" outlined v-model="message"></v-textarea>
    <v-dialog
        ref="dialog"
        v-model="menu"
        :return-value.sync="data"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="data"
            prepend-icon="mdi-calendar"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="data" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
    </v-dialog>
  </v-card>
</template>

<style scoped>

.v-input {
  position: absolute!important;
  bottom: 4px!important;
  left: 16px!important;
  font-size: 14px!important;
}

p {
  line-height: 150%!important;
}

.testimonial-name,
.testimonial-text,
.testimonial-date,
.testimonial-photo {
  position: absolute!important;
}

.testimonial-name, .testimonial-date { text-align: left; }

.testimonial-photo {
  top: 30px;
  left: 20px;
  border-radius: 50%!important;
}
.testimonial-name {
  top: 24px;
  left: 70px!important;
  font-size: 15px!important;
  font-weight: bold;
}
.testimonial-text {
  position: absolute;
  top: 80px;
  width: 90%!important;
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
    save: false,
    menu: false
  }),
  computed: {
    ...mapState(['viewportWidth']),
    cardWidth () {
      return this.viewportWidth < 600 ? this.viewportWidth - 100 : 376
    },
    textSize () {
      return this.viewportWidth < 600 ? '12px' : '14px'
    },
    author: {
      get () {
        return this.name
      },
      set (val) {
        this.$store.commit('testimonials/UPDATE_NAME', { num: this.index, value: val })
      }
    },
    message: {
      get () {
        return this.text
      },
      set (val) {
        this.$store.commit('testimonials/UPDATE_TEXT', { num: this.index, value: val })
      }
    },
    data: {
      get () {
        let d
        try {
          d = new Date(this.date).toISOString().substr(0, 10)
        } catch {
          d = new Date().toISOString().substr(0, 10)
        }
        return d
      },
      set (val) {
        this.$store.commit('testimonials/UPDATE_DATE', { num: this.index, value: val })
      }
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
      // this.$store.commit('testimonials/UPDATE_NAME', { num: this.index, value: val })
      this.save = false
      this.$store.commit('SET_POPUP_TITLE', 'REVIEW\'S CARD CONTENT')
      this.$store.commit('SET_POPUP_TEXT', 'Data successfully saved')
      this.$store.commit('SHOW_POPUP')
    }
  },
  methods: {
    //
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
