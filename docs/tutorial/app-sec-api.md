# 客户端安全API

uni-app和5+App提供了一批API，获取客户端一些与安全有关的信息。

::: warning
更推荐使用[uni云端一体安全网络](/uniCloud/secure-network.md)，使用安全网络后将无需在使用本章节提供的API。
:::

### getSignature  
[plus.navigator.getSignature](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature)用于获取应用签名标识，可以判断App是否被重新签名。
[plus.navigator.getSignature](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.getSignature) is used to obtain the signature of the app, which can determine whether the app has been re-signed.

签名证书是对App开发者身份的唯一标识，如果程序未对签名证书进行校验，可能被反编译后进行二次打包使用其它签名证书重新签名。如重新签名的App可以正常启动，则可能导致App被仿冒盗版，影响其合法收入，甚至可能被添加钓鱼代码、病毒代码、恶意代码，导致用户敏感信息泄露或者恶意攻击。
The signature certificate is the only identifier for the identity of the app developer. If the program does not verify the signature certificate, it may be decompiled and repackaged and re-signed with another signature certificate. If the re-signed app can be started normally, it may cause the app to be counterfeited and pirated, affecting its legitimate income, and may even be added with phishing code, virus code, and malicious code, resulting in the leakage of user sensitive information or malicious attacks.

