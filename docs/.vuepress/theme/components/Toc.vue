<template>
	<Sticker
		ref="sticker"
		:class="['vuepress-toc', visible ? '' : 'table-of-contents-sticker']"
		v-bind="$attrs"
	>
		<h5>文档结构</h5>
		<div
			v-for="(item, index) in $page.headers"
			ref="chairTocItem"
			:key="item.slug"
			class="vuepress-toc-item"
			:class="[`vuepress-toc-h${item.level}`, { active: activeIndex === index }]"
		>
			<a :href="`#${item.slug}`" :title="item.title">{{ item.title }}</a>
		</div>
	</Sticker>
</template>

<script>
	import Sticker from './Sticker.vue';
	import toc from '../mixin/toc';
	let initTop;
	// get offset top
	function getAbsoluteTop(dom) {
		return dom && dom.getBoundingClientRect
			? dom.getBoundingClientRect().top +
					document.body.scrollTop +
					document.documentElement.scrollTop
			: 0;
	}
	export default {
		mixins: [toc],
		components: {
			Sticker,
		},
		data() {
			return {
				activeIndex: 0
			};
		},
		watch: {
			activeIndex() {
				const items = this.$refs.chairTocItem || [];
				const dom = items[this.activeIndex];
				if (!dom) return;
				const rect = dom.getBoundingClientRect();
				const wrapperRect = this.$el.getBoundingClientRect();
				const top = rect.top - wrapperRect.top;
				if (top < 20) {
					this.$el.scrollTop = this.$el.scrollTop + top - 20;
				} else if (top + rect.height > wrapperRect.height) {
					this.$el.scrollTop += rect.top - (wrapperRect.height - rect.height);
				}
			},
			$route() {},
		},
		mounted() {
			// sync visible to parent component
			const syncVisible = () => {
				this.$emit('visible-change', this.visible);
			};
			syncVisible();
			this.$watch('visible', syncVisible);
			// binding event
			setTimeout(() => this._onScroll(), 1000);
			this._onScroll = () => this.onScroll();
			this._onHashChange = () => {
				const hash = decodeURIComponent(location.hash.substring(1));
				const index = (this.$page.headers || []).findIndex(h => h.slug === hash);
				if (index >= 0) this.activeIndex = index;
				const dom = hash && document.getElementById(hash);
				if (dom) window.scrollTo(0, getAbsoluteTop(dom) - 20);
			};
			window.addEventListener('scroll', this._onScroll);
			// window.addEventListener('hashchange', this._onHashChange);
			const sideBar = document.querySelector('.sidebar');
			this.$refs.sticker.$el.style.top = sideBar && sideBar.style && sideBar.style.top;
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this._onScroll);
			window.removeEventListener('hashchange', this._onHashChange);
		},
		methods: {
			onScroll() {
				if (initTop === undefined) {
					initTop = getAbsoluteTop(this.$el);
				}
				// update position
				const scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
				const headings = this.$page.headers || [];
				// change active toc with scrolling
				let i = 0;
				const addLink = index => {
					this.activeIndex = index;
				};
				for (; i < headings.length; i++) {
					const dom = document.getElementById(headings[i].slug);
					const top = getAbsoluteTop(dom);
					if (top - 50 < scrollTop) {
						addLink(i);
					} else {
						if (!i) addLink(i);
						break;
					}
				}
			},
			triggerEvt() {
				this._onScroll();
				this._onHashChange();
			},
		},
	};
</script>

<style lang="stylus">
	.table-of-contents-sticker
	  display none !important
	.vuepress-toc
	  position fixed
	  display none
	  max-height 89vh
	  width $vuepress-toc-width
	  overflow-y auto
	  // margin-top $navbarHeight
	  top $navbarHeight
	  right 0
	  box-sizing border-box
	  background-color #fff
	  /* background: #fff; */
	  z-index 0
	  .vuepress-toc-item
	    position relative
	    padding 0.1rem 0.6rem 0.1rem 1.5rem
	    line-height 1.5rem
	    border-left 2px solid rgba(0, 0, 0, 0.08)
	    overflow hidden
	    a
	      display block
	      color $textColor
	      width 100%
	      box-sizing border-box
	      font-size 14px
	      font-weight 400
	      text-decoration none
	      transition color 0.3s
	      overflow hidden
	      text-overflow ellipsis
	      white-space nowrap
	    &.active
	      border-left-color $accentColor
	      a
	        color $accentColor
	    &:hover
	      a
	        color $accentColor
			.vuepress-toc-h1 a
			.vuepress-toc-h2 a
				font-weight bold
	  for i in range(2, 6)
	    .vuepress-toc-h{i} a
	      padding-left 1rem * (i - 1)
</style>
