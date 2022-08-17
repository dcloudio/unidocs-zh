const parse = require('../../../../unidocs-auto-deploy/src/translation/parse')

function translate(content) {
  const key = process.env.DOCS_LOCAL === 'en' ? 'target' : 'origin'
  return parse(content)[key].join('\n')
}

module.exports = md => {
  md.parse = (function (mdParse) {
    return function (src, ...array) {
      if (src) {
        src = (process.env.DOCS_LOCAL === 'en' ? '<md-translatedByGoogle />\n' : '') + translate(src)
      }
      return mdParse.bind(this)(src, ...array)
    }
  })(md.parse)
  md.render = (function (mdRender) {
    return function (src, ...array) {
      if (src) {
        src = (process.env.DOCS_LOCAL === 'en' ? '<md-translatedByGoogle />\n' : '') + translate(src)
      }
      return mdRender.bind(this)(src, ...array)
    }
  })(md.render)
}
module.exports.translate = translate