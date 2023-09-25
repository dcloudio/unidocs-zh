## key-value本地数据存储

app、小程序、web，均提供了方便的key-value模式的本地数据存储，通过键值对的方式存取数据。

uni-app的Storage在不同端的实现不同：
- H5端为localStorage，浏览器限制5M大小，是缓存概念，可能会被清理
- App端为原生storage，无大小限制，不是缓存，是持久化的
- 各个小程序端为其自带的storage api，数据存储生命周期跟小程序本身一致，即除用户主动删除或超过一定时间被自动清理，否则数据都一直可用。
	* 微信小程序单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
	* 支付宝小程序单条数据转换成字符串后，字符串长度最大200*1024。同一个支付宝用户，同一个小程序缓存总上限为10MB。
	* 百度小程序策略[详见](https://smartprogram.baidu.com/docs/develop/api/storage/save_process/)
	* 抖音小程序策略[详见](https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/api/data-caching/tt-get-storage)

**注意**
- `uni-`、`uni_`、`dcloud-`、`dcloud_`为前缀的key，为系统保留关键前缀。如`uni_deviceId`、`uni_id_token`，请开发者为key命名时避开这些前缀。
- 非App平台清空Storage会导致uni.getSystemInfo获取到的deviceId改变

## uni.setStorage(options) @setstorage

<!-- UTSAPIJSON.setStorage.description -->

<!-- UTSAPIJSON.setStorage.param -->

<!-- UTSAPIJSON.setStorage.returnValue -->

<!-- UTSAPIJSON.setStorage.compatibility -->

<!-- UTSAPIJSON.setStorage.tutorial -->

## uni.setStorageSync(key, data) @setstoragesync

<!-- UTSAPIJSON.setStorageSync.description -->

<!-- UTSAPIJSON.setStorageSync.param -->

<!-- UTSAPIJSON.setStorageSync.returnValue -->

<!-- UTSAPIJSON.setStorageSync.compatibility -->

<!-- UTSAPIJSON.setStorageSync.tutorial -->

## uni.getStorage(options) @getstorage

<!-- UTSAPIJSON.getStorage.description -->

<!-- UTSAPIJSON.getStorage.param -->

<!-- UTSAPIJSON.getStorage.returnValue -->

<!-- UTSAPIJSON.getStorage.compatibility -->

<!-- UTSAPIJSON.getStorage.tutorial -->

## uni.getStorageSync(key) @getstoragesync

<!-- UTSAPIJSON.getStorageSync.description -->

<!-- UTSAPIJSON.getStorageSync.param -->

<!-- UTSAPIJSON.getStorageSync.returnValue -->

<!-- UTSAPIJSON.getStorageSync.compatibility -->

<!-- UTSAPIJSON.getStorageSync.tutorial -->

## uni.getStorageInfo(options) @getstorageinfo

<!-- UTSAPIJSON.getStorageInfo.description -->

<!-- UTSAPIJSON.getStorageInfo.param -->

<!-- UTSAPIJSON.getStorageInfo.returnValue -->

<!-- UTSAPIJSON.getStorageInfo.compatibility -->

<!-- UTSAPIJSON.getStorageInfo.tutorial -->

## uni.getStorageInfoSync() @getstorageinfosync

<!-- UTSAPIJSON.getStorageInfoSync.description -->

<!-- UTSAPIJSON.getStorageInfoSync.param -->

<!-- UTSAPIJSON.getStorageInfoSync.returnValue -->

<!-- UTSAPIJSON.getStorageInfoSync.compatibility -->

<!-- UTSAPIJSON.getStorageInfoSync.tutorial -->

## uni.removeStorage(options) @removestorage

<!-- UTSAPIJSON.removeStorage.description -->

<!-- UTSAPIJSON.removeStorage.param -->

<!-- UTSAPIJSON.removeStorage.returnValue -->

<!-- UTSAPIJSON.removeStorage.compatibility -->

<!-- UTSAPIJSON.removeStorage.tutorial -->

## uni.removeStorageSync(key) @removestoragesync

<!-- UTSAPIJSON.removeStorageSync.description -->

<!-- UTSAPIJSON.removeStorageSync.param -->

<!-- UTSAPIJSON.removeStorageSync.returnValue -->

<!-- UTSAPIJSON.removeStorageSync.compatibility -->

<!-- UTSAPIJSON.removeStorageSync.tutorial -->

## uni.clearStorage(option?) @clearstorage

<!-- UTSAPIJSON.clearStorage.description -->

<!-- UTSAPIJSON.clearStorage.param -->

<!-- UTSAPIJSON.clearStorage.returnValue -->

<!-- UTSAPIJSON.clearStorage.compatibility -->

<!-- UTSAPIJSON.clearStorage.tutorial -->

## uni.clearStorageSync() @clearstoragesync

<!-- UTSAPIJSON.clearStorageSync.description -->

<!-- UTSAPIJSON.clearStorageSync.param -->

<!-- UTSAPIJSON.clearStorageSync.returnValue -->

<!-- UTSAPIJSON.clearStorageSync.compatibility -->

<!-- UTSAPIJSON.clearStorageSync.tutorial -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->