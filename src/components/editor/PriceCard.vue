<template>
  <v-card class="price-card">
    <v-img src="@/assets/price-card-image.png" class="price-card-image"></v-img>

    <v-card-text class="mt-2 mt-sm-0" align="center" style="position: relative; z-index: 1">

      <h5 style="color: #777">Price ($ per mo)</h5>
      <SubHeader :value.sync="price" />

      <h5 style="color: #777">Download (Mbps)</h5>
      <SubHeader :value.sync="download" />

      <h5 style="color: #777">Upload (Mbps)</h5>
      <SubHeader :value.sync="upload" />

    </v-card-text>
  </v-card>
</template>

<style>

.price-card {
  padding: 30px 20px;
  margin: 40px 20px;
  width: 280px;
  height: 380px;
}

p, .question {
  font-size: 16px;
  line-height: 180%;
}

p {
  text-align: center;
  color: #000;
}
.question {
  font-weight: bold;
}

.price {
  color: #20731C;
}
.mo {
  font-weight: normal;
  font-size: 18px;
}
.price-card-image {
  width: 172px;
  height: 157px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
}

@media screen and (max-width: 959px) {
  .price-card {
    padding: 16px;
    width: 250px;
    height: 320px;
  }
  p, .question {
    font-size: 13px;
    line-height: 130%;
  }
}

</style>

<script>

import SubHeader from '@/components/inputs/SubHeader.vue'

export default {
  name: 'PriceCard',
  components: {
    SubHeader
  },
  props: ['plan', 'item', 'index'],
  computed: {
    price: {
      get () {
        return this.item.price
      },
      set (val) {
        this.$store.commit('internetPlans/CHANGE_PLAN', {
          plan: this.plan,
          index: this.index,
          prop: 'price',
          value: parseInt(val)
        })
      }
    },
    download: {
      get () {
        return this.item.download
      },
      set (val) {
        this.$store.commit('internetPlans/CHANGE_PLAN', {
          plan: this.plan,
          index: this.index,
          prop: 'download',
          value: parseInt(val)
        })
      }
    },
    upload: {
      get () {
        return this.item.upload
      },
      set (val) {
        this.$store.commit('internetPlans/CHANGE_PLAN', {
          plan: this.plan,
          index: this.index,
          prop: 'upload',
          value: parseInt(val)
        })
      }
    }
  }
}
</script>
