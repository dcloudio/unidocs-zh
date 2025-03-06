# 客户端安全API

uni-app和5+App提供了一批API，获取客户端一些与安全有关的信息。

::: warning
更推荐使用[uni云端一体安全网络](https://doc.dcloud.net.cn/uniCloud/secure-network.html)，使用安全网络后将无需在使用本章节提供的API。
:::

### 应用签名标识
[plus.navigator.getSignature](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)用于获取应用签名标识，可以判断App是否被重新签名。

签名证书是对App开发者身份的唯一标识，如果程序未对签名证书进行校验，可能被反编译后进行二次打包使用其它签名证书重新签名。如重新签名的App可以正常启动，则可能导致App被仿冒盗版，影响其合法收入，甚至可能被添加钓鱼代码、病毒代码、恶意代码，导致用户敏感信息泄露或者恶意攻击。

uni-app项目可以在App.vue的应用生命周期[onLaunch](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)中进行校验，示例如下：
``` js
  onLaunch: function(inf) {
      console.log('App Launch');
// #ifdef APP-PLUS
      // 签名证书检验
      var platform = uni.getSystemInfoSync.platform;
      var sign = plus.navigator.getSignature();
      if('android'==platform){   //Android平台
        var sha1 = 'baad093a82829fb432a7b28cb4ccf0e9f37dae58';  //修改为自己应用签名证书SHA-1值，是全小写并且中间不包含“:”符号
        if(sha1!=sign){
          //证书不对时退出应用
          plus.runtime.quit();
        }
      }else{    //iOS平台
        var md5 = 'a2e629f0ea915b4ed11e296a059c9a12';   //修改为自己应用Apple Bunld ID(AppID)的md5值
        if(md5!=sign){
          //不进入应用或循环弹出提示框
          console.log('应用被破坏，无法正常运行！');
          uni.showModal({
            title:'错误',
            content: '应用被破坏，无法正常运行！',
          });
        }
      }
// #endif
  }

```

> 提示：为了防止js检验代码被反编译篡改，建议将签名校验代码放到独立js文件中并配置[js/nvue文件原生混淆加密](app-sec-confusion)，或者使用apk加固处理

#### uni-app x 项目  
uni-app x 项目不支持 plus API，需使用 [uni.getAppBaseInfo](https://doc.dcloud.net.cn/uni-app-x/api/get-app-base-info.html#%E8%BF%94%E5%9B%9E%E5%80%BC) 返回值中的 signature 属性值。  


### isSimulator
[plus.navigator.isSimulator](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)用于判断当前应用是否运行在模拟器中。

iOS系统由于苹果限制了正式打包后不能在模拟器上运行，一般不存在这种情况；Android系统是开源的，底层代码都是公开的，因此市面上有很多Android模拟器，此问题比较严重。

模拟器通常是运行在PC上，可以利用一些自动化工具自动操作使用App，另外模拟器是一个虚拟操作系统，可能会破坏原生系统的安全性，导致用户敏感信息泄露。

以下示例在App.vue的应用生命周期[onLaunch](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)中进行校验，如下：
``` js
  onLaunch: function(inf) {
      console.log('App Launch');
// #ifdef APP-PLUS
      // 模拟器检验
      if(plus.navigator.isSimulator()){
          //弹出提示框
          uni.showModal({
            title:'错误',
            content: '应用被不能运行到模拟器！',
            complete: ()=>{
              plus.runtime.quit();
            }
          });
      }
// #endif
  }
```

实际项目中可以将此信息提交业务服务器进行判断，如在模拟器环境不允许登录等，多次尝试在模拟器登录可以临时封号，人工客户联系用户核实等，具体可根据业务情况进行调整。

> 提示：为了防止js检验代码被反编译篡改，建议将签名校验代码放到独立js文件中并配置[js/nvue文件原生混淆加密](app-sec-confusion)，或者使用apk加固处理

#### uni-app x 项目  
uni-app x 项目可通过 [uni.getDeviceInfo](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html#%E8%BF%94%E5%9B%9E%E5%80%BC) 返回值中的 isSimulator 属性值获取。  


### isSetProxy
[plus.networkinfo.isSetProxy](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)用于判断当前应用网络环境是否设置代理。

设置代理后所有网络传输的数据都会经过代理服务器，也就是说代理服务器可能看到所有传入内容，导致用户敏感信息泄露、业务服务器被恶意攻击等问题。当然在某些企业内部网络环境为了保证安全，访问公网可能需要设置代理，开发者需要考虑这种需求来决定是否限制应用正常运行。

可以在用户登录时提交当前网络环境是否使用代理，示例代码如下：
``` js
  function login() {
      //...
      //获取网络代理状态
      var isProxy = plus.networkinfo.isSetProxy();
      if(isProxy){
        console.log("当前网络环境设置了代理!");
      }
      //将使用代理状态提交给业务服务器
      //...
  }

```

#### uni-app x 项目  
uni-app x 项目暂不支持。  


### isRoot
[plus.navigator.isRoot](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)用于判断当前应用运行的设备是否被root破解。

> 注： 仅iOS平台支持，Android平台暂不支持

root破解（也叫越狱）是利用iOS系统的漏洞来破解系统安全机制，让任何应用可以获得系统级权限，从而对系统可以进行更灵活的自定义修改，譬如说修改字体、修改主题以及使用一些插件等。iOS系统设计了沙盒机制，限制应用只能使用自身的数据，root破解后则应用可以读取修改其它任何应用的数据，可能导致用户敏感信息泄露，甚至修改其它应用的数据或代码，恶意攻击正常App。

建议在应用启动时判断，如果运行在root破解环境则提示用户无法正常使用，uni-app项目可以在App.vue的应用生命周期[onLaunch](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)中进行校验，示例如下：

``` js
  onLaunch: function(inf) {
      console.log('App Launch');
// #ifdef APP-PLUS
      //ROOT检验
      if(plus.navigator.isRoot()){
          //弹出提示框
          uni.showModal({
            title:'错误',
            content: '应用被不能运行到越狱或ROOT环境！',
            complete: ()=>{
              //循环弹出提示框或死循环引起应用退出
            }
          });
      }
// #endif
  }
```

> 提示：为了防止js检验代码被反编译篡改，建议将签名校验代码放到独立js文件中并配置[js/nvue文件原生混淆加密](app-sec-confusion)，或者使用apk加固处理

#### uni-app x 项目  
uni-app x 项目可通过 [uni.getDeviceInfo](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html#%E8%BF%94%E5%9B%9E%E5%80%BC) 返回值中的 isRoot 属性值获取。  


### isUSBDebugging  
判断当前应用运行的设备是否开启USB调试，仅Android平台支持。  

> uni-app 项目不支持获取此状态  

#### uni-app x 项目  
uni-app x 项目可通过 [uni.getDeviceInfo](https://doc.dcloud.net.cn/uni-app-x/api/get-device-info.html#%E8%BF%94%E5%9B%9E%E5%80%BC) 返回值中的 isUSBDebugging 属性值获取。  
