本地开发调试后，务必上传到uniCloud服务空间才能在现网生效。

发行分为云端资源发行和客户端发行。

## 云资源发行

各种云函数、DB Schema，都需要上传发行。

HBuilderX有多种发行方式
- 发行菜单
- 对uniCloud目录中各种文件点右键上传。快捷键是【Ctrl+u】
- 对uniCloud目录点右键，启动 uniCloud服务空间初始化向导

### 小程序中使用uniCloud的白名单配置@useinmp

各家小程序平台，均要求在小程序管理后台配置小程序应用的联网服务器域名，否则无法联网。

使用uniCloud后，开发者将不再需要自己购买、备案域名，直接将uniCloud的域名填写在小程序管理后台即可。（如需使用前端网页托管仍需进行域名备案）

根据下表，在小程序管理后台设置request合法域名、uploadFile合法域名（如没有上传文件业务，可不设置）。下表的域名均为阿里云或腾讯云自有域名，并非DCloud所属域名。

|服务提供商	|request合法域名			|uploadFile合法域名					|download合法域名|
|:-:		|:-:						|:-:								|:-:|
|阿里云		|api.bspapp.com（公测版）、api.next.bspapp.com（商用版）				|bsppub.oss-cn-shanghai.aliyuncs.com（公测版），商用版每个服务空间都是不同的域名可以先上传一个文件将网络请求里面看到的上传域名添加即可。后续会在uniCloud web控制台展示相关域名信息|需要从云存储下载文件的时候才需要配置，不同服务空间域名不同，可以在web控制台查看文件详情里面看到|
|腾讯云		|tcb-api.tencentcloudapi.com|cos.ap-shanghai.myqcloud.com		|需要从云存储下载文件的时候才需要配置，不同服务空间域名不同，可以在web控制台查看文件详情里面看到|

**注意**

- 如果需要用uni.request请求云存储内的文件，需要将云存储域名（即上表中的download合法域名）配置到request合法域名内
- 阿里云迁移正式版后未重新发布的项目仍会请求公测版地址（api.bspapp.com）

**阿里云查看上传、下载安全域名**

![阿里云查看上传、下载安全域名](https://web-assets.dcloud.net.cn/unidoc/zh/unicloud-aliyun-secure-domain.jpg)

小程序开发工具的真机预览功能，必须添加上述域名白名单，否则无法调用云函数。模拟器的PC端预览、真机调试不受此影响。

如果遇到正确配置了合法域名但是依然报`url not in domain list`，请尝试删除手机上的小程序、清理小程序所在的客户端缓存、重启对应的小程序开发工具后重试

如果遇到`invalid ip xxx, not in whitelist`，请检查是否在小程序管理后台开启了域名白名单。如果没用到可以关闭，如果确认需要使用ip白名单，请参考：[固定IP](cf-functions.md#eip)

**关于云函数本地调试服务在小程序中的使用**

HBuilderX内使用运行菜单运行到小程序时会连接本地调试服务，即使你运行之前就选择了连接云端云函数，小程序也会发送一条请求到本地调试服务检测调用云函数是本地还是云端。

**在开发模式下推荐直接忽略域名校验。**

即使在开发工具勾选了忽略域名校验，体验版与正式版不会忽略域名校验。**如果要发布`体验版`或`正式版`，请务必在HBuilderX内使用发行菜单。uni-app项目发行于运行输出的目录不同，请注意不要选错了**

### Web中使用uniCloud的跨域处理@useinh5

云函数的域名是bspapp.com或tencentcloudapi.com。但开发者的web前端肯定是部署在其他域名下（含unicloud的前端网页托管）。那么Web前端js访问云函数就涉及跨域问题，导致前端js无法连接云函数服务器。

此时需要在uniCloud后台操作，为云函数绑定安全域名。哪个域名下的前端网页的js想访问云函数，就配置哪个域名。如使用unicloud前端网页托管，不管是自带测试域名还是开发者的域名，只要想访问云函数，都得把域名配在这里。

![](https://img.cdn.aliyun.dcloud.net.cn/uni-app/uniCloud/uniCloud-add-domain.png)

> 注意跨域配置需要带上端口信息。例如：前端页面运行于：www.xxx.com:5001，跨域配置内配置：www.xxx.com不会对此页面生效，需要配置为：www.xxx.com:5001，端口部分也支持通配符

如果是运行时期想突破跨域限制，还有如下方案：
- 运行到Web端时，使用HBuilderX内置浏览器，可以忽略跨域问题。
- 如果运行时，想使用外部浏览器运行，方案如下：
  * 方式1：在uniCloud web控制台绑定测试期的地址为安全域名，如配置：localhost:8080、192.168.0.1:8080（建议直接使用内置浏览器测试）
  * 方式2：在外部浏览器安装跨域插件，详见：[https://ask.dcloud.net.cn/article/35267](https://ask.dcloud.net.cn/article/35267)。要跨域的地址，详见上述文档中小程序配置安全域名章节。

- `2021年9月16日`之前阿里云跨域配置不对云存储及前端网页托管生效，表现为云存储中图片绘制到canvas会[污染画布](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Using_images#Using_other_canvas_elements)，前端网页托管的网页不可在iframe中使用。
- `2021年9月16日`之后阿里云跨域配置可以对前端网页托管生效，**仅对前端网页托管的自定义域名生效，不对默认域名生效，如何绑定自定义域名请参考：[前端网页托管绑定自定义域名](uniCloud/hosting.md?id=domain)**，设置之后可能需要几分钟才会生效。如果你在之前已经设置了跨域域名和前端网页托管的自定义域名，需要重新设置一次跨域域名才能生效。
- `2022年12月2日`阿里云正式版跨域配置支持使用通配符，限制配置9个跨域域名。正式版默认允许localhost跨域
- `2023年2月3日`阿里云正式版跨域配置对云存储生效，如果此前已配置跨域配置下次进行修改时会同步设置到云存储。

**注意**

- 跨域配置同时对云函数、前端网页托管、云存储生效
- 阿里云云存储默认不支持localhost跨域，如有需求请添加`127.0.0.1:*`到跨域配置内
- 访问云存储文件时，如果客户端存在缓存，可能会出现已配置跨域域名的情况下仍然跨域的问题。建议这种场景下在请求头内加上`{"cache-control": "no-cache","pragma": "no-cache"}`

## 客户端资源发行

### 前端网页托管

uniCloud支持前端静态网页托管，在HBuilderX中点发行菜单，生成Web，将生成的前端文件部署在uniCloud的前端网页托管内即可[详情参考](uniCloud/hosting.md)。

需要注意的是你仍需在[uniCloud web控制台](https://unicloud.dcloud.net.cn) 配置绑定安全域名（见上一章节），这样前端网页的js才能访问云函数。

### App升级中心

uniCloud通过云端一体的升级检测、管理端版本维护。[详见](upgrade-center.md)

### 应用统一发布页

app、小程序、web统一发布页面。[详见](uni-publish.md)

## cli发行

规模化的开发时，经常需要通过命令行发行，做持续集成。

HBuilderX提供了cli，[详见](https://hx.dcloud.net.cn/cli/README)
