## uni-app cli项目@uniapp-cli

> 本文档仅适用于CLI工程。

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
"test:ios": "cross-env UNI_PLATFORM=app-plus UNI_OS_NAME=ios jest -i",
"test:mp-weixin": "cross-env UNI_PLATFORM=mp-weixin jest -i",
"test:mp-baidu": "cross-env UNI_PLATFORM=mp-baidu jest -i"
```

### H5平台测试流程

1. 进入工程目录，安装依赖
```
npm install puppeteer --save-dev
```
注意： 从v3.0.0开始，`Puppeteer` 开始依赖于Node 10.18.1+


2. 根据API编写测试的js代码，参考测试用例
API文档见：[https://uniapp.dcloud.io/collocation/auto/api](https://uniapp.dcloud.io/collocation/auto/api)
测试文件目录配置见 [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)

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

更多配置参考 [jest.config.js](collocation/auto/quick-start?id=jestconfigjs)


### App-Android测试流程

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


### App-iOS测试流程

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



### 微信小程序测试流程

1. 创建cli项目，同H5平台 (必须配置微信小程序 appid, manifest.json -> mp-weixin -> appid)

2. 运行测试(如果微信开发者工具无法成功打开项目，请手动打开)
```
npm run test:mp-weixin
```

3. 测试结果
```
> cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch "--auto-port" "9520"
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        14.995s, estimated 16s
```



### 测试示例

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
        // 不能做完全匹配，百度小程序会生成额外的class
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



#### 屏幕截图示例
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