/**
 * doc : https://shiki.matsu.io/
 * @param {} param 
 * @param {*} context 
 * @returns 
 */
const {
	logger,
	chalk,
	escapeHtml
} = require('@vuepress/shared-utils')

function wrap(code, lang) {
	if (lang === 'text') {
		code = escapeHtml(code)
	}
	return `<pre v-pre><code>${code}</code></pre>`
	// return code
}

const langType = [
	'abap', 'actionscript-3', 'ada', 'apache', 'apex', 'apl', 'applescript', 'asm', 'astro', 'awk', 'ballerina',
	'bat', 'batch', 'berry', 'be', 'bibtex', 'bicep', 'c', 'cadence', 'cdc', 'clojure', 'clj', 'cobol', 'codeql',
	'ql', 'coffee', 'cpp', 'crystal', 'csharp', 'c#', 'css', 'cue', 'd', 'dart', 'diff', 'docker', 'dream-maker',
	'elixir', 'elm', 'erb', 'erlang', 'fish', 'fsharp', 'f#', 'gherkin', 'git-commit', 'git-rebase', 'glsl',
	'gnuplot', 'go', 'graphql', 'groovy', 'hack', 'haml', 'handlebars', 'hbs', 'haskell', 'hcl', 'hlsl', 'html',
	'ini', 'java', 'javascript', 'js', 'jinja-html', 'json', 'jsonc', 'jsonnet', 'jssm', 'fsl', 'jsx', 'julia',
	'kotlin', 'latex', 'less', 'liquid', 'lisp', 'logo', 'lua', 'make', 'makefile', 'markdown', 'md', 'marko',
	'matlab', 'mdx', 'mermaid', 'nginx', 'nim', 'nix', 'objective-c', 'objc', 'objective-cpp', 'ocaml', 'pascal',
	'perl', 'php', 'plsql', 'postcss', 'powershell', 'ps', 'ps1', 'prisma', 'prolog', 'pug', 'jade', 'puppet',
	'purescript', 'python', 'py', 'r', 'raku', 'perl6', 'razor', 'rel', 'riscv', 'rst', 'ruby', 'rb', 'rust', 'rs',
	'sas', 'sass', 'scala', 'scheme', 'scss', 'shaderlab', 'shader', 'shellscript', 'shell', 'bash', 'sh', 'zsh',
	'smalltalk', 'solidity', 'sparql', 'sql', 'ssh-config', 'stata', 'stylus', 'styl', 'svelte', 'swift',
	'system-verilog', 'tasl', 'tcl', 'tex', 'toml', 'tsx', 'turtle', 'twig', 'typescript', 'ts', 'vb', 'cmd',
	'verilog', 'vhdl', 'viml', 'vim', 'vimscript', 'vue-html', 'vue', 'wasm', 'wenyan', '文言', 'xml', 'xsl', 'yaml',
	'zenscript'
]

module.exports = ({
	theme = "nord",
	langs = []
}, context) => ({
	name: "custom-shiki",
	async extendMarkdown(md) {
		const shiki = require("shiki");
		const highlighter = await shiki.getHighlighter({
			theme,
			langs,
		});
		md.options.highlight = (code, lang) => {
			if (!lang) { 
				lang = 'text'
			}else{
				if(langType.indexOf(lang) === -1){ 
					logger.warn(chalk.yellow(`[vuepress] Syntax highlight for language "${lang}" is not supported.`))
					lang = 'text'
				}
			}
			let mdCode = highlighter.codeToHtml(code, lang);
			//  mdCode = highlighter.codeToHtml(code, {lang,theme});
			return wrap(mdCode, lang);
		};
	},
});
