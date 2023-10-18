## uni.navigateTo(options) @navigateto

<!-- UTSAPIJSON.navigateTo.description -->

<!-- UTSAPIJSON.navigateTo.param -->

<!-- UTSAPIJSON.navigateTo.returnValue -->

<!-- UTSAPIJSON.navigateTo.example -->

<!-- UTSAPIJSON.navigateTo.compatibility -->

<!-- UTSAPIJSON.navigateTo.tutorial -->

## uni.redirectTo(options) @redirectto

<!-- UTSAPIJSON.redirectTo.description -->

<!-- UTSAPIJSON.redirectTo.param -->

<!-- UTSAPIJSON.redirectTo.returnValue -->

<!-- UTSAPIJSON.redirectTo.example -->

<!-- UTSAPIJSON.redirectTo.compatibility -->

<!-- UTSAPIJSON.redirectTo.tutorial -->

## uni.reLaunch(options) @relaunch

<!-- UTSAPIJSON.reLaunch.description -->

<!-- UTSAPIJSON.reLaunch.param -->

<!-- UTSAPIJSON.reLaunch.returnValue -->

<!-- UTSAPIJSON.reLaunch.example -->

<!-- UTSAPIJSON.reLaunch.compatibility -->

<!-- UTSAPIJSON.reLaunch.tutorial -->

## uni.switchTab(options) @switchtab

<!-- UTSAPIJSON.switchTab.description -->

<!-- UTSAPIJSON.switchTab.param -->

<!-- UTSAPIJSON.switchTab.returnValue -->

<!-- UTSAPIJSON.switchTab.example -->

<!-- UTSAPIJSON.switchTab.compatibility -->

<!-- UTSAPIJSON.switchTab.tutorial -->

## uni.navigateBack(options?) @navigateback

<!-- UTSAPIJSON.navigateBack.description -->

<!-- UTSAPIJSON.navigateBack.param -->

<!-- UTSAPIJSON.navigateBack.returnValue -->

<!-- UTSAPIJSON.navigateBack.example -->

<!-- UTSAPIJSON.navigateBack.compatibility -->

<!-- UTSAPIJSON.navigateBack.tutorial -->

<!-- UTSAPIJSON.navigator.example -->

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->

## Bug & Tips@tips

* ``navigateTo``, ``redirectTo`` 只能打开非 tabBar 页面。
* ``switchTab`` 只能打开 ``tabBar`` 页面。
* ``reLaunch`` 可以打开任意页面。
* 页面底部的 ``tabBar`` 由页面决定，即只要是定义为 ``tabBar`` 的页面，底部都有 ``tabBar``。
* 不能在首页 ```onReady``` 之前进行页面跳转。