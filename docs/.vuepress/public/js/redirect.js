const { host, pathname } = location

if (host === 'uniapp.dcloud.io') {
  var website_ZH = 'https://uniapp.dcloud.net.cn';
  var website_EN = 'https://en.uniapp.dcloud.io';
  var website_finally =
    navigator.language.indexOf('zh') !== -1
      ? website_ZH
      : website_EN;
  window.location.href = website_finally + pathname;
}