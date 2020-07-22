<template>
  <v-row justify="space-around">
    <v-menu
      bottom
      origin="center center"
      close-on-click
      transition="slide-x-transition"
      v-model="menu"
    >
      <!-- <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          Scale Transition
        </v-btn>
      </template> -->

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click=""
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      transition=""
      bottom
      right
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="deep-orange"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Slide X Transition
        </v-btn>
      </template>

      <v-list>
        <v-list-item
              v-if="$route.name !== 'testimonials'"
              @click="$router.push({ name: 'testimonials' })"
        >
          <v-list-item-title>Reviews</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
export default {
  name: 'MainMenu',
  props: ['selected'],

}
</script>
