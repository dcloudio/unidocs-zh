# UTS中使用uni api  
> 需HBuilderX 3.8.0 及以上版本  

uts插件代码中可以直接调用部分uni api

## 示例  
```ts
export function myToast() {
	uni.showToast({
		title: 'This is toast in uts with uni API!',
		success: function(){
			console.log('uni.showToast success!');
		},
		fail: (err) => {
			console.log('uni.showToast success: ', err);
		}
	});
}
```


## 注意事项  
### 异步API中complete回调函数中的参数是any类型  
在uts中，由于不支持联合类型，complete回调函数的参数会当做any类型处理。  
any类型对象不能直接使用“.”访问其属性，目前暂时可以使用JSON.stringify()转换为字符串处理。
如下示例：
```ts
export function myTest() {
	uni.request({
		url: 'https://www.invalidserviceaddress.com/',
		complete: (res) => {
			//res为any类型，转换为字符串处理
			let ret = JSON.stringify(res);
			console.log(ret);
		}
	});
}
```


## 支持的API列表  
### 网络  
- [uni.request(OBJECT)](https://uniapp.dcloud.net.cn/api/request/request.html#request)  
	传输数据暂不支持ArrayBuffer类型  

### 数据缓存  
- [uni.setStorage(OBJECT)](https://uniapp.dcloud.net.cn/api/storage/storage.html#setstorage)  
- [uni.setStorageSync(KEY,DATA)](https://uniapp.dcloud.net.cn/api/storage/storage.html#setstoragesync)  
- [uni.getStorage(OBJECT)](https://uniapp.dcloud.net.cn/api/storage/storage.html#getstorage)  
- [uni.getStorageSync(KEY)](https://uniapp.dcloud.net.cn/api/storage/storage.html#getstoragesync)  
- [uni.getStorageInfo(OBJECT)](https://uniapp.dcloud.net.cn/api/storage/storage.html#getstorageinfo)  
- [uni.getStorageInfoSync()](https://uniapp.dcloud.net.cn/api/storage/storage.html#getstorageinfosync)  
- [uni.removeStorage(OBJECT)](https://uniapp.dcloud.net.cn/api/storage/storage.html#removestorage)  
- [uni.removeStorageSync(KEY)](https://uniapp.dcloud.net.cn/api/storage/storage.html#removestoragesync)  
- [uni.clearStorage()](https://uniapp.dcloud.net.cn/api/storage/storage.html#clearstorage)
- [uni.clearStorageSync()](https://uniapp.dcloud.net.cn/api/storage/storage.html#clearstoragesync)  

### 设备  
- 系统  
	+ [uni.getDeviceInfo()](https://uniapp.dcloud.net.cn/api/system/getDeviceInfo.html)  
	+ [uni.getSystemSetting()](https://uniapp.dcloud.net.cn/api/system/getsystemsetting.html)

### 界面  
- 交互反馈  
	+ [uni.showToast(OBJECT)](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showtoast)  
	+ [uni.hideToast()](https://uniapp.dcloud.net.cn/api/ui/prompt.html#hidetoast)  
	+ [uni.showLoading(OBJECT)](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showloading)  
	+ [uni.hideLoading()](https://uniapp.dcloud.net.cn/api/ui/prompt.html#hideloading)  
	+ [uni.showModal(OBJECT)](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showmodal)  
	+ [uni.showActionSheet(OBJECT)](https://uniapp.dcloud.net.cn/api/ui/prompt.html#showactionsheet)  
