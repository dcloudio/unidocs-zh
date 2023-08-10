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
        text: 'UTS',
        type: 'link',
        link: '/uts/'
      },
      /* {
        text: 'uni-app x',
        type: 'link',
        link: '/uni-app-x/'
      }, */
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
        link: "https://github.com/dcloudio/uni-app",
        target: "_blank",
        text: "GitHub",
        type: "link"
      },
      {
        text: '其他规范',
        type: 'links',
        link: 'http://www.html5plus.org/doc/h5p.html',
        items: [{
          text: 'Weex',
          type: 'link',
          link: 'https://weexapp.com/'
        }]
      }
    ]
  },
  {
    text: 'uniCloud',
    type: 'link',
    link: '/uniCloud/'
  },
  {
    text: 'HBuilder X',
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
        location.href = 'https://uniapp.dcloud.net.cn' + location.pathname + location.hash + location.search
      }
    },
    {
      text: 'English',
      link: 'https://en.uniapp.dcloud.io/'
    }
  ]
}
