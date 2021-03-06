<template>
  <v-container fluid class="my-12" v-if="faq">
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
          v-for="(item,index) in items"
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
                      @click="remove(index)"
                      v-on="on"
                >
                  <v-icon>$delete</v-icon>
                </v-btn>
              </template>
              <span>Remove FAQ item</span>
            </v-tooltip>
            <v-text-field
                :value="item.question"
                @input="saveQuestion(index, $event)"
                prepend-inner-icon="mdi-pencil"
            ></v-text-field>
            <template v-slot:actions>
              <v-icon color="#444">$expand</v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-textarea
                :value="getAnswerText(index)"
                @input="saveAnswer(index, $event)"
                prepend-inner-icon="mdi-pencil"
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
                  @click="addItem"
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
        <Button :value.sync="button" :goto.sync="goto" class="mx-auto" v-if="button" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

import { SubHeader, Button } from '@/components/inputs'

export default {
  name: 'FAQ',
  components: {
    SubHeader,
    Button
  },
  props: ['page'],
  data () {
    return {
      panel: null,
      items: []
    }
  },
  computed: {
    ...mapState('content', ['faq']),
    header: {
      get () {
        return this.faq ? this.faq.header : ''
      },
      set (val) {
        this.update({ prop: 'header', value: val })
      }
    },
    button: {
      get () {
        return this.faq ? this.faq.button : ''
      },
      set (val) {
        this.update({ prop: 'button', value: val })
      }
    },
    goto: {
      get () {
        return this.faq && this.faq.goto ? this.faq.goto : ''
      },
      set (val) {
        this.update({ prop: 'goto', value: val })
      }
    }
  },
  watch: {
    items: {
      deep: true,
      handler (val) {
        //
      }
    }
  },
  methods: {
    ...mapMutations('content', {
      update: 'UPDATE_FAQ',
      updateItem: 'UPDATE_FAQ_ITEM',
      addItem: 'ADD_FAQ_ITEM',
      remove: 'DELETE_FAQ_ITEM'
    }),
    getQuestion (num) {
      return this.faq.items[num].question
    },
    getAnswerText (num) {
      return this.faq.items[num].answer.split('<br>').join('\n')
    },
    saveQuestion (num, question) {
      this.updateItem({ num, prop: 'question', value: question })
    },
    saveAnswer (num, answer) {
      this.updateItem({ num, prop: 'answer', value: answer.split('\n').join('<br>') })
    }
  },
  mounted () {
    this.items = this.$store.state.content.faq.items
  }
}
</script>

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
