# uni-app 开发鸿蒙应用

> [uni-app鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)

## 开发环境要求@env

* DevEco-Studio 5.0.3.400 以上 [下载地址](https://developer.huawei.com/consumer/cn/deveco-developer-suite/enabling/kit?currentPage=1&pageSize=100)
* 鸿蒙系统版本 API 12 以上 （DevEco-Studio有内置鸿蒙模拟器）
* HBuilderX-alpha-4.22 以上

**Windows系统需要开启以下功能**

打开控制面板 - 程序与功能 - 开启以下功能

1. Hyper-V
2. Windows 虚拟机监控程序平台
3. 虚拟机平台

注意: 需要win10专业版或win11专业版才能开启以上功能，家庭版需先升级成专业版或企业版

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085210915b1knhu7l3u8.png)

## 配置鸿蒙离线SDK（鸿蒙项目模板）@harmonysdk

1. 下载 uni-app 鸿蒙离线SDK template-1.3.0.tgz [下载地址](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/template-1.3.0.tgz)

2. 解压 template-1.3.0.tgz 压缩包，将解压后的模板工程在 DevEco-Studio 中打开

3. 等待 Sync 结束，点击运行按钮可以将工程运行在真机或者模拟器中（如未配置签名信息可能需要先行配置）

### 启动鸿蒙模拟器@connectvirtually

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085379828ap3pkhhfmig.png)

如果没有登录华为账号，此时需要先登录，登录成功后看到如下页面

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200854641084hsm583p5jo.png)

选择模拟器型号，选第一个即可

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200855617759sfquhr1j0o.png)

安装完模拟器后，点击启动按钮启动模拟器

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200856058101582lbghgf8.png)

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720085712493il2ep17ldg8.png)

### 连接鸿蒙真机@connectmobile

**注意：真机需要鸿蒙系统版本 API 12 以上**

打开鸿蒙手机开发者模式，开启USB调试，通过USB线连接电脑，在此处选择你的手机名称，再启动项目即可，如果提示需要先签名，则进行[配置签名](#signature)

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720091392422r91cpejpp7g.png)

### 配置签名@signature

**注意：配置签名需要先启动模拟器或连接真机后才能配置**

点击 DevEco-Studio 上方菜单 File - Project Structure... 

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720087126462d9133uo0hmg.png)

在弹出的窗体中选择 Project - Signing Configs 并打钩 Automatically generate signature，即可自动生成签名

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/17200873385940vk5oj9ihk.png)

## 配置 HBuilderX settings.json@hbxsettings

打开HBuilderX，点击上方菜单 - 工具 - 设置，在出现的弹窗右侧窗体新增如下配置

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720092016399okjuod823f.png)

注意：值填你自己的 DevEco-Studio 启动路径

```js
"harmony.devTools.path" : "D:/Huawei/DevEco Studio"
```

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/171981598089431le57049d.png)

## 配置 uni-app 工程@uniappproject

1. HBuilderX 新建一个空白的 uniapp 项目，选vue3

2. 在 manifest.json 文件中配置鸿蒙离线SDK路径

编辑 manifest.json 文件，新增如下配置：

```json
"app-harmony": {
  "projectPath": "鸿蒙离线SDK路径"
}
```

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/1719816197812rg4fsafg2io.png)

3. 编译 uni-app 到鸿蒙

点击 HBuilderX 上方【运行】菜单，运行到鸿蒙 DevEco Studio

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/17183338900070pjn2uj49t8.png)

如果没有出现此菜单，请确认你的 HBuilderX 版本是否是 4.22 及以上

4. 在 DevEco-Studio 重新编译或运行

先等待 HBuilderX 编译完成，然后打开 DevEco-Studio，点击运行

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/dev/1720086018931faq60pigq9g.png)

## 注意事项@tips

* 移植已有的 uni-app 项目源码时，如有其他 npm 依赖，请自行安装
* 现阶段条件编译仅 APP-HARMONY、APP 可以命中鸿蒙平台
* 每次HBuilderX改动源码后，DevEco-Studio 内需要点重新运行才能生效
* 如果模拟器白屏了，尝试重启软件 DevEco-Studio，再重启项目
* 如果模拟器无法连接了，尝试重启电脑
