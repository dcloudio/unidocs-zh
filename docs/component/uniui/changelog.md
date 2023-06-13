## 发布周期
## Release cycle
- 修订版本号：每周末会进行日常 bugfix 更新。**如果有紧急的 bugfix，则任何时候都可发布**
- Revision number: Daily bugfix updates are made every weekend. **If there is an urgent bugfix, it can be released at any time**
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- Minor version number: A backward compatible version with new features is released every month.
- 主版本号：含有破坏性更新和新特性，不在发布周期内。
- Major version number: Contains breaking updates and new features that are not in the release cycle.

## 1.4.6（2021-09-30）
- uni-data-picker 新增 清除已选项的功能（通过 clearIcon 属性配置是否显示按钮），同时提供 clear 方法以供调用，二者等效
- uni-data-picker adds the function of clearing the selected option (configure whether to display the button through the clearIcon attribute), and provides the clear method for calling, the two are equivalent
- uni-data-picker 修复 readonly 为 true 时报错的 bug
- uni-data-picker fix the bug of error when readonly is true
- uni-data-picker 修复 上一版本造成的 map 属性失效的bug
- uni-data-picker fixes the bug that the map attribute was invalid caused by the previous version
- uni-data-picker 新增 ellipsis 属性，支持配置 tab 选项长度过长时是否自动省略
- uni-data-picker adds the ellipsis attribute to support whether to automatically omit the tab option when the length is too long

## 1.4.5（2021-09-24）
- uni-icons 新增 支持使用 css 图标库扩展组件（仅 vue 支持）
- uni-badge 修复 在抖音小程序上样式不生效的 bug
- uni-calendar 修复 startDate、 endDate 属性失效的 bug
- uni-calendar fix the bug that startDate and endDate properties are invalid
- uni-data-picker 修复 某些情况下级联未触发的 bug
- uni-data-picker fixes a bug where cascades were not triggered in some cases
- uni-data-picker 新增 提供 show 和 hide 方法，开发者可以通过 ref 调用
- uni-data-picker adds show and hide methods, which developers can call through ref
- uni-data-picker 新增 选项内容过长自动添加省略号
- uni-data-picker added ellipsis will be added automatically if the content of the option is too long
- uni-data-picker 新增 map 属性 字段映射，将 text/value 映射到数据中的其他字段
- uni-data-picker adds map attribute field mapping to map text/value to other fields in the data

## 1.4.4（2021-09-10）
- uni-ui 修改平台兼容性
- uni-ui modify platform compatibility
- uni-datetime-picker 修复 hide-second 在移动端的 bug
- uni-datetime-picker fix hide-second bug on mobile
- uni-datetime-picker 修复 单选赋默认值时，赋值日期未高亮的 bug
- uni-datetime-picker fixes the bug that the assigned date is not highlighted when the default value is assigned to the radio
- uni-datetime-picker 修复 赋默认值时，移动端未正确显示时间的 bug
- uni-datetime-picker fixes the bug that the mobile terminal does not display the time correctly when assigning the default value
- uni-datetime-picker 新增 hide-second 属性，支持只使用时分，隐藏秒
- uni-datetime-picker adds hide-second property, which supports only the use of hours and minutes and hides seconds
- uni-rate 优化 默认值修改为 0 颗星
- uni-rate optimization The default value is modified to 0 stars

## 1.4.3（2021-09-03）
- uni-data-checkbox 修复 在uni-forms中 modelValue 中不存在当前字段，当前字段必填写也不参与校验的问题
- uni-data-checkbox fixes the problem that there is no current field in modelValue in uni-forms, the current field must be filled in and does not participate in verification
- uni-datetime-picker 优化 取消选中时（范围选）直接开始下一次选择, 避免多点一次
- uni-datetime-picker optimization When unchecked (range selection), the next selection will start directly, avoiding multiple clicks
- uni-datetime-picker 优化 移动端支持清除按钮，同时支持通过 ref 调用组件的 clear 方法
- uni-datetime-picker optimization The mobile terminal supports the clear button, and supports calling the clear method of the component through ref
- uni-datetime-picker 优化 调整字号大小，美化日历界面
- uni-datetime-picker optimization Adjust the font size and beautify the calendar interface
- uni-datetime-picker 修复 因国际化导致的 placeholder 失效的 bug
- uni-datetime-picker fixes the bug of placeholder invalidation caused by internationalization
- uni-file-picker 修复 return-type="object" 时且存在v-model时，无法删除文件的Bug
- uni-file-picker fixes the bug that the file cannot be deleted when return-type="object" and v-model exists
- uni-file-picker 新增 参数中返回 fileID 字段
- uni-file-picker added the return fileID field in the parameter
- uni-file-picker 修复 腾讯云传入fileID 不能回显的bug
- uni-file-picker fixes the bug that Tencent Cloud's incoming fileID cannot be echoed
- uni-file-picker 修复 选择图片后，不能放大的问题
- uni-file-picker fixes the problem that the image cannot be enlarged after selecting it
- uni-link 修复 在 nvue 下不显示的 bug
- uni-link fixes bugs that are not displayed under nvue
- uni-list 修复 在vue3中to属性在发行应用的时候报错的bug
- uni-list fixes the bug that the to attribute in vue3 reported an error when publishing the application
- uni-search-bar 修复 value 属性与 modelValue 属性不兼容的Bug
- uni-search-bar fix the bug that the value attribute is incompatible with the modelValue attribute
- uni-swipe-action 优化 close-all 方法
- uni-swipe-action optimizes the close-all method

