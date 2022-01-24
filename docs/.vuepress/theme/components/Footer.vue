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
			footNavList: [
				{
					title: '开发产品',
					content: [
						{
							subTitle: 'HBuilderX',
							url: 'https://www.dcloud.io/hbuilderx.html',
						},
						{
							subTitle: 'uni-app',
							url: 'https://uniapp.dcloud.net.cn/',
						},
						{
							subTitle: 'uniCloud',
							url: 'https://uniapp.dcloud.net.cn/uniCloud/README',
						},
						{
							subTitle: 'uniMPsdk',
							url: 'https://nativesupport.dcloud.net.cn/',
						},
						{
							subTitle: '5+Runtime',
							url: 'https://www.dcloud.io/runtime.html',
						},
						{
							subTitle: 'wap2app',
							url: 'https://www.dcloud.io/wap2app.html?platform=wap2app',
						},
						{
							subTitle: 'MUI',
							url: 'https://www.dcloud.io/mui.html',
						},
						{
							subTitle: 'uni-id',
							url: 'https://uniapp.dcloud.net.cn/uniCloud/uni-id',
						},
						{
							subTitle: 'uniPay',
							url: 'https://uniapp.dcloud.net.cn/uniCloud/unipay',
						},
						{
							subTitle: 'uniPush',
							url: 'https://uniapp.dcloud.net.cn/unipush',
						},
						{
							subTitle: 'uni-verify',
							url: 'https://uniapp.dcloud.io/univerify',
						},
						{
							subTitle: 'sms',
							url: 'https://uniapp.dcloud.net.cn/uniCloud/send-sms',
						},
						{
							subTitle: 'uni-starter',
							url: 'https://ext.dcloud.net.cn/plugin?id=5057',
						},
						{
							subTitle: 'uni-admin',
							url: 'https://uniapp.dcloud.net.cn/uniCloud/admin',
						},
						{
							subTitle: 'uni-upgrade-center',
							url: 'https://uniapp.dcloud.io/uniCloud/upgrade-center',
						},
					],
				},
			],
			aboutusList: [
				{
					title: '运营产品',
					content: [
						{
							subTitle: 'uni-AD',
							url: 'https://uniad.dcloud.net.cn/login',
						},
						{
							subTitle: 'uni统计',
							url: 'https://tongji.dcloud.net.cn/',
						},
						{
							subTitle: 'uni发行',
							url: 'https://www.dcloud.io/dportal.html',
						},
						{
							subTitle: '',
							url: '',
						},
						{
							subTitle: '',
							url: '',
						},
						{
							subTitle: '',
							url: '',
						},
					],
				},
				/* {
	         'title': '',
	         'content': []
	       }, */
				{
					title: '开发者服务',
					content: [
						{
							subTitle: '问答社区',
							url: 'https://ask.dcloud.net.cn/explore/',
						},
						{
							subTitle: '开发者后台',
							url: 'https://dev.dcloud.net.cn/',
						},
					],
				},
				{
					title: '技术文档',
					content: [
						{
							subTitle: 'uni-app文档',
							url: 'https://uniapp.dcloud.io/',
						},
						{
							subTitle: 'uniCloud文档',
							url: 'https://uniapp.dcloud.io/uniCloud/README',
						},
						{
							subTitle: '原生开发者支持文档',
							url: 'https://nativesupport.dcloud.net.cn/',
						},
						{
							subTitle: 'HBuilder文档',
							url: 'https://hx.dcloud.net.cn/',
						},
					],
				},
				{
					title: '生态服务',
					content: [
						{
							subTitle: '插件市场',
							url: 'https://ext.dcloud.net.cn/',
						},
						{
							subTitle: 'OAuth用户开放平台',
							url: 'https://open.dcloud.net.cn/pages/login/login',
						},
					],
				},
				{
					title: '关于我们',
					content: [
						{
							subTitle: 'DCloud官网',
							url: 'https://dcloud.io/',
						},
						{
							subTitle: '案例',
							url: 'https://uniapp.dcloud.io/case',
						},
						{
							subTitle: '需求墙',
							url: 'https://dev.dcloud.net.cn/wish/?channel=uniapp',
						},
						{
							subTitle: '许可协议',
							url: 'https://ask.dcloud.net.cn/article/35623',
						},
						{
							subTitle: '加入我们',
							url: 'https://www.dcloud.io/hr/',
						},
						{
							subTitle: '赞助我们',
							url: 'https://dev.dcloud.net.cn/sponsor/',
						},
					],
				},
				{
					title: '联系我们',
					content: [
						{
							subTitle: '商务合作：bd@dcloud.io',
							url: 'mailto:bd@dcloud.io',
						},
						{
							subTitle: '广告合作：uniad@dcloud.io',
							url: 'mailto:uniad@dcloud.io',
						},
					],
				},
			],
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
						console.log('🚀 ~ file: Footer.vue ~ line 296 ~ this.$nextTick ~ preBottom', preBottom);
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

<style lang="stylus">
	@import '../styles/footer.styl'
</style>
