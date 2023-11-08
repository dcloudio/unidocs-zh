# 自动化测试插件@extension
# Automated test plugin @extension

## 插件说明@description
## plugin description @description

本插件，用于在HBuilderX内运行uni-app自动化测试，支持H5、微信小程序、android、ios自动化测试。
This plugin is used to run uni-app automated tests in HBuilderX, and supports H5, WeChat applet, android, ios automated tests.

主要功能有：
The main functions are:

- 初始化测试环境（创建测试配置文件、以及安装测试所需的环境）
- Initialize the test environment (create a test configuration file, and install the environment required for testing)
- 运行测试 (运行项目下所有测试用例、运行某一个测试用例)
- Run tests (run all test cases under the project, run a test case)
- 新建测试用例 （uni-app pages页面，右键菜单【新建测试用例】）
- New test case (uni-app pages page, right-click menu [New test case])
- 查看历史测试报告 （HBuilderX顶部运行菜单）
- View historical test reports (HBuilderX top run menu)

## 测试注意事项@note
## Test Notes @note

1. 本插件支持`uni-app普通项目`和`uniapp-cli项目`。uniapp-cli项目，运行自动化测试，需要在当前项目下安装自动化测试依赖。
1. This plugin supports `uni-app common project` and `uniapp-cli project`. For the uniapp-cli project, to run automated tests, you need to install automated test dependencies under the current project.
2. Windows电脑不支持运行测试到`ios手机`。
2. Windows computers do not support running tests to `ios phone`.
3. MacOSX电脑，仅支持运行测试到`iOS模拟器`，不支持ios真机，测试iOS模拟器，需要电脑装安装XCode。
3. MacOSX computer, only supports running tests to `iOS simulator`, does not support ios real machine, to test iOS simulator, you need to install XCode on the computer.
4. 运行测试到H5，仅支持`chrome`浏览器，不支持其它浏览器。 
4. Run the test to H5, only `chrome` browser is supported, other browsers are not supported.
5. 运行测试到Android手机，如果HBuilderX仅检测到一个android设备，`直接`运行测试到当前已连接设备。`多个`设备时，会弹窗要求选择手机。
5. Run the test to the Android phone, if HBuilderX detects only one android device, `directly` run the test to the currently connected device. When you have `multiple` devices, a pop-up window will ask you to select a phone.
6. node: 当本机未安装node时，将使用HBuilderX`内置node`运行测试。反之，本机安装了node，则使用本机的node。
6. node: When node is not installed on the machine, the test will be run using HBuilderX `built-in node`. On the contrary, if the node is installed on the machine, the node of the machine is used.
7. 运行测试到微信小程序，必须在manifest.json内，配置微信小程序 appid。如果微信开发者工具无法成功打开项目，首次请手动打开。
7. To run the test to the WeChat applet, you must configure the WeChat applet appid in manifest.json. If the WeChat Developer Tools cannot open the project successfully, please open it manually for the first time.

## 插件安装@test-install
## Plugin installation @test-install

