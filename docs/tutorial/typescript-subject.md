### TypeScript 支持
### TypeScript support

uni-app 支持使用 ts 开发，可参考 [Vue.js TypeScript 支持](https://cn.vuejs.org/v2/guide/typescript.html) 说明。
uni-app supports ts development, please refer to [Vue.js TypeScript Support](https://cn.vuejs.org/v2/guide/typescript.html) for instructions.

类型定义文件由 @dcloudio/types 模块提供，安装后请注意配置 tsconfig.json 文件中的 compilerOptions > types 部分，如需其他小程序平台类型定义也可以安装，如：miniprogram-api-typings、mini-types。对于缺少或者错误的类型定义，可以自行在本地新增或修改并同时报告给官方请求更新。
The type definition file is provided by the @dcloudio/types module. After installation, please configure the compilerOptions > types section in the tsconfig.json file. You can also install other miniprogram platform type definitions, such as: miniprogram-api-typings, mini-types . For missing or wrong type definitions, you can add or modify them locally and report to the official request for updates at the same time.

### 开发方式@vue-ts
### Development method @vue-ts

- HBuilderX创建的项目
- Projects created by HBuilderX

在 vue 或 nvue 页面的 script 节点，添加属性 `lang="ts"`
In the script node of the vue or nvue page, add the attribute `lang="ts"`

```html
<script lang="ts">
// 这里编写ts代码
// write ts code here
	let s:string = "123"
	console.log(s)
</script>
```

如果需使用vue组件，则需要`import Vue from 'vue'`，具体[见下](#component)
If you need to use vue components, you need `import Vue from 'vue'`, specifically [see below](#component)

- cli创建的项目
- cli created project

需要在创建项目时就指定ts，具体请另行参考[文档](https://uniapp.dcloud.io/quickstart-cli.html#install-vue-cli)
You need to specify ts when creating a project. For details, please refer to [documentation](https://uniapp.dcloud.io/quickstart-cli.html#install-vue-cli)

### 修改 Typescript 配置
### Modify Typescript configuration

在根目录创建 `tsconfig.json` 文件，并进行个性化配置，推荐配置如下：
Create a `tsconfig.json` file in the root directory and perform personalized configuration. The recommended configuration is as follows:
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "sourceMap": true,
    "skipLibCheck": true,
    "importHelpers": true,
    "allowSyntheticDefaultImports": true,
    "useDefineForClassFields": true,
    "resolveJsonModule": true,
    "lib": [
      "esnext",
      "dom"
    ],
    "types": [
      "@dcloudio/types"
    ]
  },
  "exclude": [
    "node_modules",
    "unpackage",
    "src/**/*.nvue"
  ]
}
```

个性化配置是可选的，没有`tsconfig.json`时会自动使用默认配置运行。
Personalized configuration is optional, without `tsconfig.json` it will automatically run with the default configuration.

### TypeScript 支持兼容性说明
### TypeScript Support Compatibility Notes
- uni-app 的 vue2 模式：nvue 文件中不支持编写 ts。vue 文件中可以使用 ts，但 ts 版本根据项目类型有区别。HBuilderX 创建的项目使用 ts 3.7.5，cli 创建的项目使用 ts 4.x。
- vue2 mode for uni-app: writing ts in nvue file is not supported. ts can be used in vue files, but the ts version is different according to the project type. Projects created by HBuilderX use ts 3.7.5 and projects created by cli use ts 4.x.
- uni-app 的 vue3 模式：vue 文件及 nvue 文件均支持最新版 ts。
- vue3 mode of uni-app: Both vue files and nvue files support the latest version of ts.

### ts组件@component
### ts component @component

声明 `lang="ts"` 后，该 vue/nvue 文件 import 进来的所有 vue 组件，均需要使用 ts 编写。
After declaring `lang="ts"`, all vue components imported by this vue/nvue file need to be written in ts.

**示例代码**
**Sample code**

改造 uni-badge.vue
Modification uni-badge.vue

```ts
<script lang="ts">
    // 仅展示需要修改的核心代码，完整代码请参考原来的组件。
    //Only the core code that needs to be modified is displayed. For the complete code, please refer to the original components.
	import Vue from 'vue';
	export default Vue.extend({
		props: {
			type: {
				type: String,
				default: 'default'
			},
			inverted: {
				type: Boolean,
				default: false
			},
			text: {
				type: [String, Number],
				default: ''
			},
			size: {
				type: String,
				default: 'normal'
			}
		},
		computed: {
			setClass(): string {
				const classList: string[] = ['uni-badge-' + this.type, 'uni-badge-size-' + this.size];
				if (this.inverted === true) {
					classList.push('uni-badge-inverted')
				}
				return classList.join(" ")
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	})
</script>
```

在 index.vue 中引用 uni-badge 组件
Reference the uni-badge component in index.vue

```ts
<script lang="ts">
	import Vue from 'vue';
	import uniBadge from '../../components/uni-badge.vue';
	export default Vue.extend({
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			uniBadge
		}
	});
</script>
```
