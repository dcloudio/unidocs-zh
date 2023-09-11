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
        text: '介绍',
        type: 'link',
        link: '/'
      },
      {
        text: '教程',
        type: 'link',
        link: '/tutorial/'
      },
      {
        text: '全局文件',
        type: 'link',
        link: '/collocation/pages'
      },
      {
        text: '组件',
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
      {
        text: 'uni-app x',
        type: 'link',
        link: '/uni-app-x/'
      },
      {
        text: '插件',
        type: 'link',
        link: '/plugin/'
      },
      {
        text: '工程化',
        type: 'link',
        link: '/worktile/'
      },
      {
        text: '其他规范',
        type: 'links',
        link: 'http://www.html5plus.org/doc/h5p.html',
        items: [
          {
            text: 'App扩展规范 HTML5 Plus',
            type: 'link',
            link: 'http://www.html5plus.org/doc/h5p.html'
          },
          {
            text: '微信小程序',
            type: 'link',
            link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
          },
          {
            text: '支付宝小程序',
            type: 'link',
            link: 'https://docs.alipay.com/mini/developer/getting-started'
          },
          {
            text: '百度小程序',
            type: 'link',
            link: 'https://smartprogram.baidu.com/docs/develop/tutorial/codedir/'
          },
          {
            text: '抖音小程序',
            type: 'link',
            link: 'https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/introduction/basic-component'
          },
          {
            text: '飞书小程序',
            type: 'link',
            link: 'https://open.feishu.cn/document/uYjL24iN/uUDNzUjL1QzM14SN0MTN'
          },
          {
            text: '钉钉小程序',
            type: 'link',
            link: 'https://developers.dingtalk.com/document/app/introduction-to-dingtalk-mini-programs'
          },
          {
            text: 'QQ小程序',
            type: 'link',
            link: 'https://q.qq.com/wiki/develop/miniprogram/frame/'
          },
          {
            text: '快手小程序',
            type: 'link',
            link: 'https://mp.kuaishou.com/docs/develop/frame/config/conf_appjson.html'
          },
          {
            text: '京东小程序',
            type: 'link',
            link: 'https://mp-docs.jd.com/doc/forst/second/-1'
          },
          {
            text: '华为快应用',
            type: 'link',
            link: 'https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-component-view'
          },
          {
            text: '360小程序',
            type: 'link',
            link: 'https://mp.360.cn/doc/miniprogram/dev/#/view'
          },
          {
            text: 'Weex',
            type: 'link',
            link: 'https://weexapp.com/zh/'
          },
        ]
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
    text: 'uniCloud',
    type: 'link',
    link: '/uniCloud/'
  },
  {
    text: 'HBuilder',
    link: 'https://hx.dcloud.net.cn/',
    type: "link",
    target: '_blank',
    needOutbound: false
  },
  {
    text: 'uni 小程序 sdk',
    link: 'https://nativesupport.dcloud.net.cn/README',
    type: "link",
    target: '_blank',
    needOutbound: false
  },
  /* {
    text: '问答社区',
    link: 'https://ask.dcloud.net.cn/explore/',
    type: "link",
    target: '_blank',
    needOutbound: false
  },
  {
    text: '插件市场',
    type: "link",
    target: '_blank',
    link: 'https://ext.dcloud.net.cn/',
    needOutbound: false
  } */
]

export const navbarLanguage = {
  default: 0,
  items: [
    {
      text: '简体中文',
      link: 'https://uniapp.dcloud.net.cn/'
    },
    {
      text: 'English',
      link: 'javascript:;',
      click() {
        location.href = 'https://en.uniapp.dcloud.io' + location.pathname + location.hash + location.search
      }
    }
  ]
}
