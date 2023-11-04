## form

<!-- UTSCOMJSON.form.description -->

<!-- UTSCOMJSON.form.attrubute -->

<!-- UTSCOMJSON.form.event -->

<!-- UTSCOMJSON.form.example -->

<!-- UTSCOMJSON.form.compatibility -->

### submit策略差异

form 组件的表单提交，因为微信小程序的实现策略，与浏览器W3C的策略略有差异。目前uni-app在app和web上的实现参考了微信小程序。具体是：

- 多个表单子项如果 name 相同，仅保留最后一个表单子项。而浏览器标准form是会合并为数组。
- 设置 disabled 属性的表单子项，仍然会提交。而浏览器标准form提交时会忽略disabled的表单子项。

注意uni-app编译到web平台，也是按uni-app的策略，而不是浏览器的策略。uni-app 的 web平台使用 uni-app 自己的 form 组件，而不是浏览器的 form 标签。

### reset策略差异

reset在浏览器W3C的策略是还原、重置。

在uni-app中，不同平台的策略不同，有的是`还原`，有的是`清空`。

各平台策略如下：

|uni-app-x App	|uni-app App|Web	|微信小程序	|支付宝小程序	|百度小程序	|抖音小程序	|
|:-:			|:-:		|:-:	|:-:		|:-:			|:-:		|:-:		|
|还原(3.97+)	|清空		|清空	|清空		|还原			|清空		|清空		|


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

2. 清空已有值(含初始值和改变后的值)

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


<!-- UTSCOMJSON.form.children -->

<!-- UTSCOMJSON.form.reference -->

## Bug & Tips

- 安卓 uni-app-x 暂不支持自定义组件内的表单组件

