<template>
  <tr>
    <td>
      <v-btn text @click="remove" class="mb-5 mr-0 px-0">
        <v-icon color="#900">mdi-delete</v-icon>
      </v-btn>
    </td>
    <td>
      <v-text-field
        v-model="name"
        outlined
      />
    </td>
    <td width="80">
      <v-text-field
        v-model="download"
        outlined
      />
    </td>
    <td width="80">
      <v-text-field
        v-model="upload"
        outlined
      />
    </td>
    <td>
      <v-text-field
        v-model="dataLimit"
        outlined
      />
    </td>
    <td width="80">
      <v-text-field
        v-model="price"
        outlined
      />
    </td>
    <td>
      <v-text-field
        v-model="tariffId"
        outlined
      />
    </td>
    <td>
      <v-tooltip top color="#09b">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            class="mb-5 px-0"
            v-bind="attrs"
            v-on="on"
            @click="insert"
          >
            <v-icon color="#09b">mdi-table-row-plus-after</v-icon>
          </v-btn>
        </template>
        <span>Insert after</span>
      </v-tooltip>
    </td>
  </tr>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Tariff',
  props: {
    plan: String,
    index: Number
  },
  computed: {
    ...mapState('internetPlans', ['plans']),
    actionName () {
      return this.plan === 'residential' ? 'updateResidential' : 'updateBusiness'
    },
    tariff () {
      return this.plans[this.plan][this.index]
    },
    name: {
      get () {
        return this.tariff.name
      },
      set (val) {
        this.update('name', val)
      }
    },
    upload: {
      get () {
        return this.tariff.upload
      },
      set (val) {
        this.update('upload', val)
      }
    },
    download: {
      get () {
        return this.tariff.download
      },
      set (val) {
        this.update('download', val)
      }
    },
    dataLimit: {
      get () {
        return this.tariff.dataLimit
      },
      set (val) {
        this.update('dataLimit', val)
      }
    },
    price: {
      get () {
        return this.tariff.price
      },
      set (val) {
        this.update('price', val)
      }
    },
    tariffId: {
      get () {
        return this.tariff.tariffId
      },
      set (val) {
        this.update('tariffId', val)
      }
    }
  },
  methods: {
    ...mapMutations('internetPlans', {
      updateResidential: 'SET_RESIDENTIAL',
      updateBusiness: 'SET_BUSINESS',
      insertAfter: 'INSERT_AFTER',
      removeTariff: 'REMOVE_TARIFF'
    }),
    update (prop, value) {
      this[this.actionName]({ index: this.index, prop, value })
    },
    insert () {
      this.insertAfter({
        plan: this.plan,
        index: this.index
      })
    },
    remove (plan, index) {
      this.removeTariff({
        plan: this.plan,
        index: this.index
      })
    }
  }
}
</script>

<style scoped>
</style>
