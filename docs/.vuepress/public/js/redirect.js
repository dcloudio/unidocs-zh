var { host, pathname } = location
var LOCAL_ZH = 'zh'
var LOCAL_EN = 'en'
var website_ZH_host = 'uniapp.dcloud.net.cn'
var website_EN_host = 'en.uniapp.dcloud.io'
var website_ZH = 'https://' + website_ZH_host;
var website_EN = 'https://' + website_EN_host;

window.__UNI_DOCS_ZH_KEY__ = 'unidocs-zh-language'

if (host === 'uniapp.dcloud.io') {
  var localStorageLanguage = localStorage.getItem(window.__UNI_DOCS_ZH_KEY__)

  if (localStorageLanguage) {
    switch (localStorageLanguage) {
      case LOCAL_ZH:
        if (host !== website_ZH_host) {
          window.location.href = website_ZH + pathname;
        }
        break;
      case LOCAL_EN:
        if (host !== website_EN_host) {
          window.location.href = website_EN + pathname;
        }
        break;

      default:
        break;
    }
  } else {
    var website_finally =
      navigator.language.indexOf('zh') !== -1
        ? website_ZH
        : website_EN;
    window.location.href = website_finally + pathname;
  }
}