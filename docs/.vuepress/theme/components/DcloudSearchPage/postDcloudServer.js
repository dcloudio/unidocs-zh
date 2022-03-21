const isProduction = process.env.NODE_ENV === "production"
const isMock = true
import mock from './mock'

function ajax(url = '', method = 'get',) {
  return new Promise((resolve, reject) => {
    if (!url) reject('url 不可为空')
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.response)
      }
    }
    xhr.send()
  })
}

export async function postExt(query) {
  const base = isProduction ? '//ext.dcloud.net.cn' : '/ext'
  let extRet
  if (!isMock) {
    const extRes = await ajax(base + '/search/json?query=' + encodeURIComponent(query))
    extRet = JSON.parse(extRes);
  } else {
    extRet = mock.ext;
  }

  let extHtml = '';
  let data = extRet.data;
  if (extRet.ret === 0) {
    for (let i = 0, len = data.length; i < len; i++) {
      extHtml += _renderExt(data[i], query);
    }
  }
  return {
    html: extHtml,
    hits: data.length
  }
}

export async function postAsk(query) {
  const base = isProduction ? '//ask.dcloud.net.cn' : '/ask'
  let ret
  if (!isMock) {
    const res = await ajax(base + '/search/ajax/search_result/search_type-doc__q-' + query + '__page-1')
    if (!res) {
      return;
    }
    ret = JSON.parse(res);
  } else {
    ret = mock.ask
  }
  if (ret.code !== 0) {
    checkEmpty()
    return;
  }

  var data = ret.data;
  var askHtml = '';
  data.forEach(function (item) {
    askHtml += _renderPost(item, query);
  });
  return {
    html: askHtml,
    hits: data.length
  }
}

function _renderExt(ext, keyword) {
  return `<div class="matching-post">
    <a href="${ext.url}" target="_blank">
      <div class="post-wrapper">
        <h2>
          <p class="aw-text">
            <span class="post-tag">插件</span>
          </p>
          ${_handleHTMLString(ext.name, keyword)}
        </h2>
      </div>
      <p>${ext.total_download}次下载</p>
      <p>${_handleHTMLString(ext.description, keyword)}</p>
    </a>
  </div>`
}

function _renderPost(post, value) {
  var html = '';
  var commentText = '';
  var tagName = '规范';

  // 1，问题；2，文章；默认是规范。
  switch (post.type) {
    case 'questions':
      tagName = '问题';
      break;
    case 'articles':
      tagName = '文章';
      break;
  }

  if (!!value) {
    post.title = _handleHTMLString(post.title, value);
    post.content = _handleHTMLString(post.content, value);
  }

  html += `<div class="matching-post">
    <a href="${post.url}" target="_blank">
    <div class="post-wrapper">
      <h2>
        <p class="aw-text">
          <span class="post-tag">${tagName}</span>
        </p>
        ${post.title}
      </h2>
  </div>`

  if (!!value) {
    commentText = post.type === 'questions' ? '回复' : '评论';
    html += `<p>
      ${post.comment_count}个${commentText}
      <span class="aw-text-space">-</span>
      ${post.view_count}次浏览
    </p>`;
  }

  html += `\n<p>${post.content}</p>\n</a>\n</div>`;

  return html;
}

function _handleHTMLString(dataString, keyword) {
  var keywordReg = new RegExp(
    keyword.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'),
    'gi'
  );
  var tagStartReg = new RegExp(
    '&lt;span style=\'font-weight:bold;color:red\'&gt;',
    'g'
  );
  var tagEndReg = new RegExp(
    '&lt;/span&gt;',
    'g'
  );

  return dataString
    .replace(tagStartReg, '')
    .replace(tagEndReg, '')
    .replace(keywordReg, ("<em class=\"search-keyword\">" + keyword + "</em>"));
};