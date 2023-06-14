const fs = require('fs')
const path = require('path')

const domain = process.env.DOCS_LOCAL === 'en' ?
  'https://en.uniapp.dcloud.io' :
  'https://zh.uniapp.dcloud.io'
const xmlBefore = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`
const xmlAfter = `\n</urlset>`

module.exports = (links, callback = () => { }) => {
  const xmlItems = links.map(url => {
    let _url = domain + url
    if (!_url.endsWith('/') && !_url.endsWith('.html')) _url += '.html'
    return `  <url>
    <loc>${_url}</loc>
  </url>`
  }).join('\n')

  const rootPath = path.resolve(__dirname, '../public')
  const staticExists = fs.existsSync(rootPath)
  if (!staticExists) fs.mkdirSync(rootPath)

  fs.writeFile(
    path.resolve(rootPath, 'sitemap.xml'),
    xmlBefore + xmlItems + xmlAfter,
    { encoding: 'utf-8' },
    callback
  )
}