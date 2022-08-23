
## uni-app cli项目@uniapp-cli
## uni-app cli item @uniapp-cli

> 本文档仅适用于CLI工程。
> This document only applies to CLI projects.

创建 `cli` 工程，详见[https://uniapp.dcloud.io/quickstart-cli.html](https://uniapp.dcloud.io/quickstart-cli.html)
Create a `cli` project, see [https://uniapp.dcloud.io/quickstart-cli.html](https://uniapp.dcloud.io/quickstart-cli.html)


如果之前是HBuilderX工程，则把HBuilderX工程内的文件（除 unpackage、node_modules 目录）拷贝至 vue-cli 工程的 src 目录。
If it was an HBuilderX project before, copy the files in the HBuilderX project (except the unpackage and node_modules directories) to the src directory of the vue-cli project.
在 vue-cli 工程内重新安装 npm 依赖（如果之前使用了 npm 依赖的话）
Reinstall npm dependencies in vue-cli project (if npm dependencies were used before)

cli创建项目时若选择`hello uni-app`模板，可看到其中已经自带部分测试例。
If you select the `hello uni-app` template when creating a project in the cli, you can see that some test cases are already included in it.

注意：相关依赖不能高于以下版本
Note: Relevant dependencies cannot be higher than the following versions

```js
jest@27.0.4
jest-environment-node@27.5.1

```

已有 `cli` 工程
Existing `cli` project
1. 更新依赖包 `@dcloudio/*` >= `2.0.0-alpha-27920200613002`
1. Update dependencies `@dcloudio/*` >= `2.0.0-alpha-27920200613002`
2. 安装依赖包 `@dcloudio/uni-automator`
2. Install the dependency package `@dcloudio/uni-automator`
```shell
npm install @dcloudio/uni-automator --save-dev
```
3. package.json script节点新增命令
3. Add command to package.json script node

vue2项目新增如下：
The vue2 project is added as follows:
```js
"test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
"test:android": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=android jest -i",
"test:ios": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=ios jest -i",
"test:mp-weixin": "cross-env UNI_PLATFORM=mp-weixin jest -i",
"test:mp-baidu": "cross-env UNI_PLATFORM=mp-baidu jest -i"
```

vue3项目新增如下：
The vue3 project is added as follows:
```js
"test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
"test:android": "cross-env UNI_PLATFORM=app UNI_OS_NAME=android jest -i",
"test:ios": "cross-env UNI_PLATFORM=app UNI_OS_NAME=ios jest -i",
"test:mp-weixin": "cross-env UNI_PLATFORM=mp-weixin jest -i",
"test:mp-baidu": "cross-env UNI_PLATFORM=mp-baidu jest -i"
```

### H5平台测试流程
### H5 platform testing process

1. 进入工程目录，安装依赖
1. Enter the project directory and install dependencies
```shell
npm install puppeteer@14.0.0 --save-dev
```
注意： 从v3.0.0开始，`Puppeteer` 开始依赖于Node 10.18.1+ ，`Puppeteer`仅支持14.0.0及以下版本
Note: Since v3.0.0, `Puppeteer` starts to depend on Node 10.18.1+, `Puppeteer` only supports 14.0.0 and below


2. 根据API编写测试的js代码，参考测试用例
2. Write the test js code according to the API, refer to the test case
API文档见：[https://uniapp.dcloud.io/collocation/auto/api](https://uniapp.dcloud.io/collocation/auto/api)
API documentation see: [https://uniapp.dcloud.io/collocation/auto/api](https://uniapp.dcloud.io/collocation/auto/api)
测试文件目录配置见 [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)
See [jest.config.js](collocation/auto/quick-start?id=jestconfigjs) for test file directory configuration

3. 运行测试
3. Run the test
```shell
npm run test:h5
```

4. 测试结果
4. Test Results
```js
>> cross-env UNI_PLATFORM=h5 jest -i
...
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        14.995s, estimated 16s
```

更多配置参考 [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)
More configuration reference [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)


### App-Android测试流程
### App-Android testing process

1. 配置全局 `adb` 环境变量
1. Configure the global `adb` environment variable

2. 配置 `Hbuilder` 调试基座/自定义基座 `android_base.apk` 目录，参考 [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)
2. Configure the `Hbuilder` debug base/custom base `android_base.apk` directory, refer to [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)

3. 创建 `cli` 工程/现有 `cli` 工程
3. Create `cli` project/existing `cli` project
切换到工程目录，安装依赖包 `adbkit`
Switch to the project directory and install the dependency package `adbkit`
```shell
npm install adbkit --save-dev
```

4. 编写测试代码，参考测试用例
4. Write test code and refer to test cases

5. 运行测试
5. Run the test
```shell
npm run test:android
```


### App-iOS测试流程
### App-iOS testing process

目前仅支持 iOS 模拟器（需要mac电脑安装xcode）
Currently only supports iOS simulator (requires mac to install xcode)

1. 安装依赖 `node-simctl`
1. Install dependencies `node-simctl`
```shell
npm install node-simctl --save-dev
```

2. 配置模拟器id，参考 [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)
2. Configure the simulator id, refer to [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)

3. 配置 `Hbuilder` 调试基座/自定义基座 `Pandora_simulator.app` 目录，参考 [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)
3. Configure the `Hbuilder` debug base/custom base `Pandora_simulator.app` directory, refer to [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)

4. 编写测试代码，参考测试用例
4. Write test code and refer to test cases

5. 运行测试
5. Run the test
```shell
npm run test:ios
```



### 微信小程序测试流程
### WeChat Mini Program Test Process

1. 创建cli项目，同H5平台 (必须配置微信小程序 appid, manifest.json -> mp-weixin -> appid)
1. Create cli project, same as H5 platform (Wechat applet appid, manifest.json -> mp-weixin -> appid must be configured)

2. 运行测试(如果微信开发者工具无法成功打开项目，请手动打开)
2. Run the test (if the WeChat Developer Tools cannot open the project successfully, please open it manually)
```shell
npm run test:mp-weixin
```

3. 测试结果
3. Test results
```js
> cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch "--auto-port" "9520"
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        14.995s, estimated 16s
```



### 测试示例
### Test example

使用 hello uni-app 工程测试 H5 平台
Use the hello uni-app project to test the H5 platform

1. 创建 `cli` 项目，选择 `hello uni-app`
1. Create a `cli` project, select `hello uni-app`
```shell
$ vue create -p dcloudio/uni-preset-vue#alpha my-hello-uni-app
# 进入项目目录
$ cd my-hello-uni-app
```

2. 安装 `puppeteer`
2. Install `puppeteer`
```shell
npm install puppeteer
```

3. 创建测试文件 `src/pages/tabBar/component/component.test.js`，复制下面代码
3. Create a test file `src/pages/tabBar/component/component.test.js`, copy the following code
```js
describe('pages/tabBar/component/component.nvue', () => {
    let page
    beforeAll(async () => {
        // 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
        // ReLaunch to the homepage and get the homepage page object (where program is the global object automatically injected by uni-automator)
        page = await program.reLaunch('/pages/tabBar/component/component')
        await page.waitFor(1000)
    })

    it('u-link', async () => {
        // 检测首页u-link的文本内容
        // Detect the text content of the home page u-link
        expect(await (await page.$('.hello-link')).text()).toBe('https://uniapp.dcloud.io/component/')
    })

    it('视图容器', async () => {
        // 检测首个 panel 是视图容器
        // detect that the first panel is a view container
        expect(await (await page.$('.uni-panel-text')).text()).toBe('视图容器')
        // 检测首个 panel 切换展开
        // Detect the first panel switch to expand
        const panelH = await page.$('.uni-panel-h');
        // 不能做完全匹配，百度小程序会生成额外的class
        // Cannot do exact match, Baidu applet will generate additional class
        expect(await panelH.attribute('class')).toContain('uni-panel-h')
        await panelH.tap()
        await page.waitFor(500)
        // 已展开
        // expanded
        expect(await panelH.attribute('class')).toContain('uni-panel-h-on')
    })

    it('.uni-panel', async () => {
      const lists = await page.$$('.uni-panel')
      expect(lists.length).toBe(9)
    })

    it('.uni-panel action', async () => {
      const listHead = await page.$('.uni-panel-h')
      expect(await listHead.attribute('class')).toContain('uni-panel-h-on')
      await listHead.tap()
      await page.waitFor(200)
      expect(await listHead.attribute('class')).toContain(
        'uni-panel-h',
      )

      // 展开第一个 panel，点击第一个 item，验证打开的新页面是否正确
      // Expand the first panel, click the first item, and verify that the new page opened is correct
      await listHead.tap()
      await page.waitFor(200)
      const item = await page.$('.uni-navigate-item')
      await item.tap()
      await page.waitFor(500)
      expect((await program.currentPage()).path).toBe('pages/component/view/view')
      await page.waitFor(500)

      // 执行 navigateBack 验证是否返回
      // Execute navigateBack to verify if it returns
      expect((await program.navigateBack()).path).toBe('pages/tabBar/component/component')
    })
})
```

4. 运行测试
4. Run the test
```shell
npm run test:h5
```

5. 测试结果
5. Test Results
```js
> cross-env UNI_PLATFORM=h5 jest -i
 PASS  src/pages/tabBar/component/component.test.js (14.789s)
  pages/tabBar/component/component.nvue
    √ u-link (8ms)
    √ 视图容器 (518ms)
    √ .uni-panel (2ms)
    √ .uni-panel action (4447ms)
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        14.995s, estimated 16s
```



#### 屏幕截图示例
#### Screenshot example
```js
describe('pages/API/set-navigation-bar-title/set-navigation-bar-title.vue', () => {
    let page
    beforeAll(async () => {
        // 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
        // ReLaunch to the homepage and get the homepage page object (where program is the global object automatically injected by uni-automator)
        page = await program.reLaunch('/pages/API/set-navigation-bar-title/set-navigation-bar-title')
        await page.waitFor(3000)
    })

    it('.uni-hello-text', async () => {
      var image = await program.screenshot({
        path: "set-navigation-bar-title.png"  // 默认项目根目录
      })
      console.log(image)
    })
})
```

更多测试示例见： hello uni-app
For more test examples see: hello uni-app

GitHub： [https://github.com/dcloudio/hello-uniapp](https://github.com/dcloudio/hello-uniapp)