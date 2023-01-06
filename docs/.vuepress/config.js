const path = require('path');
const { slugify } = require('@vuepress/shared-utils')
const merge = require('webpack-merge');

const translatePlugin = require('./markdown/translate')
const headerPlugin = require('./markdown/header')
const createSidebar = require('./markdown/createSidebar')
const { simplifySlugText, tabs_zh, tabs_en } = require('./utils')
const config_zh = require('./build/config.zh');
const config_en = require('./build/config.en');

const tabs = process.env.DOCS_LOCAL === 'en' ? tabs_en : tabs_zh
const config = process.env.DOCS_LOCAL === 'en' ? config_en : config_zh

module.exports = merge({
  theme: 'vuepress-theme-uni-app-test',
  title: 'uni-app官网',
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png?v=1556263038788'
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
    // TODO use plugin/theme
    sidebar: createSidebar(tabs),
    sidebarDepth: 0,
    nextLinks: false,
    prevLinks: false,
    repo: 'dcloudio/uni-app',
    docsRepo: 'https://gitcode.net/dcloud/unidocs-zh',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    isDevelopment: process.env.NODE_ENV === 'development',
    isEn: process.env.DOCS_LOCAL === 'en'
  },
  markdown: {
    // toc: { includeLevel: [1, 2, 3, 4] },
    slugify(str) {
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
    chainMarkdown(config) {
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
  chainWebpack(config, isServer) {
    config.resolve.alias.set(
      '@theme-config',
      path.resolve(process.cwd(), 'docs/.vuepress/config', process.env.DOCS_LOCAL)
    )
  },
  plugins: [
    ["vuepress-plugin-juejin-style-copy", copyOptions],
    'vuepress-plugin-mermaidjs'
  ]
}

module.exports = config