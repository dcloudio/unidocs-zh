function isExternal(path) {
  return /^[a-z]+:/i.test(path)
}

function simplifySlugText(text) {
  // 移除方法后面的括号及里面的内容
  if (text.match(/^uni/) && text.match(/\)$/)) {
    text = text.replace(/^uni/, '').replace(/\(.*\)$/, '');
  }
  // 处理部分非uni开头方法的括号内容，主要是会出现多参数的情况。
  if (text.match(/\([\w+\s+\[\],]+\)$/)) {
    text = text.replace(/\([\w+\s+\[\],]+\)$/, '');
  }
  return text;
}

// 顺序有要求，会影响 for 循环匹配侧边栏
const tabs = [
  '/uni-app-x/compiler/', '/uni-app-x/dom/', '/uni-app-x/uts/', '/uni-app-x/collocation/', '/uni-app-x/plugin/', '/uni-app-x/worktile/', '/uni-app-x/component/', '/uni-app-x/api/', '/uni-app-x/css/', '/uni-app-x/',
  '/uniCloud/',
  '/plugin/', '/worktile/', '/tutorial/', '/collocation/', '/component/', '/api/', '/',
]

module.exports = {
  isExternal,
  simplifySlugText,
  tabs_zh,
  tabs_en: tabs_zh
}