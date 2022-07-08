<template>
	<div class="table-of-contents">
		<div
			v-for="item in $page.headers"
			ref="chairTocItem"
			:key="item.slug"
			class="vuepress-toc-item-top"
			:class="[`vuepress-toc-h${item.level}`]"
		>
			<a :href="`#${item.slug}`" :title="item.title">{{ item.title }}</a>
		</div>
	</div>
</template>

<style lang="stylus">
  .table-of-contents
    margin 0 auto
    padding 2rem 2.5rem 0 2.5rem
    @media (max-width: $MQNarrow)
      padding 2rem 2rem 0 2rem
    @media (max-width: $MQMobileNarrow)
      padding 1.5rem 1.5rem 0 1.5rem
    border-left: 2px solid #e6e6e6
	.vuepress-toc-item-top
	  position relative
	  padding 0.1rem 0.6rem 0.1rem 1.5rem
	  line-height 1.5rem
	  border-left 2px solid rgba(0, 0, 0, 0.08)
	  overflow hidden
	  a
	    display block
	    // color $textColor
	    width 100%
	    box-sizing border-box
	    font-size 16px
	    font-weight 400
	    text-decoration none
	    transition color 0.3s
	    overflow hidden
	    text-overflow ellipsis
	    white-space nowrap
	for i in range(2, 6)
	  .vuepress-toc-h{i} a
	    padding-left 1rem * (i - 1)
</style>
