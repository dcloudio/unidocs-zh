<template>
	<div id="search-container">
		<div class="search-navbar">
			<div class="search-navbar-wrap">
				<div class="search-navbar-header navbar">
					<div class="main-navbar">
						<NavbarLogo />
						<div class="main-navbar-links can-hide">
							<div class="main-navbar-item active"></div>
						</div>
					</div>
					<div class="sub-navbar">
						<div class="search-wrap">
							<div class="input-wrap">
								<input
									class="search-input"
									:placeholder="placeholder"
									type="text"
									v-model="searchValue"
								/>
								<span class="search-input-btn">
									<button @click="search">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11.33 10.007l4.273 4.273a.502.502 0 0 1 .005.709l-.585.584a.499.499 0 0 1-.709-.004L10.046 11.3a6.278 6.278 0 1 1 1.284-1.294zm.012-3.729a5.063 5.063 0 1 0-10.127 0 5.063 5.063 0 0 0 10.127 0z"
											></path>
										</svg>
									</button>
								</span>
							</div>

							<div class="search-category">
								<div class="navbar">
									<div class="main-navbar">
										<div class="main-navbar-links">
											<template v-for="(item, index) in category">
												<div :class="mainNavLinkClass(index)" :key="item.text">
													<a href="javascript:;" @click="categoryIndex = index">
														{{ item.text }}
													</a>
												</div>
											</template>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="search-result"></div>
	</div>
</template>

<script>
	import NavbarLogo from '../NavbarLogo.vue';
	import { search as searchClient } from './searchClient';
	import { forbidScroll } from '../../util';

	const resolveRoutePathFromUrl = (url, base = '/') =>
		url
			// remove url origin
			.replace(/^(https?:)?\/\/[^/]*/, '')
			// remove site base
			.replace(new RegExp(`^${base}`), '/');

	export default {
		name: 'DcloudSearchPage',

		props: ['options'],

		components: { NavbarLogo },

		data() {
			return {
				placeholder: '搜索内容',
				snippetLength: 10,
				searchValue: '',
				category: Object.freeze([
					{
						text: 'uni-app',
					},
					{
						text: 'uniCloud',
					},
					{
						text: '问答社区',
					},
					{
						text: '插件市场',
					},
				]),
				categoryIndex: 0,
			};
		},

		mounted() {
			this.$nextTick(forbidScroll);

			const isMobileMediaQuery = window.matchMedia('(max-width: 750px)');

			if (isMobileMediaQuery.matches) {
				this.snippetLength = 5;
			}
		},

		methods: {
			search() {
				this.searchByAlgolia(this.searchValue);
			},

			searchByAlgolia(query = '', page = 0) {
				const { searchParameters = {} } = this.options;
				return searchClient(
					Object.assign({}, this.options, {
						query,
						page,
						snippetLength: this.snippetLength,
						searchParameters: {
							...searchParameters,
							facetFilters: [`lang:${this.$lang}`].concat(searchParameters.facetFilters || []),
						},
						transformItems: items =>
							items.map(item => {
								// the `item.url` is full url with protocol and hostname
								// so we have to transform it to vue-router path
								return {
									...item,
									url: resolveRoutePathFromUrl(item.url, this.$site.base),
								};
							}),
					})
				);
			},

			mainNavLinkClass(index) {
				return ['main-navbar-item', this.categoryIndex === index ? 'active' : ''];
			},
		},
	};
</script>

<style lang="stylus">
	$svg-color = #b1b2b3;
	$svg-hover-color = #9b9b9b;

	#search-container{
		position fixed
		width 100vw
		height 100vh
		left 0
		top 0
		z-index 200
		background-color #fff

		.sub-navbar {
			width: 80%;
			max-width: 960px;
	   	min-width: 720px;
			margin: 0 auto;

			.search-wrap {
				width: 100%;
				display: inline-block;
				vertical-align: middle;
				position: relative;
			}

			.input-wrap {
				margin-top: 24px;
				position: relative;
				display: flex;
				align-items: center;

				.search-input-btn {
					display: flex;
					flex-direction: column;
					justify-content: center;
					padding: 0;
	   			font-size: 0;
					background-color: #fff;

					button {
						width: 40px;
						font-family: inherit;
						font-size: 100%;
						margin: 0;
						outline: 0;
						background-color: transparent;
						padding: 0;
						border-width: 0;
						vertical-align: middle;
						cursor: pointer;

						svg {
							fill: $svg-color;

							&:hover {
								fill: $svg-hover-color;
							}
						}
					}
				}

				.search-input {
					width: 100%;
					height: 56px;
					font-size: 16px;
					border: none;
					box-sizing: border-box;
					outline: none;
					padding: 1px 10px;
					border-radius: 4px;
				}

				.search-input-btn {
					height: 56px;
				}
			}

			.search-category {

				.main-navbar-links {
					width: 100%;
					padding: 0;

					.main-navbar-item {
						padding: 0 6%;
					}
				}
			}

		}
	}
</style>
