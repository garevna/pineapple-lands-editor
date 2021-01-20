<template>
<v-container fluid>
  <!-- Viewport width less then lg -->
  <v-expansion-panels
          tile
          flat
          v-model="panel"
          class="app-bar d-lg-none"
          width="100%"
          style="position: fixed; z-index: 10;"
  >
    <v-expansion-panel style="background: #FAFAFA">
      <v-expansion-panel-header
                    expand-icon="none"
                    hide-actions
                    height="70"
          >
            <span class="logo ml-2 ml-sm-4 ml-md-6">
              <Logo />
            </span>
            <v-btn text class="burger-menu" height="48" width="48">
              <span :class="burgerMenuClassFirst"></span>
              <span :class="burgerMenuClassSecond"></span>
            </v-btn>
      </v-expansion-panel-header>
      <v-expansion-panel-content color="#FAFAFA">
            <v-list flat class="main-menu-content text-center">
              <v-list-item
                  v-for="(page, index) in pages"
                  :key="index"
                  @click="$emit('update:page', selectors[index]); panel = []"
              >
                <v-list-item-title class="main-menu-items">{{ page }}</v-list-item-title>
              </v-list-item>
            </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  <!-- Viewport width wider or equal lg -->
    <v-app-bar
            app
            fixed
            height="80"
            flat
            class="homefone app-bar d-none d-lg-block mx-auto"
            max-width="1904"
    >
        <v-row align="center" justify="center">
          <span class="logo ml-8">
            <Logo />
          </span>
          <v-spacer></v-spacer>
        <a
               v-for="(page, index) in pages"
               :key="index"
               :value="index"
               name="main-nav-menu-anchor"
               ref="`menu-item-${index}`"
               :class="getClassName(page)"
               @click.stop="$emit('update:page', selectors[index]); panel = []">
              {{ page }}
        </a>
    </v-row>
  </v-app-bar>
</v-container>
</template>

<style scoped>
* {
  user-select: none;
  font-family: 'Gilroy';
}
.logo {
  display: inline-block;
  width: 80px;
  height: 48px;
}
.logo-small {
  display: inline-block;
  width: 40px;
  height: 24px;
}
.app-bar-menu {
  font-size: 13px;
  line-height: 24px;
  text-transform: none!important;
  font-style: normal;
  font-weight: 500;
  color: #000;
}
a {
  display: inline-block;
  padding: 8px 16px;
  color: #333!important;
}
a:hover, a:active, a.active {
  color: #E15240!important;
}
a:last-child {
  border: solid 2px #E15240!important;
  border-radius: 8px!important;
  margin-left: 16px;
  margin-right: 48px;
  padding: 12px 48px;
}
a.active {
  color: #E15240!important;
}
a:last-child:hover,
a:last-child:active,
a:last-child.active {
  background: #E15240!important;
  color: #fff!important;
}
.burger-menu {
  height: 48px;
  min-width: 48px!important;
  max-width: 64px!important;
}
.burger-menu--first, .burger-menu--second,
.burger-menu-active--first, .burger-menu-active--second {
  position: absolute;
  height:3px;
  background: #000;
  left: 0;
  transition: all 0.5s;
}
.burger-menu--first {
  width: 32px;
  top: -8px;
}
.burger-menu--second {
  width: 32px;
  top: 2px;
}
.burger-menu-active--first {
  top: 0;
  width: 32px;
  transform: rotate(-45deg);
}
.burger-menu-active--second {
  top: 0;
  width: 32px;
  transform: rotate(45deg);
}
.main-menu-content {
  background: #FAFAFA!important;
}
.main-menu-items {
  font-size: 18px;
  line-height: 40px;
}
</style>

<script>

const { Logo } = require('@/components/dgtek/icons').default

export default {
  name: 'AppHeader',
  components: {
    Logo
  },
  props: ['page'],
  data () {
    return {
      anchors: null,
      panel: undefined,
      pages: [],
      selectors: []
    }
  },
  computed: {
    burgerMenuClassFirst () {
      return this.panel === 0 ? 'burger-menu-active--first' : 'burger-menu--first'
    },
    burgerMenuClassSecond () {
      return this.panel === 0 ? 'burger-menu-active--second' : 'burger-menu--second'
    }
  },
  methods: {
    getClassName (pageName) {
      const className = pageName === 'Call back' ? ' app-bar-menu-bordered py-2 px-12' : ''
      return `app-bar-menu${className}`
    },
    action (target) {
      this.anchors.forEach((elem, index) => { elem.className = '' })
      target.className = 'active'
      this.$emit('update:page', this.selectors[target.value])
      this.panel = []
    }
  },
  beforeMount () {
    this.pages = JSON.parse(sessionStorage.getItem('mainNavButtons'))
    this.selectors = JSON.parse(sessionStorage.getItem('mainNavSectors'))
  },
  mounted () {
    this.anchors = document.getElementsByName('main-nav-menu-anchor')
    this.anchors.forEach((elem, index) => { elem.className = '' })
  }
}
</script>
