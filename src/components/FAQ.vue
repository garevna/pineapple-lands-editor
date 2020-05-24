<template>
  <v-container fluid class="my-12">
    <v-card flat width="100%" max-width="900" class="transparent mx-auto my-10">
      <v-card-title class="text-center mb-12">
        <SubHeader :value.sync="header" />
      </v-card-title>
      <v-expansion-panels
            v-model="panel"
            accordion
            focusable
            hover
            tile
      >
        <v-expansion-panel
          v-for="(item,index) in content"
          :key="index"
        >
          <v-expansion-panel-header class="text-left">

            <v-tooltip top dark color="#09b">
              <template v-slot:activator="{ on }">
                <v-btn
                      absolute
                      fab
                      dark
                      top
                      left
                      color="error"
                      width="32"
                      height="32"
                      style="margin-top: 48px; margin-left: -40px"
                      :value="index"
                      class="button-minus"
                      @click="$store.commit('content/DELETE_FAQ_ITEM', index)"
                      v-on="on"
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
              </template>
              <span>Remove FAQ item</span>
            </v-tooltip>
            <v-text-field
                :value="item.question"
                @input="saveQuestion(index, $event)"
            ></v-text-field>
            <template v-slot:actions>
              <v-icon color="#444">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-textarea
                :value="getAnswerText(index)"
                @input="saveAnswer(index, $event)"
            ></v-textarea>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <!-- <ButtonWithTooltip
              :fab="true"
              :width="48"
              :height="48"
              icon="mdi-plus"
              tooltip="Add FAQ item"
              color="warning"
        /> -->

        <v-tooltip top dark color="#09b">
          <template v-slot:activator="{ on }">
            <v-btn
                  absolute
                  fab
                  dark
                  small
                  bottom
                  right
                  color="info"
                  class="button-plus"
                  @click="$store.commit('content/ADD_FAQ_ITEM')"
                   v-on="on"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>Add FAQ item</span>
        </v-tooltip>

      </v-expansion-panels>
    </v-card>
    <v-card flat class="transparent mx-auto mt-12 text-center">
      <v-card-text class="text-center">
        <Button :value.sync="button" class="mx-auto" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-card__text {
  font-family: 'Gilroy'!important;
  font-style: normal;
  font-weight: normal;
  font-size: 18px!important;
  line-height: 150%;
  color: #2D2D2D!important;
}

.button-minus {
  margin-left: -40px;
  margin-bottom: 48px;
}
.button-plus {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}

@media screen and (max-width: 600px) {
  .v-card__text {
    font-size: 14px!important;
  }
}

@media screen and (max-width: 320px) {
  .v-card__text {
    font-size: 12px!important;
  }
}
</style>

<script>

// import { mapState } from 'vuex'

import SubHeader from '@/components/inputs/SubHeader.vue'
import Button from '@/components/inputs/Button.vue'
// import ButtonWithTooltip from '@/components/editor/ButtonWithTooltip.vue'

export default {
  name: 'FAQ',
  components: {
    // ButtonWithTooltip,
    SubHeader,
    Button
  },
  props: ['page'],
  data () {
    return {
      panel: null,
      faq: null,
      content: []
    }
  },
  computed: {
    // ...mapState('content', ['faq']),
    header: {
      get () {
        return this.faq ? this.faq.header : ''
      },
      set (val) {
        this.$store.commit('content/UPDATE_FAQ', { prop: 'header', value: val })
      }
    },
    button: {
      get () {
        return this.faq ? this.faq.button : ''
      },
      set (val) {
        this.$store.commit('content/UPDATE_FAQ', { prop: 'button', value: val })
      }
    }
  },
  watch: {
    faq: {
      deep: true,
      handler (val) {
        console.log('FAQs:\n', val)
        this.content = this.faq.items
      }
    }
  },
  methods: {
    getQuestion (num) {
      return this.content[num].question
    },
    getAnswerText (num) {
      return this.content[num].answer.split('<br>').join('\n')
    },
    saveQuestion (index, question) {
      this.$store.commit('content/UPDATE_FAQ_ITEM', { num: index, prop: 'question', value: question })
    },
    saveAnswer (index, answer) {
      this.$store.commit('content/UPDATE_FAQ_ITEM', { num: index, prop: 'answer', value: answer.split('\n').join('<br>') })
    }
  },
  mounted () {
    this.faq = this.$store.state.content.faq
    this.content = this.faq.items
  }
}
</script>
