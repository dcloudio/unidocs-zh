Android中的url scheme是一种页面跳转协议，通过定义自己的scheme协议，可以非常方便的实现其它三方App调用你的App。

**HBuilderX自带标准真机运行基座的UrlSchemes为"hbuilder://"**，方便开发者调测。

### 设置UrlSchemes

**可视化界面配置**  
打开项目的manifest.json文件，在 “App常用其它设置” -> “Android设置” -> “UrlSchemes” 项中进行设置：
![](https://native-res.dcloud.net.cn/images/uniapp/others/urlschemes-android.png)

>注意：  
>字符串建议使用小写字母（不要使用特殊字符、中文等），如设置为"test"，那么其他App呼起你的app的scheme协议就是"test://"；
>多个scheme使用 "," 分割，每个字符串为一个scheme；  
>如果可视化界面无法编辑，请切换到“源码视图”删除`schemes`节点数据重新操作。  

**源码视图配置**  
打开项目的manifest.json文件，切换到“源码视图”，根据项目类型进行配置

- uni-app项目  
在 "app-plus"->"distribute"->"android" 节点的 schemes 属性配置UrlSchemes，示例如下：
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
在 "plus"->"distribute"->"google" 节点的 schemes 属性配置UrlSchemes，示例如下：
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

**保存后提交App云端打包生效**


### 浏览器中通过href启动应用
安装应用后，我们可以在H5页面中，通过href直接调用应用：
```html
<a href="test://abc">test:<a><br/>
```

### App中处理scheme启动传递的参数
当其它三方App通过scheme启动App时，可以通过plus.runtime.arguments获取完整的urlscheme字符串。

- uni-app项目  
建议在应用生命周期app.vue的`onshow`事件中获取，示例代码如下：
``` js  
onShow: function() {
	var args= plus.runtime.arguments;
	if(args){
		// 处理args参数，如直达到某新页面等
	}
}
```

- 5+App/Wap2App项目  
在HTML页面的js中监听'plusready'和'newintent'事件回调中获取，示例代码如下：
``` js  
document.addEventListener('plusready',function(){
	checkArguments();
},false);
// 判断启动方式
function checkArguments(){
	console.log("plus.runtime.launcher: "+plus.runtime.launcher);
	var args= plus.runtime.arguments;
	if(args){
		// 处理args参数，如直达到某新页面等
	}
}
// 处理从后台恢复
document.addEventListener('newintent',function(){
	console.log("addEventListener: newintent");
	checkArguments();
},false);
```

