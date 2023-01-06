const copyOptions = require('../config/en/copy');

const config = {
  title: 'uni-app',
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png?v=1556263038788'
    }],
    ['script', { src: `/js/redirect.js?${Date.now()}&v=${Date.now()}&version=${Date.now()}` }],
    ['script', { src: 'https://hm.baidu.com/hm.js?335faa6b53d8671e088767b0b95a706e' }]
  ],
  themeConfig: {
    titleLogo: 'https://web-assets.dcloud.net.cn/unidoc/zh/logo-en.png',
    logo: 'https://web-assets.dcloud.net.cn/unidoc/zh/logo-en-D.png',
    docsRepo: 'https://github.com/dcloudio/unidocs-en',
    docsBranch: 'main',
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'lastUpdated',
    // smoothScroll: true,
    algolia: {
      apiKey: 'ca67b01d14df58783e2f7dc45c79736e',
      indexName: 'en-uniapp-dcloud',
      appId: 'TZ0EGQ9J1Y',
      searchParameters: { hitsPerPage: 50 }
    }
  },
  plugins: [
    ["vuepress-plugin-juejin-style-copy", copyOptions]
  ]
}

module.exports = config