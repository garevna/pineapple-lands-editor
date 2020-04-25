<template>
  <v-card
        flat
        class="aside-card transparent mx-auto my-12"
        width="480"
  >
    <v-card-title>
      <h2 class="text-left">{{ info.header }}</h2>
    </v-card-title>
    <v-card-text>
      <p class="text-left">
          {{ info.text }}
      </p>
    </v-card-text>
    <v-card-text>
      <p class="text-left"><b>{{  }}</b></p>
      <h5
            v-for="(item, index) in info.offer"
            :key="index"
      >
        {{ item.blackText }} <span style="color: #72BF44"> {{ item.greenText }}</span>
      </h5>
    </v-card-text>
    <v-card-text>
      <p class="small text-left">Pineapple NET is powered by
          <v-img src="@/assets/dgtek-logo.png" width="50" style="display: inline-block; vertical-align: middle;"></v-img>
      </p>
    </v-card-text>
  </v-card>
</template>

<style scoped>

.aside-card {

}
.small {
  font-size: 14px;
}

@media screen and (max-width: 900px) {
  .aside-card {
    margin-bottom: 40px;
  }
}

</style>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Aside',
  computed: {
    ...mapState('content', ['info'])
  }
}
</script>
