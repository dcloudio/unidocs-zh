const path = require('path');
const { slugify } = require('@vuepress/shared-utils')
const translatePlugin = require('./markdown/translate')
const headerPlugin = require('./markdown/header')
const createSidebar = require('./markdown/createSidebar')
const { simplifySlugText, tabs } = require('./utils')
const copyOptions = require('./config/copy');

const config = {
  theme: 'vuepress-theme-uni-app-test',
  title: 'uni-app官网',
  description: 'uni-app,uniCloud,serverless',
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788'
    }],
    ['meta', {
      name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0'
    }],
    ['meta', {
      name: 'keywords', content: 'serverless,云开发,数字天堂,前端开发,web开发,小程序开发,跨平台,跨平台开发,跨端开发,混合开发,app开发,多端开发,开发工具,HTML5,vue,react,native,rn,flutter,weex,cordova,微信小程序,阿里小程序,支付宝小程序,百度小程序,头条小程序,抖音小程序,QQ小程序,快应用,流应用,云函数'
    }],
    ['script', { src: `/js/redirect.js?${Date.now()}&v=${Date.now()}&version=${Date.now()}` }],
    ['script', { src: 'https://hm.baidu.com/hm.js?fe3b7a223fc08c795f0f4b6350703e6f' }],
	 ['script', { src: 'miku-delivery-1.1.0.js' }],
	 ['script', { src: `/js/miku.js?${Date.now()}&v=${Date.now()}&version=${Date.now()}` }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    titleLogo: 'https://web-assets.dcloud.net.cn/unidoc/zh/uni-app.png',
    logo: 'https://web-assets.dcloud.net.cn/unidoc/zh/logo.png',
    sidebar: createSidebar(tabs),
    sidebarDepth: 0,
    nextLinks: false,
    prevLinks: false,
    repo: 'dcloudio/uni-app',
    docsRepo: 'https://gitcode.net/dcloud/unidocs-zh',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    lastUpdated: '上次更新',
    // smoothScroll: true,
    algolia: {
      apiKey: '2fdcc4e76c8e260671ad70065e60b2e7',
      indexName: 'zh-uniapp',
      appId: 'PQIR5NL8CZ',
      searchParameters: { hitsPerPage: 50 }
    },
    isDevelopment: process.env.NODE_ENV === 'development'
  },
  markdown: {
    // toc: { includeLevel: [1, 2, 3, 4] },
    slugify (str) {
      if (typeof str !== 'string') return ''

      let slug = str
      if (slug.includes('@')) {
        let array = slug.split('@')
        slug = array.length > 1 ? array[array.length - 1] : str
      } else {
        slug = simplifySlugText(slug.toLowerCase()).trim()
      }
      return slugify(slug)
    },
    extractHeaders: ['h1', 'h2', 'h3', 'h4'],
    chainMarkdown (config) {
      config
        .plugin('translate')
        .use(translatePlugin)
        .end()
        .plugin('convert-header')
        .use(headerPlugin)
        .end()
        .plugin('normallize-link')
        .use(require('./markdown/normallizeLink'))
    }
  },
  chainWebpack (config, isServer) {
    config.resolve.alias.set(
      '@theme-config',
      path.resolve(process.cwd(), 'docs/.vuepress/config')
    )
  },
  plugins: [
    ["vuepress-plugin-juejin-style-copy", copyOptions]
  ]
}

module.exports = config