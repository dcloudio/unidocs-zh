#### 什么是 uni-app x 编译器

`uni-app x`的编译器由uvue编译器、uts语言编译器共同组成，还调用了kotlin、swift编译器。

编译器把开发者书写的uvue和uts代码进行编译，配合运行时实现了跨平台。

uvue编译器是在Vite基础上进行扩展开发的。

它的大部分特性（如条件编译）和配置项（如环境变量）与`uni-app`的vue3编译器一致，[详见](https://uniapp.dcloud.net.cn/tutorial/compiler.html)

支持less、sass、scss等css预编译。

#### 编译缓存 @cache

`uni-app x`编译器引入了编译缓存机制，以优化开发体验。

在App端，`uni-app x`首先将uts和uvue编译为平台原生语言（如Kotlin），然后经过平台配套的编译器进行打包运行。

App原生语言的编译过程耗时较长，因此编译器引入了缓存机制来加快开发过程。

在编译时，开发者的uts和uvue代码的编译结果会被持久化为缓存，存在unpackage目录下。

当下次运行时，如果代码没有发生变动，编译器会优先使用缓存中的编译结果，从而加快编译速度。

如果您不想使用缓存，可以在HBuilderX运行窗口勾选`清理构建缓存`

这个机制类似于传统强类型语言开发中的Build和clean。

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-x/clean-up-the-build-cache.jpg)#{.zooming width="400px"}

