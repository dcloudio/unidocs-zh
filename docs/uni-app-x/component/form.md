## form

<!-- UTSCOMJSON.form.description -->

<!-- UTSCOMJSON.form.attrubute -->

<!-- UTSCOMJSON.form.event -->

<!-- UTSCOMJSON.form.example -->

<!-- UTSCOMJSON.form.compatibility -->

<!-- UTSCOMJSON.form.children -->

<!-- UTSCOMJSON.form.reference -->

## 平台差异

**@submit**

- 相同 name 属性被覆盖
- 设置 disabled 属性后不会被忽略
- 表单嵌套时，向上级查找到最近表单时结束

安卓 uni-app-x 暂不支持自定义组件内的表单组件

**@reset**

分 2 种情况，`还原` 和 `清空`

|安卓 uni-app-x	|App	|H5		|微信小程序	|支付宝小程序	|百度小程序	|抖音小程序	|
|:-:						|:-:	|:-:	|:-:				|:-:				|:-:				|:-:				|
|还原(3.99+)		|清空	|清空	|清空				|还原				|清空				|清空				|


1. 还原初始值

```html
<!-- reset 后为 name -->
<input name="input1" value="name" />

<!-- reset 后为 true -->
<switch name="switch1" :checked="true" />

<!-- reset 后为 50 -->
<slider name="slider1" :value="50" :min="10" :max="110" />

<!-- reset 后为 "写字" 被 checked -->
<checkbox-group name="loves">
  <view>
    <checkbox value="0" /><text>读书</text>
  </view>
  <view>
    <checkbox value="1" :checked="true" /><text>写字</text>
  </view>
</checkbox-group>
```

2. 清空已有值(含初始值和后输入值)

```html
<!-- reset 后为 "" -->
<input name="input1" value="name" />

<!-- reset 后为 false -->
<switch name="switch1" :checked="true" />

<!-- reset 后为 最小值10 -->
<slider name="slider1" :value="50" :min="10" :max="110" />

<!-- reset 后为 无任何 checked -->
<checkbox-group name="loves">
  <view>
    <checkbox value="0" /><text>读书</text>
  </view>
  <view>
    <checkbox value="1" :checked="true" /><text>写字</text>
  </view>
</checkbox-group>
```
