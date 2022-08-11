const parse = require('../../../script/parse')

function translate(content) {
  return parse(content)[process.env.DOCS_LOCAL === 'en' ? 'target' : 'origin'].join('\n')
}

module.exports = md => {
  md.parse = (function (mdParse) {
    return function (src, ...array) {
      if (src) {
        src = translate(src)
      }
      return mdParse.bind(this)(src, ...array)
    }
  })(md.parse)
  md.render = (function (mdRender) {
    return function (src, ...array) {
      if (src) {
        src = translate(src)
      }
      return mdRender.bind(this)(src, ...array)
    }
  })(md.render)
}
module.exports.translate = translate