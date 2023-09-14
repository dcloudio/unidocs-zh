## z-index


<!-- CSSJSON.z-index.description -->

> App 平台 list-view 为了提升性能，对其子组件 list-item 复用优化机制，因此 list-item 组件不支持 z-index 属性 

<!-- CSSJSON.z-index.syntax -->

<!-- CSSJSON.z-index.values -->

<!-- CSSJSON.z-index.compatibility -->

#### App平台  
在App端仅对同级的兄弟元素之间支持 z-index 来调节，同级元素中 z-index 较大的元素会覆盖较小的元素在上层进行显示，没有设置 z-index 值时，同级元素中写在后面的元素覆盖写在前面的元素。  
z-index默认值为0。  

<!-- CSSJSON.z-index.reference -->
