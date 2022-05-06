<template>
	<div id="docsearch">
		<button type="button" class="DocSearch DocSearch-Button" aria-label="搜索文档" @click="openSearch">
			<span class="DocSearch-Button-Container">
				<svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20">
					<path
						d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
						stroke="currentColor"
						fill="none"
						fill-rule="evenodd"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
				</svg>
				<span class="DocSearch-Button-Placeholder">搜索文档</span>
			</span>
			<span class="DocSearch-Button-Keys">
				<span class="DocSearch-Button-Key">
					<svg width="15" height="15" class="DocSearch-Control-Key-Icon">
						<path
							d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
							stroke-width="1.2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="square"
						></path>
					</svg>
				</span>
				<span class="DocSearch-Button-Key">K</span>
			</span>
		</button>
	</div>
</template>

<script>
	import '@docsearch/css';

	export default {
		name: 'AlgoliaSearchBox',

		watch: {},

		mounted() {},

		methods: {
			openSearch(){
				this.$parent.$refs.dcloudSearchPage.onSearchOpen()
			}
		},
	};
</script>

<style lang="stylus">
	.DocSearch
	   --docsearch-primary-color $accentColor
	   --docsearch-highlight-color var(--docsearch-primary-color)
	   --docsearch-searchbox-shadow inset 0 0 0 2px var(--docsearch-primary-color)

	 #docsearch
	   display flex
	   flex-direction column
	   justify-content center
	 #docsearch span
	   @media (min-width: 1200px)
	    &
	     display flex

	 @media (max-width: 1200px)
	   :root
	     --docsearch-spacing 10px
	     --docsearch-footer-height 40px
	   .DocSearch-Button-Keys,.DocSearch-Button-Key,.DocSearch-Button-KeySeparator,.DocSearch-Button-Placeholder
	     display none !important
	   .DocSearch-Search-Icon
	     vertical-align middle
	   .DocSearch-Dropdown
	     height 100%
	   .DocSearch-Container
	     height 100vh
	     height -webkit-fill-available
	     position absolute
	   .DocSearch-Footer
	     border-radius 0
	     bottom 0
	     position absolute
	   .DocSearch-Hit-content-wrapper
	     display flex
	     position relative
	     width 80%
	   .DocSearch-Modal
	     border-radius 0
	     box-shadow none
	     height 100vh
	     height -webkit-fill-available
	     margin 0
	     max-width 100%
	     width 100%
	   .DocSearch-Cancel
	     -webkit-appearance none
	     -moz-appearance none
	     appearance none
	     background none
	     border 0
	     color var(--docsearch-highlight-color)
	     cursor pointer
	     display inline-block
	     flex none
	     font inherit
	     font-size 1em
	     font-weight 500
	     margin-left var(--docsearch-spacing)
	     outline none
	     overflow hidden
	     padding 0
	     -webkit-user-select none
	     -moz-user-select none
	     -ms-user-select none
	     user-select none
	     white-space nowrap
	   .DocSearch-Commands,.DocSearch-Hit-Tree
	     display none
</style>
