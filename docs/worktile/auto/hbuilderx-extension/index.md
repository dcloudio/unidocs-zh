# 自动化测试插件@extension

## 插件说明@description

本插件，用于在HBuilderX内运行uni-app自动化测试，支持H5、微信小程序、android、ios自动化测试。

主要功能有：

- 初始化测试环境（创建测试配置文件、以及安装测试所需的环境）
- 运行测试 (运行项目下所有测试用例、运行某一个测试用例)
- 新建测试用例 （uni-app pages页面，右键菜单【新建测试用例】）
- 查看历史测试报告 （HBuilderX顶部运行菜单）

## 测试注意事项@note

1. 本插件支持`uni-app普通项目`和`uniapp-cli项目`。uniapp-cli项目，运行自动化测试，需要在当前项目下安装自动化测试依赖。
2. Windows电脑不支持运行测试到`ios手机`。
3. MacOSX电脑，仅支持运行测试到`iOS模拟器`，不支持ios真机，测试iOS模拟器，需要电脑装安装XCode。
4. 运行测试到H5，仅支持`chrome`浏览器，不支持其它浏览器。 
5. 运行测试到Android手机，如果HBuilderX仅检测到一个android设备，`直接`运行测试到当前已连接设备。`多个`设备时，会弹窗要求选择手机。
6. node: 当本机未安装node时，将使用HBuilderX`内置node`运行测试。反之，本机安装了node，则使用本机的node。
7. 运行测试到微信小程序，必须在manifest.json内，配置微信小程序 appid。如果微信开发者工具无法成功打开项目，首次请手动打开。

## 插件安装@test-install

