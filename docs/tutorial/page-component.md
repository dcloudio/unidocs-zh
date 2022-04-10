传统vue项目开发，引用组件需要`导入 - 注册 - 使用`三个步骤，如下：


<div>
	<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/918f236f-a751-4395-95d0-ae316794a7d7.png" style="max-width:500px"></img>
</div>

Vue 3.x增加了`script setup`特性，将三步优化为两步，无需注册步骤，更为简洁：


<div>
	<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/4db27622-95cb-4cb2-b772-6e28c29f8e2d.png" style="max-width:500px"></img>
</div>

`uni-app`的`easycom`机制，将组件引用进一步优化，开发者只管使用，无需考虑导入和注册，更为高效：


<div>
	<img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/939e84ca-dc40-43a1-a302-4ed7062eebbe.png" style="max-width:500px"></img>
</div>

在 uni-app 项目中，页面引用组件和组件引用组件的方式都是一样的（可以理解为：页面是一种特殊的组件），均支持通过 `easycom` 方式直接引用。

easycom 规范详细介绍，参考：[easycom](/collocation/pages.html#easycom)