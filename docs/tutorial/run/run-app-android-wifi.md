# 使用WIFI连接Android真机@AndroidWifi

### 环境说明

1. HBuilderX 4.61之前的版本，内置的adb版本，不支持无线adb。如果您的HBuilderX版本低于4.61，请自行配置adb。
2. HBuilderX 4.61+版本，内置adb已支持无线调试。内置adb路径：`<HBuilderX安装目录>/plugins/launcher-tools/tools/adbs`
3. 如果hx已启动，在操作系统任务管理器中杀掉hx的adb进程。

### 注意事项

1. Android WiFi连接，仅支持Android 11+版本，如果您的手机系统低于11, 就不用尝试WiFi连接了。
2. 连接前，请确保您的工作站和设备已连接到同一无线网络。即手机和电脑处于同一无线网络。

### 手机无线配置

1. 在手机开发者选项里，打开无线调试。
2. 如下图标红部分，打开后，继续点击【无线调试】。
3. 点击【使用配对码配对设备】

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings.jpg" style="zoom: 60%;" />


### 电脑命令行执行adb pair命令

1. 查看手机配对弹窗中的【IP地址和端口】
2. 打开电脑命令行输入如下命令, 然后输入手机端显示的验证码.
3. 如果命令输出`Successfully paired`, 就代表配对成功。

> 大家可能发现我下面输入的跟上面的截图不一样了。这是因为你每次点击，端口和配对码都会变动。

```shell
adb pair <ip>:<port>

# 我的设备是192.168.31.196:38255
adb pair 192.168.31.196:38255
```

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/cmd-pair.jpg"  style="zoom: 60%; border: 1px solid #eee;" />

### HBuilderX内查看配对手机

上面的步骤操作完成后，在HBuilderX的运行界面就可以看到这个配对好的手机了。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/uni-run-android.jpg" style="zoom: 60%; border: 1px solid #eee;" />

### 扩展

- [Google官网adb命令行工具介绍](https://developer.android.google.cn/tools/adb?hl=zh-cn)