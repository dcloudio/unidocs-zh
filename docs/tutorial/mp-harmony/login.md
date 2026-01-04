# 鸿蒙元服务登录

本文介绍使用 uni-app 接入鸿蒙元服务登录的具体操作步骤。

## 概要

鸿蒙元服务登录和鸿蒙 App 登录流程相似。大致分成三个步骤

- 准备工作，填写相关配置项
- 前端实现，如何调用登录功能
- 服务端实现，如何解析用户数据

下面逐步介绍详细接入方案。

## 接入流程

### 准备工作

鸿蒙元服务登录可以分成两种方案：

1. 静默登录，获取当前用户 UnionID
2. 手机号获取，获取当前鸿蒙用户绑定的手机号。

#### 权限申请

静默登录不需要额外申请权限。可以直接调用，静默登录返回的数据不包含用户手机号信息，登录认证的数据可以存储到数据库中进行查询。

手机号获取，需要提前申请。参考[鸿蒙 Account Kit 开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-config-permissions-V5#section132012717318?ha_source=Dcloud&ha_sourceId=89000448) 申请 **获取您的手机号** 这个敏感权限。

![申请手机号](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/3e2cc185-cbbd-4f72-8e4f-c56f6a969978.png)

在这个表格中申请权限时，注意服务类型、使用场景要认真填写，按照华为要求添加正确的分类和使用步骤，不要随意填充内容，避免被人工审核驳回。

权限申请由人工处理，目前不会立即下发，建议尽可能提前申请。

#### 证书配置

鸿蒙要求在配置中添加 client_id、关联调试证书。

鸿蒙的证书配置很多用户一开始分辨不清具体的作用。这里做一个基础解释。鸿蒙证书目前可以在 manifest.json 中进行配置。应用签名包含三部分内容：

1. p12/csr 文件、Alias、Password 参数。这几个参数在 DevEco Studio 中生成，这几个配置不会过期，不包含具体的鸿蒙资源，可以跨应用使用同一份。
2. 证书 cer 文件，这个在 AGC 后台证书中获取，区分调试证书、发行证书。其中调试证书目前为 6 个月有效，到期不可使用，需要重新申请获取，证书可以跨应用使用。
3. Profile p7b 文件，此文件关联调试、发行证书，绑定信任设备和具体应用。

登录使用的证书不要使用自动签名的部分，务必阅读 [API 登录 uni.login 获取 code 报错、如何绑定现有用户体系？](#how-to-login) 部分，了解易错点。

访问 [AGC 开发与服务](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myProject?ha_source=Dcloud&ha_sourceId=89000448) - 我的项目，选择对应的项目和应用，打开 常规 - 应用，配置指纹，选择刚才的调试证书。

![调试证书](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/6045e234-4b78-41cc-b1af-bd69c36cd6ab.png)

#### client id 配置

在刚才添加调试证书指纹的地方，在页面底部，找到 `Client ID` 和 `Client Secret`,这里记录下来，后面需要使用。

在元服务的配置文件中，找到 `harmony-mp-configs/entry/src/main/module.json5` 文件，如果目录为空请参考 [元服务配置 build-profile.json5](/tutorial/mp-harmony/intro.html#3-配置-module-json5)。

`module.json5` 文件中在 `module` 节点添加 `metadata`

```json
"module":{
  // 其他配置
  "metadata":[
    // 其他配置
    {
    "name": "client_id",
    "value": "刚才的 client id"
    }
  ],
  // 其他配置
}
```

为了验证上述步骤是否填写正常，请在前端开发部分进行实际验证。

### 前端开发

有了刚才的准备部分，现在可以先验证信息是否填写完成。

在前端页面中调用 `uni.login` 观察返回值。

```js
login(){
  uni.login({
    provider:'huawei',
    success(res){
      console.log(res)
    },
    fail(err){
      console.error(err)
    }
  })
}
```

下面是数据 mock

```json
{
  "code": "xxx",
  "idToken": "xxx",
  "openID": "xxx",
  "unionID": "xxx",
  "errMsg": "login:ok"
}
```

如果刚才的 clientID 填写错误、没有关联证书指纹，会有相关报错。

如果已经申请了手机号权限，可以测试手机号获取

```html
<template>
  <button open-type="getPhoneNumber" @getphonenumber="quickLogin">
    手机号登录
  </button>
</template>

<script>
  quickLogin(e){
    console.log(e)
  }
</script>
```

用户点击按钮，第一次会有弹窗授权。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/153e4b27-07bb-4fb1-aaaf-1685d555abf5.png)

在这里应当能打印到具体设置，mock 数据如下

```json
{
  "phoneNumberCode": "xxx"
}
```

这样前端部分就开发完成，现在登录和手机号的返回值都是 code，需要由服务端进行解析和存储。

### 服务端开发

这里举例 uniapp 开发的开源项目 `uni-id-pages`。可以进一步参考阅读 [uni-id 用户体系](https://doc.dcloud.net.cn/uniCloud/uni-id/app.html)。

这个项目已经封装好了常见登录鉴权的服务端开发方案，对外使用通用的 api 快速接入华为登录、微信小程序登录、安卓、iOS 登录等，加速业务落地。

下载 [uni-id-pages](https://ext.dcloud.net.cn/plugin?name=uni-id-pages) 提供的示例项目，下载到本地。

在 uniCloud 文件夹中关联云端项目，本地测试不需要关联部署。

![关联云端应用](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/5a5a7b5d-1eff-4cee-a7e5-385f547ea14e.png)

打开配置文件 `/uniCloud/cloudfunctions/common/uni-config-center/uni-id/config.json`，参考默认的 `mp-weixin` 增加一层配置

```json
"mp-harmony": {
  "oauth": {
    "huawei": {
      "clientId": "xxx",
      "clientSecret": "xxx"
    }
  }
}
```

这里的 `clientId` 和 `clientSecret` 在刚才添加证书指纹地方获取。

填写完成之后，添加签名证书运行这个项目为鸿蒙元服务。

#### 普通登录

这个项目的默认首页中，选择 **华为登录**，选择华为账号登录。稍等片刻就完成了登录鉴权。这里用到了 `uni.login` api 完成 code 获取，调用服务端方法实现鉴权处理。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/28e53952-6c80-47c3-b8da-9f00695c9434.png)

#### 手机号解析

这个项目默认首页中，选择 **华为账号一键登录** ，页面中展示的按钮包含了 `getphonenumber` 回调方法。点击按钮会获取当前用户手机号。

这个实例使用了 `button` 元素获取登录，调用服务端方法进行鉴权处理。

服务端相关代码可访问 `uniCloud/cloudfunctions/uni-id-co/lib/third-party/huawei/account/index.js` 观察具体源码实现。

## 常见问题

### 上架驳回理由：存在自行构造的登录页面，不符合华为应用市场审核标准@how-to-design-user-login

元服务的登录要求可以参考阅读 《[使用华为账号登录 静默登录](https://developer.huawei.com/consumer/cn/doc/design-guides/accounts-0000001967444380?ha_source=Dcloud&ha_sourceId=89000448)》、《[开发者可以使用自行设计的登录界面吗？](https://developer.huawei.com/consumer/cn/doc/atomic-faqs-V5/faqs-common-account-5-V5?ha_source=Dcloud&ha_sourceId=89000448)》。

如果需要账号登录，必须使用 `uni.login` 登录，不得绕过自行使用账号密码登录。建议申请获取用户手机号权限，然后关联自己的账号系统。在应用合适时机调用登录接口换取 UnionID，先标识用户为华为用户，操作关键步骤时候接入现有账号，比如获取手机号关联现有账号。同时务必提供注销用户功能入口，用户自行取消注册，否则会被驳回。

实践中，某些分类下的应用无法申请一键获取手机号，申请会被驳回，这种情况下，建议在业务中完成静默登录，然后在某些操作时候关联其他平台用户，此时通过手机号和验证码完成相关关联平台账号逻辑。

具体技术实现见下个问题。

### API 登录 uni.login 获取 code 报错、如何绑定现有用户体系？@how-to-login

参考[鸿蒙 Account Kit 开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-config-permissions-V5#section132012717318?ha_source=Dcloud&ha_sourceId=89000448) 设置相关权限，添加 scope 权限。

易错点：

1. 签名证书不能是自动签名，设置的是 agc 上下载的调试证书
2. `harmony-mp-configs/entry/src/main/module.json5` 里有个 metadata client_id 确保值正确。
3. 访问 [AGC 开发与服务](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myProject?ha_source=Dcloud&ha_sourceId=89000448) - 我的项目，选择对应的项目和应用，打开 常规 - 应用，配置指纹，确保添加了调试证书。

通过 `uni.login` 可以得到 `code`，流程和其他小程序登录流程相似。参考 [解析凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/account-api-get-token-info-V5?ha_source=Dcloud&ha_sourceId=89000448) 得到用户的 UnionID，开发者在这一步骤自行判断是已绑定华为 UnionID，如果未绑定，引导用户绑定现有账号体系。如果你没有 code 返回值，观察接口错误提示，一般是 client_id 设置错误。

也可以参考下面手机号接口申请，快速绑定手机号，具体见下个问题。

欢迎使用 [uni-id-pages](https://doc.dcloud.net.cn/uniCloud/uni-id/app.html) 插件加速元服务开发落地，这里封装了服务端开发的逻辑。在 uni-pay 中也提供了华为元服务支付的服务端逻辑封装，接入更方便。

### 如何获取用户手机号？@how-to-get-phonenumber

申请过手机号敏感权限之后，可以通过 button 获取用户手机号。使用这种方式快速注册、绑定账号体系。

1. 获取手机号权限。访问 [开发者后台- API 服务 - 授权管理 - 敏感权限](https://developer.huawei.com/consumer/cn/console/api/scopeManage?ha_source=Dcloud&ha_sourceId=89000448) 申请获取您的手机号权限。等待审核通过后继续下面操作
2. 页面中使用下面按钮获取手机号授权 code。
3. 参考 [获取用户级凭证](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/account-api-obtain-user-token-V5?ha_source=Dcloud&ha_sourceId=89000448) 通过上一步骤的 code 获取 `access_token`
4. 参考 [其他场景获取用户信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/account-api-otherscene-getuserinfo-V5?ha_source=Dcloud&ha_sourceId=89000448) 接口通过 `access_token` 获取用户手机号。

如果手机号申请失败，一般是没有严格按照手机号申请的要求完整填写，确保包含三个部分，应用的分类、场景的具体操作步骤、请求频率。尤其是第二部分，参考描述详细步骤。

```html
<button open-type="getPhoneNumber" @getphonenumber="getphonenumber">
  获取手机号
</button>
```

```js
getphonenumber(e){
  // 获取 code 数值：e.detail.code
  console.log(e.detail.code);
}
```

如果有返回值，说明配置项正确。可以让服务端解析数据。如果点击无反应，在 HBuilderX 中打开展示原生日志，观察是否有类似 "Failed to check the fingerprint" 的告警，排查错误方案如下：

1. 签名证书不能是自动签名，设置的是 agc 上下载的调试证书
2. 确保你联调的元服务已经申请得到了获取手机号权限，如果你在开发多个元服务可能会错误配置
3. 访问 [AGC 开发与服务](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myProject?ha_source=Dcloud&ha_sourceId=89000448) - 我的项目，选择对应的项目和应用，打开 常规 - 应用，配置指纹，确保添加了调试证书。
4. `mp-configs/entry/src/main/module.json5` 里有个 metadata client_id 确保值正确，是应用的 ClientID，页面下方。
5. 如果修改过配置参数没有立刻生效，真机打开设置 - 应用与元服务，找到正在开发的应用选择移除，重新运行

用户侧第一次使用会有系统控件弹窗申请，同意之后，后续会自动同意。如果撤回同意，或者测试控件效果，需要手机打开 设置-华为账号-账号安全-使用华为账号的应用-删除授权。

用户侧控件效果如下，默认展示手机系统登录的账号，也可以通过管理手机号，手动验证其他手机号。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/153e4b27-07bb-4fb1-aaaf-1685d555abf5.png)

最终解析 token 得到最终结果，最终结果数据是下面的结构，供 mock 参考，包含了 unionID/mobileNumber 字段，后面执行用户关联操作。

```json
{
  "unionID": "xxx",
  "phoneCountryCode": "0086",
  "mobileNumber": "13000000000",
  "openID": "xxx",
  "purePhoneNumber": "13000000000"
}
```
