# 使用WIFI连接Android真机@AndroidWifi

Android 11起，支持无线adb功能，不插手机线也可以实现所有运行调试功能。

在HBuilderX4.71以前，开发者需要自定义adb，使用高版本的adb，通过adb命令连接手机。

从HBuilderX4.71起内置了这个功能。

注意：环境要求
- **手机**：Android 11（API 级别 30）或更高版本。**TV/WearOS**：Android 13（API 级别 33）或更高版本
- 确保电脑和设备连接同一WiFi网络
- 确保电脑端防火墙未禁止HBuilderX访问局域网络

## HBuilderX 4.71以前的方案
- **HBuilderX 4.61+**：内置adb版本已支持无线调试  
  - 内置adb路径：`<HBuilderX安装目录>/plugins/launcher-tools/tools/adbs`
- **低于4.61版本**：需自行配置高版本adb

### 使用adb命令行配对

1. 在手机的 设置 - 开发者选项 中启用"无线调试"
2. 打开电脑的终端，进入adb目录： `<HBuilderX安装目录>/plugins/launcher-tools/tools/adbs`。如使用低于4.61版本的HBuilderX，需自定义高版本adb，选择自己的adb路径。
3. 手机端的无线调试中，选择使用 配对码配对设备，找到您的 IP 地址、端口号和配对码。记下设备上显示的 IP 地址、端口号和配对码。
4. 在电脑的终端上，运行 `adb pair ipaddr:port`。请使用上述 IP 地址和端口号。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-6.png" style="zoom: 40%;" />

5. 收到提示时，输入配对码，如果命令输出`Successfully paired`, 就代表配对成功。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-5.png" style="zoom: 40%;" />

6.配对设备后，你可以在HBuilderX的运行设备列表看到此设备，接下来的使用和有线adb相同。

配对成功后，在一定有效期内，无需再重复配对。在手机端打开无线调试后，过一会手机的通知栏会弹出`已连接无线调试`。然后在HBuilderX的运行界面会自动检测到该设备。

## HBuilderX 4.71+的方案

HBuilderX 4.71+提供了可视化操作方式

1. **启动连接**：

- 选择"运行到Android App基座"
- 在设备选择框点击"无线连接"按钮

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-1.png" style="zoom: 40%;" />

2. **配对方式选择**：（二选一）

- 系统弹出"使用WIFI配对设备"窗口

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-2.png" style="zoom: 40%;" />

- 设备端开启"无线调试"功能

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-7.png" style="zoom: 40%;" />

注意开启无线调试，不是一个持久化的设置，当手机一定时间内不再使用无线调试，该设置会被手机OS自动关闭。一旦被关闭，您需要手动再次开启才可使用。

- 二维码配对：

a. 设备选择"二维码配对"

b. 扫描HBuilderX窗口中的二维码

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-2.png" style="zoom: 40%;" />

- 配对码配对：

a. HBuilderX选择"配对码配对"

b. 设备选择"配对码配对"

c. 输入设备显示的6位数配对码

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-3.png" style="zoom: 40%;" />

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-6.png" style="zoom: 40%;" />

3. **完成连接**：
- 配对成功后设备将出现在列表中

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-4.png" style="zoom: 40%;" />


配对成功后，在一定有效期内，无需再重复配对。

但手机端开启无线调试，不是一个持久化的设置，当手机一定时间内不再使用无线调试，该设置会被手机OS自动关闭。

一旦被关闭，您需要手动再次开启无线调试才可使用。

已经完成配对的电脑和手机，在同一网段，下次再想使用无线调试功能时，**无需再次配对**，只需在手机端打开无线调试，**过一会**手机的通知栏会弹出`已连接无线调试`。然后在HBuilderX的运行界面会自动检测到该设备。如果一直等不到这个通知栏成功消息，见下方的常见问题。

手机端的无线调试开关模式隐藏的比较深，不方便打开。但Android系统提供了一个快捷方式，在开发者选项中，有一个 快捷设置开发者功能块（可能不同的rom叫法不同），其中有无线调试，打开这个无线调试后，在手机的通知栏下拉，可以显示无线调试的图标。这样就可以在通知栏下拉菜单中快捷开启关闭无线调试了。

### 无线连接常见的问题

- “通过 Wi-Fi 使用 adb”的功能有时会自动关闭：如果设备切换 Wi-Fi 网络或断开网络连接，就可能会发生这种情况。如需解决此问题，请重新连接到网络。并且尝试关闭无线连接重新打开。

- 设备连接超时，请重试：adb 依赖于 mDNS 来发现已配对的设备并自动连接到这些设备。

1.如果您的网络或设备配置不支持 mDNS 或已停用 mDNS，则需要使用 adb connect ip:port 手动连接到设备。ip和port可以在设备端无线调试中看到。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-8.png" style="zoom: 40%;" />

2.如果您的设备支持，也可能由于adb缓存等原因导致不能自动连接。可以尝试关闭无线连接后重新打开，重试重新配对连接。

- 配对设备时出错，请重试：安全的 Wi-Fi 网络（如企业 Wi-Fi 网络）可能会阻止点对点连接，并且不允许您通过 Wi-Fi 进行连接。需要关闭防火墙或者设置信任。

- 有时adb会出现无法理解的故障，开启无线调试后始终无法连接同网段已经配对的设备，此时需要点击手机端 开发者选项 中的 撤销USB调试授权，把配对信息清楚掉，然后重新配对。

### 扩展

- [Google官网adb命令行工具介绍](https://developer.android.google.cn/tools/adb?hl=zh-cn)
