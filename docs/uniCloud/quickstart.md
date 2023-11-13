# uniCloud快速上手

## hello uniCloud

Hello uniCloud，是一个示例，演示了 uniCloud 的各种能力。
Hello uniCloud, is an example that demonstrates the various capabilities of uniCloud.

### 体验示例
### Experience example
这个示例目前只发布了h5版本和Android app版。
This example is currently only released for h5 version and Android app version.

Hello uniCloud部署了2套，分别连接uniCloud的阿里云版和腾讯云版。
Hello uniCloud has deployed 2 sets, which are connected to the Alibaba Cloud version and Tencent Cloud version of uniCloud respectively.

- h5版地址（发布在uniCloud的前端网页托管上）
	* Hello uniCloud 支付宝小程序云版地址：[https://hellounicloud.dcloud.net.cn/alipay/](https://hellounicloud.dcloud.net.cn/alipay/#/)
	* Hello uniCloud 阿里云版地址：[https://hellounicloud.dcloud.net.cn/#/](https://hellounicloud.dcloud.net.cn/#/)
	* Hello uniCloud 腾讯云版地址：[https://hellounicloud.dcloud.net.cn/tcb/](https://hellounicloud.dcloud.net.cn/tcb/)
	
	由于该示例未适配pc宽屏，如使用pc浏览器打开地址，建议F12打开控制台，使用手机模式预览。
	Since this example is not adapted to the PC wide screen, if you use the PC browser to open the address, it is recommended to open the console with F12 and use the mobile phone mode to preview.
	
- apk地址（发布在uniCloud的云存储上）
	* Hello uniCloud 支付宝小程序云版地址：[apk下载](https://env-00jx4sbgbkj5.normal.cloudstatic.cn/apk/__UNI__HelloUniCloud_1113203614.apk)
	* Hello uniCloud 阿里云版地址：[apk下载](https://m3w.cn/__uni__5c6d4e4)
	* Hello uniCloud 腾讯云版地址：[apk下载](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-1a10688c-0b30-4aaa-bbc1-7f4948cc562a/bdf452e4-3a0d-49cb-9a97-8e1aa6572758.apk)

### 运行 Hello uniCloud 源码
### Run Hello uniCloud source code

Hello uniCloud 的源码地址：[https://ext.dcloud.net.cn/plugin?id=4082](https://ext.dcloud.net.cn/plugin?id=4082)
Source address of Hello uniCloud: [https://ext.dcloud.net.cn/plugin?id=4082](https://ext.dcloud.net.cn/plugin?id=4082)

1. 在 HBuilderX 新建项目界面，选择uni-app项目，选择 Hello uniCloud 项目模板。
1. On the HBuilderX new project interface, select the uni-app project, and select the Hello uniCloud project template.
	- 初次体验推荐阿里云，因为腾讯云的开户流程更复杂。
	- Alibaba Cloud is recommended for the first experience, because the account opening process of Tencent Cloud is more complicated.
	- 推荐使用vue3版本，因为编译速度更快。但注意不支持低版本Android。
	- The vue3 version is recommended because the compilation speed is faster. But note that lower versions of Android are not supported.
	<div align=center>
	  <img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/202310242120336.png"/>
	</div>
2. HBuilderX 会在项目创建后弹出 uniCloud初始化向导，根据向导部署
2. HBuilderX will pop up the uniCloud initialization wizard after the project is created, and deploy according to the wizard
	- 按照法律要求，开通云服务器需实名认证，如未认证请根据提示完成
	- According to legal requirements, real-name authentication is required to open a cloud server. If not, please complete it according to the prompts
	- 创建一个服务空间，创建完成后回到向导刷新列表，选择这个服务空间（创建服务空间可能需要几十秒的时间，可以在web控制台查看是否创建完成。）
	- Create a service space. After the creation is complete, go back to the wizard to refresh the list and select the service space (it may take tens of seconds to create a service space. You can check whether the creation is complete in the web console.)
	- 按照向导提示，将hello uniCloud项目下的云函数、数据库schema上传部署到服务空间，并执行db_init初始化数据库
	- Follow the wizard prompts to upload and deploy the cloud function and database schema under the hello uniCloud project to the service space, and execute db_init to initialize the database
	
	**说明**
	**illustrate**
	
	- 第一次创建腾讯云服务空间时会为用户创建腾讯云账号并跳转到腾讯云实名界面，等待实名认证审核之后可以开通服务空间。若腾讯云实名认证提示身份证下已创建过多账户，则需要在腾讯云官网注销不用的账户。
	- When creating a Tencent Cloud service space for the first time, a Tencent Cloud account will be created for the user and redirected to the Tencent Cloud real-name interface, and the service space can be opened after waiting for the real-name authentication review. If the Tencent Cloud real-name authentication prompts that too many accounts have been created under the ID card, you need to cancel the unused accounts on the Tencent Cloud official website.
	- 阿里云每个账号可以有一个开发者版免费空间，此空间资源较少仅能用于测试开发。腾讯云无免费空间。
    - 首次创建支付宝小程序云时，需前往uniCloud控制台开通支付宝小程序云服务空间，开通服务空间时需使用支付宝扫码授权开通支付宝小程序云服务。
	
3. 运行 hello uniCloud项目
3. Run the hello uniCloud project
	- 在运行菜单运行项目，浏览器、app、小程序均可。uniCloud项目是云端一体的，运行前端后控制台会同时出现前端和云端的控制台。
	- Run the project in the run menu, browser, app, applet can be. The uniCloud project is integrated with the cloud. After running the front-end, the console of the front-end and the cloud will appear at the same time.

## 开发自己的第一个uniCloud项目
## Develop your own first uniCloud project

1. 创建uniCloud项目
1. Create an uniCloud project
  
  HBuilderX中新建项目，选择uni-app项目，并勾选`启用uniCloud`，在右侧选择服务供应商（支付宝小程序云、阿里云、腾讯云）
  
  项目名称随意，比如 firstunicloud
  The project name is arbitrary, such as firstunicloud

2. 关联服务空间
2. Associated Service Spaces

一个开发者可以拥有多个服务空间，每个服务空间都是一个独立的serverless云环境，不同服务空间之间的云函数、数据库、存储都是隔离的。
A developer can have multiple service spaces. Each service space is an independent serverless cloud environment. Cloud functions, databases, and storage between different service spaces are isolated.

对项目根目录`uniCloud`点右键选择`关联云服务空间`，绑定之前创建的服务空间，或者新建一个服务空间。
Right-click on the project root directory `uniCloud` and select `Associate Cloud Service Space`, bind the previously created service space, or create a new service space.

  
3. 创建云函数/云对象
3. Create cloud functions/cloud objects

`uniCloud`项目创建并绑定服务空间后，开发者可以创建云函数（云对象是云函数的一种，云函数可泛指普通云函数和云对象）。
After the `uniCloud` project is created and bound to the service space, developers can create cloud functions (cloud objects are a type of cloud functions, and cloud functions can generally refer to common cloud functions and cloud objects).

在`uniCloud/cloudfunctions`目录右键创建云函数/云对象
Right-click in the `uniCloud/cloudfunctions` directory to create cloud functions/cloud objects

<div align=center>
  <img style="max-width:750px;" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/createFun-a.jpg"/>
</div>

- 创建云函数后，生成一个目录，该目录下自动生成index.js，是该云函数的入口文件，不可改名。
- After the cloud function is created, a directory is generated, and index.js is automatically generated in this directory, which is the entry file of the cloud function and cannot be renamed.
- 创建云对象后，生成一个目录，该目录下自动生成index.obj.js，是该云对象的入口文件，不可改名。
- After the cloud object is created, a directory is generated, and index.obj.js is automatically generated in this directory, which is the entry file of the cloud object and cannot be renamed.

如果该云函数/云对象还需要引入其他js，可在index.js入口文件中引用。
If the cloud function/cloud object needs to import other js, it can be referenced in the index.js entry file.

初学者，建议从云对象学起，比云函数更加简单直观。
For beginners, it is recommended to start with cloud objects, which are simpler and more intuitive than cloud functions.

在本教程中，我们创建一个云对象名为 helloco。
In this tutorial, we create a cloud object named helloco.

4. 给云对象编写方法
4. Write methods for cloud objects

打开index.obj.js，我们为它添加一个 sum 方法，逻辑就是接收传入a和b2个参数，返回求和结果。
Open index.obj.js, we add a sum method to it, the logic is to receive the incoming a and b2 parameters, and return the summation result.

```js
module.exports = {
	sum(a, b) {
		// 此处省略a和b的有效性校验
		// The validity check of a and b is omitted here
		return a + b
	}
}
```

5. 在前端调用云对象
5. Call cloud objects on the front end

在项目首页，pages/index/index.vue 里，添加一个按钮，点击后执行异步方法sum。
In the project home page, pages/index/index.vue, add a button, and execute the asynchronous method sum after clicking.

js 中 import 这个 helloco 对象，调用它的 sum 方法
Import the helloco object in js and call its sum method

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
6. Run

将项目运行到浏览器或其他平台，点页面上的按钮，控制台会打印结果：3
Run the project to a browser or other platform, click the button on the page, the console will print the result: 3

HBuilderX自带一个云函数本地运行环境，运行项目时也默认选择 连接本地云函数。可以在底部控制台中的前端控制台右上角进行切换。
HBuilderX comes with a cloud function local running environment, and it also chooses to connect to the local cloud function by default when running the project. It can be toggled in the top right corner of the front console in the bottom console.

可以对helloco云对象点右键上传到uniCloud服务空间，然后在前端控制台右上角切换为 连接云端云函数，那么此时客户端连接的就是真正的现网uniCloud服务器了。
You can right-click on the helloco cloud object to upload it to the uniCloud service space, and then switch to Connect to the cloud cloud function in the upper right corner of the front-end console, then the client is connected to the real uniCloud server on the live network.

关于运行调试，有单独文档，[详见](rundebug.md)
For running debugging, there is a separate document, [see details](rundebug.md)

7. 小结
7. Summary

到此为止，你已经开发了第一个 first uniCloud 项目，完成了客户端和服务器的第一次交互。
So far, you have developed the first uniCloud project and completed the first interaction between client and server.

这个云对象只做了一个求和运算，实际开发中不需要在服务器求和，前端就可以求和。服务器应该做更复杂的事情。
This cloud object only performs a summation operation. In actual development, the summation on the server is not required, and the frontend can do the summation. The server should do more complicated things.

但你可以通过这个示例感知uniCloud的开发，其实非常简单。尤其是云对象，打破了服务器做接口传json给前端的传统，让云端服务对象化，让服务器代码像写前端js一样、清晰。
But you can perceive the development of uniCloud through this example, it is actually very simple. In particular, cloud objects break the tradition of sending json to the front-end by the server as an interface, making cloud services objectified, and making the server code as clear as writing front-end js.

接下来，建议通读文档，进一步学习掌握uniCloud。
Next, it is recommended to read through the documentation to further learn to master uniCloud.


## cli项目中使用uniCloud
## Using uniCloud in the cli project

如果要在cli项目中使用uniCloud，可以参考以下步骤
If you want to use uniCloud in a cli project, you can refer to the following steps

1. 将cli项目导入`HBuilderX`
1. Import the cli project into `HBuilderX`
2. 如果没有appid的话，需要打开`src/manifest.json`，在`基础配置-->uni-app应用标识`处点击`重新获取`
2. If there is no appid, you need to open `src/manifest.json`, click `Re-acquire` at `Basic configuration --> uni-app application ID`
3. 在项目根目录（src同级）点右键创建uniCloud云开发环境
3. Right-click in the project root directory (src same level) to create an uniCloud cloud development environment
4. 对uniCloud目录点右键关联服务空间
4. Right-click on the uniCloud directory to associate the service space
5. 完成
5. Done

**注意**
**Notice**

- 运行与发行云函数只能使用HBuilderX的菜单，不可使用`package.json`内的命令
- You can only use the menu of HBuilderX to run and release cloud functions, not the commands in `package.json`
- 如果HBuilderX菜单运行不能满足需求可以考虑自行初始化服务空间[服务空间初始化](uniCloud/init.md)
- If the HBuilderX menu operation cannot meet the requirements, you can consider initializing the service space by yourself [Service space initialization](uniCloud/init.md)
- 虽然uni-app支持vscode等其他ide开发，但因为uniCloud对安全性要求极高，仅支持使用HBuilderX开发
- Although uni-app supports the development of other IDEs such as vscode, because uniCloud has extremely high security requirements, it only supports development with HBuilderX
- HBuilderX 也支持 cli。[详见](https://hx.dcloud.net.cn/cli/README)
- HBuilderX also supports cli. [See details](https://hx.dcloud.net.cn/cli/README)


## web控制台@webcp
## web console @webcp

web控制台网址：[https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn)
Web console URL: [https://unicloud.dcloud.net.cn](https://unicloud.dcloud.net.cn)

在HX中对 uniCloud 目录点右键，或者在帮助菜单中，均有入口链接。
Right-click on the uniCloud directory in HX, or in the help menu, there are entry links.

### 编辑数据库数据注意事项@editdb
### Notes on editing database data @editdb

在web控制台可以对数据库进行编辑。在json文档中，输入字符串、数字、bool值都是常规的操作。但有2种特殊数据类型，时间和地理位置，在编辑时有特殊的写法，请注意：
The database can be edited in the web console. In a json document, entering strings, numbers, and bool values are all normal operations. But there are 2 special data types, time and geographic location, which have special writing method when editing, please note:

#### 添加日期@editdb-date
#### Date added @editdb-date

在web控制台添加/修改数据时，如果输入`"2020-12-02 12:12:12"`会变成字符串，而不是日期格式。此时需通过以下方式添加日期类型数据。
When adding/modifying data in the web console, if you enter `"2020-12-02 12:12:12"`, it will become a string instead of a date format. At this point, you need to add date type data in the following ways.

<!-- {
  "create_date": {
    "$date": "2020-12-02 12:12:12" // 添加utc+8时区对应的日期对象作为create_date
    "$date": "2020-12-02 12:12:12" // Add the date object corresponding to the utc+8 time zone as create_date
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
Note: Timestamps don't need to be so complicated. Timestamps can simply be entered directly without quotes.

#### 添加地理位置点@editdb-geopoint
#### Add geopoint @editdb-geopoint

```js
// 将location字段设置为经度116、纬度38的地理位置点
// Set the location field to a geographic location point with longitude 116 and latitude 38
{
  "location": {
    "type": "Point",
    "coordinates": [116,38]
  }
}
```

#### Web中使用uniCloud的跨域处理@useinh5
#### Cross-domain processing using uniCloud in the Web @useinh5

文档已移至：[Web中使用uniCloud的跨域处理](publish.md#useinh5)
Documentation has been moved to: [Cross-domain processing using uniCloud on the Web](publish.md#useinh5)

