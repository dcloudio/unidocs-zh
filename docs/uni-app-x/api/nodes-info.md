## uni.createSelectorQuery() @createselectorquery

<!-- UTSAPIJSON.createSelectorQuery.description -->

<!-- UTSAPIJSON.createSelectorQuery.param -->

**selector 说明：**

``selector`` 类似于 CSS 的选择器，但仅支持下列语法。
- ID选择器：``#the-id``
- class选择器（可以连续指定多个）：``.a-class.another-class``
- 子元素选择器：``.the-parent > .the-child``
- 后代选择器：``.the-ancestor .the-descendant``
- 跨自定义组件的后代选择器：``.the-ancestor >>> .the-descendant``
- 多选择器的并集：``#a-node, .some-other-nodes``

uni-app-x 暂时支持以下选择器

|selector||
|:-:|:-:|
|ID选择器|``#the-id``|
|class选择器|``.a-class``|

<!-- UTSAPIJSON.createSelectorQuery.returnValue -->

uni-app-x 暂不支持 `context` 属性

##### NodeInfo 属性值

|属性		|类型		|说明							|
|---		|---		|---							|
|id			|String	|节点的 ID				|
|dataset|Object	|节点的 dataset		|
|left		|Number	|节点的左边界坐标	|
|right	|Number	|节点的右边界坐标	|
|top		|Number	|节点的上边界坐标	|
|bottom	|Number	|节点的下边界坐标	|
|width	|Number	|节点的宽度				|
|height	|Number	|节点的高度				|

<!-- UTSAPIJSON.createSelectorQuery.compatibility -->

<!-- UTSAPIJSON.createSelectorQuery.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->


### 代码示例

```html
<template>
  <view>
    <button class="btn btn-get-node-info" @click="getNodeInfo">getNodeInfo</button>
    <button class="btn btn-get-all-node-info" @click="getAllNodeInfo">getAllNodeInfo</button>
    <view class="rect-1-2">
      <view class="rect rect1"></view>
      <view class="rect rect2"></view>
    </view>
    <view class="rect-info-1-2">
      <view class="rect-info" v-for="(nodeInfo, index) in nodeInfoList" :key="index">
        <view class="node-info-item">
          <text class="node-info-item-k">left: </text>
          <text class="node-info-item-v">{{nodeInfo.left}}</text>
        </view>
        <view class="node-info-item">
          <text class="node-info-item-k">top: </text>
          <text class="node-info-item-v">{{nodeInfo.top}}</text>
        </view>
        <view class="node-info-item">
          <text class="node-info-item-k">right: </text>
          <text class="node-info-item-v">{{nodeInfo.right}}</text>
        </view>
        <view class="node-info-item">
          <text class="node-info-item-k">bottom: </text>
          <text class="node-info-item-v">{{nodeInfo.bottom}}</text>
        </view>
        <view class="node-info-item">
          <text class="node-info-item-k">width: </text>
          <text class="node-info-item-v">{{nodeInfo.width}}</text>
        </view>
        <view class="node-info-item">
          <text class="node-info-item-k">height: </text>
          <text class="node-info-item-v">{{nodeInfo.height}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        nodeInfoList: [] as NodeInfo[]
      }
    },
    methods: {
      getNodeInfo() {
        uni.createSelectorQuery().select('.rect1').boundingClientRect().exec((ret) => {
          this.nodeInfoList.length = 0
          this.nodeInfoList.push(ret[0] as NodeInfo)
        })
      },
      getAllNodeInfo() {
        uni.createSelectorQuery().selectAll('.rect').boundingClientRect().exec((ret) => {
          this.nodeInfoList.length = 0
          this.nodeInfoList.push(...(ret[0] as NodeInfo[]))
        })
      }
    }
  }
</script>
```

组件内使用

`this.createSelectorQuery()`, 等效于 `uni.createSelectorQuery().in(this)`

```html
<template>
  <view>
    <button @click="getNodeInfo">getNodeInfo</button>
    <view class="rect-1-2">
      <view class="rect rect1"></view>
      <view class="rect rect2"></view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        nodeInfoList: [] as NodeInfo[]
      }
    },
    props: {
    },
    methods: {
      getNodeInfo() {
        this.createSelectorQuery().select('.rect1').boundingClientRect().exec((ret) => {
          this.nodeInfoList.length = 0
          this.nodeInfoList.push(ret[0] as NodeInfo)
        })
      }
    }
  }
</script>
```
