## image

<!-- UTSCOMJSON.image.description -->

<!-- UTSCOMJSON.image.attrubute -->

<!-- UTSCOMJSON.image.event -->

### 图片格式
- [x] bmp
- [x] gif
- [x] ico
- [x] jpg
- [x] png
- [x] webp
- [x] heic（Android10+支持）

如需其他图片格式，可搜索插件市场或自行开发uts组件插件。如[svg插件](https://ext.dcloud.net.cn/search?q=svg&orderBy=Relevance&cat1=8&cat2=82)

### src路径支持说明

- 本地路径/static方式

	由于uni-app编译时，只把/static目录下的静态资源copy到app中，所以src均需指向/static目录下。
	
	其他目录的图片由于不会被打包进去，所以无法访问。
	
	本地路径的大小写，在真机运行时由于运行在sd卡上所以不敏感，但在打包后整合到apk中由于Android系统的要求是大小写敏感的。

- 本地绝对路径file:///方式
	
	形如`file:///storage/emulated/0/Android/data/io.dcloud.uniappx/apps/__UNI__4517034/www/static/test-image/logo.png`。
	
	访问本应用内的资源时无需使用本方式，推荐使用/static方式。上述地址受包名、appid影响。
	
	file:///方式一般用于download等公共目录。使用前需确保拥有相关权限。

- 支持网络路径
	
	支持http、https。
	
	image组件内部使用facebook的[fresco](https://github.com/facebook/fresco)库(2.5.0)，自带缓存策略，也会自动清理缓存。

<!-- UTSCOMJSON.image.example -->

<!-- UTSCOMJSON.image.compatibility -->

### tips
在error事件里监听报错，并重新设置image组件的src，可实现自定义错误图。[详见示例代码](https://gitcode.net/dcloud/hello-uni-app-x/-/blob/master/pages/component/image/image-path.uvue)

<!-- UTSCOMJSON.image.children -->

<!-- UTSCOMJSON.image.reference -->

