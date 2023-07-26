mikuDelivery.initProxy('/miku-delivery-sw-1.2.1.js', {
	/** appID 和 appSalt 由七牛配置提供*/
	app: {
		appID: 'r5v5l8yhuips0xwv',
		appSalt: 'ejhqsncr0hrwcadkfrsh07n3p6wxt9q3'
	},
	/** 需要被代理的域名列表，域名需要提前在七牛创建完成，由七牛配置 ecdn 功能 */
	domains: ['qiniu-web-assets.dcloud.net.cn'],
	// debug: true
})