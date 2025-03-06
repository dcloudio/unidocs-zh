const fs = require('fs')
const path = require('path')

const domain = 'https://zh.uniapp.dcloud.io'
const xmlBefore = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`
const xmlAfter = `\n</urlset>`

module.exports = (links, callback = () => { }) => {
  const xmlItems = links.map(url => {
    if (!url.endsWith('/') && !url.endsWith('html')) url += '.html'
    return `  <url>
    <loc>${domain + url}</loc>
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