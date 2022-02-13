<template>
	<div class="contact-box">
		<template v-if="currentConfig.contactItems && currentConfig.contactItems.length">
			<template v-for="item in currentConfig.contactItems">
				<a :key="item.name" :href="item.url" target="_blank" class="contact-item">
					<img :src="item.imageUrl" width="20" height="20" />
					<div class="contact-smg">
						<div>{{ item.name }}</div>
					</div>
				</a>
			</template>
		</template>
		<div class="contact-item" v-if="currentConfig.codeHosting && currentConfig.codeHosting.length">
			<img
				src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/74cda950-4f2d-11eb-a16f-5b3e54966275.png"
				width="20"
				height="20"
			/>
			<div class="contact-smg">
				<div>
					代码仓库：
					<template v-for="(item, index) in currentConfig.codeHosting">
						<a :key="item.url" :href="item.url" target="_blank">{{ item.name }}</a>
						{{ currentConfig.codeHosting.length - index > 1 ? '、' : '' }}
					</template>
				</div>
			</div>
		</div>
		<div class="contact-item" v-if="currentQQGroup.length">
			<img
				src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/759713d0-4f2d-11eb-a16f-5b3e54966275.png"
				width="20"
				height="20"
			/>
			<div class="contact-smg">
				<div>官方QQ交流群</div>
				<template v-for="(item, index) in currentQQGroup">
					<div v-if="!item.state" :key="item.number">
						群{{ currentQQGroup.length - index }}：{{ item.number }} &nbsp;
						<a
							target="_blank"
							style="text-decoration: underline"
							href="https://qm.qq.com/cgi-bin/qm/qr?k=r70TY1MkPklo86bS7CbXRG7PF97RiY6R&jump_from=webapi"
						>
							点此加入
						</a>
					</div>
					<div v-else :key="item.number">
						群{{ currentQQGroup.length - index }}：{{ item.number }}（{{
							item.attendance || 2000
						}}人已满）
					</div>
				</template>
			</div>
		</div>
		<div class="contact-item">
			<img
				src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/77df7d30-4f2d-11eb-bd01-97bc1429a9ff.png"
				width="20"
				height="20"
			/>
			<div class="contact-smg">
				<div>关注微信公众号</div>
				<img
					src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/78a8e7b0-4f2d-11eb-8ff1-d5dcf8779628.jpg"
					width="90"
					height="90"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import navInject from '../mixin/navInject';
	import siderbarConfig from '../config/siderbar';
	export default {
		mixins: [navInject],

		data: () => ({
			siderbarConfig,
		}),

		computed: {
			currentConfig() {
				return this.siderbarConfig[this.customNavBarKeys[this.navConfig.userNavIndex]] || {};
			},
			currentQQGroup() {
				return [...(this.currentConfig.qq_group || [])].reverse();
			},
		},
	};
</script>

<style>
	.contact-box {
		border-top: 1px solid #eee;
		margin-top: 20px;
		margin-bottom: 20px;
		padding: 0 10px;
	}

	.contact-box a {
		color: #42b983;
	}

	.contact-item {
		padding-top: 30px;
		padding-left: 0;
		display: flex;
		flex-direction: row;
	}

	a.contact-item {
		display: flex;
		padding: 0;
		margin-top: 20px;
		padding-left: 0;
		text-decoration: none;
	}

	.contact-item > img {
		margin: 3px 10px 0 10px;
	}

	.contact-smg {
		display: flex;
		flex-direction: column;
	}

	.contact-smg div {
		font-size: 15px;
		color: #000000;
		line-height: 24px;
	}
</style>
