App的安装包都可以解压。前端资源，一般都是明文存放在安装包中，为防止解压后泄露敏感信息，需要进行安全处理。
The installation package of the app can be decompressed. Front-end resources are generally stored in clear text in the installation package. In order to prevent the leakage of sensitive information after decompression, security processing is required.

由此DCloud提供了App端的js/nvue文件的原生混淆。5+ App/Wap2App支持对指定的js进行原生混淆。uni-app支持对指定的nvue文件原生混淆。
As a result, DCloud provides native obfuscation of js/nvue files on the App side. 5+ App/Wap2App supports native obfuscation of specified js. uni-app supports native obfuscation of specified nvue files.

原生混淆后的安装包，解压后看到的都是乱码。
The original obfuscated installation package, after decompression, sees garbled characters.

但需要注意：
But need to pay attention:
1. 没有绝对的安全，非常重要的信息，应该保存在服务器而不是前端
1. There is no absolute security, very important information should be stored on the server instead of the front end
2. 运行期对资源代码解密是影响执行性能的。不建议全包混淆，仅挑选需要保护的个别文件处理即可
2. Decryption of resource code at runtime affects execution performance. All-inclusive obfuscation is not recommended, just select individual files that need to be protected for processing
3. uni-app项目制作wgt包不支持原生混淆加密（即使配置也不会生效），HBuilderX3.1.0+版本后支持
3. The wgt package produced by the uni-app project does not support native obfuscation encryption (even if the configuration does not take effect), it is supported after HBuilderX 3.1.0+
4. 为了保证加密数据的安全性，加密算法和key不对外公开，因此离线打包无法支持原生混淆加密，标准基座或自定义基座真机运行也不支持原生混淆加密（只有正式云打包才支持）
4. In order to ensure the security of encrypted data, the encryption algorithm and key are not disclosed to the public, so offline packaging cannot support native obfuscation encryption, nor does the standard base or custom base run on a real machine. support)

具体使用方式如下：
The specific usage is as follows:

### 配置要混淆的js/nvue文件
### Configure the js/nvue file to be obfuscated
打开manifest.json文件，切换到“源码视图”，按不同项目类型进行配置。
Open the manifest.json file, switch to the "source view", and configure according to different project types.

