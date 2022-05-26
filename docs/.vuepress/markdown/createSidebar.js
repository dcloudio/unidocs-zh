const fs = require('fs')
const path = require('path')
const MarkdownIt = require('markdown-it');
const createMarkdownArray = require('./createMarkdownArray')
const { isExternal } = require('../utils')
const createSiteMap = require('./createSiteMap');

const links = []

function parseBar(file, options) {
  const textName = options.text || 'text'
  const linkName = options.link || 'link'
  const contents = []

  new MarkdownIt()
    .parse(fs.readFileSync(file, { encoding: 'utf-8' }))
    .forEach(token => {
      if (token.type === 'inline') {
        let [_, text, link] = token.content.match(/\[(.+?)\]\((.+?)\)/) || token.content.match(/(.+)/)

        if (link && !isExternal(link)) {
          link = path.join('/', link.replace(/\.md\b/, '')
            .replace(/\bREADME\b/, '')
            .replace(/\/index/, '/')
            .replace(/\?id=/, '#'))
            .replace(/\\/g, '/')

          links.push(link)
        }

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

  createSiteMap(links, () => links.length = 0)

  return tabs.length ? sidebar : false
}