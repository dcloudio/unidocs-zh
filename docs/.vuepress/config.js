const { slugify } = require('@vuepress/shared-utils')
const translatePlugin = require('./markdown/translate')
const headerPlugin = require('./markdown/header')
const createSidebar = require('./markdown/createSidebar')

const tabs = ['/uniCloud/', '/plugin/', '/worktile/', '/tutorial/', '/collocation/', '/component/', '/api/', '/']

const config = {
  // TODO use theme
  title: 'uni-app官网',
  head: [
    ['link', {
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png?v=1556263038788'
    }]
  ],
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
    docsRepo: 'https://gitee.com/dcloud/unidocs-zh',
    docsBranch: 'vuepress',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    // smoothScroll: true,
    algolia: {
      apiKey: '2fdcc4e76c8e260671ad70065e60b2e7',
      indexName: 'zh-uniapp',
      appId: 'PQIR5NL8CZ'
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