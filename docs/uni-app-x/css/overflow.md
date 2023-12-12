## overflow


<!-- CSSJSON.overflow.description -->

<!-- CSSJSON.overflow.syntax -->

<!-- CSSJSON.overflow.values -->

<!-- CSSJSON.overflow.defaultValue -->

<!-- CSSJSON.overflow.unixTags -->

<!-- CSSJSON.overflow.compatibility -->

<!-- CSSJSON.overflow.reference -->

### Bug & Tips

- Android平台 当元素设置 overflow = visible 后会扩大元素的渲染区域，元素渲染及内存占用存在性能消耗，应尽量避免设置 overflow = visible
- Android平台 uni-app x 父元素设置 overflow = visible，子元素超出父元素的区域，无法正常响应touch、click事件