<template>
	<section class="DocSearch-Hits">
		<div class="DocSearch-Hit-source">{{ title }}</div>

		<ul id="docsearch-list">
			<template v-for="(item, index) in results">
				<Result :key="[title, item.objectID].join(':')" :item="item" :index="index" />
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
		},
		methods: {},
	};
</script>
<style lang="stylus" scoped>
	 .DocSearch-Hits mark {
	     background: none;
	     color: $accentColor;
	 }

	.DocSearch-Hit-source {
	   background-color $search-container-color;
	    color: $accentColor;
	}
</style>
