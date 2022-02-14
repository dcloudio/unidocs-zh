import { navbar } from '../config/navbar';

export default {
  data() {
    return { navConfig: { userNavIndex: 0 } }
  },

  provide() {
    return {
      navConfig: this.navConfig,
      customNavBar: this.customNavBar,
      changeUserNav: this.changeUserNav,
      customNavBarKeys: this.customNavBarKeys
    }
  },

  created() {
    this.customNavBar.forEach((item, index) => {
      item.text === this.$page.path.split('/')[1] && (this.navConfig.userNavIndex = index)
    })
  },

  computed: {
    customNavBar() {
      const list = []
      navbar.forEach(item => {
        if (item.items && item.items.length) {
          list.push(item)
        }
        item.type === 'link' && list.push(item)
      })
      return list
    },

    customNavBarKeys() {
      return this.customNavBar.map(item => item.text)
    }
  },

  methods: {
    changeUserNav(index) {
      this.navConfig.userNavIndex = index
      const curNavBar = this.customNavBar[index]
      const firstItemLink = curNavBar.items ? curNavBar.items[0].link : curNavBar.link
      if (this.$page.path !== firstItemLink) this.$router.push(firstItemLink)
    }
  },

  watch: {
    $route(after) {
      let navbarIndex = this.customNavBarKeys.indexOf((after.fullPath.match(/\/(\w+)+\/*/) || [])[1])
      navbarIndex === -1 && (navbarIndex = 0)
      this.navConfig.userNavIndex !== navbarIndex && navbarIndex !== -1 && (this.navConfig.userNavIndex = navbarIndex)
    }
  }
}