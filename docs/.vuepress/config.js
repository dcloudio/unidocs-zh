const { slugify } = require('@vuepress/shared-utils')
const translatePlugin = require('./markdown/translate')
const headerPlugin = require('./markdown/header')
const createSidebar = require('./markdown/createSidebar')

const tabs = ['/uniCloud/', '/plugin/', '/worktile/', '/tutorial/', '/collocation/', '/component/', '/api/', '/']

const config = {
  // base: '/docs/',
  // TODO use theme
  title: 'uni-app',
  themeConfig: {
    titleLogo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/1ae87107-2943-4ba6-be2b-390ca27c6260.png',
    logo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/5a7f902b-21a7-4822-884f-925219eacc4b.png',
    // TODO use plugin/theme
    sidebar: createSidebar(tabs),
    // sidebarDepth: 2,
    nextLinks: false,
    prevLinks: false,
    // TODO use theme
    repo: 'dcloudio/uni-app',
    docsRepo: 'dcloudio/unidocs-en',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    // smoothScroll: true,
    algolia: {
      apiKey: 'ca67b01d14df58783e2f7dc45c79736e',
      indexName: 'en-uniapp-dcloud',
      appId: 'TZ0EGQ9J1Y'
    }
  },
  markdown: {
    slugify(str) {
      let slug = str

      if (slug.includes('@')) {
        let array = slug.split('@')
        slug = array.length > 1 ? array[array.length - 1] : str
      } else {
        const UNI = 'uni.'
        if (slug.startsWith(UNI)) {
          slug = slug.split(UNI)[1]
        }
        if (slug.indexOf('OBJECT') !== -1) {
          ['(', '（'].forEach(item => {
            if (slug.indexOf(item) !== -1)
              slug = slug.split(item)[0].toLocaleLowerCase();
          })
        }
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
    }
  }
}

module.exports = config

/**
 * 1. 路由映射：由于文档文件变动，将之前的链接重定向到新的链接
 * 2. 修复文档渲染错误的 Bug
 * 3. 搜索 配置更新
 * 4. 更新 slugify 配置规则
 * 5. 合并文档
 */