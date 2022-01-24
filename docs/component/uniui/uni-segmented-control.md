
> **组件名：uni-segmented-control**
> 代码块： `uSegmentedControl`
> 
>  [点击下载&安装](https://ext.dcloud.net.cn/plugin?name=uni-segmented-control)

用作不同视图的显示

### 基本用法

在 ``template`` 中的使用

```html
<template>
    <view>
        <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button" activeColor="#4cd964"></uni-segmented-control>
        <view class="content">
            <view v-show="current === 0">
                选项卡1的内容
            </view>
            <view v-show="current === 1">
                选项卡2的内容
            </view>
            <view v-show="current === 2">
                选项卡3的内容
            </view>
        </view>
    </view>
</template>
```

```html
<script>
export default {
  data() {
    return {
        ...
        items: ['选项1', '选项2', '选项3'],
        current: 0
    };
  },
  
  methods: {
    ...
    onClickItem(e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex;
      }
    }
  }
};
</script>
```

## API

### SegmentedControl Props

|属性名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|current|Number|0|当前选中的tab索引值，从0计数|
|styleType|String|button|分段器样式类型，可选值：button（按钮类型），text（文字类型）	|
|activeColor|String|#007aff|选中的标签背景色与边框颜色|
|values|Array|-|选项数组|

### SegmentedControl Events

|事件名|说明|返回值|
|:-:|:-:|:-:|
|@clickItem	|组件触发点击事件时触发|e={currentIndex}	|



## 组件示例

点击查看：[https://hellouniapp.dcloud.net.cn/pages/extUI/segmented-control/segmented-control](https://hellouniapp.dcloud.net.cn/pages/extUI/segmented-control/segmented-control)