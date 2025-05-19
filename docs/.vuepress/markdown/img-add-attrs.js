module.exports = function (md, opts) {
  const oldRendererImageRule = md.renderer.rules.image
  md.renderer.rules.image = function (tokens, idx, ...args) {
    var token = tokens[idx]
    var url = token.attrGet('src')
    if (!token.attrGet('loading') && matchSrc(url)) {
      token.attrPush(['loading', 'lazy'])
    }
    return oldRendererImageRule(tokens, idx, ...args)
  }
  md.core.ruler.after('inline', 'image-attrs', function (state) {
    let joinTokenContent = false
    let handleToken = null
    for (let i = 0; i < state.tokens.length; i++) {
      const blockToken = state.tokens[i]
      if (blockToken.type === 'html_block') {
        if (joinTokenContent && handleToken) {
          handleToken.content += blockToken.content
          state.tokens.splice(i, 1)
          i--
        } else {
          if (i === state.tokens.length - 1) {
            // 如果是最后一个token，直接替换
            replaceHTML(blockToken, addLoadingAttr, state.env)
          } else {
            joinTokenContent = true
            handleToken = blockToken
          }
        }
      } else {
        joinTokenContent = false
        if (handleToken) {
          replaceHTML(handleToken, addLoadingAttr, state.env)
          handleToken = null
        }

        if (blockToken.type === 'inline' && blockToken.children) {
          blockToken.children.forEach(function (token) {
            const type = token.type
            if (type === 'html_inline') {
              replaceHTML(token, addLoadingAttr, state.env)
            }
          })
        }
      }
    }
    return false
  })
}

/**
 *
 * @param {Record<string,any>} attribs
 */
function addLoadingAttr(attribs) {
  if (matchSrc(attribs.src) && !attribs.loading) {
    attribs.loading = 'lazy'
  }
}

/**
 *
 * @param {string} [src] img src
 * @returns
 */
function matchSrc(src) {
  return typeof src === 'string' && ['qiniu-web-assets.dcloud.net.cn','web-ext-storage.dcloud.net.cn'].some((item) => src.includes(item))
}

function replaceNodes(nodes, replace, env, token) {
  if (!nodes) return
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    if (node.attribs) {
      if (node.name === 'img' && node.attribs.src) {
        replace(node.attribs)
      }
    }
    replaceNodes(node.children, replace, env, token)
  }
}

function replaceHTML(token, replace, env) {
  const htmlparser = require('htmlparser2')
  const serializer = require('dom-serializer')
  const dom = new htmlparser.parseDocument(token.content, {
    lowerCaseTags: false,
    xmlMode: true,
    decodeEntities: false,
  })
  /**
   * 会将 <a/> 标签解析成 <a></a>
   * 会将 <style></style> 标签解析
   */
  if (!dom.firstChild || ['a', 'style'].includes(dom.firstChild.name)) return
  replaceNodes(dom.children, replace, env, token)
  token.content = serializer.render(dom, { encodeEntities: false, xmlMode: 'foreign' })
}
