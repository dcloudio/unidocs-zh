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
        src = (insertComponent && ppConfig.EN ? '<md-translatedbygoogle />\n' : '') + translate(src)
      }
      src = pp.preprocess(src, ppConfig)
      return mdParse.bind(this)(src, env)
    }
  })(md.parse)
  md.render = (function (mdRender) {
    return function (src, env, insertComponent = true) {
      /* if (src) {
        src = (insertComponent && ppConfig.EN ? '<md-translatedbygoogle />\n' : '') + translate(src)
      }
      src = pp.preprocess(src, ppConfig) */
      return mdRender.bind(this)(src, env)
    }
  })(md.render)
}
module.exports.translate = translate