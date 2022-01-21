const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it');
const createMarkdownArray = require('./createMarkdownArray')
const { isExternal } = require('../utils')

function parseBar(file, options) {
  const textName = options.text || 'text'
  const linkName = options.link || 'link'
  const contents = []

  new MarkdownIt()
    .parse(fs.readFileSync(file, { encoding: 'utf-8' }))
    .forEach(token => {
      if (token.type === 'inline') {
        let [_, text, link] = token.content.match(/\[(.+?)\]\((.+?)\)/) || token.content.match(/(.+)/)
        link = link && (
          isExternal(link)
            ? link
            : path.join('/', link.replace(/\.md\b/, '')
              .replace(/\bREADME\b/, '')
              .replace(/\/index/, '/')
              .replace(/\?id=/, '#'))
              .replace(/\\/g, '/')
        )
        contents.push({
          level: token.level,
          [textName]: text,
          [linkName]: link
        })
      }
    })

  return createMarkdownArray(contents, options.children)
}

module.exports = function (tabs = []) {
  const sidebar = {}
  tabs.forEach(tab => {
    sidebar[tab] = parseBar(path.join(__dirname, '../../', tab, '_sidebar.md'), {
      text: 'title',
      link: 'path'
    })
  })
  return tabs.length ? sidebar : false
}