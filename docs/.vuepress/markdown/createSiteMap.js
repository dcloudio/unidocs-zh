const fs = require('fs')
const path = require('path')

const domain = 'https://zh.uniapp.dcloud.io'
const xmlBefore = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`
const xmlAfter = `\n</urlset>`

module.exports = (links, callback = () => { }) => {
  const xmlItems = links.map(url => {
    return `  <url>
    <loc>${domain + url}</loc>
  </url>`
  }).join('\n')

  fs.writeFile(
    path.resolve(__dirname, '../../../root/sitemap.xml'),
    xmlBefore + xmlItems + xmlAfter,
    { encoding: 'utf-8' },
    callback
  )
}