const copyOptions = require('../config/zh/copy');

const config = {
  theme: 'vuepress-theme-uni-app-test',
  title: 'uni-app官网',
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png?v=1556263038788'
    }],
    ['script', { src: `/js/redirect.js?${Date.now()}&v=${Date.now()}&version=${Date.now()}` }],
    ['script', { src: 'https://hm.baidu.com/hm.js?fe3b7a223fc08c795f0f4b6350703e6f' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    titleLogo: 'https://web-assets.dcloud.net.cn/unidoc/zh/uni-app.png',
    logo: 'https://web-assets.dcloud.net.cn/unidoc/zh/logo.png',
    docsRepo: 'https://gitcode.net/dcloud/unidocs-zh',
    docsBranch: 'master',
    editLinkText: '帮助我们改善此页面！',
    lastUpdated: '上次更新',
    // smoothScroll: true,
    algolia: {
      apiKey: '2fdcc4e76c8e260671ad70065e60b2e7',
      indexName: 'zh-uniapp',
      appId: 'PQIR5NL8CZ',
      searchParameters: { hitsPerPage: 50 }
    }
  },
  plugins: [
    ["vuepress-plugin-juejin-style-copy", copyOptions]
  ]
}

module.exports = config