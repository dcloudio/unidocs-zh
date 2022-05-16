<template>
	<div ref="container" id="footNavBox">
		<div class="footNav">
			<div id="footNavClassify">
				<footNavItem :list="footNavList" />
			</div>
			<div id="aboutusBox">
				<footNavItem :list="aboutusList" />
			</div>
		</div>
		<div class="hbLogo"></div>
		<div class="companyBox">
			<span class="companyInfo">DCloud 即数字天堂（北京）网络技术有限公司是</span>
			<div style="display: inline; margin-left: 5px" class="companyInfo">
				<a href="//www.w3.org/" target="_blank" class="w3c">W3C</a>
				成员及
				<a href="//www.html5plus.org/" target="_blank" class="html5">HTML5中国产业联盟</a>
				发起单位
			</div>
		</div>
		<div class="beianBox">
			<a
				id="domain"
				class="beian"
				href="https://beian.miit.gov.cn/#/Integrated/index"
				target="_blank"
			>
				{{ domain }}
			</a>
			<div class="domainImgBox">
				<img
					class="domainImg"
					src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/769929a3-65eb-4d11-815d-84f88197a152.png"
				/>
				<a
					class="beian"
					href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802035340"
					target="_blank"
				>
					京公网安备：11010802035340号
				</a>
			</div>

			<span class="anbaoInfo">国家信息安全等级保护三级，证书编号：11010813802-20001</span>
		</div>
	</div>
</template>

<script>
	import footerConfig from '../config/footer';
	const { footNavList, aboutusList } = footerConfig;

	export default {
		components: {
			footNavItem: {
				functional: true,
				props: {
					list: {
						type: Array,
						default: () => [],
					},
				},
				render: (h, { props }) => {
					return props.list.map((footNavListItem, _index) =>
						h('div', { staticClass: 'footNavItem', key: footNavListItem.title || _index }, [
							h('div', { staticClass: 'navItemTitle' }, footNavListItem.title),
							h('div', { staticClass: 'navLine' }),
							h(
								'div',
								{ staticClass: 'navItemDetailBox' },
								footNavListItem.content.map((item, index) =>
									h(
										'a',
										{
											staticClass: 'navItemDetail',
											key: item.url || index,
											attrs: {
												target: '_blank',
												href: item.url,
											},
										},
										item.subTitle
									)
								)
							),
						])
					);
				},
			},
		},
		data: () => ({
			footNavList: Object.freeze(footNavList),
			aboutusList: Object.freeze(aboutusList),
			domain: '',
		}),
		mounted() {
			if (document.domain === 'uniapp.dcloud.net.cn') {
				this.domain = '京ICP备12046007号-4';
			} else {
				this.domain = '蒙ICP备14002744号-1';
			}
			this.fixBottom();
		},
		methods: {
			fixBottom() {
				this.$nextTick(() => {
					this.$refs.container.style.bottom = `0px`;
					const bottom =
						document.documentElement.clientHeight -
						this.$refs.container.getBoundingClientRect().bottom;
					if (bottom > 0) {
						const preBottom = parseFloat(this.$refs.container.style.bottom);
						this.$refs.container.style.position = 'relative';
						this.$refs.container.style.bottom = `-${bottom}px`;
					} else {
						this.$refs.container.removeAttribute('style');
					}
				});
			},
		},
		watch: {
			$route() {
				this.fixBottom();
			},
		},
	};
</script>

<style lang="stylus" scoped>
	@import '../styles/footer.styl'
</style>
