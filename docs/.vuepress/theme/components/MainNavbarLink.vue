<template>
  <div
    v-if="show"
    class="main-navbar-link"
  >
    <DropdownLink
      v-if="item.type === 'links'"
      :item="item"
    />
    <NavLink
      v-else
      :item="item"
    />
  </div>
</template>

<script>
import DropdownLink from '@theme/components/DropdownLink.vue'
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'MainNavbarLink',

  components: {
    DropdownLink,
    NavLink
  },

  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    show() {
      return this.item.type === 'link' 
        ? this.item.link
        : this.item.type === 'links'
          ? !!this.item.items.length
          : false
    }
  }
}
</script>

<style lang="stylus" scope>
.main-navbar-link a
 color inherit

@media (max-width: $MQMobile)
 ul
  list-style none
  a
    padding-top 0 !important
</style>