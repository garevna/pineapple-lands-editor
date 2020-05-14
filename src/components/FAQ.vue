<template>
  <v-container fluid class="my-12">
    <v-card flat width="100%" max-width="900" class="transparent mx-auto my-10">
      <v-tooltip top color="info">
        <template v-slot:activator="{ on }">
          <v-btn fab dark small color="warning" v-on="on" @click="saveContent">
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </template>
        <span>Save section content</span>
      </v-tooltip>
      <v-card-title class="text-center mb-12">
        <h2
            contenteditable
            ref="faqHeader"
            v-text="faq.header"
        ></h2>
      </v-card-title>
      <v-expansion-panels
            v-model="panel"
            accordion
            focusable
            hover
            tile
      >
        <v-expansion-panel
          v-for="(item,index) in faq.items"
          :key="index"
        >
          <v-expansion-panel-header class="text-left">

            <v-tooltip top dark color="#09b">
              <template v-slot:activator="{ on }">
                <v-btn
                      absolute
                      fab
                      dark
                      small
                      bottom
                      left
                      color="red"
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
                class="contenteditable"
                :value="item.question"
                @input="saveQuestion(index, $event)"
            ></v-text-field>
            <template v-slot:actions>
              <v-icon color="#444">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-textarea
                class="contenteditable"
                :value="getAnswerText(index)"
                @input="saveAnswer(index, $event)"
            ></v-textarea>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-tooltip top dark color="#09b">
          <template v-slot:activator="{ on }">
            <v-btn
                  absolute
                  fab
                  dark
                  small
                  bottom
                  right
                  color="#09b"
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
      <v-card-text class="text-center">
        <p class="submit-button mx-auto"
            contenteditable
            ref="faqButton"
            v-text="faq.button"
        ></p>
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
  h2 { margin-left: 20px; }
  h5 { max-width: 80%; }
  .v-card__text {
    font-size: 14px!important;
  }
}

@media screen and (max-width: 320px) {
  h2 {
    max-width: 280px;
  }
  h5 {
    font-size: 13px;
    max-width: 280px;
    line-height: 32px;
  }
  .v-card__text {
    font-size: 12px!important;
  }
}
</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'FAQ',
  props: ['page'],
  data () {
    return {
      panel: null
    }
  },
  computed: {
    ...mapState('content', ['faq'])
  },
  methods: {
    getAnswerText (num) {
      return this.faq.items[num].answer.split('<br>').join('\n')
    },
    saveQuestion (index, question) {
      this.$store.commit('content/UPDATE_FAQ_ITEM', { num: index, prop: 'question', value: question })
    },
    saveAnswer (index, answer) {
      this.$store.commit('content/UPDATE_FAQ_ITEM', { num: index, prop: 'answer', value: answer.split('\n').join('<br>') })
    },
    saveContent () {
      this.$store.commit('content/UPDATE_FAQ', { prop: 'header', value: this.$refs.faqHeader.innerText })
      this.$store.commit('content/UPDATE_FAQ', { prop: 'button', value: this.$refs.faqButton.innerText })
      // this.faq.items.forEach((item) => {
      //   this.$store.commit('content/UPDATE_FAQ_ITEM', { prop: 'button', value: this.$refs.item.innerText })
      // })
      this.$store.commit('SET_POPUP_TITLE', 'SECTION CONTENT')
      this.$store.commit('SET_POPUP_TEXT', 'Data successfully saved')
      this.$store.commit('SHOW_POPUP')
    }
  }
}
</script>
