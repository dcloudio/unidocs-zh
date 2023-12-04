App的安装包都可以解压。前端资源，一般都是明文存放在安装包中，为防止解压后泄露敏感信息，需要进行安全处理。

由此DCloud提供了App端的js/nvue文件的原生混淆。5+ App/Wap2App支持对指定的js进行原生混淆。uni-app支持对指定的nvue文件原生混淆。

原生混淆后的安装包，解压后看到的都是乱码。

但需要注意：
1. 没有绝对的安全，非常重要的信息，应该保存在服务器而不是前端
2. 运行期对资源代码解密是影响执行性能的。不建议全包混淆，仅挑选需要保护的个别文件处理即可
3. uni-app项目制作wgt包不支持原生混淆加密（即使配置也不会生效），HBuilderX3.1.0+版本后支持
4. 为了保证加密数据的安全性，加密算法和key不对外公开，因此离线打包无法支持原生混淆加密，标准基座或自定义基座真机运行也不支持原生混淆加密（只有正式云打包才支持）

具体使用方式如下：

### 配置要混淆的js/nvue文件
打开manifest.json文件，切换到“源码视图”，按不同项目类型进行配置。

#### uni-app项目
uni-app的js运行在独立的jscore中，而不是webview中，所以不受iOS平台WKWebview不支持原生混淆的限制。
uni-app的vue页面中的js，是整体编译到一个大js文件中的，它经过编译，已经不再是vue源码了，但还不是乱码。对这个统一的大文件进行混淆会有影响性能。
所以uni-app只支持独立混淆nvue/js文件。
- vue页面
  HBuilderX2.6.3+版本[v3编译器](https://ask.dcloud.net.cn/article/36599)支持对独立的js文件进行原生混淆，开发者可以将要保护的js代码写到独立的js文件中，在vue页面中使用import引用；如果此js同时被nvue页面import引用，则nvue页面也需要配置原生混淆才有效。另外main.js也可以原生混淆。
  老版本不支持vue页面的原生混淆，开发者只能将要保护的js代码写到nvue文件中进行保护。
- nvue页面
  HBuilderX2.3.4+版本支持nvue文件的原生混淆。
  如果nvue页面引入了外部的js文件，会被一起原生混淆。但如果这个js还被其他不加密的文件引用，则该js仍然会暴露在安装包中。
- vue页面和nvue页面同时使用加密js里的数据或方法（HBuilderX2.6.3+版本v3编译器）
配置该js加密，并在App.vue中引用该js，把该js中的数据或方法赋值给全局对象，如globalData，vue和nvue中通过访问getApp访问共享数据或方法即可，无需配置nvue页面加密。

如果要发布多端的话，要保护的js最好写在app-plus的条件编译中，否则发布到其他端，还是无法原生混淆。

**HBuilderX2.3.4版本开始，uni-app项目支持对nvue文件进行原生混淆**

在"app-plus" -> "confusion" -> "resources"节点下添加要混淆的nvue文件列表：
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

<a id="vuejs"/>

**HBuilderX2.6.3+版本开始，uni-app项目使用[v3编译器](https://ask.dcloud.net.cn/article/36599)支持对vue页面中引用的js文件进行原生混淆**

在manifest.json文件中添加要混淆的js文件列表：
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
```
import test from '../common/test.js';
//test.join();  //调用引用js中的方法
```

**注意：uni-app中vue页面的webview组件支持加载使用加密混淆hybrid、static目录中的js文件，nvue页面的webview组件不支持。**

#### 5+ App/Wap2App项目
应用运行期间在页面打开时需要消耗更多时间进行混淆文件还原，为减少对运行速度的影响，5+App/wap2app仅支持对js文件进行原生混淆。
在"plus" -> "confusion" -> "resources"节点下添加要混淆的js文件列表：
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

<a id="wkwebview"></a>
**HBuilderX2.6.11+版本开始，在iOS11+设备上使用WKWebview也可以支持JS原生混淆**
WKWebview使用了更加严格的安全机制，使用原生混淆的js文件在html页面中必须使用自定义协议头plus-confusion://来引用：
```html
<script type="text/javascript" src="plus-confusion://../js/common.js"></script>
<!-- plus-confusion://后面为js文件路径，相对于当前html页面的路径 -->
```
在manifest.json的"plus" -> "confusion" -> "resources"节点下添加要混淆的js文件列表。
在"confusion"节点下添加 "supportWKWebview": true 支持WKWebview。
由于自定义协议仅在iOS11及以上设备才支持，建议配置应用支持的最低版本[deploymentTarget](https://ask.dcloud.net.cn/article/94#deploymentTarget)为11.0：
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


### 提交云端打包  
配置好原生混淆的文件列表后，需要提交云端打包，**注意在App云端打包对话框中需要勾选“对配置的js文件进行原生混淆”**
![](https://native-res.dcloud.net.cn/images/uniapp/security/confusion.png)


**再次强调：为了保证加密数据的安全性，加密算法和key不对外公开，因此离线打包无法支持原生混淆。** 
熟悉原生的开发者可将敏感信息存放于原生代码中，再与js进行交互。

对安全性要求较高的开发者，除了对前端js进行加密外，还应该对整个apk再进行一次加固。推荐[uni安全加固](/tutorial/app-security.md)其背后支持对接多个加固服务商，包括腾讯云和蚂蚁小程序云。

