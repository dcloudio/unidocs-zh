module.exports = function (md, opts) {
	md.core.ruler.after('inline', 'image-attrs', function (state) {
		state.tokens.forEach(function (blockToken) {
			if (blockToken.type === 'inline' && blockToken.children) {
				blockToken.children.forEach(function (token) {
					const type = token.type;
					if (type === 'image') {
						const src = token.attrGet('src')
						if (
							!token.attrGet('loading') &&
							src &&
							src.indexOf('qiniu-web-assets.dcloud.net.cn') > -1
						) {
							token.attrPush(['loading', 'lazy'])
						}
					}
				});
			}
		});
		return false;
	});
};
