var { host, pathname, search, hash } = location
var LOCAL_ZH = 'zh'
var LOCAL_EN = 'en'
var website_ZH_host = 'uniapp.dcloud.net.cn'
var website_EN_host = 'en.uniapp.dcloud.io'
var website_ZH = 'https://' + website_ZH_host;
var website_EN = 'https://' + website_EN_host;
var _hmt = _hmt || [];

// window.__UNI_DOCS_ZH_KEY__ = 'unidocs-zh-language'

if (host === 'uniapp.dcloud.io') {
  var unidocsLanguage = localStorage.getItem('__UNIDOCS_LANGUAGE')
  var website_finally =
    navigator.language.indexOf('zh') !== -1
      ? website_ZH
      : website_EN;
  if (unidocsLanguage) {
    website_finally = unidocsLanguage === LOCAL_ZH ? website_ZH : website_EN
  }
  window.location.href = website_finally + pathname + hash + search;
} else {
  // overwrite referrer
  if (
    search.indexOf('hmsr=vueen') !== -1 &&
    document.referrer === 'https://uniapp.dcloud.io/'
  ) {
    Object.defineProperty(
      document,
      'referrer',
      { value: 'https://vuejs.org/', configurable: true }
    );
  }
}
