<template>
	<li :class="li_class">
		<a :href="item.url" @click="onSearchClose">
			<div class="DocSearch-Hit-Container">
				<div
					class="DocSearch-Hit-content-wrapper"
					v-if="item.hierarchy[item.type] && item.type === 'lvl1'"
				>
					<span class="DocSearch-Hit-title" v-html="snippetResultContent('hierarchy.lvl1')" />
					<span
						v-if="item.content"
						class="DocSearch-Hit-path"
						v-html="snippetResultContent('content')"
					/>
				</div>

				<div v-else-if="isContent" class="DocSearch-Hit-content-wrapper">
					<span class="DocSearch-Hit-title" v-html="snippetResultContent('content')" />
					<span class="DocSearch-Hit-path" v-html="snippetResultContent('hierarchy.lvl1')" />
				</div>

				<div v-else class="DocSearch-Hit-content-wrapper">
					<span
						class="DocSearch-Hit-title"
						v-html="snippetResultContent(`hierarchy.${item.type}`)"
					/>
					<span class="DocSearch-Hit-path" v-html="snippetResultContent('hierarchy.lvl1')" />
				</div>
			</div>
		</a>
	</li>
</template>
<script>
	function getPropertyByPath(object, path) {
		const parts = path.split('.');

		return parts.reduce((prev, current) => {
			if (prev?.[current]) return prev[current];
			return null;
		}, object);
	}

	export default {
		data() {
			return {};
		},
		inject: ['onSearchClose'],
		props: {
			item: {
				type: Object,
				default: () => ({}),
			},
			index: {
				type: Number,
				default: 0,
			},
		},
		computed: {
			li_class() {
				return ['DocSearch-Hit', this.item.__docsearch_parent && 'DocSearch-Hit--Child']
					.filter(Boolean)
					.join(' ');
			},
			isContent() {
				return this.item.type === 'content';
			},
		},
		methods: {
			snippetResultContent(attribute) {
				return (
					getPropertyByPath(this.item, `_snippetResult.${attribute}.value`) ||
					getPropertyByPath(this.item, attribute)
				);
			},
		},
	};
</script>
<style lang="stylus">
.DocSearch-Hit
  border-radius 4px
  display flex
  padding-bottom 4px
  position relative

  a
    background var(--docsearch-hit-background)
    border-radius 4px
    box-shadow var(--docsearch-hit-shadow)
    display block
    padding-left var(--docsearch-spacing)
    width 100%

  .DocSearch-Hit-Container
    align-items center
    color #444950
    display flex
    flex-direction row
    height 56px
    padding 0 12px 0 0

  .DocSearch-Hit-content-wrapper
    overflow hidden
    display flex
    flex 1 1 auto
    flex-direction column
    font-weight 500
    justify-content center
    line-height 1.2em
    margin 0 8px
    overflow-x hidden
    position relative
    text-overflow ellipsis
    white-space nowrap
    width 80%

    .DocSearch-Hit-title
      font-size 0.9em

    .DocSearch-Hit-path
      color $accentColor
      font-size 0.75em
</style>