[插件安装地址](https://ext.dcloud.net.cn/plugin?id=5708)

如下图所示，在插件市场，进入[插件详情页](https://ext.dcloud.net.cn/plugin?id=5708)，点击【导入插件】，会自动拉起本地安装的HBuilderX。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/plugins_install_1.jpeg" style="zoom: 50%;border: 1px solid #eee;border-radius: 5px;"/>

> 特别注意：插件安装，依赖HBuilderX 终端插件。

## 测试环境安装@env

**插件依赖：** 

- H5、微信、ios、android自动化测试依赖`puppeteer`、`adbkit`、`node-simctl`、`jest`、`playwright`，运行插件时，如果未安装此依赖，将会弹窗自动安装。
- `注意`：本插件0.0.3版本及以下，node: 当本机未安装node时，将使用HBuilderX内置的node运行测试。反之，本机安装了node，则使用本机的node。
- `注意`：本插件0.0.4+版本，新增配置项 支持自定义设置使用何种node版本进行uni-app编译

**特别注意：**

- uni-app普通项目，需要通过插件`hbuilderx-for-uniapp-test`来安装测试环境。
- uniapp-cli项目，只需在项目下安装相关测试依赖即可。[详情](#cli)

### uni-app普通项目@uni-app

uni-app普通项目，`初始化测试环境`或`运行测试`时，如果未安装相关依赖，会自动安装。

如下图所示，项目管理器，选中项目，右键菜单【初始化测试环境】

注意：安装环境依赖时，如果检测到项目下不存在测试配置文件[env.js](/docs/file/env)和[jest.config.js](auto/quick-start?id=jestconfigjs)，则会自动创建测试配置文件。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/env_install.gif" style="zoom: 70%;border: 1px solid #eee; border-radius: 10px;"/>

### uniapp-cli项目@cli

uniapp-cli项目，自动化测试运行，将使用**项目下的依赖库**。

打开命令行，进入项目目录，输入如下命令进行安装:
```shell
npm install --save cross-env puppeteer adbkit node-simctl jest playwright @playwright/test
```

## 创建测试用例@create-testcase

uni-app项目，pages页面，右键菜单，创建测试用例

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/testcase_create.gif" style="zoom: 70%;border: 1px solid #eee;border-radius: 15px;"/>

## 测试运行@test-run

创建测试用例之后，选中项目，右键菜单【运行uni-app自动化测试】，选择运行平台，即可开始运行测试。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/run_test.gif" style="zoom: 70%;border: 1px solid #eee;border-radius: 10px;"/>

**注意**：如果要运行指定的测试用例，请在项目管理器**选中**要运行的用例，右键菜单【运行当前测试用例】

### 测试平台说明@platform

- Windows电脑**不支持**运行测试到`ios手机`
- MacOSX电脑，仅支持运行测试到`ios模拟器`，**不支持**ios真机。
- 运行测试到H5，仅支持`chrome`浏览器，**不支持**其它浏览器。
- 运行测试到Android手机，如果HBuilderX仅检测到**一个android设备**，直接运行测试到当前已连接设备。多个设备时，会弹窗要求选择手机。

### 选择测试平台@select-platform

如下图所示，运行测试时，支持选择对应平台。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/test_platforms.png" style="zoom: 50%;border: 1px solid #eee;border-radius: 5px;"/>

### 选择设备@select-devices

> 如果无法获取到设备信息，请[参考](tutorial/run/run-app-faq.md)

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-app-test-select-device.jpg" style="zoom: 45%;border: 1px solid #eee;border-radius: 5px;"/>


## 插件配置@extension-config

点击菜单【设置】【插件配置】，找到hbuilderx-for-uniapp-test项，即可看到设置项。

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/plugins_settings.png" style="zoom: 50%;border: 1px solid #eee;border-radius: 5px;"/>

**如上图**

- 支持自定义**测试报告**路径。
- 自动修改jest.config.js文件中的testMatch，默认为`true`。去掉勾选后，将不再自动修改testMatch。
- 插件0.0.4+版本，新增配置项 支持自定义设置使用何种node版本进行uni-app编译。即您可以选择使用HBuilderX`内置的Node`、还是使用`操作系统`安装的Node进行uni-app编译。


## 如何编写测试用例@howToWriteTestcase

> uni-app自动化测试，使用了业内常见的jest测试库。

- uni-app项目，pages目录下，右键菜单【创建测试用例】，选择模板。
- 测试用例文件名，必须为xxx.test.js
- 测试用例编写，请遵循jest规范。


### jest用例解析@jest-testcase

下面将使用一个最简单的示例，来讲解测试用例的组成。

- **describe** 表示一组用例, decribe会形成一个作用域
- **it** 测试函数
- **test** 测试函数，类似it
- **expect** 匹配器。 [使用文档](https://jestjs.io/zh-Hans/docs/expect)

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

以uni-app【默认模板】index页面为例。

编写测试用例，检查`index.vue`页面，标题是否为`Hello`

<img src="https://web-assets.dcloud.net.cn/unidoc/zh/uniapp-test-example.jpg" style="zoom: 50%;border: 1px solid #eee;border-radius: 20px;"/>

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

## Setup and Teardown@SetupTeardown

> 通常在编写测试时，您需要在测试运行之前进行一些设置工作，并且在测试运行之后需要进行一些完成工作。可以使用Jest的钩子函数来解决这个问题.

**jest中有4个钩子函数**

- beforeAll：所有测试之前执行
- afterAll：所有测试执行完之后
- beforeEach：每个测试实例之前执行
- afterEach：每个测试实例完成之后执行

文档扩展: [jest setup-teardown](https://jestjs.io/docs/setup-teardown)

### 钩子函数的执行顺序@sequence

用下列代码，我们来查看一下函数执行顺序

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

> 为了更快速的编写测试用例，本插件内置了jest部分代码块

|prefix		| 代码块						|
|--			|--								|
|describe	|describe('', () => {});		|
|test		|test('', () => {});			|
|ta			|test('', async () => {await});	|
|beforeAll	|beforeAll(() => {});			|
|afterEach	|afterEach(() => {});			|
|afterAll	|afterAll(() => {});			|
|beforeAll	|beforeAll(() => {});			|
