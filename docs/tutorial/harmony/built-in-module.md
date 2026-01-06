# 内置模块说明

> [uni-app 鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)

## HarmonyOS 特性说明

### map 组件及定位等 API

> 新增于 HBuilderX 4.26，仅 4.31 之前的版本使用下面的配置方式，4.31 及之后的版本请在 manifest.json 可视化界面配置。

map 组件、getLocation、openLocation、chooseLocation 依赖于地图厂商。目前仅支持腾讯地图，且此界面上显示的地图是通过 WebView 加载的。由于目前页面使用的并非 http 协议，因此在申请腾讯地图 key 时需要将域名白名单留空以便地图能正确加载出来。后续在 HarmonyOS 上页面会调整成以 http 方式加载，到时可以在腾讯地图控制台配置域名白名单。

在 uni-app 项目内配置腾讯地图 key：

1. 以源码方式打开项目 manifest.json
2. 在 manifest.json 内放入如下内容：

```json5
{
    // ...
    "app-plus" : {
        // ...
        "distribute" : {
            // ...
            "sdkConfigs" : {
                // ...
                "maps" : {
                    "qqmap" : {
                        "key" : "XXX-XXXX-XXXX"
                    }
                }
            }
        }
    },
    // ...
}
```

### WebView 组件通讯

在编译到鸿蒙时，plus 对象不可用。如果要向 WebView 发送消息，可以使用 [WebviewContext 的 evalJs](https://doc.dcloud.net.cn/uni-app-x/api/create-webview-context.html)，注意此方案来源于 uni-app-x，仅鸿蒙支持。

示例如下：

```js
// uni-app 页面
<template>
  <view class="content">
    <web-view id="web" @message="onMessage" src="/static/index.html"></web-view>
  </view>
</template>

<script>
  let context
  const native = {
    add: (a, b, callback) => {
      callback(undefined, a + b)
    }
  }

  function callback(id, err, data) {
    context.evalJs(
      `window.__bridge.callback(${id}, ${err ? JSON.stringify(err) : undefined}, ${data ? JSON.stringify(data) : undefined})`
    )
  }
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {},
    onReady() {
      context = uni.createWebviewContext('web', this)
    },
    methods: {
      onMessage(event) {
        const dataList = event.detail.data
        dataList.forEach(({
          data
        } = {}) => {
          if (data && typeof data === 'object' && data.action === '__invoke') {
            const {
              method,
              args,
              id
            } = data
            if (!(method in native)) {
              return callback(id, {
                message: `method:${method} not found`
              })
            }
            try {
              native[method](...args, (err, data) => {
                callback(id, err, data)
              })
            } catch (e) {
              callback(id, e)
            }
          }
        })
      }
    }
  }
</script>

<style>
</style>
```

```html
<!-- webview 内的 html -->
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSBridge Demo</title>
  </head>
  <body>
    <button id="call-native-method">callNativeMethod</button>
    <script type="text/javascript" src="./uni.webview.1.5.6.js"></script>
    <script>
      let callbackId = 0
      const callbacks = {}

      window.__bridge = {
        invoke(method, args, callback) {
          const id = callbackId++
          callbacks[id] = callback
          uni.postMessage({
            data: {
              action: '__invoke',
              method,
              args,
              id
            }
          });
        },
        callback(callbackId, err, data) {
          const callback = callbacks[callbackId]
          if (!callback) {
            return
          }
          delete callbacks[callbackId]
          callback(err, data)
        }
      }
      document.querySelector('#call-native-method').addEventListener('click', () => {
        console.log(uni)
        window.__bridge.invoke('add', [1, 2], (err, data) => {
          console.log('invoke add callback:', err, data)
        })
      })
    </script>
  </body>
</html>
```
