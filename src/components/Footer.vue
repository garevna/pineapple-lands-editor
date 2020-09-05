<template>
  <v-container fluid fill-height class="homefone" style="position: relative; margin-bottom: -10px; margin-top: 50px;">
    <FooterFone :footerHeight="footerHeight" />
    <v-card class="footer--top-content" :style="{ top: topContentTop }">
      <v-row align="start" justify="center" style="position: absolute; top: 0; left: 0; width: 100%">
        <v-card-text class="mx-auto text-center">
          <SubHeader :value.sync="title" className="footer" />
        </v-card-text>
        <v-card-text max-width="100%">
          <SubHeader5 :value.sync="text" className="footer" />
        </v-card-text>
        <v-row class="mx-auto">
          <v-col cols="12" class="mx-auto">
            <v-row align="center" justify="center">
              <v-card flat class="transparent mx-1 my-1" v-if="viewportWidth > 420">
                <v-text-field
                      height="53"
                      class="input-field rounded transparent"
                      label="Name"
                      hide-details
                      rounded
                      outlined
                      dark
                      color="#fff"
                ></v-text-field>
              </v-card>
              <v-card flat class="transparent mx-1 my-1" v-if="viewportWidth > 420">
                <v-text-field
                      height="53"
                      class="input-field rounded transparent"
                      label="Email"
                      hide-details
                      rounded
                      outlined
                      dark
                      color="#fff"
                ></v-text-field>
              </v-card>
              <v-card flat class="transparent mx-1 my-1" v-if="viewportWidth > 420">
                <v-text-field
                      height="53"
                      class="input-field rounded transparent"
                      label="Phone"
                      hide-details
                      rounded
                      outlined
                      dark
                      color="#fff"
                      style="font-size: 16px"
                      background-color="transparent"
                ></v-text-field>
              </v-card>
              <v-card flat class="transparent mx-1 my-0">
                <v-btn
                    height="53"
                    max-width="280"
                    min-width="280"
                    label="Phone"
                    dense
                    hide-details
                    rounded
                    light
                    style="color: #20731C"
                >Get started</v-btn>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </v-card>

    <FooterBottomContent v-if="viewportWidth >= 770" />
    <FooterBottomContentSmall  v-if="viewportWidth < 770" class="footer--bottom-content-small"/>
  </v-container>
</template>

<style>

.footer--top-content {
  position: absolute;
  width: 100%;
}

.footer--bottom-content-small {
  position: absolute;
  bottom: 40px;
  left: 0;
}

.title {
  margin-top: 198px;
}

.rounded {
  border-radius: 40px!important;
}

.white-text {
  color: #fff;
}

.centered {
  text-align: center;
}
.icon {
  display: inline-block;
  width: 10px;
  margin-right: 10px;
}

.left-16 {
  font-size: 16px;
  font-weight: 900;
  text-align: left;
  color: #fff;
}
.left-14 {
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  color: #fff;
}

.ref {
  text-decoration: none;
  cursor: pointer;
}
.ref:hover {
  color: #E5FDD7;
}

.input-field {
  width: 280px;
}

</style>

<script>

import { mapState } from 'vuex'

import FooterFone from '@/components/footer/FooterFone.vue'
import FooterBottomContent from '@/components/footer/BottomContent.vue'
import FooterBottomContentSmall from '@/components/footer/BottomContentSmall.vue'

import SubHeader from '@/components/inputs/SubHeader.vue'
import SubHeader5 from '@/components/inputs/SubHeader5.vue'

export default {
  name: 'Footer',
  components: {
    FooterFone,
    FooterBottomContentSmall,
    FooterBottomContent,
    SubHeader,
    SubHeader5
  },
  props: ['user', 'page'],
  data () {
    return {
      name: '',
      email: '',
      phone: ''
    }
  },
  computed: {
    ...mapState(['viewportWidth']),
    ...mapState('content', ['footer']),
    title: {
      get () {
        return this.footer.title ? this.footer.title : this.footer.topHead ? this.footer.topHead
          : 'READY TO GET STARTED?'
      },
      set (val) {
        this.$store.commit('content/UPDATE_FOOTER', {
          prop: this.footer.title ? 'title' : 'topHead',
          value: val
        })
      }
    },
    text: {
      get () {
        return this.footer.text ? this.footer.text : this.footer.topText ? this.footer.topText
          : 'Leave your inquiry and we\'ll get back to you within 24 hours on business days'
      },
      set (val) {
        this.$store.commit('content/UPDATE_FOOTER', {
          prop: this.footer.text ? 'text' : 'topText',
          value: val
        })
      }
    },
    topContentTop () {
      return this.viewportWidth < 420 ? '80px' : this.viewportWidth > 1904 ? '288px' : '198px'
    },
    topContentFont () {
      return this.viewportWidth < 420 ? '80px' : this.viewportWidth > 1904 ? '288px' : '198px'
    },
    footerHeight () {
      return this.viewportWidth < 420 ? 680 : this.viewportWidth > 1904 ? 980 : 860
    }
  }
}
</script>
