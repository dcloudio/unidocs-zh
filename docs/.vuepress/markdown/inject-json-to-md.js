let cssJson = {};
let utsJson = {};
try {
	cssJson = require('../utils/cssJson.json');
} catch (error) {}
try {
	utsJson = require('../utils/utsJson.json');
} catch (error) {}

const getJSON = text => {
	let match = text.match(/<!--\s*CSSJSON.([\w\W]+[^\s])\s*-->/);
	if (match) {
		return {
			match,
			json: cssJson,
		};
	}

	match = text.match(/<!--\s*UTSJSON.([\w\W]+[^\s])\s*-->/);
	if (match) {
		return {
			match,
			json: utsJson,
		};
	}

	return {
		match: null,
		json: {},
	};
};

module.exports = function (md, opts) {
	if (Object.keys(cssJson) === 0) return false;
	md.core.ruler.after('inline', 'merge-css', function (state) {
		/* const ids = []
		let idIdx = 1 */
		for (let index = 0; index < state.tokens.length; index++) {
			const blockToken = state.tokens[index];
			if (blockToken.type === 'html_block') {
				const { match, json } = getJSON(blockToken.content);
				if (match) {
					const jsonPath = match[1];
					const path = jsonPath.split('.');
					let temp = json;
					path.forEach(key => {
						temp = temp[key];
					});
					const parseTokens = md.parse(temp);
					/* parseTokens.forEach(token => {
						if (token.type === 'heading_open') {
							const id = token.attrGet('id')
							if(ids.includes(id)) {
								token.attrSet('id', `${id}_${idIdx++}`)
							} else {
								ids.push(id)
							}
						}
					}) */
					state.tokens.splice(index, 1, ...parseTokens);
					index = index + parseTokens.length - 1;
					// blockToken.content = temp
				}
			}
		}
		return false;
	});
};
