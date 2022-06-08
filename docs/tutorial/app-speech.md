App端Speech(语音输入)模块封装了市场上主流的三方语音识别SDK，提供JS API统一调用语音识别功能。

**注意**  
uni-app没有封装语音相关API，需要调用5+ API的[plus.speech.*](https://www.html5plus.org/doc/zh_cn/speech.html)。



使用语音识别功能需在项目manifest.json的“App模块配置”中勾选“Speech(语音输入)”，并根据项目实际情况勾选使用的三方语音识别平台：
![](https://native-res.dcloud.net.cn/images/uniapp/speech/modules.png)

> 提示：三方语音识别模块参数配置需提交云端打包后才能生效，真机运行调试时请使用[自定义基座](http://ask.dcloud.net.cn/article/35115)

使用语音功能基本流程：
- 向三方语音识别平台申请开通，申请成功后会获取AppId、API Key、Secret Key等参数
- 在HBuilderX中配置申请的参数（如AppId等），提交云端打包生成[自定义基座](http://ask.dcloud.net.cn/article/35115)
- 在App项目中调用API进行语音识别操作

支持的三方登录平台：
- 百度语音识别  
  需要向[百度语音开放平台](https://console.bce.baidu.com/ai/?fromai=1#/ai/speech/overview/index)申请AppID、API Key、Secret Key。  
  **支持自定义语音识别界面，参考下面示例中的“自定义语音识别”源码**
- 讯飞语音识别（不建议使用）  
  无需配置SDK参数，由于讯飞语音识别SDK绑定appid，云端打包只能固定使用DCloud申请的appid，虽然无需开发者向讯飞语音开放平台申请应用，但也导致无法在讯飞语音开放平台自定义应用个性化的高级语音识别参数配置。  
  **注意：讯飞语音识别有识别次数限制，推荐优先使用百度语音识别**  


### 配置百度语音识别  
打开项目的manifest.json文件，在“App模块配置”项的“Speech(语音输入)”下，勾选“百度语音识别”：
![](https://native-res.dcloud.net.cn/images/uniapp/speech/baidu-manifest.png)
以下配置参数需要到[百度语音开放平台](https://console.bce.baidu.com/ai/)申请
- appid：
百度语音开放平台申请的AppID
- apikey：
百度语音开放平台申请的API Key
- secretkey：
百度语音开放平台申请的Secret Key


### 使用百度语音识别  
- 使用默认语音识别界面  
```js
	var options = {
		engine: 'baidu'
	};
	text.value = '';
	console.log('开始语音识别：');
	plus.speech.startRecognize(options, function(s){
		console.log(s);
		text.value += s;
	}, function(e){
		console.log('语音识别失败：'+JSON.stringify(e));
	} );
```

- 自定义语音识别界面  
``` html
<template>
  <view class="content">
	<textarea class="result" placeholder="语音识别内容" :value="result"></textarea>
	<view class="recogniz">
		<view style="color: #0000CC;">
			<text>{{title}}</text>
		</view>
		<view class="partial">
			<text>{{partialResult}}</text>
		</view>
		<view class="volume" :style="{width:valueWidth}"></view>
	</view>
	<button type="default" @touchstart="startRecognize" @touchend="endRecognize">按下开始&amp;松开结束</button>
  </view>
</template>
<script>
export default {
    data() {
      return {
		title: '未开始',
        text: '',
		partialResult: '...',
        result: '',
		valueWidth: '0px'
      }
    },
    onLoad() {
// #ifdef APP-PLUS
		// 监听语音识别事件
		plus.speech.addEventListener('start', this.ontStart, false);
		plus.speech.addEventListener('volumeChange', this.onVolumeChange, false);
		plus.speech.addEventListener('recognizing', this.onRecognizing, false);
		plus.speech.addEventListener('recognition', this.onRecognition, false);
		plus.speech.addEventListener('end', this.onEnd, false);
// #endif
    },
	methods: {
		ontStart() {
			this.title = '...倾听中...';
			this.text = '';
			console.log('Event: start');
		},
		onVolumeChange(e) {
			this.valueWidth = 100*e.volume+'px';
			console.log('Event: volumeChange '+this.valueWidth);
		},
		onRecognizing(e) {
			this.partialResult = e.partialResult;			
			console.log('Event: recognizing');
		},
		onRecognition(e) {
			this.text += e.result;
			this.text?(this.text+='\n'):this.text='';
			this.result = this.text;
			this.partialResult = e.result;
			console.log('Event: recognition');
		},
		onEnd() {
			if(!this.text||this.text==''){
				plus.nativeUI.toast('没有识别到内容');
			}
			this.result = this.text;
			this.title = '未开始';
			this.valueWidth = '0px';
			this.partialResult = '...';
		},
		startRecognize() {
			console.log('startRecognize');
// #ifdef APP-PLUS
			plus.speech.startRecognize({
				engine: 'baidu',
				lang: 'zh-cn',
				'userInterface': false,
				'continue': true
			});
// #endif
		},
		endRecognize() {
			console.log('endRecognize');
// #ifdef APP-PLUS
			plus.speech.stopRecognize();
// #endif
		}
	}
}
</script>
<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
.recogniz {
    width: 200px;
    height: 100px;
    padding: 12px;
    margin: 50px auto;
    background-color: rgba(0,0,0,0.5);
    border-radius: 16px;
	text-align: center;
}
.partial {
    width: 100%;
    height: 40px;
    margin-top: 16px;
    font-size: 12px;
    color: #FFFFFF;
}
.volume {
	width: 10px;
	height: 6px;
	border-style:solid;
	display:inline-block;
	box-sizing:border-box;
	border-width:1px;
	border-color:#CCCCCC;
	border-radius: 50%;
    background-color: #00CC00;
}
.result {
	color: #CCCCCC;
	border: #00CCCC 1px solid;
	margin: 25px auto;
	padding: 6px;
	width: 80%;
	height: 100px;
}
</style>
```

