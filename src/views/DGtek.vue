<template>
  <v-container class="homefone" v-if="ready">
    <AppHeader :page.sync="page" :viewport="viewport"/>
    <v-container fluid class="pa-0 my-0" style="max-width: 1904px">
      <section id="top" class="mx-auto">
        <div class="base-title">
          <a href="#top" class="core-goto"></a>
            <Top :viewport="viewport" />
        </div>
      </section>
    </v-container>

    <v-container fluid class="pa-0 my-0 mx-auto" style="max-width: 1000px">
      <v-row class="mx-0 px-0 my-0" align="center" justify="space-between">
        <v-col cols="12" md="6">
          <Aside :viewport="viewport" />
        </v-col>

        <v-col cols="12" md="6" class="mx-0 px-0">
          <section id="contact" class="mx-auto">
            <div class="base-title">
              <a href="#contact" class="core-goto"></a>
                <ContactForm :viewport="viewport" />
            </div>
          </section>
        </v-col>
      </v-row>

      <v-row class="mx-0 px-0">
        <section id="benefits" class="mx-auto">
          <div class="base-title">
            <a href="#benefits" class="core-goto"></a>
              <Benefits :viewport="viewport" />
          </div>
        </section>
      </v-row>

      <v-row class="mx-0 px-0">
        <section id="testimonials" style="width; 100%">
          <div class="base-title">
            <a href="#testimonials" class="core-goto"></a>
              <Testimonials :viewport="viewport" />
          </div>
        </section>
      </v-row>

      <v-row class="mx-0 px-0">
        <section id="faq" class="mx-auto">
          <div class="base-title">
            <a href="#faq" class="core-goto"></a>
              <FAQ :viewport="viewport" />
          </div>
        </section>
      </v-row>

      <v-row>
        <section id="footer" class="mx-auto">
        <div class="base-title">
          <a href="#footer" class="core-goto"></a>
          <Footer :viewport="viewport" />
        </div>
      </section>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex'

const {
  AppHeader,
  Top,
  Aside,
  Benefits,
  Testimonials,
  Footer
} = require('@/components/dgtek').default

const {
  UserContact: ContactForm,
  FAQ
} = require('@/components').default

export default {
  name: 'DGtek',
  components: {
    AppHeader,
    Top,
    Aside,
    ContactForm,
    Benefits,
    Testimonials,
    FAQ,
    Footer
  },
  data: () => ({
    route: 'dgtek-1',
    page: '#top',
    ready: false
  }),
  computed: {
    ...mapState(['viewport'])
  },
  methods: {
    ...mapActions('content', {
      getContent: 'GET_CONTENT'
    })
  },
  beforeMount () {
    this.getContent(this.route)
      .then((response) => {
        this.ready = !!response
      })
  }
}

</script>
