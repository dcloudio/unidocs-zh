# 鸿蒙元服务 AppLinking

通过二维码、短信、落地页唤起应用是常见的业务需求，这里介绍如何在鸿蒙元服务中唤起应用。

## 基本概念

鸿蒙元服务目前支持通过鸿蒙 App Linking 实现元服务跳转。

## 接入方案

前提条件

- 开发者账号是企业开发者账号。
- 元服务已上架

在满足上述两个条件，可以开通 App Linking 服务。文档可参考 《[使用 App Linking 实现元服务跳转
](https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-applinking#section10497195541515)》。

### 配置 .well-knows 路径

- 文档里提到的 `.well-knows` 文件夹需要服务端开放访问，这个路径是用来公开访问的，如果你部署了对应 json 但是无法访问，可能是服务器禁止访问，可根据具体情况搜索解决方案，比如 nginx 如何开放 .well-known 路径。

配置文件要可访问 `.well-known/applinking.json` 路径。

```json
{
  "applinking": {
    "atomicServices": [
      {
        "appIdentifier": ""
      }
    ]
  }
}
```

### AGC 后台配置

可传递自定义参数、链接配置规则。

最终确认 AGC 后台新增的 App Linking 是否展示已生效。

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/24558619-1f2f-4301-853c-700fe380ef6e.png)

后续可扫码唤起应用

打开特定的页面是通过传递 encodeURIComponent 之后的

```js
const value = `ascfPara=${encodeURIComponent(
  '{"path":"/pages/tabBar/API/API"}'
)}`;
```

把这个路径填入自定义参数中，最终会得到一个类似 `https://hoas.drcn.agconnect.link/AlXKm` 的 URL，将此 URL 转成二维码可实现扫码打开 **hellouniapp** 的 API 页面，而非默认首页。
