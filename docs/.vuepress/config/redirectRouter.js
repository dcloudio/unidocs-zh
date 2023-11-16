const routerMap = {
  '/collocation/frame/lifecycle#页面生命周期': '/tutorial/page.html#lifecycle',
  '/collocation/frame/lifecycle#应用生命周期': '/collocation/App.html#applifecycle',
  '/collocation/frame/lifetime': '/collocation/App.html#applifecycle',
  '/collocation/frame/lifecycle': '/collocation/App.html#applifecycle',
  '/collocation/frame/communication': '/tutorial/page.html#页面通讯',
  '/collocation/frame/lifecycle#page': '/tutorial/page.html#lifecycle',
  '/collocation/frame/lifecycle#component': '/tutorial/page.html#componentlifecycle',
  '/collocation/frame/timer': '/api/timer.html',
  '/collocation/auto/hbuilderx-extension/index': '/worktile/auto/hbuilderx-extension/',
  '/collocation/auto/hbuilderx-extension/': '/worktile/auto/hbuilderx-extension/',
  '/collocation/auto/quick-start': '/worktile/auto/quick-start.html',
  '/collocation/auto/uniapp-cli-project': '/worktile/auto/uniapp-cli-project.html',
  '/collocation/i18n': '/tutorial/i18n.html',
  '/worktile/i18n': '/tutorial/i18n.html',
  '/collocation/env': '/tutorial/env.html',
  '/collocation/ssr': '/tutorial/ssr.html',
  '/ssr': '/tutorial/ssr.html',
  '/ssr/': '/tutorial/ssr.html',
  '/collocation/frame/window': '/tutorial/page.html#getapp',
  '/collocation/frame/window#getcurrentpages': '/tutorial/page.html#getcurrentpages',
  '/collocation/auto/api': '/worktile/auto/api.html',
  '/collocation/frame/log': '/api/log.html',

  '/component/mp-weixin-plugin': '/tutorial/mp-weixin-plugin.html',
  '/component/uniui': '/component/uniui/uni-ui.html',

  '/frame': '/tutorial/',
  '/frame#renderjs': '/tutorial/renderjs.html',
  '/frame#css变量': '/tutorial/syntax-css.html#css-变量',
  '/frame#css引入静态资源': '/tutorial/page-static-assets.html',
  '/frame#js文件引入': '/tutorial/page-script.html',
  '/frame#字体图标': '/tutorial/syntax-css.html#字体图标',
  '/frame#wxs': '/tutorial/miniprogram-subject.html#wxs',
  '/frame#flex布局': '/tutorial/syntax-css.html#flex-布局',
  '/frame#npm支持': '/tutorial/page-script.html#npm支持',
  '/frame#尺寸单位': '/tutorial/syntax-css.html#尺寸单位',
  '/frame#目录结构': '/tutorial/project.html#目录结构',
  '/frame#路由跳转': '/tutorial/page.html#路由跳转',
  '/frame#小程序组件支持': '/tutorial/miniprogram-subject.html',
  '/frame#小程序自定义组件支持': '/tutorial/miniprogram-subject.html#小程序自定义组件支持',
  '/frame#判断平台': '/worktile/running-env.html#判断平台',
  '/frame#typescript-支持': '/tutorial/typescript-subject.html#typescript-支持',
  '/frame#全局样式与局部样式': '/tutorial/syntax-css.html#全局样式与局部样式',
  '/frame#注意事项-1': '/tutorial/renderjs.html#注意事项',

  '/api/ui/language': '/api/ui/locale.html',
  '/api/ad/rewarded-video-ad': '/api/a-d/rewarded-video.html',
  '/api/a-d/rewarded-video-ad': '/api/a-d/rewarded-video.html',
  '/api/ad/interstitial-ad': '/api/a-d/interstitial.html',
  '/api/ui/navigate': '/api/router.html',
  '/api/plugins/getLaunchOptionsSync': '/api/getLaunchOptionsSync.html',
  '/api/plugins/getEnterOptionsSync': '/api/getEnterOptionsSync.html',
  '/api/plugins/getLaunchOptionsSync.html': '/api/getLaunchOptionsSync.html',
  '/api/plugins/getEnterOptionsSync.html': '/api/getEnterOptionsSync.html',
  '/api/lifetime': '/collocation/App.html#applifecycle',
  '/api/extend/native-plugin': '/plugin/native-plugin.html',

  '/vue-components': '/tutorial/vue-components.html',
  '/vue-basics': '/tutorial/vue-basics.html',
  '/vue-api': '/tutorial/vue-api.html',
  '/vue-vuex': '/tutorial/vue-vuex.html',
  '/vue3-api': '/tutorial/vue3-api.html',
  '/vue3-basics': '/tutorial/vue3-basics.html',
  '/vue3-vuex': '/tutorial/vue3-vuex.html',
  '/vue3-components': '/tutorial/vue3-components.html',
  '/migration-to-vue3': '/tutorial/migration-to-vue3.html',

  '/nvue-outline': '/tutorial/nvue-outline.html',
  '/nvue-api': '/tutorial/nvue-api.html',
  '/nvue-css': '/tutorial/nvue-css.html',

  '/uniCloud/database': '/uniCloud/clientdb.html',
  '/uniCloud/uni-clientDB': '/uniCloud/clientdb.html',
  '/uniCloud/uni-data-picker': '/component/uniui/uni-data-picker.html',
  '/uniCloud/uni-push/introduction.html': '/unipush-v2.html',
  '/plugin/publish#pages-init': '/plugin/uni_modules.html#pages-init',

  '/tutorial/build/uni-app-publish-mp-weixin': '/tutorial/build/publish-mp-weixin-cli.html',
  '/tutorial/build/uni-app-publish-mp-weixin.html': '/tutorial/build/publish-mp-weixin-cli.html',

  '/plugin/hybrid': '/hybrid.html',
  '/adapt': '/tutorial/adapt.html',
  '/share': '/api/plugins/share.html',
  '/performance': '/tutorial/performance.html',
  '/use-weex': '/tutorial/nvue-outline.html',
  '/uni_modules': '/plugin/uni_modules.html',
  '/snippet': '/tutorial/snippet.html',
  '/store': '/tutorial/store.html',
  '/platform': '/tutorial/platform.html',
  '/nvue-event': '/tutorial/nvue-event.html',
  '/use-html5plus': '/tutorial/use-html5plus.html',
  '/m3w': '/uniCloud/uni-portal.html',
  '/tutorial/syntax-uts': '/uts/',
  
  '/uniCloud/uni-id-summary': '/uniCloud/uni-id/summary.html',
  '/uniCloud/uni-id-pages': '/uniCloud/uni-id/redirect.md',
  '/uniCloud/uni-id-common': '/uniCloud/uni-id/cloud-common.html',
  '/uniCloud/uni-id': '/uniCloud/uni-id/old.html',
}

export default ({ fullPath, path, hash }) => {
  fullPath = decodeURIComponent(fullPath)
  const matchFullPath = routerMap[fullPath.replace('?id=', '#').replace('.html', '')];
  if (matchFullPath) {
    return {
      path: matchFullPath,
      replace: true
    }
  }

  const matchPath = routerMap[path]
  if (matchPath) {
    return {
      path: matchPath,
      hash,
      replace: true
    }
  }

  if (path.indexOf('/app-') === 0 || path.indexOf('/android-') === 0 || path.indexOf('/ios-') === 0) {
    return {
      path: `/tutorial${path}`,
      hash,
      replace: true
    }
  }
}