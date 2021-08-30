#### uni-app自动化测试

uni-app提供了一批API，这些API可以操控uni-app应用，包括运行、跳转页面、触发点击等，并可以获取页面元素状态、进行截图，从而实现对uni-app项目进行自动化测试的目的。

本功能使用到了业内常见的测试库如jest（MIT协议）。

#### 特性
开发者可以利用API做以下事情：

* 控制跳转到指定页面
* 获取页面数据
* 获取页面元素状态
* 触发元素绑定事件
* 调用 uni 对象上任意接口

**平台差异说明**

|App|H5|
|:-:|:-:|
|√(ios仅支持模拟器)|√|


目前仅 [cli](https://uniapp.dcloud.net.cn/quickstart?id=_2-通过vue-cli命令行) 工程支持。有利于持续集成。

[HBuilderX uniapp自动化测试插件](https://ext.dcloud.net.cn/plugin?id=5708), 支持在HBuilderX内对uniapp普通项目、cli项目进行自动化测试。此插件简化了测试环境安装、测试用例创建、测试运行、测试设备选择等步骤。
推荐使用方式：研发提交源码到版本库后，持续集成系统自动拉取源码，自动运行自动化测试。


创建 `cli` 工程
```
# 全局安装vue-cli
$ npm install -g @vue/cli
$ cd ... // 切换到工程保存目录
$ vue create -p dcloudio/uni-preset-vue#alpha my-project
```

如果之前是HBuilderX工程，则把HBuilderX工程内的文件（除 unpackage、node_modules 目录）拷贝至 vue-cli 工程的 src 目录。
在 vue-cli 工程内重新安装 npm 依赖（如果之前使用了 npm 依赖的话）

cli创建项目时若选择`hello uni-app`模板，可看到其中已经自带部分测试例。

已有 `cli` 工程
1. 更新依赖包 `@dcloudio/*` >= `2.0.0-alpha-27920200613002`
2. 安装依赖包 `@dcloudio/uni-automator`
```
npm install @dcloudio/uni-automator --save-dev
```
3. package.json script节点新增命令
```
"test:h5": "cross-env UNI_PLATFORM=h5 jest -i",
"test:android": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=android jest -i",
"test:ios": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=ios jest -i"
```

#### H5平台测试流程

1. 进入工程目录，安装依赖
```
npm install puppeteer --save-dev
```
注意： 从v3.0.0开始，`Puppeteer` 开始依赖于Node 10.18.1+


2. 根据API编写测试的js代码，参考测试用例
API文档见：[https://uniapp.dcloud.io/collocation/auto/api](https://uniapp.dcloud.io/collocation/auto/api)
测试文件目录配置见 [jest.config.js](collocation/auto/api?id=jestconfigjs)

3. 运行测试
```
npm run test:h5
```

4. 测试结果
```
>> cross-env UNI_PLATFORM=h5 jest -i
...
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        14.995s, estimated 16s
```

更多配置参考 [jest.config.js](collocation/auto/api?id=jestconfigjs)


#### App-Android测试流程

1. 配置全局 `adb` 环境变量

2. 配置 `Hbuilder` 调试基座/自定义基座 `android_base.apk` 目录，参考 `jest.config.js`

3. 创建 `cli` 工程/现有 `cli` 工程
切换到工程目录，安装依赖包 `adbkit`
```
npm install adbkit --save-dev
```

4. 编写测试代码，参考测试用例

5. 运行测试
```
npm run test:android
```


#### App-iOS测试流程

目前仅支持 iOS 模拟器（需要mac电脑安装xcode）

1. 安装依赖 `node-simctl`
```
npm install node-simctl --save-dev
```

2. 配置模拟器id，参考 `jest.config.js`

3. 配置 `Hbuilder` 调试基座/自定义基座 `Pandora_simulator.app` 目录，参考 `jest.config.js`

4. 编写测试代码，参考测试用例

5. 运行测试
```
npm run test:ios
```



#### 测试示例

使用 hello uni-app 工程测试 H5 平台

1. 创建 `cli` 项目，选择 `hello uni-app`
```
$ vue create -p dcloudio/uni-preset-vue#alpha my-hello-uni-app
# 进入项目目录
$ cd my-hello-uni-app
```

2. 安装 `puppeteer`
```
npm install puppeteer
```

3. 创建测试文件 `src/pages/tabBar/component/component.test.js`，复制下面代码
```
describe('pages/tabBar/component/component.nvue', () => {
    let page
    beforeAll(async () => {
        // 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
        page = await program.reLaunch('/pages/tabBar/component/component')
        await page.waitFor(1000)
    })

    it('u-link', async () => {
        // 检测首页u-link的文本内容
        expect(await (await page.$('.hello-link')).text()).toBe('https://uniapp.dcloud.io/component/')
    })

    it('视图容器', async () => {
        // 检测首个 panel 是视图容器
        expect(await (await page.$('.uni-panel-text')).text()).toBe('视图容器')
        // 检测首个 panel 切换展开
        const panelH = await page.$('.uni-panel-h');
        expect(await panelH.attribute('class')).toContain('uni-panel-h')
        await panelH.tap()
        await page.waitFor(500)
        // 已展开
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
      await listHead.tap()
      await page.waitFor(200)
      const item = await page.$('.uni-navigate-item')
      await item.tap()
      await page.waitFor(500)
      expect((await program.currentPage()).path).toBe('pages/component/view/view')
      await page.waitFor(500)

      // 执行 navigateBack 验证是否返回
      expect((await program.navigateBack()).path).toBe('pages/tabBar/component/component')
    })
})
```

4. 运行测试
```
npm run test:h5
```

5. 测试结果
```
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



##### 屏幕截图示例
```
describe('pages/API/set-navigation-bar-title/set-navigation-bar-title.vue', () => {
    let page
    beforeAll(async () => {
        // 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
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

GitHub： [https://github.com/dcloudio/hello-uniapp](https://github.com/dcloudio/hello-uniapp)



#### jest.config.js

```
module.exports = {
  globalTeardown: '@dcloudio/uni-automator/dist/teardown.js',
  testEnvironment: '@dcloudio/uni-automator/dist/environment.js',
  testEnvironmentOptions: {
    compile: true,
    h5: { // 为了节省测试时间，可以指定一个 H5 的 url 地址，若不指定，每次运行测试，会先 npm run dev:h5
      url: "http://192.168.x.x:8080/h5/",
      options: {
        headless: false // 配置是否显示 puppeteer 测试窗口
      }
    },
    "app-plus": { // 需要安装 HBuilderX
      android: {
        executablePath: "HBuilderX/plugins/launcher/base/android_base.apk" // apk 目录
      },
      ios: {
        // uuid 必须配置，目前仅支持模拟器，可以（xcrun simctl list）查看要使用的模拟器 uuid
        id: "",
        executablePath: "HBuilderX/plugins/launcher/base/Pandora_simulator.app" // ipa 目录
      }
    }
  },
  testTimeout: 15000,
  reporters: [
    'default'
  ],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['js', 'json'],
  rootDir: __dirname,
  testMatch: ['<rootDir>/src/**/*test.[jt]s?(x)'], // 测试文件目录
  testPathIgnorePatterns: ['/node_modules/']
}

```



**注意事项**

1. 如果页面涉及到分包加载问题，`reLaunch` 获取的页面路径可能会出现问题 ，解决方案如下 ：

    ```javascript
    // 重新 reLaunch至首页，并获取 page 对象（其中 program 是 uni-automator 自动注入的全局对象）
    page = await program.reLaunch('/pages/extUI/calendar/calendar')
    page = await program.currentPage()
    ```

2. 分包中的页面，打开之后要延迟时间长一点，否则不能正确获取到页面信息
