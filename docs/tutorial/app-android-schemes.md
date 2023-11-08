Android中的url scheme是一种页面跳转协议，通过定义自己的scheme协议，可以非常方便的实现其它三方App调用你的App。
The url scheme in Android is a page jump protocol. By defining your own scheme protocol, you can easily implement other three-party apps to call your app.

**HBuilderX自带标准真机运行基座的UrlSchemes为"hbuilder://"**，方便开发者调测。
**The UrlSchemes of the standard real machine running base of HBuilderX is "hbuilder://"**, which is convenient for developers to debug.

### 设置UrlSchemes
### Set UrlSchemes

**可视化界面配置**  
**Visual interface configuration**
打开项目的manifest.json文件，在 “App常用其它设置” -> “Android设置” -> “UrlSchemes” 项中进行设置：
![](https://native-res.dcloud.net.cn/images/uniapp/others/urlschemes-android.png)

>注意：  
> Note:
>字符串建议使用小写字母（不要使用特殊字符、中文等），如设置为"test"，那么其他App呼起你的app的scheme协议就是"test://"；
> It is recommended to use lowercase letters for strings (do not use special characters, Chinese, etc.), if it is set to "test", then the scheme protocol of other apps calling your app is "test://";
>多个scheme使用 "," 分割，每个字符串为一个scheme；  
>Multiple schemes are separated by ",", each string is a scheme;
>如果可视化界面无法编辑，请切换到“源码视图”删除`schemes`节点数据重新操作。  
> If the visual interface cannot be edited, please switch to the "source view" to delete the `schemes` node data and re-operate.

**源码视图配置**  
**Source view configuration**
打开项目的manifest.json文件，切换到“源码视图”，根据项目类型进行配置
Open the manifest.json file of the project, switch to the "source view", and configure according to the project type

- uni-app项目  
- uni-app project
在 "app-plus"->"distribute"->"android" 节点的 schemes 属性配置UrlSchemes，示例如下：
Configure UrlSchemes in the schemes attribute of the "app-plus"->"distribute"->"android" node, for example:
``` js  
  "app-plus": {
    "distribute": {
      "android": {
        "schemes": "hbuilder,myuniapp"
        //...
      },
      //...
    },
    //...
  },
  //...
```

- 5+App/Wap2App项目  
- 5+App/Wap2App projects
在 "plus"->"distribute"->"google" 节点的 schemes 属性配置UrlSchemes，示例如下：
Configure UrlSchemes in the schemes property of the "plus"->"distribute"->"google" node, for example:
``` js  
  "plus": {
    "distribute": {
      "google": {
        "schemes": "hbuilder,myuniapp"
        //...
      },
      //...
    },
    //...
  },
  //...
```

> 注：为了向下兼容，HBuilderX源码视图配置时`schemes`属性值支持字符串数组，上面示例中的值也可以这么配置["hbuilder","myuniapp"]
> Note: For backward compatibility, the `schemes` property value supports a string array when configuring the HBuilderX source view. The value in the above example can also be configured like this ["hbuilder","myuniapp"]

**保存后提交App云端打包生效**
**Submit the App cloud package to take effect after saving**


### 浏览器中通过href启动应用
### Start the application via href in the browser
安装应用后，我们可以在H5页面中，通过href直接调用应用：
After installing the application, we can directly call the application through href in the H5 page:
```html
<a href="test://abc">test:<a><br/>
```

### App中处理scheme启动传递的参数
### App handles parameters passed by scheme startup
当其它三方App通过scheme启动App时，可以通过plus.runtime.arguments获取完整的urlscheme字符串。
When other third-party apps start the app through scheme, the complete urlscheme string can be obtained through plus.runtime.arguments.

- uni-app项目  
- uni-app project
建议在应用生命周期app.vue的`onshow`事件中获取，示例代码如下：
It is recommended to obtain it in the `onshow` event of the application life cycle app.vue. The sample code is as follows:
``` js  
onShow: function() {
	var args= plus.runtime.arguments;
	if(args){
		// 处理args参数，如直达到某新页面等
		// Process args parameters, such as until a new page is reached, etc.
	}
}
```

- 5+App/Wap2App项目  
- 5+App/Wap2App projects
在HTML页面的js中监听'plusready'和'newintent'事件回调中获取，示例代码如下：
Obtained by listening to the 'plusready' and 'newintent' event callbacks in the js of the HTML page. The sample code is as follows:
``` js  
document.addEventListener('plusready',function(){
	checkArguments();
},false);
// 判断启动方式
// Determine the startup method
function checkArguments(){
	console.log("plus.runtime.launcher: "+plus.runtime.launcher);
	var args= plus.runtime.arguments;
	if(args){
		// 处理args参数，如直达到某新页面等
		// Process args parameters, such as until a new page is reached, etc.
	}
}
// 处理从后台恢复
// handle resuming from background
document.addEventListener('newintent',function(){
	console.log("addEventListener: newintent");
	checkArguments();
},false);
```

