let utsApiJson = {}
let utsComJson = {}
try {
  utsApiJson = require('../utils/uniappApiJson.json')
} catch (error) {}
try {
  utsComJson = require('../utils/uniappComJson.json')
} catch (error) {}

function getRegExp(key, text) {
  return new RegExp(`<!--\\s*${key}.([\\w\\W]+[^\\s])\\s*-->`)
}

/**
 *
 * @param {string} text
 * @returns {{match: RegExpMatchArray | null, json: {}, regExp: RegExp | null}
 */
const getJSON = text => {
  const APIJSONRegExp = getRegExp('UNIAPPAPIJSON')
  match = text.match(APIJSONRegExp)
  APIJSONRegExp.lastIndex = 0
  if (match) {
    return {
      match,
      json: utsApiJson,
      regExp: APIJSONRegExp,
    }
  }

  const COMJSONRegExp = getRegExp('UNIAPPCOMJSON')
  match = text.match(COMJSONRegExp)
  COMJSONRegExp.lastIndex = 0
  if (match) {
    return {
      match,
      json: utsComJson,
      regExp: COMJSONRegExp,
    }
  }

  return {
    match: null,
    json: {},
    regExp: null,
  }
}

const NEWLINE_CHARACTER = /\r?\n/

module.exports = md => {
  md.parse = (function (MD_PARSE) {
    return function (src, ...args) {
      if (src && getJSON(src).match) {
        const lines = src.split(NEWLINE_CHARACTER)
        for (let index = 0; index < lines.length; index++) {
          const line = lines[index]

          const { match, json, regExp } = getJSON(line)
          if (match && regExp) {
            const jsonPath = match[1]
            const path = jsonPath.split('.')
            let temp = json
            path.forEach(key => {
              if (!temp) return false
              temp = temp[key]
            })
            if (typeof temp === 'undefined') continue
            lines[index] = lines[index].replace(regExp, temp)
          }
        }

        return MD_PARSE.bind(this)(lines.join('\n'), ...args)
      }
      return MD_PARSE.bind(this)(src, ...args)
    }
  })(md.parse)
}
