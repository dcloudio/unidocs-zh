# Android UTS扩展开发

> 版本要求: HBuilderX 3.6.9+

## 环境配置

下载插件后打开 HBuilderX 到 【设置 - 插件配置】：如图

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/c7057273-2477-4b23-9046-dcfb3c73c3dc.png" style="zoom: 50%;" />

#### 上面的截图展示了以配置：

1. 点击图标1的下载地址进入下载页面。如图所示，点击红圈部分下载工具包。

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/278d63c2-f1fe-4aac-a340-d63e0a10d8f8.png" style="zoom: 50%;" />
 
2. 将步骤1下载的内容解压后，找到bin目录下的执行脚本，填入图标3处。

3. 点击图标2的下载地址进入下载页面，如图所示，根据平台下载工具包。（也可以直接下载Android Studio会内置sdk）

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/cd46e8f5-e9b9-431b-a686-921bc75cdde6.png" style="zoom: 50%;" />

4. 将步骤3下载的内容解压，将解压后的目录，填入到图标4处。

5. 配置后如下图。（根据本地目录结构有所不同）

<img src="https://f184e7c3-1912-41b2-b81f-435d1b37c7b4.cdn.bspapp.com/VKCEYUGU-f184e7c3-1912-41b2-b81f-435d1b37c7b4/dc253f26-1523-4bf6-a5f3-2cc4c5690a44.png" style="zoom: 50%;" />
 
**注意**

- 如果环境已存在可以直接设置本地存在的路径
- 此插件依赖sdk目录下，build-tools目录中不低于30.0.0版本
- 此插件依赖sdk目录下，platforms目录中不低于android-30版本