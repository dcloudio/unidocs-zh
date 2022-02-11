<template>
  <header class="navbar" :class="{ 'navbar-fixed': fixedNavbar }">
    <div class="main-navbar">
      <!-- <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" /> -->

      <RouterLink
        :to="$localePath"
        class="home-link"
      >
        <img
          v-if="$site.themeConfig.logo"
          class="logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
        >
        <img
          v-if="$site.themeConfig.titleLogo"
          class="title-logo can-hide"
          :src="$withBase($site.themeConfig.titleLogo)"
          :alt="$siteTitle"
        >
        <span
          v-else-if="$siteTitle"
          ref="siteName"
          class="site-name"
          :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span>
      </RouterLink>

      <div class="main-navbar-links can-hide">
        <template v-for="(item, index) in customNavBar">
          <div :class="mainNavLinkClass(index)" :key="item.text">
            <MainNavbarLink v-if="item.type" :item='item' />
            <a v-else href="javascript:;" @click="changeUserNav(index)">{{item.text}}</a>
          </div>
        </template>
      </div>

      <div class="mobile-main-navbar">
        <div class="mobile-links_mobile">
          <a href="javascript:;" class="mobile-links__btn" @click="toggleMobilePanel">{{mainNavBarText}}</a>
        </div>
        <div class="mobile-links__panel" :class="{open: showMobilePanel}">
          <template v-for="(item, index) in customNavBar">
            <div :class="mainNavLinkClass(index)" :key="item.text">
              <MainNavbarLink v-if="item.type" :item='item' @click.native="toggleMobilePanel"/>
              <a v-else href="javascript:;" @click="changeUserNav(index),toggleMobilePanel()">{{item.text}}</a>
            </div>
          </template>
        </div>
      </div>

      <div
        class="links"
        :style="linksWrapMaxWidth ? {
          'max-width': linksWrapMaxWidth + 'px'
        } : {}"
      >
        <a class="switch-version" href="javascript:void(0)" @click="switchVersion">回到旧版</a>
        <AlgoliaSearchBox
          v-if="isAlgoliaSearch"
          :options="algolia"
        />
        <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
      </div>
    </div>

    <div class="sub-navbar">
      <NavLinks class="can-hide" />
      <div class="mobile-sub-navbar">
        <div class="subnavbar__item" @click="$emit('toggle-sidebar')">
          <a href="javascript:;">{{subNavBarText}}</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from './SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import MainNavbarLink from './MainNavbarLink.vue';
import navInject from '../mixin/navInject';
import { forbidScroll, os } from '../util';

export default {
  name: 'Navbar',

  mixins: [ navInject ],

  components: {
    SidebarButton,
    NavLinks,
    MainNavbarLink,
    SearchBox,
    AlgoliaSearchBox
  },

  data () {
    return {
      linksWrapMaxWidth: null,
      showMobilePanel: false,
      fixedNavbar: false
    }
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
      this.$nextTick(this.initNavBar)
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
    this.initNavBar()
  },

  methods: {
    initNavBar () {
      os.init()
      this.sideBar = document.querySelector('.sidebar')
      this.navbar = document.querySelector('.navbar')
      this.mainNavBar = document.querySelector('.main-navbar')
      this.subNavBar = document.querySelector('.sub-navbar')
      this.pageContainer = document.querySelector('.page')
      this.navbarHeight = this.navbar.clientHeight
      this.subNavBarHeight = this.subNavBar.clientHeight
      this.mainNavBarHeight = this.mainNavBar.clientHeight
      this.removeWindowScroll()
      if (os.pc) {
        this.onWindowScroll()
        window.addEventListener('scroll', this.onWindowScroll, false)
      }
    },
    removeWindowScroll () {
      window.removeEventListener('scroll', this.onWindowScroll)
      this.fixedNavbar = false
      this.sideBar && this.sideBar.removeAttribute('style')
      this.navbar && this.navbar.removeAttribute('style')
      this.pageContainer && this.pageContainer.removeAttribute('style')
    },
    onWindowScroll () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      {
        let sideTop = this.navbarHeight - scrollTop
        sideTop <= this.subNavBarHeight && (sideTop = this.subNavBarHeight)
        this.sideBar && (this.sideBar.style.top = `${sideTop + 1}px`)
      }

      if (scrollTop >= this.mainNavBarHeight) {
        if (!this.fixedNavbar) {
          this.fixedNavbar = true
          this.navbar.style.top = `-${this.mainNavBarHeight}px`
          this.$nextTick(() => {
            this.pageContainer && (this.pageContainer.style.marginTop = `${this.navbarHeight}px`)
          })
        }
      } else if (scrollTop < this.mainNavBarHeight) {
        if (this.fixedNavbar) {
          this.fixedNavbar = false
          this.pageContainer && this.pageContainer.removeAttribute('style')
        }
      }
    },
    mainNavLinkClass (index) {
      return ['main-navbar-item', this.navConfig.userNavIndex === index ? 'active' : '']
    },
    toggleMobilePanel () {
      this.showMobilePanel = !this.showMobilePanel
      forbidScroll(this.showMobilePanel)
    },
    switchVersion () {
      document.cookie = '__new_version=;expires=-1'
      location.reload()
    }
  },

  watch: {
    'navConfig.userNavIndex' () {
      this.$nextTick(()=>{
        if(!os.pc) return
        this.navbarHeight = this.navbar.clientHeight
        this.subNavBarHeight = this.subNavBar.clientHeight
        this.sideBar.style.top = `${this.navbarHeight + 1}px`
      })
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem
@import '../styles/navbar'

.navbar
  // padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbar-main-navbar-height // $navbarHeight - 1.4rem
  a, span, img
    display inline-block
  .title-logo
  .logo
    height $navbar-logo-height // $navbarHeight - 1.4rem
    min-width $navbar-main-navbar-height // $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top 0 //$navbar-vertical-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    // padding-left 4rem
    .can-hide
      display none !important
    .links
      padding-left 0rem // 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
