# 使用WIFI连接Android真机@AndroidWifi

### 环境说明

1. HBuilderX 4.61之前的版本，内置的adb版本，不支持无线adb。如果您的HBuilderX版本低于4.61，请自行配置adb。
2. HBuilderX 4.61+版本，内置adb已支持无线调试。内置adb路径：`<HBuilderX安装目录>/plugins/launcher-tools/tools/adbs`
3. 如果hx已启动，在操作系统任务管理器中杀掉hx的adb进程。

### 注意事项

1. 确保您的电脑和设备已连接到同一无线网络。
2. 确保您的设备是 Android 11（API 级别 30）或更高版本（针对手机），或者 Android 13（API 级别 33）或更高版本（针对 TV 和 WearOS）。

### 在HBuilderX中连接 Wi-Fi

> 需要再HBuilderX 4.67之后的版本

1.打开 HBuilderX 选择运行到Android App基座，然后弹出设备选择框，点击无线连接按钮

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-1.png" style="zoom: 60%;" />

2.系统会弹出 使用WIFI配对设备 窗口

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-2.png" style="zoom: 60%;" />

3.在您的设备上，点按无线调试，然后配对您的设备

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-7.png" style="zoom: 60%;" />

a.如使用二维码配对设备，请选择使用 二维码配对设备，然后扫描 使用WIFI配对设备 窗口中提供的二维码

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-2.png" style="zoom: 60%;" />

b.如使用配对码配对设备，请先在 使用WIFI配对设备 窗口中选择配对码配对。然后在您的设备上，选择使用 配对码配对设备，并记下提供的 6 位数配对码。设备显示在 使用WIFI配对设备 窗口中后，输入设备上显示的 6 位数配对码。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-3.png" style="zoom: 60%;" />

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-6.png" style="zoom: 60%;" />

4.配对完成后，你可以在设备列表查看此设备。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-4.png" style="zoom: 60%;" />


### 使用命令行连接 Wi-Fi

> 如果您想在不使用 HBuilderX 的情况下，通过命令行连接到您的设备，请按以下步骤操作：

1. 在手机开发者选项里，打开无线调试。
2. 打开终端窗口并前往 <HBuilderX安装目录>/plugins/launcher-tools/tools/adbs。
3. 选择使用 配对码配对设备，找到您的 IP 地址、端口号和配对码。记下设备上显示的 IP 地址、端口号和配对码。
4. 在终端上，运行 adb pair ipaddr:port。请使用上述 IP 地址和端口号。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-6.png" style="zoom: 60%;" />

5. 收到提示时，输入配对码，如果命令输出`Successfully paired`, 就代表配对成功。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-5.png" style="zoom: 60%;" />

6.配对设备后，你可以在设备列表查看此设备。

### 无线连接常见的问题

- “通过 Wi-Fi 使用 adb”的功能有时会自动关闭：如果设备切换 Wi-Fi 网络或断开网络连接，就可能会发生这种情况。如需解决此问题，请重新连接到网络。并且尝试关闭无线连接重新打开。

- 设备连接超时，请重试：adb 依赖于 mDNS 来发现已配对的设备并自动连接到这些设备。

1.如果您的网络或设备配置不支持 mDNS 或已停用 mDNS，则需要使用 adb connect ip:port 手动连接到设备。ip和port可以在设备端无线调试中看到。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-8.png" style="zoom: 60%;" />

2.如果您的设备支持，也可能由于adb缓存等原因导致不能自动连接。可以尝试关闭无线连接后重新打开，重试重新配对连接。

- 配对设备时出错，请重试：安全的 Wi-Fi 网络（如企业 Wi-Fi 网络）可能会阻止点对点连接，并且不允许您通过 Wi-Fi 进行连接。需要关闭防火墙或者设置信任。

### 扩展

- [Google官网adb命令行工具介绍](https://developer.android.google.cn/tools/adb?hl=zh-cn)
