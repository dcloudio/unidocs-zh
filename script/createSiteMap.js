const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it');
const { tabs, isExternal } = require('../docs/.vuepress/utils');

const domain = 'https://zh.uniapp.dcloud.io'
const links = []

const xmlBefore = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`
const xmlAfter = `\n</urlset> `

tabs.forEach(tab => {
  parseBar(path.join(__dirname, '../docs', tab, '_sidebar.md'))
})

const xmlItems = links.map(url => {
  return `  <url>
    <loc>${url}</loc>
  </url>`
})

fs.writeFileSync('./root/sitemap.xml', xmlBefore + xmlItems.join('\n') + xmlAfter)

function parseBar(file) {
  new MarkdownIt()
    .parse(fs.readFileSync(file, { encoding: 'utf-8' }))
    .forEach(token => {
      if (token.type === 'inline') {
        let [_, text, link] = token.content.match(/\[(.+?)\]\((.+?)\)/) || token.content.match(/(.+)/)

        if (link && !isExternal(link)) {
          link = domain + path.join('/', link.replace(/\.md\b/, '')
            .replace(/\bREADME\b/, '')
            .replace(/\/index/, '/')
            .replace(/\?id=/, '#'))
            .replace(/\\/g, '/')

          links.push(link)
        }
      }
    })
}