uni-app项目可以在App.vue的应用生命周期[onLaunch](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)中进行校验，示例如下：
The uni-app project can be found in App.vue's application lifecycle [onLaunch](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7% 94%9f%e5%91%bd%e5%91%a8%e6%9c%9f) for verification, the example is as follows:
``` js
  onLaunch: function(inf) {
      console.log('App Launch');
// #ifdef APP-PLUS
      // 签名证书检验
      // signature certificate check
      var platform = uni.getSystemInfoSync.platform;
      var sign = plus.navigator.getSignature();
      if('android'==platform){   //Android平台
        var sha1 = 'baad093a82829fb432a7b28cb4ccf0e9f37dae58';  //修改为自己应用签名证书SHA-1值，是全小写并且中间不包含“:”符号
        if(sha1!=sign){
          //证书不对时退出应用
          //Exit the application if the certificate is incorrect
          plus.runtime.quit();
        }
      }else{    //iOS平台
        var md5 = 'a2e629f0ea915b4ed11e296a059c9a12';   //修改为自己应用Apple Bunld ID(AppID)的md5值
        if(md5!=sign){
          //不进入应用或循环弹出提示框
          // Do not enter the application or loop pop-up prompt box
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
> Tip: In order to prevent the js verification code from being decompiled and tampered with, it is recommended to put the signature verification code in a separate js file and configure [js/nvue file native confusion encryption](app-sec-confusion), or use apk for reinforcement processing


### isSimulator  
[plus.navigator.isSimulator](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator)用于判断当前应用是否运行在模拟器中。
[plus.navigator.isSimulator](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isSimulator) is used to determine whether the current application is running in the simulator.

iOS系统由于苹果限制了正式打包后不能在模拟器上运行，一般不存在这种情况；Android系统是开源的，底层代码都是公开的，因此市面上有很多Android模拟器，此问题比较严重。
Because the iOS system cannot run on the simulator after being officially packaged by Apple, this situation generally does not exist; the Android system is open source, and the underlying code is open, so there are many Android simulators on the market, and this problem is more serious.

模拟器通常是运行在PC上，可以利用一些自动化工具自动操作使用App，另外模拟器是一个虚拟操作系统，可能会破坏原生系统的安全性，导致用户敏感信息泄露。
The emulator usually runs on a PC and can use some automated tools to automatically operate and use apps. In addition, the emulator is a virtual operating system, which may damage the security of the native system and lead to the leakage of user sensitive information.

以下示例在App.vue的应用生命周期[onLaunch](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)中进行校验，如下：
The following example is in App.vue's application lifecycle [onLaunch](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f %e5%91%bd%e5%91%a8%e6%9c%9f) for verification, as follows:
``` js
  onLaunch: function(inf) {
      console.log('App Launch');
// #ifdef APP-PLUS
      // 模拟器检验  
      // emulator check
      if(plus.navigator.isSimulator()){
          //弹出提示框
          // pop up prompt box
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
In actual projects, this information can be submitted to the business server for judgment. For example, login is not allowed in the simulator environment, etc., multiple attempts to log in in the simulator can temporarily block the account, and the manual customer can contact the user for verification, etc., which can be adjusted according to the business situation.

> 提示：为了防止js检验代码被反编译篡改，建议将签名校验代码放到独立js文件中并配置[js/nvue文件原生混淆加密](app-sec-confusion)，或者使用apk加固处理
> Tip: In order to prevent the js verification code from being decompiled and tampered with, it is recommended to put the signature verification code in a separate js file and configure [js/nvue file native confusion encryption](app-sec-confusion), or use apk for reinforcement processing


### isSetProxy  
[plus.networkinfo.isSetProxy](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy)用于判断当前应用网络环境是否设置代理。
[plus.networkinfo.isSetProxy](https://www.html5plus.org/doc/zh_cn/device.html#plus.networkinfo.isSetProxy) is used to determine whether a proxy is set in the current application network environment.

设置代理后所有网络传输的数据都会经过代理服务器，也就是说代理服务器可能看到所有传入内容，导致用户敏感信息泄露、业务服务器被恶意攻击等问题。当然在某些企业内部网络环境为了保证安全，访问公网可能需要设置代理，开发者需要考虑这种需求来决定是否限制应用正常运行。
After the proxy is set, all data transmitted over the network will pass through the proxy server, which means that the proxy server may see all incoming content, resulting in leakage of user sensitive information and malicious attacks on business servers. Of course, in some enterprise internal network environments, in order to ensure security, it may be necessary to set up a proxy to access the public network. Developers need to consider this requirement to decide whether to restrict the normal operation of the application.

可以在用户登录时提交当前网络环境是否使用代理，示例代码如下：
You can submit whether the current network environment uses a proxy when the user logs in. The sample code is as follows:
``` js
  function login() {
      //...
      //获取网络代理状态
      //Get network proxy status
      var isProxy = plus.networkinfo.isSetProxy();
      if(isProxy){
        console.log("当前网络环境设置了代理!");
      }
      //将使用代理状态提交给业务服务器
      //...
  }

```




### isRoot
[plus.navigator.isRoot](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot)用于判断当前应用运行的设备是否被root破解。
[plus.navigator.isRoot](https://www.html5plus.org/doc/zh_cn/navigator.html#plus.navigator.isRoot) is used to determine whether the device running the current application is rooted.

> 注： 仅iOS平台支持，Android平台暂不支持  
> Note: Only supported by iOS platform, not supported by Android platform

root破解（也叫越狱）是利用iOS系统的漏洞来破解系统安全机制，让任何应用可以获得系统级权限，从而对系统可以进行更灵活的自定义修改，譬如说修改字体、修改主题以及使用一些插件等。iOS系统设计了沙盒机制，限制应用只能使用自身的数据，root破解后则应用可以读取修改其它任何应用的数据，可能导致用户敏感信息泄露，甚至修改其它应用的数据或代码，恶意攻击正常App。
Root cracking (also called jailbreaking) is to use the vulnerabilities of the iOS system to crack the system security mechanism, so that any application can obtain system-level permissions, so that more flexible custom modifications can be made to the system, such as modifying fonts, modifying themes, and using some plug-ins etc. The iOS system has designed a sandbox mechanism to limit the application to only use its own data. After root cracking, the application can read and modify the data of any other application, which may lead to the leakage of user sensitive information, or even modify the data or code of other applications, malicious attacks. Normal App.

建议在应用启动时判断，如果运行在root破解环境则提示用户无法正常使用，uni-app项目可以在App.vue的应用生命周期[onLaunch](https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)中进行校验，示例如下：
It is recommended to judge when the application is started. If it is running in a root cracked environment, it will prompt the user that it cannot be used normally. The uni-app project can be used in the application life cycle of App.vue [onLaunch](https://uniapp.dcloud.io/collocation/frame /lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f), for example:

``` js
  onLaunch: function(inf) {
      console.log('App Launch');
// #ifdef APP-PLUS
      //ROOT检验  
      //ROOT test
      if(plus.navigator.isRoot()){
          //弹出提示框
          // pop up prompt box
          uni.showModal({
            title:'错误',
            content: '应用被不能运行到越狱或ROOT环境！',
            complete: ()=>{
              //循环弹出提示框或死循环引起应用退出
              //The loop pops up the prompt box or the infinite loop causes the application to exit
            }
          });
      }
// #endif
  }
```


> 提示：为了防止js检验代码被反编译篡改，建议将签名校验代码放到独立js文件中并配置[js/nvue文件原生混淆加密](app-sec-confusion)，或者使用apk加固处理
> Tip: In order to prevent the js verification code from being decompiled and tampered with, it is recommended to put the signature verification code in a separate js file and configure [js/nvue file native confusion encryption](app-sec-confusion), or use apk for reinforcement processing


