<template>
	<div id="docsearch"></div>
</template>

<script>
	import '@docsearch/css';

	const resolveRoutePathFromUrl = (url, base = '/') =>
		url
			// remove url origin
			.replace(/^(https?:)?\/\/[^/]*/, '')
			// remove site base
			.replace(new RegExp(`^${base}`), '/');

	const loadDocsearch = async () => {
		const docsearch = await import('@docsearch/js');
		return docsearch.default;
	};

	export default {
		name: 'AlgoliaSearchBox',

		props: ['options'],

		watch: {
			$lang(newValue) {
				this.update(this.options, newValue);
			},

			options(newValue) {
				this.update(newValue, this.$lang);
			},
		},

		mounted() {
			this.initialize(this.options, this.$lang);
		},

		methods: {
			initialize(userOptions, lang) {
				loadDocsearch().then(docsearch => {
					const { algoliaOptions = {} } = userOptions;
					docsearch(
						Object.assign({}, userOptions, {
							container: '#docsearch',
							// #697 Make docsearch work well at i18n mode.
							searchParameters: {
								...algoliaOptions,
								facetFilters: [`lang:${lang}`].concat(algoliaOptions.facetFilters || []),
							},
							navigator: {
								// when pressing Enter without metaKey
								navigate: ({ itemUrl }) => {
									this.$router.push(itemUrl);
								},
							},
							// transform full url to route path
							transformItems: items =>
								items.map(item => {
									// the `item.url` is full url with protocol and hostname
									// so we have to transform it to vue-router path
									return {
										...item,
										url: resolveRoutePathFromUrl(item.url, this.$site.base),
									};
								}),
							// handle `onClick` by `this.$routerpush`
							/* hitComponent: ({ hit, children }) => {
								const vnode = createElement(
									'a',
									{
										href: hit.url,
										onClick: event => {
											if (isSpecialClick(event)) {
												return;
											}
											event.preventDefault();
											this.$router.push(hit.url);
										},
									},
									children
								);
								console.log('vnode :>> ', vnode);
								console.log('children :>> ', children);
								return vnode;
							}, */
						})
					);
				});
			},

			update(options, lang) {
				this.$el.innerHTML = '<div id="docsearch"></div>';
				this.initialize(options, lang);
			},
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
	   @media (min-width: $MQMobile)
	    &
	     display flex

	 @media (max-width: $MQMobile)
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
