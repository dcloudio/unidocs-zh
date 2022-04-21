## uni统计2.0

uni统计2.0是基于uniCloud开发的开源、免费统计平台。

### 产品特色

`uni统计2.0`和`uni统计1.0`一样，均支持全域流量统计，无需在各端接不同的sdk、无需在不同后台查看数据。使用uni统计，一张报表可查看所有端（iOS、Android、H5及各家小程序）的运营数据。

相比`uni统计1.0`，`uni统计2.0`还有如下特色功能：

**1. 开源**

前端采集数据的SDK、云端接收数据的云函数、云端跑批统计的云函数、展示统计结果的管理报表，所有代码全部开源。

**2. 私有部署**

使用传统`saas`类统计产品时，所有App数据都上报在统计厂商统一的数据库中，也就是中央化部署模式。
`uni统计2.0`基于`uniCloud`实现，云函数、统计数据全部托管在开发者自己的服务空间中，开发者对自己的统计数据拥有完整的控制权。

**3. 自由定制**

`uni统计2.0`所有代码是完全开源的，开发者可在开源代码基础上，轻松扩展统计维度，自由定制报表样式。

**uni统计新老版本对比**

|功能|uni统计1.0|uni统计2.0|
|:-:|:-:|:-:|
|是否开源|否|是|
|是否免费|是|是|
|部署方式|中央部署|私有部署|
|定制方式|不可定制|方便定制|

### 前端配置

在项目中打开 `manifest.json` , 选择 `uni统计配置` 项，根据需求，选择开通 `uni统计` ，勾选 `version2` 开启新版统计。

![开启统计](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/73a73c56-1b65-4fc2-9429-26248f3e1267.png)

**全局设置**

将 ` manifest.json -> uniStatistics` 下的 `enable` 字段设置为 `true|false` ,来开启关闭 `uni统计`

设置 `version` 属性为 `"2"` 来开启新版统计

```js
//...  
"uniStatistics": {  
    "enable": true,//全局开启 
	"version": "2" // 开启新版uni统计，值为字符串
},  
//...
```

**分平台设置**

`uniStatistics` 支持分平台设置，比如若需仅开启微信平台的 `uni统计`，则在`mp-weixin`节点下设置 `uniStatistics ->enable` 即可，如下：

```js
//...  
"mp-weixin":{  
    "uniStatistics": {  
        "enable": true //微信平台开启统计  
    }  
}
```

**注意：**
- 在分平台下如有`uniStatistics -> enable`字段，则优先使用分平台下配置 ，反之使用全局统计设置
- 分平台无需设置 `version` 属性 ，`version` 属性仅全局生效
- 应用在运行、调试时不会上报统计数据，仅在发行后，并启动新版的App、h5、小程序，才会上报数据。

### 域名白名单

由于各家小程序对可访问的域名要配置白名单，否则无法联网。

注意选择对应的服务商域名（文章后面章节会有服务空间相关配置）

|服务提供商|	request合法域名|
|:-:|:-:|
|阿里云	|api.bspapp.com	|
|腾讯云	|tcb-api.tencentcloudapi.com|


### 统计管理后台

新版统计与之前不同的是需要用户自行管理部署统计后台，使用了 [uni-admin](https://uniapp.dcloud.io/uniCloud/admin.html#uni-admin-%E6%A1%86%E6%9E%B6-%E5%8E%9F%E5%90%8D-unicloud-admin)
来管理 `uni统计`数据。


#### 创建 uni-admin

使用 `HBuilderX 3.4.x `版本新建 `uni-app` 项目，选择 `uni-admin` 项目模板，如下图:
![download-admin](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/80406bf5-f96a-4a66-9430-a339a4054c96.png)
创建完成后，可以跟随`云服务空间初始化向导`初始化项目，创建并绑定云服务空间

![download-admin](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/7fd34451-2313-4d01-8caf-39f277780642.png)


#### 运行 uni-admin

接下来所有操作都是基于新创建的 `uni-admin` 项目来操作

#### 目录结构

注意：创建完成后确保 `uniCloud -cloudfunctions` 目录下包含了 `uni-stat-report` 云函数
![目录结构](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/c20bd7bf-d52e-4038-80d6-a2e76c80a091.png
)
#### 配置 uni-id

打开`uni-config-center` 配置 `uni-id` 的 `passwordSecret` 和`tokenSecret`字段 （测试期间跳过本条也可以）
- `passwordSecret` 字段 ，用于加密密码入库的密钥
- `tokenSecret` 字段 ，为生成 token 需要的密钥

```js
//  `uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`
{
  "passwordSecret": "passwordSecret-demo",
  "tokenSecret": "tokenSecret-demo",
  // ...
}
```

#### 配置服务空间

右键 `uniCloud` 目录 `运行云服务空间初始化向导`，初始化数据库和上传部署云函数（**如已创建并绑定云服务空间，则跳过此步**）

![配置服务空间](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/7fd34451-2313-4d01-8caf-39f277780642.png)

#### 运行项目
点击`HBuilderX`工具栏的运行(快捷键【Ctrl+r】) -> 运行到浏览器。如果是连接本地云函数调试环境，上一步可以不上传云函数，但数据库仍需初始化。

#### 登录 admin 后台
从启动后的登录页面的底部，进入创建管理员页面（仅允许注册一次管理员账号）

![登录 admin 后台](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/6582a93f-e707-4d12-9749-48d7e0f58f4b.png)

![登录 admin 后台](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/28e09692-5931-437d-a633-7437ff87bdca.png)

**注意**：

- 在 HBuilderX 中运行需在插件市场在安装 [sass 插件](https://ext.dcloud.net.cn/plugin?id=2046)
- 浏览器联网失败，报 `request：fail`，需要去云服务空间的`跨域配置`配置跨域域名，需带端口。[详见](https://uniapp.dcloud.net.cn/uniCloud/quickstart?id=useinh5)
- 如从未接触过`uniCloud`，是无法直接上手uni-admin的，建议先通读下uniCloud文档的概念介绍和快速上手章节。[详见](https://uniapp.dcloud.net.cn/uniCloud/README)


### 关联服务空间

客户端和管理后端都已经准备好了，但是现在还不能从客户端直接上报数据到管理后端，所以需要关联客户端和管理后端的服务空间

1. 在客户端项目右键并选择 `创建uniCloud云开发环境 -> 阿里云|腾讯云`

![关联前后台数据](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/b2ad84ed-a69a-43dc-b8d1-6efaafd96a14.png)

2. 在`uniCloud`目录右键并选择`关联云服务空间或项目`，在打开的窗口中选择上一节`uni-admin`关联的服务空间（两个项目务必关联同一个服务空间，且uni-admin中所有云函数、公共模板等都已经上传部署到该服务空间）

![关联前后台数据](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/14744bf3-c88e-4408-b2fa-0ecf0dcf4fe1.png)

3. 发行项目到对应平台 ，此时数据已经成功采集到 `uni-admin` 中


### 注意事项
- 客户端和统计后台两个项目务必关联同一个服务空间，且uni-admin中所有云函数、公共模板等都已经上传部署到该服务空间
- 使用 uni 统计必须配置 APPID 才能正常使用。[DCloud的Appid有什么用，如需转让应用怎么做](https://ask.dcloud.net.cn/article/35907)
- 应用在运行、调试时不会上报统计数据，仅在发行后，并启动新版的App、h5、小程序，才会上报数据。
- 不支持 CLI 项目

### 开源代码解读
### 扩展和自定义方式
