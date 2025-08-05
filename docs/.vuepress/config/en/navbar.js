/**
 * text
 * target
 * link   // 有协议时是外链
 * items
 * type   // link、links。
 * rel
 * needOutbound // 是否显示外链图标
 */
export const navbar = [
  {
    text: 'uni-app',
    link: '/',
    items: [
      {
        text: 'Introduction',
        type: 'link',
        link: '/'
      },
      {
        text: 'Tutorial',
        type: 'link',
        link: '/tutorial/'
      },
      {
        text: 'Framework',
        type: 'link',
        link: '/collocation/pages'
      },
      {
        text: 'Component',
        type: 'link',
        link: '/component/'
      },
      {
        text: 'API',
        type: 'link',
        link: '/api/'
      },
      {
        text: 'Plugin',
        type: 'link',
        link: '/plugin/'
      },
      {
        text: 'Worktile',
        type: 'link',
        link: '/worktile/'
      },
      {
        text: 'UTS',
        type: 'link',
        link: 'https://doc.dcloud.net.cn/uni-app-x/uts/'
      },
      {
        text: 'Others',
        type: 'links',
        link: 'http://www.html5plus.org/doc/h5p.html',
        items: [{
          text: 'Weex',
          type: 'link',
          link: 'https://weexapp.com/'
        }]
      },
      {
        link: "https://github.com/dcloudio/uni-app",
        target: "_blank",
        text: "GitHub",
        type: "link"
      }
    ]
  },
  {
    text: 'uni-app x',
    link: 'https://doc.dcloud.net.cn/uni-app-x/',
    type: "link",
    target: '_blank',
    needOutbound: false
  },
  {
    text: 'uniCloud',
    link: 'https://doc.dcloud.net.cn/uniCloud/',
    type: "link",
    target: '_blank',
    needOutbound: false
  },
  {
    text: 'HBuilder',
    link: 'https://www.dcloud.io/hbuilderx.html?lang=en',
    type: "link",
    target: '_blank',
    needOutbound: false
  },
  {
    text: 'uniMPSdk',
    link: 'https://nativesupport.dcloud.net.cn/README',
    type: "link",
    target: '_blank',
    needOutbound: false
  }
]

export const navbarLanguage = {
  default: 1,
  items: [
    {
      text: '简体中文',
      link: 'javascript:;',
      click() {
        localStorage.setItem('__UNIDOCS_LANGUAGE', 'zh')
        location.href = 'https://uniapp.dcloud.net.cn' + location.pathname + location.hash + location.search
      }
    },
    {
      text: 'English',
      link: 'https://en.uniapp.dcloud.io/'
    }
  ]
}
