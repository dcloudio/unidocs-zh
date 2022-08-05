# uni-open-bridge

`uni-open-bridge` 是 `uni-id` 体系中用于 `开放平台数据` 定时刷新 `access_token`、`ticket` 的云对象，使用 `uni-open-bridge` 可免维护 `access_token`、`ticket` 的定时刷新

`uni-open-bridge` 从微信的服务器获取数据，通过 [uni-open-bridge-commmon](https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge-common) 保存到 `Redis` 或 `database`

`uni-open-bridge` 提供了 http 请求的操作方式


## config.json

配置文件需要依赖 `uni-config-center`，在 `uni-config-center` 根目录添加文件夹 `uni-open-bridge`, 新增 `config.json`, 内容如下

```json
{
  "schedule": {
    "__UNI__xxxxxx": { // dcloudAppid,需要在 `uni-config-center` uni-id 中配置
      "enable": true, // 任务全局开关，优先级最高
      "mp-weixin": { // 平台，目前仅支持 微信小程序、微信 H5，详情参见 https://uniapp.dcloud.net.cn/uniCloud/uni-open-bridge#platform
        "enable": true, // 当前平台任务开关
        "tasks": ["accessToken"] // 要执行的任务，微信小程序支持 accessToken
      },
      "h5-weixin": {
        "enable": false,
        "tasks": ["ticket"] // 支持微信 H5 ticket，因 ticker 依赖微信 H5 accessToken，内部自动先获取 accessToken。此处的 accessToken 和微信小程序的 accessToken 不是一个值
      }
    }
  },
  "ipWhitelist": ["0.0.0.0"] // 用于 http 调用的服务器IP白名单，支持配置多个，阿里云暂不支持独立IP，可以先使用腾讯云，如果需要使用阿里云，可以通过http的方式将值保存
}
```

注意：拷贝此文件内容到 `config.json` 时需要移除`注释`


## http 调用

请求类型 `POST`, 需要配置IP白名单字段 `ipWhitelist`，参见 `config.json`

同时需要开启 [URL化](https://uniapp.dcloud.net.cn/uniCloud/http.html)，详见 [uniCloud Web](https://unicloud.dcloud.net.cn/) 控制台

### getAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getAccessToken
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin"
}
```

### setAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setAccessToken
```

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin",
  "value": {
    "access_token": ""
  },
  "expiresIn": 7200
}
```

### removeAccessToken

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeAccessToken
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin"
}
```

### getUserKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getUserKey
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin",
  "openid": ""
}
```

### setUserKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setUserKey
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin",
  "openid": "",
  "value": {
    "session_key": ""
  },
  "expiresIn": 7200
}
```

### removeUserKey

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeUserKey
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin",
  "openid": ""
}
```

### getTicket

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/getTicket
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin"
}
```


### setTicket

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/setTicket
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin",
  "value": {
    "ticket": ""
  },
  "expiresIn": 7200
}
```

### removeTicket

Url

```
https://xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx.bspapp.com/uni-open-bridge/removeTicket
```

参数

```json
{
  "dcloudAppid": "__UNI__xxx",
  "platform": "mp-weixin"
}
```


注意：部署后将自动开启定时任务，间隔1小时执行
