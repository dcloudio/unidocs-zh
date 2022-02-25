<template>
	<div id="docsearch"></div>
</template>

<script>
	import '@docsearch/css';
	import { createElement } from 'preact';

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

	const isSpecialClick = event => {
		return event.button === 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
	};

	const translations = {
		button: {
			buttonText: '搜索文档',
			buttonAriaLabel: '搜索文档',
		},
		modal: {
			searchBox: {
				resetButtonTitle: '清除查询条件',
				resetButtonAriaLabel: '清除查询条件',
				cancelButtonText: '取消',
				cancelButtonAriaLabel: '取消',
			},
			startScreen: {
				recentSearchesTitle: '搜索历史',
				noRecentSearchesText: '搜索历史为空',
				saveRecentSearchButtonTitle: '收藏',
				removeRecentSearchButtonTitle: '从搜索记录中移除',
				favoriteSearchesTitle: '收藏',
				removeFavoriteSearchButtonTitle: '从收藏中移除',
			},
			errorScreen: {
				titleText: '无法获取结果',
				helpText: '请检查一下网络连接',
			},
			footer: {
				selectText: '选择',
				navigateText: '切换',
				closeText: '关闭',
				searchByText: '',
			},
			noResultsScreen: {
				noResultsText: '无法找到相关结果',
				suggestedQueryText: '你可以尝试查询',
				reportMissingResultsText: '你认为查询该有结果？',
				reportMissingResultsLinkText: '点击反馈',
			},
		},
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
					const { searchParameters = {} } = userOptions;
					docsearch(
						Object.assign({}, userOptions, {
							placeholder: '搜索',
							translations,
							container: '#docsearch',
							// #697 Make docsearch work well at i18n mode.
							searchParameters: {
								...searchParameters,
								facetFilters: [`lang:${lang}`].concat(searchParameters.facetFilters || []),
							},
							navigator: {
								// when pressing Enter without metaKey
								navigate: ({ itemUrl }) => {
									this.$router.push(itemUrl);
								},
							},
							/* getMissingResultsUrl: ({ query }) =>
								`https://github.com/dcloudio/uni-app/issues/new?title=${query}`, */
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
							hitComponent: ({ hit, children }) =>
								createElement(
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
								),
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
