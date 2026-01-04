# 鸿蒙应用使用华为登录

本文介绍 HBuilderX 中如何使用华为登录，介绍接入流程和注意事项。

## 概要

在鸿蒙 App 中提供华为登录是鸿蒙提审的要求。HBuilderX 中已经提供了接入方案，uniCloud 已经封装好了鉴权解析相关操作。

## uni.login

开发者可以使用 `uni.login` 完成华为登录功能，和微信小程序登录类似，华为返回鉴权 code。此项内容无法获得用户手机号，只能获得 UnionID 用户唯一识别符。

接入方案：

- 在 manifest.json 里找到 **鸿蒙 App 配置** -开启 **uni-oauth** 勾选华为登录，并填写 client_id
- uni.login 返回 code

client_id 可在 AGC 后台获取，注意是应用 Client ID 不是项目 Client ID 参数。

```json
{
  "errCode": 0,
  "newToken": {
    "token": "xxx",
    "tokenExpired": 1758112028647
  },
  "uid": "xxx",
  "passwordConfirmed": false,
  "type": "login"
}
```

getUserInfo

```json
{
  "errMsg": "getUserInfo:ok",
  "userInfo": {
    "nickName": "xxx",
    "avatarUrl": "https://xxx.com/1.jpg",
    "openId": "xxx"
  },
  "errSubject": "getUserInfo"
}
```
