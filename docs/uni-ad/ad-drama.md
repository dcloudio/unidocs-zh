## 短剧组件

### 简介

短剧剧集的集合页面，用户可以通过该页面点击进入短剧播放页


<img src="https://web-ext-storage.dcloud.net.cn/uniad/ad-drama.jpg" style="max-width: 300px; max-height: 50vh;" />

**平台差异说明**

> App 平台支持 Android 和 iOS，均需要 HBuilderX 5.08+。

|App|H5	|微信小程序	|支付宝小程序	|百度小程序	|抖音小程序、飞书小程序	|QQ小程序	|快应用	|360小程序	|快手小程序	|京东小程序	|
|:-:|:-:|:-:			|:-:				|:-:			|:-:								|:-:			|:-:		|:-:			|:-:			|:-:			|
|✓(5.08+)	|x	|x				|x					|x				|x									|x				|x			|x				|x				|x				|


**开通配置广告**

[开通广告步骤详情](https://uniapp.dcloud.net.cn/uni-ad/ad-open.html)

**Tips**
- 标准基座不支持测试短剧功能。
- 使用短剧组件需要先开通穿山甲广告。开通问题请咨询：[uni-ad交流群](https://im.dcloud.net.cn/#/?joinGroup=65d85fc09847e92db03ff81a)。

### 组件

**`仅uni-app  nvue支持`（Android、iOS；HBuilderX 5.08+）
`uni-app-x 支持`（Android；HBuilderX 5.31+）**

**属性列表**

| 属性名					| 类型									| 是否必填	| 说明																																		|
| ---						| ---									| ---			| ---																																		|
| `adpid`				| `String`						| 必填			| 广告位标识。																														|
| `lock`				| `String` / `Number`	| 可选			| 单次激励视频可解锁的剧集数。仅在值大于 `0` 时生效；默认值为 `1`，最大值为 `10`。	|
| `free`				| `String` / `Number`	| 可选			| 初始可免费观看的剧集数。仅在值大于 `0` 时生效；默认值为 `1`，最大值为 `20`。			|
| `url-callback`| `Object`						| 可选			| 服务端回调透传参数。当前实现仅识别 `userId`、`extra` 两个字段。								|
| `@load`				| EventHandle					| 可选			| 短剧加载完成。																											|
| `@error`			| EventHandle					| 可选			| 加载失败或展示失败时触发。																									|
| `@click`			| EventHandle					| 可选			| 广告点击时触发。																													|
| `@close`			| EventHandle					| 可选			| 广告页关闭时触发。`isEnded` 为 `Boolean`，表示关闭前是否已经收到奖励完成回调。	|

**`url-callback` 对象结构**

| 字段名		| 类型			| 说明															|
| ---			| ---			| ---															|
| `userId`| `String`| 用户标识，可用于广告回传或业务侧关联。	|
| `extra`	| `String`| 扩展透传字段。											|

### 配置文件

在穿山甲后台 内容输出->接入管理 找到需要接入内容SDK的应用，点击"下载SDK参数配置"，然后将SDK配置文件（例如 sdk_setting_file.json）拷贝到项目的 assets 文件夹下。

![](https://lf3-plat.pglstatp-toutiao.com/obj/union-platform/a30bc3001dff716fcf6876da15151ecf.png)

文件下载之后重命名为：`gm_SDK_Setting.json`，然后将文件放到项目根目录的`nativeResources->android->assets`、`nativeResources->ios->Resources`目录下。

### 示例

```vue
<template>
  <ad-drama
    adpid="广告位"
    :lock="2"
    :free="2"
    :url-callback="urlCallback"
    @load="onLoad"
    @error="onError"
    @close="onClose"
    @click="onClick"
  />
</template>

<script>
export default {
  data() {
    return {
      urlCallback: {
        userId: '11111',
        extra: 'biz-extra'
      }
    }
  },
  methods: {
    onLoad() {},
    onClick() {},
    onClose(e) {
      console.log('close', e.detail && e.detail.isEnded)
    },
    onError(e) {
      console.log('error', e.detail && e.detail.code, e.detail && e.detail.message)
    }
  }
}
</script>
```

### 自建聚合页 API

`uni.createDramaAd` 用于短剧自建聚合页场景。开发者可以自行获取短剧列表、推荐列表、收藏列表、观看记录和搜索结果，渲染聚合页 UI，并在用户点击短剧后打开短剧播放页。

**平台支持**：仅 App支持 uni-app-x （Android；HBuilderX 5.31+） uni-app（Android、iOS；HBuilderX 5.21+）。标准基座不支持测试短剧功能。

#### uni.createDramaAd(options)

创建短剧广告实例。`adpid` 为必填的激励视频广告位 ID。

**语法**

`uni.createDramaAd(options)`

**参数说明**

| 参数名 | 类型 | 必填 | 说明 | 最低支持版本 | 平台 |
| --- | --- | --- | --- | --- | --- |
| `adpid` | `String` | 是 | 激励视频广告位 ID | HBuilderX 5.21+ | App（Android、iOS） |

```ts
interface CreateDramaAdOptions {
  adpid: string
}
```

```js
const dramaAd = uni.createDramaAd({
  adpid: '你的激励视频广告位 ID'
})
```

#### dramaAd.getList(options, successCallback, failCallback)

获取短剧列表，用于自建聚合页渲染。

```ts
interface DramaListOptions {
  page?: number       // 页码，默认 1
  pageSize?: number   // 每页数量，默认 20
  order?: 'default' | 'reverse' | 0 | 1 // 排序方式
}
```

```js
dramaAd.getList({ page: 1, pageSize: 20 }, (res) => {
  console.log('短剧列表', res.dramas)
}, (err) => {
  console.error('获取短剧列表失败', err)
})
```

#### dramaAd.getRecommendedList(options, successCallback, failCallback)

获取推荐短剧列表，用于首页推荐、猜你喜欢等场景。`options` 使用 `page` 和 `pageSize` 分页参数。

```js
dramaAd.getRecommendedList({ page: 1, pageSize: 20 }, (res) => {
  console.log('推荐短剧列表', res.dramas)
}, (err) => {
  console.error('获取推荐短剧列表失败', err)
})
```

#### dramaAd.getCollectionList(options, successCallback, failCallback)

获取用户收藏短剧列表。返回结果中的 `extra.hasMore` 可用于判断是否还有下一页。`options` 使用 `page` 和 `pageSize` 分页参数。

```js
dramaAd.getCollectionList({ page: 1, pageSize: 20 }, (res) => {
  console.log('收藏短剧列表', res.dramas, res.extra && res.extra.hasMore)
}, (err) => {
  console.error('获取收藏短剧列表失败', err)
})
```

#### dramaAd.getHistoryList(options, successCallback, failCallback)

获取用户短剧观看记录列表。`options` 使用 `page` 和 `pageSize` 分页参数。

```js
dramaAd.getHistoryList({ page: 1, pageSize: 20 }, (res) => {
  console.log('观看记录列表', res.dramas)
}, (err) => {
  console.error('获取观看记录失败', err)
})
```

#### dramaAd.search(options, successCallback, failCallback)

根据关键词搜索短剧。`searchWord` 为搜索关键词，`isFuzzy` 为是否模糊匹配（默认 `true`）。返回结果中的 `extra.hasMore` 可用于判断是否还有下一页。

```ts
interface DramaSearchOptions {
  searchWord: string
  isFuzzy?: boolean
  page?: number
  pageSize?: number
}
```

```js
dramaAd.search({ searchWord: '都市', isFuzzy: true, page: 1, pageSize: 20 }, (res) => {
  console.log('搜索结果', res.dramas, res.extra && res.extra.hasMore)
}, (err) => {
  console.error('搜索短剧失败', err)
})
```

#### dramaAd.getInfo(options, successCallback, failCallback)

获取指定短剧信息。`dramaId` 和 `dramaIds` 二选一。

```ts
interface DramaInfoOptions {
  dramaId?: string
  dramaIds?: string[]
}
```

```js
dramaAd.getInfo({ dramaId: '123456' }, (res) => {
  console.log('短剧详情', res.dramas)
}, (err) => {
  console.error('获取短剧信息失败', err)
})
```

#### dramaAd.open(options, successCallback, failCallback)

打开短剧播放页，通常在用户点击自建聚合页卡片时调用。

```ts
interface DramaOpenOptions {
  dramaId: string // 短剧 ID
  episode?: number         // 起播集数，默认 1
  lock?: number            // 单次激励视频解锁的集数，默认 1
  free?: number            // 初始免费观看集数，默认 1
  urlCallback?: {
    userId?: string        // 服务端回调中的用户标识
    extra?: string         // 服务端回调透传参数
  }
}
```

```js
dramaAd.open(
  {
    dramaId: item.dramaId,
    episode: item.currentEpisode || 1,
    lock: 2,
    free: 2,
    urlCallback: {
      userId: 'user_123',
      extra: 'scene=dramaAggregate'
    }
  },
  () => console.log('短剧播放页打开成功'),
  (err) => console.error('短剧播放页打开失败', err)
)
```

#### dramaAd.destroy()

销毁短剧广告实例。建议在页面卸载时调用，避免资源和事件监听残留。

```js
export default {
  onUnload() {
    dramaAd.destroy()
  }
}
```

#### 事件监听

实例支持以下事件监听和移除方法：

| 事件 | 监听 | 移除 | 说明 |
| --- | --- | --- | --- |
| 加载成功 | `onLoad(callback)` | `offLoad(callback)` | 播放页加载成功时触发 |
| 错误 | `onError(callback)` | `offError(callback)` | 发生错误时触发 |
| 播放事件 | `onPlayEvent(callback)` | `offPlayEvent(callback)` | 播放相关事件，事件数据包含 `event`、`info` |
| 广告事件 | `onAdEvent(callback)` | `offAdEvent(callback)` | 广告相关事件，事件数据包含 `event`、`info` |
| 解锁事件 | `onUnlockEvent(callback)` | `offUnlockEvent(callback)` | 短剧解锁相关事件 |

```js
function handleError(err) {
  console.error('短剧错误', err)
}

dramaAd.onError(handleError)
dramaAd.offError(handleError)
```


#### 返回数据

`getList`、`getRecommendedList`、`getCollectionList`、`getHistoryList`、`search` 和 `getInfo` 返回以下结构。字段可能因广告渠道和短剧内容有所差异，业务侧应做好空值兼容。

```ts
interface DramaListResult {
  dramas: DramaInfo[]
  extra: Object
}

interface DramaInfo {
  dramaId: string
  title: string
  coverUrl: string
  desc: string
  categoryId: number
  categoryName: string
  currentEpisode: number
  totalEpisodes: number
  groupId: number
  unlockIndex: number
  styleType: number
  duration: number
  rawInfo: Object
}
```

**DramaListResult 字段说明**

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| `dramas` | `Array` | 短剧信息数组，数组元素为 `DramaInfo`。 |
| `extra` | `Object` | 渠道返回的扩展信息；收藏列表和搜索结果可通过 `extra.hasMore` 判断是否还有更多数据。 |

**DramaInfo 字段说明**

| 字段名 | 类型 | 说明 |
| --- | --- | --- |
| `dramaId` | `String` | 短剧 ID。 |
| `title` | `String` | 短剧标题。 |
| `coverUrl` | `String` | 短剧封面地址。 |
| `desc` | `String` | 短剧简介。 |
| `categoryId` | `Number` | 分类 ID。 |
| `categoryName` | `String` | 分类名称。 |
| `currentEpisode` | `Number` | 当前剧集或推荐起播剧集。 |
| `totalEpisodes` | `Number` | 短剧总集数。 |
| `groupId` | `Number` | 渠道内容分组 ID。 |
| `unlockIndex` | `Number` | 解锁相关的剧集索引。 |
| `styleType` | `Number` | 渠道返回的内容样式类型。 |
| `duration` | `Number` | 渠道返回的内容时长信息。 |
| `rawInfo` | `Object` | 渠道返回的原始扩展信息。 |

#### 自建聚合页示例

```vue
<template>
  <view>
    <view v-for="item in dramas" :key="item.dramaId" @click="openDrama(item)">
      {{ item.title }}
    </view>
  </view>
</template>

<script>
let dramaAd

export default {
  data() {
    return { dramas: [] }
  },
  onLoad() {
    dramaAd = uni.createDramaAd({ adpid: '你的激励视频广告位 ID' })
    dramaAd.getRecommendedList({ page: 1, pageSize: 20 }, (res) => {
      this.dramas = res.dramas || []
    }, (err) => {
      console.error('获取推荐短剧列表失败', err)
    })
  },
  onUnload() {
    if (dramaAd) {
      dramaAd.destroy()
      dramaAd = null
    }
  },
  methods: {
    openDrama(item) {
      dramaAd.open({
        dramaId: item.dramaId,
        episode: item.currentEpisode || 1,
        lock: 2,
        free: 2
      })
    }
  }
}
</script>
```