## 1.4.2（2021-08-20）
- 新增 uni-ui 组件支持国际化 i18n
- Added uni-ui component to support internationalization i18n
- uni-collapse 优化 show-arrow 属性默认为true
- uni-collapse optimization show-arrow property defaults to true
- uni-collapse 新增 show-arrow 属性，控制是否显示右侧箭头
- uni-collapse adds the show-arrow property to control whether to display the right arrow
- uni-data-checkbox 修复 单选 list 模式下 ，icon 为 left 时，选中图标不显示的问题
- uni-data-checkbox fixes the problem that the selected icon is not displayed when the icon is left in the single-select list mode
- uni-easyinput 修复 在 uni-forms 的动态表单中默认值校验不通过的 bug
- uni-easyinput fixes the bug that the default value validation fails in the dynamic form of uni-forms
- uni-file-picker 修复 由于 0.2.11 版本引起的不能回显图片的Bug
- uni-file-picker fixes the bug that the image cannot be echoed due to version 0.2.11
- uni-file-picker 新增 clearFiles(index) 方法，可以手动删除指定文件
- uni-file-picker adds the clearFiles(index) method, which can manually delete the specified file
- uni-file-picker 修复 v-model 值设为 null 报错的Bug
- uni-file-picker fix the bug that the value of v-model is set to null
- uni-swipe-action 新增 close-all 方法，关闭所有已打开的组件
- uni-swipe-action adds a new close-all method to close all opened components
- uni-swipe-action 新增 resize() 方法，在非微信小程序、h5、app-vue端出现不能滑动的问题的时候，重置组件
- uni-swipe-action adds the resize() method, which resets the component when the non-WeChat applet, h5, and app-vue side cannot be swiped
- uni-swipe-action 修复 app 端偶尔出现类似 Page[x][-x,xx;-x,xx,x,x-x] 的问题 
- uni-swipe-action fixes occasional issues like Page[x][-x,xx;-x,xx,x,x-x] on the app side
- uni-swipe-action 优化 微信小程序、h5、app-vue 滑动逻辑，避免出现动态新增组件后不能滑动的问题
- uni-swipe-action optimizes the sliding logic of WeChat applet, h5, and app-vue to avoid the problem of not being able to slide after dynamically adding components

## 1.4.0（2021-08-13）
- uni-calendar 修复 弹出层被 tabbar 遮盖 bug
- uni-calendar fix the bug that the popup layer is covered by the tabbar
- uni-data-checkbox 修复 在 uni-forms 中重置表单，错误信息无法清除的问题
- uni-data-checkbox fix reset form in uni-forms, error message cannot be cleared
- uni-dateformat 调整 默认时间不再是当前时间，而是显示'-'字符
- uni-dateformat adjustment The default time is no longer the current time, but the '-' character is displayed
- uni-datetime-picker 新增 适配 vue3
- uni-datetime-picker added for vue3
- uni-datetime-picker 新增 支持作为 uni-forms 子组件相关功能
- uni-datetime-picker added support as uni-forms subcomponent related functions
- uni-datetime-picker 修复 在 uni-forms 中使用时，选择时间报 NAN 错误的 bug
- uni-datetime-picker fixes the bug that when using in uni-forms, select time report NAN error
- uni-datetime-picker 修复 type 属性动态赋值无效的 bug
- uni-datetime-picker fix the bug of invalid dynamic assignment of type attribute
- uni-datetime-picker 修复 ‘确认’按钮被 tabbar 遮盖 bug
- uni-datetime-picker fix "confirm" button is covered by tabbar bug
- uni-datetime-picker 修复 组件未赋值时范围选左、右日历相同的 bug
- uni-datetime-picker fixes the bug that the left and right calendars are selected in the same range when the component is not assigned a value
- uni-datetime-picker 修复 范围选未正确显示当前值的 bug
- uni-datetime-picker fixes the bug that the range selection does not display the current value correctly
- uni-datetime-picker 修复 h5 平台（移动端）报错 'cale' of undefined 的 bug
- uni-datetime-picker fixes the bug of 'cale' of undefined on h5 platform (mobile terminal)
- uni-easyinput 修复 在 uni-forms 中重置表单，错误信息无法清除的问题
- uni-easyinput fixes the problem that the error message cannot be cleared when the form is reset in uni-forms
- uni-file-picker 修复 return-type="object" 时，无法删除文件的Bug
- uni-file-picker fix the bug that the file cannot be deleted when return-type="object"
- uni-file-picker 修复 auto-upload 属性失效的Bug
- uni-file-picker fix the bug that the auto-upload attribute is invalid
- uni-forms 修复 没有添加校验规则的字段依然报错的Bug
- uni-forms fixed the bug that the field without adding validation rules still reported an error
- uni-forms 修复 重置表单错误信息无法清除的问题
- uni-forms fix the problem that the reset form error message cannot be cleared
- uni-forms 优化 组件文档
- uni-forms optimization component documentation
- uni-forms 修复 表单验证只生效一次的问题
- uni-forms fix the problem that form validation only takes effect once
- uni-tag type 不是 default 时，size 为 small 字体大小显示不正确
- When uni-tag type is not default, size is small and the font size is displayed incorrectly


[查看更多](https://ext.dcloud.net.cn/plugin?id=55&update_log)
[View more](https://ext.dcloud.net.cn/plugin?id=55&update_log)