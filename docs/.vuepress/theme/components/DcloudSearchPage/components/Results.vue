<template>
	<section class="DocSearch-Hits">
		<div class="DocSearch-Hit-source">
			<span v-if="tag" class="DocSearch-Hit-source_tag">
				{{ tag }}
			</span>
			{{ title }}
		</div>

		<ul id="docsearch-list">
			<template v-for="(item, index) in results">
				<Result
					:key="[title, item.objectID].join(':')"
					:item="item"
					:index="index"
					@click.native="event => onSelect({ item, event })"
				/>
			</template>
		</ul>
	</section>
</template>
<script>
	import Result from './Result.vue';
	export default {
		components: { Result },
		data() {
			return {};
		},
		props: {
			title: {
				type: String,
				default: '文档',
			},
			results: {
				type: Array,
				default: [],
			},
			onSelect: {
				type: Function,
				default: () => {},
			},
		},
		computed: {
			tag() {
				return this.results[0].tag !== 'uniCloud' ? this.results[0].tag : '';
			},
		},
	};
</script>
<style lang="stylus">
	#docsearch-list{
		border-radius: 5px;
		padding: 0;
		border: 1px solid #dfe2e5;
		overflow: hidden;
	}

	.DocSearch-Hits mark {
	  background: none;
	  color: $accentColor;
	}

	.DocSearch-Hit-source {
	  background-color $search-container-color;
	  color: $accentColor;
		font-size 1em;
		padding 15px 4px 15px
	}

	.DocSearch-Hit-source_tag {
		background-color: #f0f0f0;
		font-size: 12px;
		padding: 2px 4px;
		color: #999;
		border-radius: 3px;
		margin-right: 5px;
		font-weight: normal;
	}
</style>
