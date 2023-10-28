## video

<!-- UTSCOMJSON.video.description -->

<!-- UTSCOMJSON.video.attrubute -->

<!-- UTSCOMJSON.video.event -->

<!-- UTSCOMJSON.video.component_type -->

<!-- UTSCOMJSON.video.example -->

<!-- UTSCOMJSON.video.compatibility -->

#### App平台

App-Android平台video组件使用ijkplayer库实现：[https://github.com/bilibili/ijkplayer](https://github.com/bilibili/ijkplayer)；

弹幕功能使用DanmakuFlameMaster库实现：[https://github.com/bilibili/DanmakuFlameMaster](https://github.com/bilibili/DanmakuFlameMaster)

ijkplayer库的功能较多，video组件并非完全封装。有需要的开发者可以使用uts直接操作该库。

<!-- UTSCOMJSON.video.children -->

### 上下文对象API

video的操作api为[uni.createVideoContext()](../api/create-video-context.md)。

给video组件设一个id属性，将id的值传入uni.createVideoContext()，即可得到video组件的上下文对象，进一步可使用`.play()`、`.stop()`等方法。

<!-- UTSCOMJSON.video.reference -->

### Bug & Tips@tips
- 暂不支持横屏全屏后放置子组件
- 标准运行基座默认不包含intel x86 cpu的兼容so库，所以video组件在标准基座运行时无法在x86 cpu的设备上运行（常见于模拟器）。如需支持x86 cpu，请在manifest里配置`abiFilters`，打包或自定义基座后生效 [详见](https://uniapp.dcloud.net.cn/uni-app-x/manifest.html#android)
- 视频文件需在static目录（项目下或uni_modules下都支持static目录）下，或者import导入文件，否则文件不会被copy到最终的包中，导致无法访问。
