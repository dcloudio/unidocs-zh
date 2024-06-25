# uni-app 开发鸿蒙应用

## 开发环境要求

* DevEco-Studio 5.0.3.400 以上 [下载地址](https://developer.huawei.com/consumer/cn/deveco-developer-suite/enabling/kit?currentPage=1&pageSize=100)
* 鸿蒙系统版本 API 12 以上 （DevEco-Studio有内置鸿蒙模拟器）
* HBuilderX-dev-4.22 以上

**Windows系统需要开启以下功能**

打开控制面板 - 程序与功能 - 开启以下功能

1. Hyper-V
2. Windows 虚拟机监控程序平台
3. 虚拟机平台

注意: 需要win10专业版或win11专业版才能开启以上功能，家庭版需先升级成专业版或企业版

## 配置鸿蒙工程

1. 下载 uni-app 鸿蒙工程模板 template-1.1.3.tgz [下载地址](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/template-1.1.3.tgz)

2. 解压 template-1.1.3.tgz 压缩包，将解压后的模板工程在 DevEco-Studio 中打开

3. 等待 Sync 结束，点击运行按钮可以将工程运行在真机或者模拟器中（如未配置签名信息可能需要先行配置）

## 配置 HBuilderX settings.json

注意：值填你自己的 DevEco-Studio 启动路径

```js
"harmony.devTools.path" : "D:/Huawei/DevEco Studio/bin/devecostudio64.exe"
```

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/1718606410632esh6qkook28.png)

## 配置 uni-app 工程

1. hbx新建一个空白的uniapp项目，选vue3

2. 配置鸿蒙工程路径

编辑 manifest.json 文件，新增如下配置：

```json
"app-harmony": {
  "projectPath": "鸿蒙工程路径"
}
```

3. 编译 uni-app 到鸿蒙

点击hbx上方【运行】菜单，运行到鸿蒙 DevEco Studio

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/17183338900070pjn2uj49t8.png)

4. 在 DevEco-Studio 重新编译或运行

## 注意事项

* 移植已有的 uni-app 项目源码时，如有其他 npm 依赖，请自行安装
* 现阶段条件编译仅 APP_HARMONY 可以命中鸿蒙平台，APP 的条件编译不会命中鸿蒙平台
* 每次hbx改动源码后，DevEco-Studio 内需要点重新运行才能生效