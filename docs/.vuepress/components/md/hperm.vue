<template>
<div>
	<ul v-if="isString(permissions)">
		<li>鸿蒙平台权限设置 此接口需要权限 <code>{{ permissions }}</code>。具体配置方法请参考<a target="_blank" :href="guideLink">鸿蒙权限配置指南</a></li>
	</ul>
	<ul v-if="isArray(permissions)">
		<li>鸿蒙平台权限设置 此接口需要如下权限：具体配置方法请参考<a target="_blank" :href="guideLink">鸿蒙权限配置指南</a></li>
		<ul>
			<li v-for="perm in permissions">
				<template v-if="isObject(perm)">
					<code>{{ perm.name }}</code>: {{ perm.desc }}
				</template>
				<code v-else>{{ perm }}</code>
			</li>
		</ul>
	</ul>
</div>
</template>

<script>
	export default {
		props: {
			permissions: {
				type: [String, Array],
				default() {
					return [];
				},
				validator(value) {
					return typeof value === 'string' || value.every(item => {
						return typeof item === 'string' || (
							item &&
							typeof item === 'object' &&
							typeof item.name === 'string' &&
							typeof item.desc === 'string'
						);
					});
				},
			},
		},
		methods: {
			isString(val) {
				return typeof val === 'string';
			},
			isArray(val) {
				return Array.isArray(val);
			},
			isObject(val) {
				return val && typeof val === 'object';
			},
		},
		data() {
			return {
				guideLink: 'https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html#permission'
			};
		},
		mounted() {
		},
	};
</script>
