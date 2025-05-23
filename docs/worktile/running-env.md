## 开发环境和生产环境

`uni-app` 可通过 `process.env.NODE_ENV` 判断当前环境是开发环境还是生产环境。一般用于连接测试服务器或生产服务器的动态切换。

- 在 HBuilderX 中，点击“运行”编译出来的代码是开发环境，点击“发行”编译出来的代码是生产环境
- cli 模式下，是通行的编译环境处理方式。

```javascript
if (process.env.NODE_ENV === 'development') {
	console.log('开发环境');// 发布到生产环境时，此处代码会被摇树移除掉。
} else {
	console.log('生产环境');
}
```

如果你需要自定义更多环境，比如测试环境：

- 假设只需要对单一平台配置，可以 package.json 中配置，在 HBuilderX 的运行和发行菜单里会多一个出来。[https://uniapp.dcloud.io/collocation/package](https://uniapp.dcloud.io/collocation/package)
- 如果是针对所有平台配置，可以在 vue-config.js 中配置。[https://uniapp.dcloud.io/collocation/vue-config](https://uniapp.dcloud.io/collocation/vue-config)

### 注意
* uni-app x不支持自定义环境变量。

**快捷代码块**

HBuilderX 中敲入代码块 `uEnvDev`、`uEnvProd` 可以快速生成对应 `development`、`production` 的运行环境判定代码。

```javascript
// uEnvDev
if (process.env.NODE_ENV === 'development') {
	// TODO
}
// uEnvProd
if (process.env.NODE_ENV === 'production') {
	// TODO
}
```

## 判断平台

平台判断有 2 种场景，一种是在编译期判断，一种是在运行期判断。

- 编译期判断
  编译期判断，即条件编译，不同平台在编译出包后已经是不同的代码。详见：[条件编译](/tutorial/platform.md)

```javascript
// #ifdef H5
alert('只有h5平台才有alert方法');
// #endif
```

如上代码只会编译到 H5 的发行包里，其他平台的包不会包含如上代码。

- 运行期判断
  运行期判断是指代码已经打入包中，仍然需要在运行期判断平台，此时可使用 `uni.getSystemInfoSync().platform` 判断客户端环境是 Android、iOS 还是小程序开发工具（在百度小程序开发工具、微信小程序开发工具、支付宝小程序开发工具中使用 `uni.getSystemInfoSync().platform` 返回值均为 devtools）。

```javascript
switch (uni.getSystemInfoSync().platform) {
	case 'android':
		console.log('运行Android上');
		break;
	case 'ios':
		console.log('运行iOS上');
		break;
	default:
		console.log('运行在开发者工具上');
		break;
}
```

如有必要，也可以在条件编译里自己定义一个变量，赋不同值。在后续运行代码中动态判断环境。

## 其他环境变量

其他环境变量的定义方式参考 [环境变量](/tutorial/env)。
