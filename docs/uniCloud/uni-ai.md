# uni-ai

ai大潮来袭，如何把ai能力引入自己的应用中？几乎是每个开发者都在关心的问题。

`uni-ai`，定位就是开发者使用ai能力的最佳开发库，更丰富、更易用、更高效。

1. 聚合
`uni-ai`，聚合了国内外各种流行的ai能力。包括
- 大语言模型LLM：chatGPT、GPT-4、文心一言以及一些优秀创业公司
- 图形能力：stable diffusion、midjourney等

`uni-ai`支持配置自己在AI厂商处申请的API Key和代理，也支持免配直接使用。

2. prompt辅助
自然语言谁都会说，但想提出一个好prompt来指挥ai满足自己的需求并不简单。

`uni-ai`整合了大量prompt模板，并且提供了 `format prompt`和`prompt插件市场`。

举个例子，如果你需要写一个产品营销文案，你可以使用自然语言，如`请帮我编写一份产品营销文案，产品名称叫uni-app，它的特点是开发一次全端覆盖。`

但实际上，自然语言这么写是繁琐且容易纰漏的。format prompt是弹出一个表单，你在表单里填写：
```
产品名称：uni-app
目标用户：程序员
产品归类：前端应用开发框架
产品用途：使用该框架开发应用，一次编码可覆盖到Android app、iOS app、web、以及各家小程序，如微信、百度、支付宝、抖音、qq、京东等小程序和快应用。
卖点：高效、易学、生态完善
文风：技术风格
字数：500字
```

`uni-ai`，为你提供更好的prompt。

3. 私有数据训练
目前的大模型，没有最新的、以及企业私有的数据。各家也未开放fine-turning微调模型。

如何把私有数据灌入ai中，几乎是每个企业都关心的事情。

`uni-ai`提供了一整套方案解决这个问题，只需把私有数据按指定格式提交到你的uniCloud服务空间，就可以自动把这些最新的、私有的知识加入到ai的回答中。

4. 开源项目

ai能力非常常见的应用场景，有智能客服和自动生成文稿。

`uni-ai`把这些常见场景对应的应用均已做好，并且开源。开发者可以直接拿走使用。

- uni-im，内置了智能客服。[详见](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)
- uni-cms，内置了智能内容生成。[详见](https://uniapp.dcloud.net.cn/uniCloud/uni-cms.html)

这些完善的项目，包括了前端页面（全端可用）、云对象、云数据库等全套代码，开箱即用。

5. 费用优化

ai能力调用，是需要按token数量付费的。token太少会回答不准，太多则费用太高。

`uni-ai`提供了多种取舍策略，方便开发者平衡效果和费用。

6. 后置命令处理

ai都是回答文字内容，但实际场景中经常需要自动化执行一些命令。

`uni-ai`提供了action机制。

例如，请ai帮忙写一段代码，其中引入了三方插件，那么action可以通知HBuilder弹出下载这个插件的界面，不但代码生成了，其中的插件也自动下载了。


使用简单的js api，快速开始你的ai之旅吧！

```js
// 因涉及费用，ai能力调用均需在服务器端进行，也就是uniCloud云函数或云对象中
let llm = uniCloud.ai.LLMManage(provider,model) //provider为空时，可自动分配
llm.Prompt("提示词",maxtoken)
```

目前`uni-ai`处于内测邀请阶段，可以在需求墙为uni-ai投票（在[需求墙](https://dev.dcloud.net.cn/wish/)选uniCloud分类，对uni-ai投票）。
DCloud会遴选邀请部分用户参与内测。完善后会正式推出。

> 服务器业务不在uniCloud上的开发者，可以把云函数URL化，把uni-ai当做http接口调用。
