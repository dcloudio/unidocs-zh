<template>
	<div v-if="openSearch" id="search-container" ref="pageContainer">
		<div class="search-navbar">
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
								ref="searchInput"
								class="search-input"
								:placeholder="placeholder"
								type="text"
								@keydown.enter="resetSearchPage, search"
								v-model="searchValue"
							/>
							<span class="search-input-btn">
								<button @click="resetSearchPage, search">
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
							<a href="javascript:;" class="search-back__btn" @click="onSearchClose">取消</a>
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

		<div class="result-number">
			<span>共{{ curHits }}个相关结果</span>
		</div>

		<div class="search-result">
			<div class="result-wrap">
				<template v-if="resultList.length">
					<template v-for="item in resultList">
						<Results :key="item.id" :title="item.title" :results="item.items" />
					</template>
				</template>
			</div>

			<div class="search-pagination">
				<pagination
					v-show="showPagination"
					@research="research"
					:totalPage="totalPage"
					:curPage="curPage"
					:pageSize="pageSize"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import NavbarLogo from '../NavbarLogo.vue';
	import Results from './components/Results.vue';
	import pagination from './components/pagination.vue';
	import { search as searchClient } from './searchClient';
	import { forbidScroll, removeHighlightTags, debounce, isEditingContent } from '../../util';

	const resolveRoutePathFromUrl = (url, base = '/') =>
		url
			// remove url origin
			.replace(/^(https?:)?\/\/[^/]*/, '')
			// remove site base
			.replace(new RegExp(`^${base}`), '/');

	export default {
		name: 'DcloudSearchPage',

		props: ['options'],

		components: { NavbarLogo, Results, pagination },

		provide() {
			return {
				onSearchClose: this.onSearchClose,
			};
		},

		data() {
			return {
				openSearch: false,
				placeholder: '搜索内容',
				snippetLength: 30,
				searchValue: '',
				category: Object.freeze([
					{
						text: 'uni',
						type: 'algolia',
					},
					{
						text: '问答社区',
						type: 'server',
					},
					{
						text: '插件市场',
						type: 'server',
					},
				]),
				categoryIndex: 0,
				resultList: [],

				searchPage: 0, // 跳转页数
				curHits: 0, // 当前搜索结果总条数
				totalPage: 0, // 搜索结果总共页数
				curPage: 1, // 当前页
				pageSize: 0, // 每页条数
			};
		},

		computed: {
			showPagination() {
				return !!(this.resultList.length && this.totalPage > 1);
			},
			currentCategory() {
				return this.category[this.categoryIndex];
			},
		},

		mounted() {
			window.addEventListener('keydown', this.onKeyDown);
			window.addEventListener('resize', this.initSnippetLength);
		},

		watch: {
			resultList() {
				this.$refs.pageContainer.scrollTop = 0;
			},

			openSearch(val) {
				this.$nextTick(() => {
					if (val) {
						forbidScroll();
						document.body.appendChild(this.$el);
						this.$nextTick(() => this.$refs.searchInput.focus());
					} else {
						this.cancel();
						forbidScroll(false);
						document.body.removeChild(this.$el);
					}
				});
			},

			searchValue: debounce(function () {
				this.resetSearchPage();
				this.search();
			}, 300),
		},

		methods: {
			resetSearchPage() {
				this.searchPage = 0;
			},

			research(curPage) {
				this.searchPage = curPage - 1;
				this.search();
			},

			search() {
				if (!this.searchValue) return;
				const { text, type } = this.currentCategory;
				switch (type) {
					case 'algolia':
						this.searchByAlgolia(this.searchValue, this.searchPage).then(
							({ hitsPerPage, nbHits, nbPages, page, hits }) => {
								this.resultList = hits.map(item => {
									const items = item.getItems();
									return {
										id: item.sourceId,
										title: removeHighlightTags(items[0]),
										items,
									};
								});
								this.curHits = nbHits;
								this.pageSize = hitsPerPage;
								this.totalPage = nbPages;
								this.curPage = page + 1;
							}
						);
						break;
					case 'server':
						console.log('从服务端搜索');
						break;
				}
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

			initSnippetLength() {
				if (window.matchMedia('(max-width: 980px)').matches) {
					this.snippetLength = 20;
				}

				if (window.matchMedia('(max-width: 600px)').matches) {
					this.snippetLength = 15;
				}
			},

			cancel() {
				this.resultList.length = 0;
				this.searchValue = '';
				this.curHits = 0;
				this.totalPage = 0;
			},

			onSearchOpen() {
				this.openSearch = true;
			},

			onSearchClose() {
				this.openSearch = false;
			},

			onKeyDown(event) {
				if (
					(event.keyCode === 27 && this.openSearch) ||
					// The `Cmd+K` shortcut both opens and closes the modal.
					(event.key === 'k' && (event.metaKey || event.ctrlKey)) ||
					// The `/` shortcut opens but doesn't close the modal because it's
					// a character.
					(!isEditingContent(event) && event.key === '/' && !this.openSearch)
				) {
					event.preventDefault();

					if (this.openSearch) {
						this.onSearchClose();
					} else {
						this.onSearchOpen();
					}
				}
			},
		},
	};
</script>

<style lang="stylus" scoped>
	@import './index'
</style>
