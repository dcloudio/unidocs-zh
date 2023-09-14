## background-image

<!-- CSSJSON.background-image.description -->

<!-- CSSJSON.background-image.syntax -->

<!-- CSSJSON.background-image.values -->

<!-- CSSJSON.background-image.compatibility -->

#### App平台  
App平台暂不支持背景图，仅支持linear-gradient设置背景渐变色。  
linear-gradient仅支持三个参数，格式如下：
```
linear-gradient(<direction>, <color-start>, <color-stop>)
```
- direction  
	渐变方向，字符串类型，支持以下值：  
	+ to right：从左向右渐变  
	+ to left：从右向左渐变  
	+ to bottom：从上到下渐变  
	+ to top：从下到上渐变  
	+ to bottom right：从左上角到右下角  
	+ to top left：从右下角到左上角  
- color-start  
	渐变起始点颜色值，支持RGB（rgb(255, 0, 0)）；RGBA（rgba(255, 0, 0, 0.5)）；十六进制（#ff0000）；精简写法的十六进制（#f00）；色值关键字（red）  
- color-stop  
	渐变终点颜色值，支持RGB（rgb(255, 0, 0)）；RGBA（rgba(255, 0, 0, 0.5)）；十六进制（#ff0000）；精简写法的十六进制（#f00）；色值关键字（red）  

> background-image 优先级高于 background-color，同时设置 background-image 和 background-color 时 background-color 被覆盖。

<!-- CSSJSON.background-image.reference -->
