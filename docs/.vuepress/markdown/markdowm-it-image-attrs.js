module.exports = function (md, opts) {
	md.core.ruler.after('inline', 'image-attrs', function (state) {
		state.tokens.forEach(function (blockToken) {
			if (blockToken.type === 'inline' && blockToken.children) {
				blockToken.children.forEach(function (token) {
					const type = token.type;
					if (type === 'image') {
						const src = token.attrs.find(attr => attr[0] === 'src');
						if (
							src &&
							src[1].indexOf('qiniu-web-assets.dcloud.net.cn') > -1 &&
							token.attrs.map(attr => attr[0]).indexOf('loading') < 0
						) {
							token.attrs.push(['loading', 'lazy']);
						}
					}
				});
			}
		});
		return false;
	});
};
