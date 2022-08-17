<md-translatedByGoogle />
#### icon

图标。
Icon.

**平台差异说明**
**Platform difference description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
|App|H5|WeChat applet|Alipay applet|Baidu applet|ByteDance applet, Feishu applet|QQ applet|Quick application|360 applet|Kuishou applet|JD applet|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√(2.2.3+)|√|√|√|√|√|√|√|√|√|

**Tips**

* 由于 icon 组件各端表现存在差异，可以通过使用 [字体图标](/tutorial/syntax-css.html#字体图标) 的方式来弥补各端差异。
* Due to the differences in the performance of each end of the icon component, you can use [font icon](/tutorial/syntax-css.html#%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0% 87) to make up for the differences at each end.

**属性说明**
**Attribute description**

|属性名|类型|默认值|说明|
| Attribute name| Type| Defaults| Instruction|
|---|---|---|---|
|type|String||icon的类型|
| type| String| | icon type|
|size|Number|23|icon的大小，单位px|
| size| Number| 23| icon size, in px|
|color|Color||icon的颜色，同css的color|
| color| Color| | The color of the icon is the same as that of css.|

各平台 type 有效值说明：
Description of valid values of type on different platforms:

|平台|type 有效值|
| Platform| type valid value|
|:-:|:-:|
|App、H5、微信小程序、QQ小程序|success, success_no_circle, info, warn, waiting, cancel, download, search, clear|
|App, H5, WeChat applet, QQ applet|success, success_no_circle, info, warn, waiting, cancel, download, search, clear|
|支付宝小程序|info, warn, waiting, cancel, download, search, clear, success, success_no_circle,loading|
|Alipay Mini Program|info, warn, waiting, cancel, download, search, clear, success, success_no_circle,loading|
|百度小程序|success, info, warn, waiting, success_no_circle, clear, search, personal, setting, top, close, cancel, download, checkboxSelected, radioSelected, radioUnselect|


**示例**
**Example**
```html
<view class="item" v-for="(value,index) in iconType" :key="index">
    <icon :type="value" size="26"/>
    <text>{{value}}</text>
</view>
```
```javascript
export default {
    data() {
        return {
            iconType: ['success']
        }
    },
    onLoad() {
        // #ifdef APP-PLUS|| MP-WEIXIN
        this.iconType = ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search','clear']
        // #endif
        // #ifdef MP-ALIPAY
        this.iconType = ['info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear', 'success', 'success_no_circle', 'loading']
        // #endif
        // #ifdef MP-BAIDU
        this.iconType = ['success', 'info', 'warn', 'waiting', 'success_no_circle', 'clear', 'search', 'personal', 'setting', 'top', 'close', 'cancel', 'download', 'checkboxSelected', 'radioSelected', 'radioUnselect']
        // #endif
    }
}

```

**效果展示**
**Effect illustration**

<div style="display:flex;align-items: flex-start;justify-content: center;flex-wrap: wrap;">
		<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d188f390-4f30-11eb-97b7-0dc4655d6e68.png" width="375" style="margin-right:20px;"/>
		<img src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d2562ea0-4f30-11eb-97b7-0dc4655d6e68.png" width="375"/>
</div>
