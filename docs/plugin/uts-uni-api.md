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
any类型对象不能直接使用“.”访问其属性，目前暂时可以使用JSON.stringify()转换为字符串处理，或者在success和fail回调中分别处理成功和失败的数据。  
此问题仅在complete回调函数中存在，success和fail回调函数中可以使用“.”访问参数的属性。  
如下示例：
```ts
export function myTest() {
	uni.request({
		url: 'https://www.invalidserviceaddress.com/',
		success: (ret) => {
			//ret为RequestSuccess类型，可以使用.访问其属性  
			let data = ret.data;
			console.log('uni.request successed: ', data);
		},
		fail: (err) => {
			//err为RequestFail类型，可以使用.访问其属性  
			let code = err.errCode;
			console.log('uni.request failed: ', code);
		},
		complete: (res) => {
			//res为any类型，转换为字符串处理
			let ret = JSON.stringify(res);
			console.log(ret);
		}
	});
}
```

如果在complete回调函数中使用“.”访问属性，如下示例：  
```ts
	uni.request({
		url: 'https://www.invalidserviceaddress.com/',
		complete: (res) => {
			console.log(res.errCode);
		}
	});

```
编译时会报错：  
```
error: Unresolved reference: errCode‌
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
	+ [uni.getAppBaseInfo()](https://uniapp.dcloud.net.cn/api/system/getAppBaseInfo.html)  
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

**目前仅支持以上列出的部分uni api的调用，[uni ext api](https://uniapp.dcloud.net.cn/api/extapi.html)实现的api（如[uni.getBatteryInfo](https://ext.dcloud.net.cn/plugin?id=9295)）暂时还不支持在uts插件中调用**  
