从iOS9开始系统安全策略更新，加入对用户隐私以及禁止扫描系统信息的控制，限制了应用对scheme协议的访问。需要将其它App注册的scheme添加到应用访问白名单（LSApplicationQueriesSchemes）中才能实现以下功能：
Since iOS9, the system security policy has been updated, adding controls on user privacy and prohibiting scanning of system information, limiting the application's access to the scheme protocol. The schemes registered by other apps need to be added to the application access whitelist (LSApplicationQueriesSchemes) to achieve the following functions:
- 通过scheme检查其它App是否安装，不添加到白名单则检测结果为未安装（即使应用已经安装）
- Check whether other apps are installed through the scheme, if not added to the whitelist, the detection result is not installed (even if the app is already installed)
- 通过scheme协议调用其它App，不添加到白名单则会弹出提示框，用户确认后才能启动应用，添加到白名单列表后则无需用户确认直接启动应用。
- Call other apps through the scheme protocol. If they are not added to the whitelist, a prompt box will pop up. The app can be launched only after the user confirms it. After adding to the whitelist, the app can be launched directly without user confirmation.

**注意**  
**Notice**  
iOS15及以上系统限制每个应用最多只能配置50个白名单列表，超过50个的白名单会失效，在配置白名单时需要注意以下问题：
For iOS15 and above, each application can only be configured with a maximum of 50 whitelists. If the whitelist exceeds 50, the whitelist will be invalid. When configuring the whitelist, you need to pay attention to the following issues:
- 部分模块使用的三方SDK（如微信登录）需要添加白名单列表，三方SDK添加的白名单优先级高于manifest.json中配置的白名单
- The third-party SDK (such as WeChat login) used by some modules needs to add a whitelist. The whitelist added by the third-party SDK has a higher priority than the whitelist configured in manifest.json
- uni原生插件可能也会添加白名单列表，uni原生插件添加的白名单优先级高于manifest.json中配置的白名单
- The uni native plugin may also add a whitelist. The whitelist added by the uni native plugin has a higher priority than the whitelist configured in manifest.json


### 设置应用访问白名单列表
### Set application access whitelist list

#### 可视化界面配置
#### Visual interface configuration
打开项目的manifest.json文件，切换到“App常用其它设置”项，在“iOS设置”下的“应用访问白名单”编辑框中配置：
![](https://native-res.dcloud.net.cn/images/uniapp/ios/chemewhitelist.png)

**注意：多个白名单列表使用“,”分割**
**Note: Multiple whitelists are separated by ","**

> 提示：如果可视化界面无法编辑，请切换到“源码视图”配置
> Tip: If the visual interface cannot be edited, please switch to the "source view" configuration


#### 源码视图配置
#### Source view configuration
打开项目的manifest.json文件，切换到“代码视图” 
Open your project's manifest.json file and switch to "Code View"

- uni-app项目  
- uni-app project
在manifest.json文件的"app-plus"->"distribute"->"ios"下添加urlschemewhitelist节点数据如下：
Add the urlschemewhitelist node data under "app-plus"->"distribute"->"ios" in the manifest.json file as follows:
``` json
"plus": {  
"distribute": {  
    "ios": {  
        "urlschemewhitelist": "baidumap,iosamap",  
        //...  
    },  
    //...  
},  
//...  
},  
//... 
```

- 5+ App/Wap2App项目  
- 5+ App/Wap2App projects
把上面的urlschemewhitelist节点数据放到manifest.json的"plus"->"distribute"->"apple"节点下
Put the above urlschemewhitelist node data under the "plus"->"distribute"->"apple" node of manifest.json

**提示**  
**hint**  
>低版本HBuilderX中urlschemewhitelist字段值为数组类型，如下：
>``` json
>"urlschemewhitelist": ["baidumap","iosamap"]
>```
>云端打包也可以兼容生效，只是无法在可视化界面编辑。
>Cloud packaging is also compatible and effective, but cannot be edited in the visual interface.

**注意**
**Notice**
- 配置后需提交云端打包后才能生效，真机运行时请使用[自定义调试基座](https://ask.dcloud.net.cn/article/35115)
- After configuration, the cloud package must be submitted to take effect. Please use the [custom debugging base] when the real machine is running (https://ask.dcloud.net.cn/article/35115)
- 离线打包请直接在XCode工程中修改Info.plist文件的`LSApplicationQueriesSchemes`字段值
- For offline packaging, please modify the value of the `LSApplicationQueriesSchemes` field in the Info.plist file directly in the XCode project


### 云端打包默认添加应用访问白名单列表
### Cloud packaging adds application access whitelist by default
为了方便开发者调用一些常用的第三方应用，云端打包默认已经添加以下白名单
In order to facilitate developers to call some commonly used third-party applications, cloud packaging has added the following whitelists by default
``` txt
weixin
wechat
mqq
weibosdk2.5
weibosdk
mqqapi
mqzone
sinaweibo
sinaweibohd
mqqopensdkapiV3
mqqwpa
mqqopensdkapiV2
mqqOpensdkSSoLogin
qqmap
baidumap
iosamap
openApp.jdMobile
taobao
hbuilder
pinduoduo
imeituan
tmall
dianping
vipshop
yanxuan
suning
kaola
snssdk32
shark.video
wbmain
cydia
streamapp
kwai
pptv
bilibili
kugouURL
qqnews
zhihu
doubanradio
wccbyihaodian
ctrip
kuaikanmanhua
ntesopen
yddict
shanbay
gugutouchmanga
bobo
wtloginmqq2
qrxs
mailmaster
jcnhers
lightsky
gaeagj
yixin
ydcourse
awemesso'
```

**注意**  
**Notice**  
默认添加的应用访问白名单列表不会影响应用任何功能，当开发者配置的白名单超过50个时，默认添加的白名单列表将失效。
The application access whitelist added by default will not affect any function of the application. When the number of whitelists configured by the developer exceeds 50, the whitelist added by default will become invalid.


