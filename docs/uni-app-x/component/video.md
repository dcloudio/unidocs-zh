## video

<!-- UTSCOMJSON.video.description -->

<!-- UTSCOMJSON.video.attrubute -->

<!-- UTSCOMJSON.video.event -->

<!-- UTSCOMJSON.video.compatibility -->

#### App平台  
- App-Android平台video组件使用ijkplayer库实现：[https://github.com/bilibili/ijkplayer](https://github.com/bilibili/ijkplayer)；弹幕功能使用DanmakuFlameMaster库实现：[https://github.com/bilibili/DanmakuFlameMaster](https://github.com/bilibili/DanmakuFlameMaster)    

### bug@tips  
- 暂不支持横屏全屏后放置子组件

<!-- UTSCOMJSON.video.reference -->

### API

video的操作api为uni.createVideoContext()。

给video组件设一个id属性，将id的值传入uni.createVideoContext()，即可得到video组件的上下文对象，进一步可使用`.play()`、`.stop()`等方法。