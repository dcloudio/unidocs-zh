<template>
	<div class="theme-container">
		<div class="theme-default-content">
			<h1>404</h1>

			<blockquote>{{ getMsg() }}</blockquote>

			<RouterLink to="/">Take me home.</RouterLink>
		</div>
	</div>
</template>

<script>
	const msgs = [
		`There's nothing here.`,
		`How did we get here?`,
		`That's a Four-Oh-Four.`,
		`Looks like we've got some broken links.`,
	];

	export default {
		methods: {
			getMsg() {
				return msgs[Math.floor(Math.random() * msgs.length)];
			},
		},
		mounted() {
			const xhr = new XMLHttpRequest();
			xhr.open('post', 'https://b1ecec17-5c3f-4de9-8b5b-ab739a9a47d5.bspapp.com/unidocs-zh-stat');
			xhr.setRequestHeader('content-type', 'application/json;charset=utf-8');
			xhr.send(
				JSON.stringify({
					params: {
						fullPath: this.$route.fullPath,
						hash: this.$route.hash,
						path: this.$route.path,
						params: this.$route.params,
						query: this.$route.query,
					},
				})
			);
		},
	};
</script>
