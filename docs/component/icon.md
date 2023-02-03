#### icon

图标。
icon.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|字节跳动小程序、飞书小程序|QQ小程序|快应用|360小程序|快手小程序|京东小程序|
| App| H5|WeChat MiniApp|Alipay MiniApp|Baidu MiniApp|Byte Beat MiniApp, Feishu MiniApp|QQ MiniApp| QuickApp|360 MiniApp| Kuaishou MiniApp|Jingdong MiniApp|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|√|√(2.2.3+)|√|√|√|√|√|√|√|√|√|

**Tips**

* 由于 icon 组件各端表现存在差异，可以通过使用 [字体图标](/tutorial/syntax-css.html#字体图标) 的方式来弥补各端差异。
* Due to the differences in the performance of each end of the icon component, you can use [font icon](/tutorial/syntax-css.html#%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0% 87) to make up for the differences at each end.

**属性说明**
**Attribute Description**

|属性名|类型|默认值|说明|
|Property Name|Type|Default Value|Description|
|---|---|---|---|
|type|String||icon的类型|
| type| String|| icon type|
|size|Number|23|icon的大小，单位px|
| size| Number| 23| The size of the icon, in px|
|color|Color||icon的颜色，同css的color|
| color| Color|| icon color, same as css color|

各平台 type 有效值说明：
Explanation of valid values of type on each platform:

|平台|type 有效值|
|platform| valid value of type|
|:-:|:-:|
|App、H5、微信小程序、QQ小程序|success, success_no_circle, info, warn, waiting, cancel, download, search, clear|
| App, H5, WeChat MiniApp, QQ MiniApp| success, success_no_circle, info, warn, waiting, cancel, download, search, clear|
|支付宝小程序|info, warn, waiting, cancel, download, search, clear, success, success_no_circle,loading|
|Alipay MiniApp| info, warn, waiting, cancel, download, search, clear, success, success_no_circle,loading|
|百度小程序|success, info, warn, waiting, success_no_circle, clear, search, personal, setting, top, close, cancel, download, checkboxSelected, radioSelected, radioUnselect|
|Baidu MiniApp| success, info, warn, waiting, success_no_circle, clear, search, personal, setting, top, close, cancel, download, checkboxSelected, radioSelected, radioUnselect|


**示例**
**example**
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
**Show results**

<div style="display:flex;align-items: flex-start;justify-content: center;flex-wrap: wrap;">
		<img src="https://web-assets.dcloud.net.cn/unidoc/zh/icon1.png" width="375" style="margin-right:20px;"/>
		<img src="https://web-assets.dcloud.net.cn/unidoc/zh/icon2.png" width="375"/>
</div>
