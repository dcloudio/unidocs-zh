# uniapp.test CLI 命令行工具文档

插件市场 [HBuilderX uni-app自动化测试](https://ext.dcloud.net.cn/plugin?id=5708)插件 4.1.0版本起，支持被HBuilderX CLI调用了。

支持在命令行运行 uni-app (x) 自动化测试到 Web、微信小程序、Android、iOS 和 Harmony。

关于HBuilderX cli命令基本介绍，请参考：[https://hx.dcloud.net.cn/cli/README](https://hx.dcloud.net.cn/cli/README)

> 特别注意事项：运行HBuilderX `cli uniapp.test`前，请先确保[HBuilderX uni-app自动化测试](https://ext.dcloud.net.cn/plugin?id=5708)插件可以在HBuilderX内正常使用。

## 使用方法

以下是该工具的基本用法：

```
cli uniapp.test <platform> --project <ProjectPath>
```

### 支持的平台

- **Web**
  - `web-chrome`：在 Chrome 浏览器中运行测试
  - `web-safari`：在 Safari 浏览器中运行测试
  - `web-firefox`：在 Firefox 浏览器中运行测试

- **小程序**
  - `mp-weixin`：在微信小程序中运行测试

- **移动应用**
  - `app-android`：在 Android 设备上运行测试
  - `app-ios-simulator`：在 iOS 模拟器中运行测试
  - `app-harmony`：在 Harmony 设备上运行测试

### 参数说明

- **必需参数**
  - `--project <ProjectPath>`：指定项目的路径。

- **可选参数**
  - `--testcaseFile <testcase_file_path>`：指定测试用例文件的路径（仅适用于 `app-harmony`）。
  - `--device_id <id>`：指定设备 ID（仅适用于 `app-harmony`）。
  - `--help`：显示命令帮助信息。
  - `--version`：查看插件版本号。

## 示例

1. 运行测试到chrome

   ```bash
   cli uniapp.test web-chrome --project /path/to/your/project
   ```

2. 运行测试到微信开发者工具

   ```bash
   cli uniapp.test mp-weixin --project /path/to/your/project
   ```

3. 运行测试到Android

   ```bash
   cli uniapp.test app-android --project /path/to/your/project
   ```
   
4. 指定设备ID

   ```bash
   cli uniapp.test app-android --project /path/to/your/project --device_id feyh2342343uos8ai89jr4p
   ```
   
5. 运行特定的测试用例文件

   ```bash
   cli uniapp.test app-android --project /path/to/your/project --testcaseFile pages/index/index.test.js
   ```