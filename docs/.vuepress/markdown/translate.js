const pp = require('preprocess');
const parse = require('../../../../unidocs-auto-deploy/src/translation/parse')

const ppConfig = {
  EN: process.env.DOCS_LOCAL === 'en' ? true : undefined,
  ZH: process.env.DOCS_LOCAL === 'zh' ? true : undefined
}

function translate(content) {
  const key = ppConfig.EN ? 'target' : 'origin'
  return parse(content)[key].join('\n')
}

module.exports = md => {
  md.parse = (function (mdParse) {
    return function (src, env, insertComponent =  true) {
      if (src) {
        src = pp.preprocess(src, ppConfig)
        src = translate(src)
      }
      return mdParse.bind(this)((insertComponent && ppConfig.EN ? '<md-translatedByGoogle />\n' : '') + src, env)
    }
  })(md.parse)
  /* md.render = (function (mdRender) {
    return function (src, env, insertComponent = true) {
      if (src) {
        src = pp.preprocess(src, ppConfig)
        src = translate(src)
      }
      return mdRender.bind(this)((insertComponent && ppConfig.EN ? '<md-translatedByGoogle />\n' : '') + src, env)
    }
  })(md.render) */
}
module.exports.translate = translate