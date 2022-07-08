<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @keydown.ctrl="openSearch = true"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
        <SiderBarBottom />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page
      v-else
      :sidebar-items="sidebarItems"
      :style="pageStyle"
    >
      <template #top>
        <slot name="page-top" />
        <TocTop/>
      </template>
      <template #bottom>
        <slot name="page-bottom" />
        <Footer />
      </template>
    </Page>

    <Toc />
  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import Footer from '@theme/components/Footer.vue';
import SiderBarBottom from '../components/SiderBarBottom.vue';
import Toc from '../components/Toc';
import TocTop from '../components/Toc-top';
import { resolveSidebarItems, forbidScroll, BaiduStat } from '../util'
import navProvider from '../mixin/navProvider';
import toc from '../mixin/toc';

export default {
  name: 'Layout',
  mixins: [ navProvider, toc ],
  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    Footer,
    SiderBarBottom,
    Toc,
    TocTop
  },
  data () {
    return {
      isSidebarOpen: false
    }
  },
  computed: {
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },
    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    },
    pageStyle () {
      const style = {};

      !this.visible && (style.paddingRight = '0px');

      return style;
    }
  },
  mounted () {
    BaiduStat()
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
    forbidScroll(this.isSidebarOpen)
    this.renderNavLinkState()
  },
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    },
    renderNavLinkState() {
      this.$nextTick(() => {
        const navs = document.querySelectorAll('nav')
        const navLinks = []
        navs.forEach(nav => {
          nav.querySelectorAll('a').forEach(navLink => {
            if(navLink.className.indexOf('external') === -1) {
              navLinks.push(navLink)
            }
          })
        })
        
        navLinks.forEach((navLink,index) => {
          navLink.classList.remove('router-link-active')
          let href =  navLink.href.split('/')
          href = href[href.length - 2]
          const path = (this.$route.fullPath.match(/\/(\w+)+\//) || [])[1]
          if (path) {
            if (path === href) {
              navLink.classList.add('router-link-active')
            }
          } else {
            // 0 => PC
            // navLinks.length / 2 => mobile
            if( index === 0 || index === navLinks.length / 2) {
              navLink.classList.add('router-link-active')
            }
          }
        })
      })
    }
  },
  watch: {
    isSidebarOpen: forbidScroll,
    $route() {
      this.renderNavLinkState()
    }
  }
}
</script>