[插件安装地址](https://ext.dcloud.net.cn/plugin?id=5708)
[Plugin installation address](https://ext.dcloud.net.cn/plugin?id=5708)

如下图所示，在插件市场，进入[插件详情页](https://ext.dcloud.net.cn/plugin?id=5708)，点击【导入插件】，会自动拉起本地安装的HBuilderX。
As shown in the figure below, in the plug-in market, enter the [plug-in details page] (https://ext.dcloud.net.cn/plugin?id=5708), click [Import Plug-in], and the locally installed HBuilderX will be automatically launched.

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/plugins_install_1.jpeg" style="zoom: 50%;border: 1px solid #eee;border-radius: 5px;"/>

> 特别注意：插件安装，依赖HBuilderX 终端插件。
> Special Note: Plug-in installation depends on HBuilderX terminal plug-in.

## 测试环境安装@env
## Test environment install @env

**插件依赖：** 
**Plugin dependencies:**

- H5、微信、ios、android自动化测试依赖`puppeteer`、`adbkit`、`node-simctl`、`jest`、`playwright`，运行插件时，如果未安装此依赖，将会弹窗自动安装。
- H5, WeChat, ios, android automated testing depends on `puppeteer`, `adbkit`, `node-simctl`, `jest`, `playwright`. When running the plugin, if this dependency is not installed, a pop-up window will be installed automatically.
- `注意`：本插件0.0.3版本及以下，node: 当本机未安装node时，将使用HBuilderX内置的node运行测试。反之，本机安装了node，则使用本机的node。
- `Note`: This plug-in version 0.0.3 and below, node: When node is not installed on this machine, the built-in node of HBuilderX will be used to run the test. On the contrary, if the node is installed on the machine, the node of the machine is used.
- `注意`：本插件0.0.4+版本，新增配置项 支持自定义设置使用何种node版本进行uni-app编译
- `Note`: This plugin version 0.0.4+, new configuration items support custom settings which node version to use for uni-app compilation

**特别注意：**
**pay attention:**

- uni-app普通项目，需要通过插件`hbuilderx-for-uniapp-test`来安装测试环境。
- For common uni-app projects, the test environment needs to be installed through the plug-in `hbuilderx-for-uniapp-test`.
- uniapp-cli项目，只需在项目下安装相关测试依赖即可。[详情](#cli)
- uniapp-cli project, just install the relevant test dependencies under the project. [Details](#cli)

### uni-app普通项目@uni-app
### uni-app common project @uni-app

uni-app普通项目，`初始化测试环境`或`运行测试`时，如果未安装相关依赖，会自动安装。
For uni-app ordinary projects, when `initializing the test environment` or `running the test`, if the relevant dependencies are not installed, they will be installed automatically.

如下图所示，项目管理器，选中项目，右键菜单【初始化测试环境】
As shown in the figure below, the project manager, select the project, right-click menu [initialize the test environment]

注意：安装环境依赖时，如果检测到项目下不存在测试配置文件[env.js](/docs/file/env)和[jest.config.js](../../auto/quick-start?id=jestconfigjs)，则会自动创建测试配置文件。

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/env_install.gif" style="zoom: 70%;border: 1px solid #eee; border-radius: 10px;"/>

### uniapp-cli项目@cli
### uniapp-cli project @cli

uniapp-cli项目，自动化测试运行，将使用**项目下的依赖库**。
The uniapp-cli project, automated test running, will use the **dependent library** under the project.

打开命令行，进入项目目录，输入如下命令进行安装:
Open the command line, enter the project directory, and enter the following command to install:
```shell
npm install --save cross-env puppeteer adbkit node-simctl jest playwright @playwright/test
```

## 创建测试用例@create-testcase
## Create test case @create-testcase

uni-app项目，pages页面，右键菜单，创建测试用例
uni-app project, pages page, right-click menu, create test cases

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/testcase_create.gif" style="zoom: 70%;border: 1px solid #eee;border-radius: 15px;"/>

## 测试运行@test-run
## Test run @test-run

创建测试用例之后，选中项目，右键菜单【运行uni-app自动化测试】，选择运行平台，即可开始运行测试。
After creating a test case, select the project, right-click the menu [Run uni-app automated test], and select the running platform to start running the test.

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/run_test.gif" style="zoom: 70%;border: 1px solid #eee;border-radius: 10px;"/>

**注意**：如果要运行指定的测试用例，请在项目管理器**选中**要运行的用例，右键菜单【运行当前测试用例】
**Note**: If you want to run the specified test case, please **select** the use case to be run in the project manager, right-click menu [Run current test case]

### 测试平台说明@platform
### Test Platform Description @platform

- Windows电脑**不支持**运行测试到`ios手机`
- Windows computers **NOT SUPPORTED** to run tests to `ios phone`
- MacOSX电脑，仅支持运行测试到`ios模拟器`，**不支持**ios真机。
- MacOSX computer, only supports running tests to `ios simulator`, **does not support** ios real machine.
- 运行测试到H5，仅支持`chrome`浏览器，**不支持**其它浏览器。
- Run the test to H5, only supports `chrome` browser, **does not support** other browsers.
- 运行测试到Android手机，如果HBuilderX仅检测到**一个android设备**，直接运行测试到当前已连接设备。多个设备时，会弹窗要求选择手机。
- Run the test to an Android phone, if HBuilderX only detects **one android device**, run the test directly to the currently connected device. When there are multiple devices, a pop-up window will ask to select a mobile phone.

### 选择测试平台@select-platform
### Select test platform @select-platform

如下图所示，运行测试时，支持选择对应平台。
As shown in the figure below, when running the test, you can select the corresponding platform.

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/test_platforms.png" style="zoom: 50%;border: 1px solid #eee;border-radius: 5px;"/>

### 选择设备@select-devices
### Select devices @select-devices

> 如果无法获取到设备信息，请[参考](tutorial/run/run-app-faq.md)
> If the device information cannot be obtained, please [reference](tutorial/run/run-app-faq.md)

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app-test-select-device.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 5px;"/>


## 插件配置@extension-config
## Plugin configuration @extension-config

点击菜单【设置】【插件配置】，找到hbuilderx-for-uniapp-test项，即可看到设置项。
Click the menu [Settings] [Plugin Configuration], find the hbuilderx-for-uniapp-test item, and you can see the setting items.

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/plugins_settings.png" style="zoom: 50%;border: 1px solid #eee;border-radius: 5px;"/>

**如上图**
**As pictured above**

- 支持自定义**测试报告**路径。
- Support custom **Test Report** path.
- 自动修改jest.config.js文件中的testMatch，默认为`true`。去掉勾选后，将不再自动修改testMatch。
- Automatically modify testMatch in jest.config.js file, default is `true`. After removing the check, testMatch will no longer be automatically modified.
- 插件0.0.4+版本，新增配置项 支持自定义设置使用何种node版本进行uni-app编译。即您可以选择使用HBuilderX`内置的Node`、还是使用`操作系统`安装的Node进行uni-app编译。
- Plugin version 0.0.4+, new configuration items support custom setting which node version to use for uni-app compilation. That is, you can choose to use HBuilderX `built-in Node`, or use `operating system` installed Node for uni-app compilation.


## 如何编写测试用例@howToWriteTestcase
## How to write test cases @howToWriteTestcase

> uni-app自动化测试，使用了业内常见的jest测试库。
> uni-app automated testing, using the common jest testing library in the industry.

- uni-app项目，pages目录下，右键菜单【创建测试用例】，选择模板。
- In the uni-app project, under the pages directory, right-click the menu [Create Test Case], and select a template.
- 测试用例文件名，必须为xxx.test.js
- Test case file name, must be xxx.test.js
- 测试用例编写，请遵循jest规范。
- When writing test cases, please follow the jest specification.


### jest用例解析@jest-testcase
### jest case analysis @jest-testcase

下面将使用一个最简单的示例，来讲解测试用例的组成。
The following will use a simplest example to explain the composition of test cases.

- **describe** 表示一组用例, decribe会形成一个作用域
- **describe** represents a set of use cases, describe will form a scope
- **it** 测试函数
- **it** test function
- **test** 测试函数，类似it
- **test** test function, similar to it
- **expect** 匹配器。 [使用文档](https://jestjs.io/zh-Hans/docs/expect)
- **expect** matcher. [Using documentation](https://jestjs.io/zh-Hans/docs/expect)

```js
# 求和测试
function sum(a, b) {
    return a + b;
};

describe("sum test", () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    test('adds 1 + 1 to equal 3', () => {
        expect(sum(1, 1)).toBe(3);
    });
})
```


### uni-app页面用例示例@example
### uni-app page use case example @example

以uni-app【默认模板】index页面为例。
Take the uni-app [default template] index page as an example.

编写测试用例，检查`index.vue`页面，标题是否为`Hello`
Write a test case that checks the `index.vue` page, if the title is `Hello`

<img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uniapp-test-example.jpg" style="zoom: 50%;border: 1px solid #eee;border-radius: 20px;"/>

```js
describe('test title', () => {
    let page;
    beforeAll(async () => {
        page = await program.currentPage();
        await page.waitFor(3000);
    });

    it('check page title', async () => {
        const el = await page.$('.title');
        const titleText = await el.text();
        expect(titleText).toEqual('Hello');
    });
});
```

扩展：如上测试代码中，使用了`beforeAll`函数，它用于在所有测试之前执行。[了解jest更多钩子函数](#SetupTeardown)
Extension: In the test code above, the `beforeAll` function is used, which is used to execute before all tests. [Learn more hook functions of jest](#SetupTeardown)

## Setup and Teardown@SetupTeardown

> 通常在编写测试时，您需要在测试运行之前进行一些设置工作，并且在测试运行之后需要进行一些完成工作。可以使用Jest的钩子函数来解决这个问题.
> Often when writing tests, you need to do some setup work before the test runs, and some finishing work after the test runs. You can use Jest's hook function to solve this problem.

**jest中有4个钩子函数**
**4 hook functions in jest**

- beforeAll：所有测试之前执行
- beforeAll: execute before all tests
- afterAll：所有测试执行完之后
- afterAll: After all tests are executed
- beforeEach：每个测试实例之前执行
- beforeEach: executed before each test instance
- afterEach：每个测试实例完成之后执行
- afterEach: executed after each test instance completes

文档扩展: [jest setup-teardown](https://jestjs.io/docs/setup-teardown)
Documentation extension: [jest setup-teardown](https://jestjs.io/docs/setup-teardown)

### 钩子函数的执行顺序@sequence
### Execution order of hook functions @sequence

用下列代码，我们来查看一下函数执行顺序
Using the following code, let's see the function execution order

```js
describe('test Run Sequence', () => {
    beforeAll(() => {
        console.log('1 - beforeAll');
    });
    afterAll(() => {
        console.log('1 - afterAll');
    });
    beforeEach(() => {
        console.log('1 - beforeEach');
    });
    afterEach(() => {
        console.log('1 - afterEach');
    });
    test('test', () => {
        console.log('1 - test')
    });
});
```

**运行结果**
**operation result**

```js
  test Run Sequence
    ✓ test (4 ms)

  console.log
    1 - beforeAll

  console.log
    1 - beforeEach

  console.log
    1 - test

  console.log
    1 - afterEach

  console.log
    1 - afterAll

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.454 s
```

## 内置Jest代码块@snippets
## Built-in Jest code blocks @snippets

> 为了更快速的编写测试用例，本插件内置了jest部分代码块
> In order to write test cases more quickly, this plugin has built-in jest part of the code block

|prefix		| 代码块						|
|prefix | code block |
|--			|--								|
|describe	|describe('', () => {});		|
|test		|test('', () => {});			|
|ta			|test('', async () => {await});	|
|beforeAll	|beforeAll(() => {});			|
|afterEach	|afterEach(() => {});			|
|afterAll	|afterAll(() => {});			|
|beforeAll	|beforeAll(() => {});			|
