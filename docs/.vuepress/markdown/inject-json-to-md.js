let cssJson = {};
let utsJson = {};
let utsApiJson = {};
let utsComJson = {};
let utsUnicloudApiJson = {};
let customTypeJson = {};
try {
	cssJson = require(`../utils/${process.env.DOCS_LOCAL}/cssJson.json`);
} catch (error) {}
try {
	utsJson = require(`../utils/${process.env.DOCS_LOCAL}/utsJson.json`);
} catch (error) {}
try {
	utsApiJson = require(`../utils/${process.env.DOCS_LOCAL}/utsApiJson.json`);
} catch (error) {}
try {
	utsComJson = require(`../utils/${process.env.DOCS_LOCAL}/utsComJson.json`);
} catch (error) {}
try {
	utsUnicloudApiJson = require(`../utils/${process.env.DOCS_LOCAL}/utsUnicloudApiJson.json`);
} catch (error) {}
try {
	customTypeJson = require('../utils/customTypeJson.json');
} catch (error) {}


function getRegExp(key) {
	return new RegExp(`<!--\\s*${key}.([\\w\\W]+[^\\s])\\s*-->`)
}

const getJSON = text => {
	let match = text.match(getRegExp('CSSJSON'));
	if (match) {
		return {
			match,
			json: cssJson,
		};
	}
	
	match = text.match(getRegExp('UTSJSON'));
	if (match) {
		return {
			match,
			json: utsJson,
		};
	}
	
	match = text.match(getRegExp('UTSAPIJSON'));
	if (match) {
		return {
			match,
			json: utsApiJson,
		};
	}

	match = text.match(getRegExp('UTSCOMJSON'));
	if (match) {
		return {
			match,
			json: utsComJson,
		};
	}

	match = text.match(getRegExp('UTSUNICLOUDAPIJSON'));
	if (match) {
		return {
			match,
			json: utsUnicloudApiJson,
		};
	}

	match = text.match(getRegExp('CUSTOMTYPEJSON'));
	if (match) {
		return {
			match,
			json: customTypeJson,
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
		const ids = []
		let idIdx = 1
		for (let index = 0; index < state.tokens.length; index++) {
			const blockToken = state.tokens[index];
			if (blockToken.type === 'html_block') {
				const { match, json } = getJSON(blockToken.content);
				if (match) {
					const jsonPath = match[1];
					const path = jsonPath.split('.');
					let temp = json;
					path.forEach(key => {
						if (!temp) return false;
						temp = temp[key];
					});
					if (!temp) continue;
					const parseTokens = md.parse(temp);
					parseTokens.forEach(token => {
						if (token.type === 'heading_open') {
							const id = token.attrGet('id')
							if(ids.includes(id)) {
								token.attrSet('id', `${id}_${idIdx++}`)
							} else {
								ids.push(id)
							}
						}
					})
					state.tokens.splice(index, 1, ...parseTokens);
					index = index + parseTokens.length - 1;
					// blockToken.content = temp
				}
			}
		}
		return false;
	});
};
