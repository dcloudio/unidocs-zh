# 使用WIFI连接Android真机@AndroidWifi

### 环境要求

##### 软件版本
- **HBuilderX 4.61+**：内置adb已支持无线调试  
  - 内置adb路径：`<HBuilderX安装目录>/plugins/launcher-tools/tools/adbs`
- **低于4.61版本**：需自行配置adb

##### 设备要求
- **手机**：Android 11（API 级别 30）或更高版本
- **TV/WearOS**：Android 13（API 级别 33）或更高版本

##### 准备工作
1. 确保电脑和设备连接同一WiFi网络
2. 关闭防火墙或设置信任规则（企业网络可能需要）

### 通过 Wi-Fi 连接到设备说明

1. 包含配对和连接两个过程

- 配对（Pair）	输入配对码 / 扫二维码，手机和电脑建立一次性信任

- 连接（Connect）	使用 IP:端口，建立正式的调试连接

2. 配对成功一次后，短期内可以直接连接（打开/关闭无线调试），无需重复配对。重启设备、断网或换 Wi-Fi 后，可能需要重新配对。

3. 如果配对完成但是没有连接到设备可参考 [无线连接常见的问题](#无线连接常见的问题)，正常会基于mDNS服务自动连接。

### 通过HBuilderX配对（推荐）

> 需要再HBuilderX 4.71之后的版本

1. **启动连接**：

- 选择"运行到Android App基座"
- 在设备选择框点击"无线连接"按钮

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-1.png" style="zoom: 40%;" />

2. **配对方式选择**：（二选一）

- 系统弹出"使用WIFI配对设备"窗口

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-2.png" style="zoom: 40%;" />

- 设备端开启"无线调试"功能

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-7.png" style="zoom: 40%;" />

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


### 使用命令行配对

> 如果您想在不使用 HBuilderX 的情况下，通过命令行连接到您的设备，请按以下步骤操作：

1. 在设备开发者选项中启用"无线调试"
2. 打开终端，进入adb目录： `<HBuilderX安装目录>/plugins/launcher-tools/tools/adbs`
3. 选择使用 配对码配对设备，找到您的 IP 地址、端口号和配对码。记下设备上显示的 IP 地址、端口号和配对码。
4. 在终端上，运行 `adb pair ipaddr:port`。请使用上述 IP 地址和端口号。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-6.png" style="zoom: 40%;" />

5. 收到提示时，输入配对码，如果命令输出`Successfully paired`, 就代表配对成功。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-5.png" style="zoom: 40%;" />

6.配对设备后，你可以在设备列表查看此设备。

### 无线连接常见的问题

- “通过 Wi-Fi 使用 adb”的功能有时会自动关闭：如果设备切换 Wi-Fi 网络或断开网络连接，就可能会发生这种情况。如需解决此问题，请重新连接到网络。并且尝试关闭无线连接重新打开。

- 设备连接超时，请重试：adb 依赖于 mDNS 来发现已配对的设备并自动连接到这些设备。

1.如果您的网络或设备配置不支持 mDNS 或已停用 mDNS，则需要使用 adb connect ip:port 手动连接到设备。ip和port可以在设备端无线调试中看到。

<img src="https://web-ext-storage.dcloud.net.cn/doc/tutorial/android-wifi/android-wifi-settings-8.png" style="zoom: 40%;" />

2.如果您的设备支持，也可能由于adb缓存等原因导致不能自动连接。可以尝试关闭无线连接后重新打开，重试重新配对连接。

- 配对设备时出错，请重试：安全的 Wi-Fi 网络（如企业 Wi-Fi 网络）可能会阻止点对点连接，并且不允许您通过 Wi-Fi 进行连接。需要关闭防火墙或者设置信任。

### 扩展

- [Google官网adb命令行工具介绍](https://developer.android.google.cn/tools/adb?hl=zh-cn)
