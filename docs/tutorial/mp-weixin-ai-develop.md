## 小程序 AI 开发模式接入指南

小程序 AI 开发模式提供了一套智能化的运行环境和开发框架，开发者基于该框架，将小程序的功能抽象为原子接口和原子组件，并封装成 SKILL，供小程序 AI 调用。

> 目前 uni-app `vue2 微信小程序项目` 从 5.14+ 支持此模式

## 开发指南

在 uni-app 中使用小程序 AI 开发模式，需要先在 微信网页端「微信公众平台 - 基础功能 - AI能力」或小程序「微信开发者助手」中「管理 - 微信AI管理」中的接入模式选择「开发模式」进行申请。

申请结束之后，开发者需要下载最新 nightly 版本的微信小程序开发者工具，[下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/log#nightly)

## 接入方式

小程序 AI 开发模式提供了一套智能化的运行环境和开发框架，开发者可根据自身业务要求，将小程序的功能抽象为原子接口和原子组件，并封装成 SKILL，供小程序 AI 调用。

可以者需要在 `manifest.json` 中配置 `mp-weixin` 的相关信息，例如：

```json
// mainfest.json
{
  "mp-weixin": {
    "appid": "your appid",
    "lazyCodeLoading": "requiredComponents",
    "agent": {
      "instruction": "AGENTS.md",
      "pageMetadata": "page-meta.json",
      "skills": [
        {
          "name": "learn-ai-interaction",
          "description": "用卡片和模拟业务接口讲解微信小程序与小程序 AI 的交互方式",
          "path": "ai-packages/learn/ai-interaction-skill"
        }
      ]
    }
  }
}
```

编译的时候会自动拷贝 `instruction`、`pageMetadata`、`skills` 等文件到产物目录下。

详细的接入方式和使用方法，请参考 [小程序 AI 开发模式接入方式](https://developers.weixin.qq.com/miniprogram/dev/ai/integration.html)

## 相关文档

想要了解有关 skills 最佳编写指南、运行机制等更多信息，可参考 [小程序 AI 开发模式文档](https://developers.weixin.qq.com/miniprogram/dev/ai/guide.html#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5)