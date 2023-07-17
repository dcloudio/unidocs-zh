# iOS原生应用配置文件和资源

app打包，在iOS原生开发中提供了配置 Info.plist 和 资源文件（Bundle Resources）。uni-app中对常用项进行了封装，提供了[manifest.json](https://uniapp.dcloud.net.cn/collocation/manifest-app.html)。

但manifest.json不能包含所有iOS的配置。

在HBuilderX 3.6.5以前，开发者如需使用manifest未封装的配置、或需自定义资源文件（Bundle Resources）内容，只能离线打包或开发[App原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)。

HBuilderX3.6.5起，支持直接在应用项目中配置 iOS 平台的 Info.plist 和 资源文件（Bundle Resources）。


## 配置文件 Info.plist

在HBuilderX中，对项目根目录右键菜单 "新建" -> "自定义文件"  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/newfile.png)

输入文件名称 `Info.plist`（注意大小写敏感），点击 “创建” 按钮新建文件  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/ios/info.png)

根据应用需求编辑添加需要的内容，如下示例：
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>My_Custom_String_Key</key>
    <string>My_Custom_String_Value</string>
    <key>My_Custom_Array_Key</key>
    <array>
      <dict>
        <key>My_Custom_Array_Item_Key</key>
        <string>My_Custom_Array_Item_Value</string>
        <key>My_Custom_Array_Item_Key2</key>
        <string>My_Custom_Array_Item_Value2</string>
      </dict>
    </array>
  </dict>
</plist>
```


**注意**
- plist文件必须符合标准的xml格式  
- plist文件必须符合Apple Information Property List规范，参考[详情](https://developer.apple.com/documentation/bundleresources/information_property_list)  
	* 文件头需加`<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">`
	* 根节点必须是plist，二级节点必须是dict   
- Info.plist的内容和manifest.json的内容应避免冲突，即不配置manifest中已经配置过的内容。云端打包时会合并到app中的Info.list文件，出现冲突时Info.plist的内容会覆盖manifest.json中配置  
- plist文件配置需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)



##  资源文件（Bundle Resources）  

HBuilderX中对项目右键菜单 "新建" -> "目录"  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/newdir.png)

输入名称 `nativeResources`（注意大小写敏感），确定并创建目录。

继续创建“ios”子目录、创建“Resources”二级子目录，结构如下：  
![](https://native-res.dcloud.net.cn/images/uniapp/nativeresource/ios/directory.png)

将需要添加的iOS原生资源文件拷贝到Resources目录，云端打包时将会合并到安装包的.app中。

**注意**
- ios目录下不支持放Object-C/Swift源码文件，需要开发源码建议使用[UTS插件](https://uniapp.dcloud.net.cn/plugin/uts-plugin.html)或[uni原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)  
- resources目录中的资源文件不能通过uni API使用，需通过 iOS 原生 API 访问，参考[Accessing a Bundle's Contents](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFBundles/Introduction/Introduction.html#//apple_ref/doc/uid/10000123i-CH1-SW1)。也就是在uni-app中，访问这些资源需要通过uts代码访问或编写[uni原生语言插件](https://nativesupport.dcloud.net.cn/NativePlugin/README)  
- resources目录中已经保留使用以下文件，需注意避免冲突

<pre v-pre="" data-lang="">
	<code class="lang-" style="padding:0">
┌─Pandora                       //uni-app资源目录
│  └─apps                       //应用资源目录
│    └─[AppID]                  //使用DCloud AppID作为目录名称
├─PandoraApi.bundle             //uni-app SDK内置资源目录
├─control.xml                   //uni-app模块配置文件
├─dcloud_logo@2x.png           //应用logo图片
├─dcloud_logo@3x.png           //应用logo图片
├─uni-jsframework.js           //uni-app vue2框架
├─uni-jsframework-vue3.js      //uni-app vue3框架
├─uni-jsframework-dev.js       //uni-app vue2框架（开发模式）
├─uni-jsframework-vue3-dev.js  //uni-app vue3框架（开发模式）
├─unincomponents.ttf           //uni-app内置字体图标
└─userPosition@2x.png          //地图模块当前位置图标
	</code>
</pre>
- 应用资源目录配置需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)

## 离线打包  
离线打包时应用清单文件和资源需要开发者手动合并到XCode原生工程中。


