## 体验 hello uniCloud

Hello uniCloud，是一个示例，演示了 uniCloud 的各种能力。

### 体验示例
这个示例目前只发布了h5版本和Android app版。

Hello uniCloud部署了2套，分别连接uniCloud的阿里云版和腾讯云版。

- h5版地址（发布在uniCloud的前端网页托管上）
	* Hello uniCloud 腾讯云版地址：[https://hellounicloud.dcloud.net.cn/tcb/](https://hellounicloud.dcloud.net.cn/tcb/)
	* Hello uniCloud 阿里云版地址：[https://hellounicloud.dcloud.net.cn/#/](https://hellounicloud.dcloud.net.cn/#/)
	
	由于该示例未适配pc宽屏，如使用pc浏览器打开地址，建议F12打开控制台，使用手机模式预览。
	
- apk地址（发布在uniCloud的云存储上）
	* Hello uniCloud 腾讯云版地址：[apk下载](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1a10688c-0b30-4aaa-bbc1-7f4948cc562a/bdf452e4-3a0d-49cb-9a97-8e1aa6572758.apk)
	* Hello uniCloud 阿里云版地址：[apk下载](https://m3w.cn/__uni__5c6d4e4)

### 运行 Hello uniCloud 源码

Hello uniCloud 的源码地址：[https://ext.dcloud.net.cn/plugin?id=4082](https://ext.dcloud.net.cn/plugin?id=4082)

1. 在 HBuilderX 新建项目界面，选择uni-app项目，选择 Hello uniCloud 项目模板。
	- 初次体验推荐阿里云，因为腾讯云的开户流程更复杂。
	- 推荐使用vue3版本，因为编译速度更快。但注意不支持低版本Android。
	<div align=center>
	  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/create-unicloud.jpg"/>
	</div>
2. HBuilderX 会在项目创建后弹出 uniCloud初始化向导，根据向导部署
	- 按照法律要求，开通云服务器需实名认证，如未认证请根据提示完成
	- 创建一个服务空间，创建完成后回到向导刷新列表，选择这个服务空间（创建服务空间可能需要几十秒的时间，可以在web控制台查看是否创建完成。）
	- 按照向导提示，将hello uniCloud项目下的云函数、数据库schema上传部署到服务空间，并执行db_init初始化数据库
	
	**说明**
	
	- 第一次创建腾讯云服务空间时会为用户创建腾讯云账号并跳转到腾讯云实名界面，等待实名认证审核之后可以开通服务空间。若腾讯云实名认证提示身份证下已创建过多账户，则需要在腾讯云官网注销不用的账户。
	- 阿里云每个账号可以有一个开发者版免费空间，此空间资源较少仅能用于测试开发。腾讯云无免费空间。
	
3. 运行 hello uniCloud项目
	- 在运行菜单运行项目，浏览器、app、小程序均可。uniCloud项目是云端一体的，运行前端后控制台会同时出现前端和云端的控制台。

## 开发自己的第一个uniCloud项目

1. 创建uniCloud项目
  
  HBuilderX中新建项目，选择uni-app项目，并勾选`启用uniCloud`，在右侧选择服务供应商（腾讯云或阿里云）
  
  项目名称随意，比如 firstunicloud

2. 关联服务空间

一个开发者可以拥有多个服务空间，每个服务空间都是一个独立的serverless云环境，不同服务空间之间的云函数、数据库、存储都是隔离的。

对项目根目录`uniCloud`点右键选择`关联云服务空间`，绑定之前创建的服务空间，或者新建一个服务空间。

  
3. 创建云函数/云对象

`uniCloud`项目创建并绑定服务空间后，开发者可以创建云函数（云对象是云函数的一种，云函数可泛指普通云函数和云对象）。

在`uniCloud/cloudfunctions`目录右键创建云函数/云对象

<div align=center>
  <img style="max-width:750px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/createFun-a.jpg"/>
</div>

- 创建云函数后，生成一个目录，该目录下自动生成index.js，是该云函数的入口文件，不可改名。
- 创建云对象后，生成一个目录，该目录下自动生成index.obj.js，是该云对象的入口文件，不可改名。

如果该云函数/云对象还需要引入其他js，可在index.js入口文件中引用。

初学者，建议从云对象学起，比云函数更加简单直观。

在本教程中，我们创建一个云对象名为 helloco。

4. 给云对象编写方法

打开index.obj.js，我们为它添加一个 sum 方法，逻辑就是接收传入a和b2个参数，返回求和结果。

```js
module.exports = {
	sum(a, b) {
		// 此处省略a和b的有效性校验
		return a + b
	}
}
```

5. 在前端调用云对象

在项目首页，pages/index/index.vue 里，添加一个按钮，点击后执行异步方法sum。

js 中 import 这个 helloco 对象，调用它的 sum 方法

```html
<template>
	<view class="content">
		<button @click="testco()">请求云对象的方法</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			async testco() { // 注意异步
				const helloco = uniCloud.importObject('helloco') // 导入云对象
				try {
					const res = await helloco.sum(1,2) //导入云对象后就可以直接调用该对象的sum方法了，注意使用异步await
					console.log(res) // 结果是3
				} catch (e) {
					console.log(e)
				}
			}
		}
	}
</script>
```

6. 运行

将项目运行到浏览器或其他平台，点页面上的按钮，控制台会打印结果：3

HBuilderX自带一个云函数本地运行环境，运行项目时也默认选择 连接本地云函数。可以在底部控制台中的前端控制台右上角进行切换。

可以对helloco云对象点右键上传到uniCloud服务空间，然后在前端控制台右上角切换为 连接云端云函数，那么此时客户端连接的就是真正的现网uniCloud服务器了。

关于运行调试，有单独文档，[详见](rundebug.md)

7. 小结

到此为止，你已经开发了第一个 first uniCloud 项目，完成了客户端和服务器的第一次交互。

这个云对象只做了一个求和运算，实际开发中不需要在服务器求和，前端就可以求和。服务器应该做更复杂的事情。

但你可以通过这个示例感知uniCloud的开发，其实非常简单。尤其是云对象，打破了服务器做接口传json给前端的传统，让云端服务对象化，让服务器代码像写前端js一样、清晰。

接下来，建议通读文档，进一步学习掌握uniCloud。


## cli项目中使用uniCloud

如果要在cli项目中使用uniCloud，可以参考以下步骤

1. 将cli项目导入`HBuilderX`
2. 如果没有appid的话，需要打开`src/manifest.json`，在`基础配置-->uni-app应用标识`处点击`重新获取`
3. 在项目根目录（src同级）点右键创建uniCloud云开发环境
4. 对uniCloud目录点右键关联服务空间
5. 完成

**注意**

- 运行与发行云函数只能使用HBuilderX的菜单，不可使用`package.json`内的命令
- 如果HBuilderX菜单运行不能满足需求可以考虑自行初始化服务空间[服务空间初始化](uniCloud/init.md)
- 虽然uni-app支持vscode等其他ide开发，但因为uniCloud对安全性要求极高，仅支持使用HBuilderX开发
- HBuilderX 也支持 cli。[详见](https://hx.dcloud.net.cn/cli/README)


## web控制台@webcp

web控制台网址：[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn)

在HX中对 uniCloud 目录点右键，或者在帮助菜单中，均有入口链接。

### 编辑数据库数据注意事项@editdb

在web控制台可以对数据库进行编辑。在json文档中，输入字符串、数字、bool值都是常规的操作。但有2种特殊数据类型，时间和地理位置，在编辑时有特殊的写法，请注意：

#### 添加日期@editdb-date

在web控制台添加/修改数据时，如果输入`"2020-12-02 12:12:12"`会变成字符串，而不是日期格式。此时需通过以下方式添加日期类型数据。

<!-- {
  "create_date": {
    "$date": "2020-12-02 12:12:12" // 添加utc+8时区对应的日期对象作为create_date
  }
} -->

```js
{
  "create_date": {
    "$date": 1606910053154 // 添加此时间戳对应的日期对象作为create_date
  }
}
```
注：时间戳无需如此复杂。时间戳只需直接输入不加引号的数字即可。

#### 添加地理位置点@editdb-geopoint

```js
// 将location字段设置为经度116、纬度38的地理位置点
{
  "location": {
    "type": "Point",
    "coordinates": [116,38]
  }
}
```

#### Web中使用uniCloud的跨域处理@useinh5

文档已移至：[Web中使用uniCloud的跨域处理](publish.md#useinh5)

