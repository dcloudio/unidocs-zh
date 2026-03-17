# HarmonyOS Next 华为账号登录 @harmonyos-next-huawei-login <Badge text="HBuilderX 4.31+" />

根据华为应用市场上架审核要求，如果应用支持用户使用第三方账号登录，则该应用需提供华为账号登录选项 [文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-detailedrules-V5?ha_source=Dcloud&ha_sourceId=89000448)

## 开发准备 @dev-prepare

> 调试时可不配置 Scope 权限，上架时需配置

- 添加公钥指纹（与你的包名绑定） [如何添加公钥指纹](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview-V5#section1726913517284?ha_source=Dcloud&ha_sourceId=89000448)
- 配置 Client ID（配置在 `HBuilder X 项目根目录/harmony-configs/entry/src/main/module.json5` 中） [如何获取 Client ID](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-client-id-V5?ha_source=Dcloud&ha_sourceId=89000448)
- 配置 Scope 权限 [如何申请 Scope 权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-config-permissions-V5?ha_source=Dcloud&ha_sourceId=89000448)

## HBuilder X 配置 @hbuilderx-config

打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“华为登录”，并配置 `client_id`：

![](https://web-ext-storage.dcloud.net.cn/doc/harmony-os-next/harmony-hw-login-config.png)

### uni-app 中使用示例 @example

```vue
<template>
  <view>
    <button @click="getProviderSync">getProviderSync</button>
    <button @click="login">login</button>
    <button @click="getUserInfo">getUserInfo</button>
  </view>
</template>
<script setup>
const getProviderSync = () => {
  const provider = uni.getProviderSync({service: 'oauth'})
  console.log('provider :>> ' + JSON.stringify(provider));
}

const login = () => {
  uni.login({
    provider: 'huawei',
    success(res) {
      console.log(JSON.stringify(res))
    },
    fail(err) {
      console.log(JSON.stringify(err))
    },
  })
}

const getUserInfo = () => {
  uni.getUserInfo({
    provider: 'huawei',
    success(res) {
      console.log(JSON.stringify(res))
    },
    fail(err) {
      console.log(JSON.stringify(err))
    },
  })
}
</script>

```

- 验证 `getProviderSync` 返回值 `providerIds` 中包含 `huawei`，如果不包含，请确认 HBuilderX 为最新版，在 `mainfest.json - 鸿蒙App配置` 中勾选了 `OAuth(登录鉴权)` 且配置了 `client_id`。
- 验证 `uni.login` 返回值包含 `code` 值
- 验证 `uni.getUserInfo` 返回值包含 `userInfo` 值，包含 avatarUrl/nickName/openId 内容。

## Tips

- [OpenID和UnionID的长度限制要求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-faq-1-V5?ha_source=Dcloud&ha_sourceId=89000448)
- [Access Token和Refresh Token的有效时长是多久](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-faq-2-V5?ha_source=Dcloud&ha_sourceId=89000448)
- [Access Token和Refresh Token长度限制要求](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-faq-3-V5?ha_source=Dcloud&ha_sourceId=89000448)
- [调用接口获取应用级Access Token时，是否有次数和频率限制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-faq-4-V5?ha_source=Dcloud&ha_sourceId=89000448)
- [ID Token的使用场景与使用方法](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-faq-7-V5?ha_source=Dcloud&ha_sourceId=89000448)
- [无法获取手机号或获取到的手机号为空如何解决](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-faq-6-V5?ha_source=Dcloud&ha_sourceId=89000448)
- [未成年人模式开启后USB断连如何解决](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/account-faq-8-V5?ha_source=Dcloud&ha_sourceId=89000448)
