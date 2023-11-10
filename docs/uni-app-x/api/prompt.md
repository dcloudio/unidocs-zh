## uni.showToast(options) @showtoast

<!-- UTSAPIJSON.showToast.description -->

<!-- UTSAPIJSON.showToast.param -->

<!-- UTSAPIJSON.showToast.returnValue -->

<!-- UTSAPIJSON.showToast.example -->

<!-- UTSAPIJSON.showToast.compatibility -->

<!-- UTSAPIJSON.showToast.tutorial -->

#### 注意事项 ####

+ `position` 参数`android`平台特别说明

如果没有设置 `position` 字段，`uni.showToast` 会采用应用弹窗方案，即弹窗与页面生命周期绑定。 页面关闭时，当前页面弹出的所有弹窗都会被自动取消。

如果设置了`position` 字段，`uni.showToast` 会采用系统弹窗方案，即弹窗与页面无绑定关系。 页面关闭后，弹出中的/等待弹出的`Toast`会继续展示。

系统弹窗Toast不会影响页面资源，在部分系统（比如 MIUI,Google）可能会有应用图标前缀。 



## uni.showLoading(options) @showloading

<!-- UTSAPIJSON.showLoading.description -->

<!-- UTSAPIJSON.showLoading.param -->

<!-- UTSAPIJSON.showLoading.returnValue -->

<!-- UTSAPIJSON.showLoading.example -->

<!-- UTSAPIJSON.showLoading.compatibility -->

<!-- UTSAPIJSON.showLoading.tutorial -->

## uni.showModal(options) @showmodal

<!-- UTSAPIJSON.showModal.description -->

<!-- UTSAPIJSON.showModal.param -->

<!-- UTSAPIJSON.showModal.returnValue -->

<!-- UTSAPIJSON.showModal.example -->

<!-- UTSAPIJSON.showModal.compatibility -->

<!-- UTSAPIJSON.showModal.tutorial -->

## uni.showActionSheet(options) @showactionsheet

<!-- UTSAPIJSON.showActionSheet.description -->

<!-- UTSAPIJSON.showActionSheet.param -->

<!-- UTSAPIJSON.showActionSheet.returnValue -->

<!-- UTSAPIJSON.showActionSheet.example -->

<!-- UTSAPIJSON.showActionSheet.compatibility -->

<!-- UTSAPIJSON.showActionSheet.tutorial -->

<!-- UTSAPIJSON.prompt.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Bug & Tips@tips
- 在页面生命周期 onLoad 中调用以上弹窗 API 可能无法正常显示，暂时建议在页面生命周期 onReady 及之后再调用。此bug已于HBuilderX 3.97+修复