#### uni-app项目
#### uni-app project
uni-app的js运行在独立的jscore中，而不是webview中，所以不受iOS平台WKWebview不支持原生混淆的限制。
The js of uni-app runs in the independent jscore, not in the webview, so it is not limited by the native obfuscation that the iOS platform WKWebview does not support.
uni-app的vue页面中的js，是整体编译到一个大js文件中的，它经过编译，已经不再是vue源码了，但还不是乱码。对这个统一的大文件进行混淆会有影响性能。
The js in the vue page of uni-app is compiled into a large js file as a whole. After it is compiled, it is no longer the vue source code, but it is not garbled. Obfuscation of this uniform large file can affect performance.
所以uni-app只支持独立混淆nvue/js文件。
So uni-app only supports independent obfuscation of nvue/js files.
- vue页面
- vue page
  HBuilderX2.6.3+版本[v3编译器](https://ask.dcloud.net.cn/article/36599)支持对独立的js文件进行原生混淆，开发者可以将要保护的js代码写到独立的js文件中，在vue页面中使用import引用；如果此js同时被nvue页面import引用，则nvue页面也需要配置原生混淆才有效。另外main.js也可以原生混淆。
  HBuilderX2.6.3+ version [v3 compiler](https://ask.dcloud.net.cn/article/36599) supports native obfuscation of independent js files, developers can write the js code to be protected into independent js In the file, use the import reference in the vue page; if this js is also referenced by the nvue page import, the nvue page also needs to configure native obfuscation to be effective. In addition, main.js can also be natively obfuscated.
  老版本不支持vue页面的原生混淆，开发者只能将要保护的js代码写到nvue文件中进行保护。
  The old version does not support the native obfuscation of vue pages, and developers can only write the js code to be protected into the nvue file for protection.
- nvue页面
- nvue page
  HBuilderX2.3.4+版本支持nvue文件的原生混淆。
  HBuilderX 2.3.4+ version supports native obfuscation of nvue files.
  如果nvue页面引入了外部的js文件，会被一起原生混淆。但如果这个js还被其他不加密的文件引用，则该js仍然会暴露在安装包中。
  If the nvue page introduces external js files, it will be obfuscated natively. But if the js is also referenced by other unencrypted files, the js will still be exposed in the installation package.
- vue页面和nvue页面同时使用加密js里的数据或方法（HBuilderX2.6.3+版本v3编译器）
- Vue page and nvue page use data or methods in encrypted js at the same time (HBuilderX2.6.3+ version v3 compiler)
配置该js加密，并在App.vue中引用该js，把该js中的数据或方法赋值给全局对象，如globalData，vue和nvue中通过访问getApp访问共享数据或方法即可，无需配置nvue页面加密。
Configure the js encryption, reference the js in App.vue, and assign the data or methods in the js to the global object, such as globalData, in vue and nvue, you can access the shared data or methods by accessing getApp, no need to configure the nvue page encryption.

如果要发布多端的话，要保护的js最好写在app-plus的条件编译中，否则发布到其他端，还是无法原生混淆。
If you want to publish multiple terminals, the js to be protected is best written in the conditional compilation of app-plus, otherwise it will not be natively obfuscated if it is published to other terminals.

**HBuilderX2.3.4版本开始，uni-app项目支持对nvue文件进行原生混淆**
**HBuilderX2.3.4 version, the uni-app project supports native obfuscation of nvue files**

在"app-plus" -> "confusion" -> "resources"节点下添加要混淆的nvue文件列表：
Add a list of nvue files to confuse under the "app-plus" -> "confusion" -> "resources" node:
```javascript
    "app-plus": { 
        "confusion": {  
            "description": "NVUE原生混淆",  
            "resources": {  
                "pages/barcode/barcode.nvue": {   
                },   
                "pages/map/map.nvue": {   
                }   
            }   
        },  
        // ...  
    }
```
resource下的键名为nvue文件路径（相对于应用根目录），值为空JSON对象（大括号）。
The key under resource is the nvue file path (relative to the application root directory), and the value is an empty JSON object (curly brackets).

<a id="vuejs"/>

**HBuilderX2.6.3+版本开始，uni-app项目使用[v3编译器](https://ask.dcloud.net.cn/article/36599)支持对vue页面中引用的js文件进行原生混淆**
**Starting from HBuilderX2.6.3+, the uni-app project uses [v3 compiler](https://ask.dcloud.net.cn/article/36599) to support native obfuscation of js files referenced in vue pages**

在manifest.json文件中添加要混淆的js文件列表：
Add a list of js files to obfuscate in manifest.json file:
```javascript
    "app-plus": { 
        "confusion": {  
            "description": "原生混淆",  
            "resources": {  
                "common/test.js" : {}
            }   
        },  
        // ...  
    }
```
在vue文件中引用混淆的js文件：
Reference the obfuscated js file in the vue file:
```
import test from '../common/test.js';
//test.join();  //调用引用js中的方法
//test.join(); //Call the method in the reference js
```

**注意：uni-app中vue页面的webview组件支持加载使用加密混淆hybrid、static目录中的js文件，nvue页面的webview组件不支持。**
**Note: The webview component of the vue page in uni-app supports loading js files in the hybrid and static directories that are obfuscated with encryption, but the webview component of the nvue page does not support it. **

#### 5+ App/Wap2App项目
#### 5+ App/Wap2App projects
应用运行期间在页面打开时需要消耗更多时间进行混淆文件还原，为减少对运行速度的影响，5+App/wap2app仅支持对js文件进行原生混淆。
During the running of the application, it takes more time to restore the obfuscated files when the page is opened. To reduce the impact on the running speed, 5+App/wap2app only supports native obfuscation of js files.
在"plus" -> "confusion" -> "resources"节点下添加要混淆的js文件列表：
Add a list of js files to confuse under the "plus" -> "confusion" -> "resources" node:
```javascript
    "plus": { 
        "confusion": {  
            "description": "JS原生混淆",  
            "resources": {  
                "js/common.js": {   
                },   
                "js/immersed.js": {   
                }   
            }   
        },  
        // ...  
    }
```
resource下的键名为js文件路径（相对于应用根目录），值为空JSON对象（大括号）。
The key under resource is the js file path (relative to the application root directory), and the value is an empty JSON object (curly brackets).

<a id="wkwebview"></a>
**HBuilderX2.6.11+版本开始，在iOS11+设备上使用WKWebview也可以支持JS原生混淆**
**Starting from HBuilderX2.6.11+, using WKWebview on iOS11+ devices can also support JS native obfuscation**
WKWebview使用了更加严格的安全机制，使用原生混淆的js文件在html页面中必须使用自定义协议头plus-confusion://来引用：
WKWebview uses a stricter security mechanism, using native obfuscated js files in html pages must use custom protocol header plus-confusion:// to refer to:
```html
<script type="text/javascript" src="plus-confusion://../js/common.js"></script>
<!-- plus-confusion://后面为js文件路径，相对于当前html页面的路径 -->
<!-- plus-confusion:// is followed by the js file path, relative to the path of the current html page -->
```
在manifest.json的"plus" -> "confusion" -> "resources"节点下添加要混淆的js文件列表。
Add a list of js files to confuse under the "plus" -> "confusion" -> "resources" node of manifest.json.
在"confusion"节点下添加 "supportWKWebview": true 支持WKWebview。
Add "supportWKWebview": true under the "confusion" node to support WKWebview.
由于自定义协议仅在iOS11及以上设备才支持，建议配置应用支持的最低版本[deploymentTarget](https://ask.dcloud.net.cn/article/94#deploymentTarget)为11.0：
Since the custom protocol is only supported on iOS11 and above devices, it is recommended to configure the minimum version [deploymentTarget](https://ask.dcloud.net.cn/article/94#deploymentTarget) supported by the app to 11.0:
```json
    "plus": { 
        "confusion": {  
            "description": "JS原生混淆", 
            "supportWKWebview": true, 
            "resources": {  
                "js/common.js": {   
                }
            }   
        },
        "distribute": {
            "apple": {
                "deploymentTarget": "11.0"     //设置应用仅支持iOS11及以上设备
                //...
            }
        }
        // ...  
    }
```

**注意：iOS平台WKWebview需iOS11+系统才支持原生混淆。5+App/wap2app项目，如果要兼容iOS11以下设备只能强制使用UIWebview内核，但苹果将要废弃UIWebview（[详情](https://ask.dcloud.net.cn/article/36348)）。如对原生混淆很重视，从长远考虑，建议改造升级uni-app**
**Note: WKWebview on iOS platform requires iOS11+ system to support native obfuscation. For the 5+App/wap2app project, if you want to be compatible with devices below iOS11, you can only force the use of UIWebview kernel, but Apple will abandon UIWebview ([Details](https://ask.dcloud.net.cn/article/36348)). If you attach great importance to native confusion, in the long run, it is recommended to transform and upgrade uni-app**


### 提交云端打包  
### Submit cloud package
配置好原生混淆的文件列表后，需要提交云端打包，**注意在App云端打包对话框中需要勾选“对配置的js文件进行原生混淆”**
![](https://native-res.dcloud.net.cn/images/uniapp/security/confusion.png)


**再次强调：为了保证加密数据的安全性，加密算法和key不对外公开，因此离线打包无法支持原生混淆。** 
**Emphasis again: In order to ensure the security of encrypted data, the encryption algorithm and key are not disclosed to the public, so offline packaging cannot support native obfuscation. **
熟悉原生的开发者可将敏感信息存放于原生代码中，再与js进行交互。
Developers who are familiar with native can store sensitive information in native code, and then interact with js.

对安全性要求较高的开发者，除了对前端js进行加密外，还应该对整个apk再进行一次加固。推荐[uni安全加固](/uni-app-security.md)其背后支持对接多个加固服务商，包括腾讯云和蚂蚁小程序云。

