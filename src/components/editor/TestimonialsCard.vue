<template>
  <v-card width="360" height="360" style="position: relative" pa-4>
    <img
        :src="imageURL"
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
            class="testimonial-date"
          ></v-text-field>
        </template>
        <v-date-picker v-model="data" scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(data)">OK</v-btn>
        </v-date-picker>
    </v-dialog>

    <ChangePicture
          destination="avatar"
          :pictureURL.sync="imageURL"
          :action="true"
          :perform.sync="remove"
          style="position: absolute; top: -32px; left: -32px;"
    />
  </v-card>
</template>

<style scoped>

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
  top: 80px;
  left: 16px;
  width: 90%!important;
  text-align: justify;
  font-weight: normal;
}
.testimonial-date {
  bottom: 16px!important;
  left: 24px;
  font-size: 12px;
  font-weight: normal;
}
</style>

<script>

import ChangePicture from '@/components/editor/ChangePicture.vue'

export default {
  name: 'TestimonialsCard',
  components: {
    ChangePicture
  },
  props: ['index', 'content', 'removed'],
  data: () => ({
    ellipsis: false,
    remove: false,
    menu: false,
    imageURL: '',
    gallery: false
  }),
  computed: {
    author: {
      get () {
        return this.content.name
      },
      set (val) {
        this.$store.commit('testimonials/UPDATE_NAME', { num: this.index, value: val })
      }
    },
    message: {
      get () {
        return this.content.text
      },
      set (val) {
        this.$store.commit('testimonials/UPDATE_TEXT', { num: this.index, value: val })
      }
    },
    data: {
      get () {
        let d
        try {
          d = new Date(this.content.date).toISOString().substr(0, 10)
        } catch {
          d = new Date().toISOString().substr(0, 10)
        }
        return d
      },
      set (val) {
        this.$store.commit('testimonials/UPDATE_DATE', { num: this.index, value: val })
      }
    }
  },
  watch: {
    imageURL (url) {
      this.$store.commit('testimonials/UPDATE_PHOTO', {
        num: this.index,
        value: url
      })
    },
    remove (val) {
      // if (val) this.$store.commit('testimonials/REMOVE_ITEM', this.index)
      this.$emit('update:removed', this.index)
      // this.confirmRemoving = false
      // this.removing = index
      // this.details = `
      //   <img src="${this.imageURL}" width="50"/>
      //   <h3>${this.testimonials[this.index].name}</h3>
      //   <p>${this.testimonials[this.index].text}</p>
      //   <p><small>${this.testimonials[this.index].date}</small></p>
      // `
      // this.removePopupVisible = true
    },
    confirmRemoving (val) {
      if (!val) return
      this.removePicture(this.removing)
      this.getImages()
      this.removePopupVisible = false
    },
    content: {
      deep: true,
      handler (val) {
        this.imageURL = this.content.photo
      }
    }
  },
  mounted () {
    this.imageURL = this.content.photo
  }
}

</script>
