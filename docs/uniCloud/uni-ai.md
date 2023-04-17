# uni-ai

ai大潮来袭，如何把ai能力引入自己的应用中？几乎是每个开发者都在关心的问题。

`uni-ai`，定位就是开发者使用ai能力的最佳开发库，更丰富、更易用、更高效。

## 特点

1. 聚合

`uni-ai`，聚合了国内外各种流行的ai能力。包括
- 大语言模型LLM：chatGPT、GPT-4、百度文心一言以及一些优秀创业公司
- 图形能力：stable diffusion、文心一格、midjourney等

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

- uni-cms，内置了智能内容生成。[详见](https://uniapp.dcloud.net.cn/uniCloud/uni-cms.html)
- uni-im，内置了智能客服[详见](https://ext.dcloud.net.cn/plugin?id=11771)


这些完善的项目，包括了前端页面（全端可用）、云对象、云数据库等全套代码，开箱即用。
![](https://web-assets.dcloud.net.cn/unidoc/zh/202304112225875.png)

在线体验：[https://hellouniadmin.dcloud.net.cn/](https://hellouniadmin.dcloud.net.cn/)。在uni-admin登录后，左侧内容管理中新建一篇文章，toolbar右上角有ai按钮。注意测试系统的数据会定时清除。


5. 费用优化

ai能力调用，是需要按token数量付费的。token太少会回答不准，太多则费用太高。在反复对话的场景下尤其涉及之前对话记忆多久的问题。`uni-im`等集成了uni-ai的对话应用，已经内置了平衡策略。开发者无需再编写复杂的代码。

6. 后置命令处理

ai都是回答文字内容，但实际场景中经常需要自动化执行一些命令。

`uni-ai`提供了action机制，让ai变的更加强大。

例如，请ai帮忙写一段代码，其中涉及了未引用的三方插件，那么action可以通知HBuilder弹出下载这个插件的界面，不但代码生成了，其中的插件也自动下载了。


使用简单的js api，快速开始你的ai之旅吧！

```js
// 因涉及费用，ai能力调用均需在服务器端进行，也就是uniCloud云函数或云对象中
let llm = uniCloud.ai.getLLMManager({
  provider
})
llm.chatCompletion({
  messages: [{
    role: 'user',
    content: '你好，ai'
  }]
})
```

## API@api

> 新增于HBuilderX 3.7.13+

ai作为一种云能力，相关调用被整合到uniCloud中。

如您的服务器业务不在uniCloud上，可以把[云函数URL化](http.md)，把`uni-ai`当做http接口调用。

在实际应用中，大多数场景是直接使用uni-im和uni-cms的ai功能，这些开源项目已经把完整逻辑都实现，无需自己研究API。

ai能力由`uni-cloud-ai`扩展库提供，在云函数或云对象中，对右键或在package.json中配置`uni-cloud-ai`扩展库。
如何使用扩展库请参考：[使用扩展库](cf-functions.md#extension)

注意uni-ai是云函数扩展库，其api是`uniCloud.ai`，不是需要下载的三方插件。而uni-cms、uni-im等开源项目，是需要在插件市场下载的。

### 获取LLM服务商实例@get-llm-manager

LLM，全称为Large Language Models，指大语言模型。

LLM的主要特点为输入一段前文，可以推导预测下文。

LLM不等于ai的全部，除了LLM，还有ai生成图片等其他模型。

用法：`uniCloud.ai.getLLMManager(Object GetLLMManagerOptions);`

注意需在相关云函数或云对象中加载`uni-cloud-ai`[使用扩展库](cf-functions.md#extension)，否则会报找不到ai对象。

**参数说明GetLLMManagerOptions**

|参数		|类型	|必填	|默认值	|说明																																	|
|---		|---	|---	|---	|---																																	|
|provider	|string	|否		|-		|llm服务商，目前支持`openai`、`baidu`、`minimax`。不指定时由uni-ai自动分配																|
|apiKey		|string	|否		|-		|llm服务商的apiKey，如不填则使用uni-ai的key。如指定openai和baidu则必填																			|
|accessToken|string	|否		|-		|llm服务商的accessToken。目前百度文心一言是必填，如何获取请参考：[百度AI鉴权认证机制](https://ai.baidu.com/ai-doc/REFERENCE/Ck3dwjhhu)	|
|proxy		|string	|否		|-		|可有效连接openai服务器的、可被uniCloud云函数连接的代理服务器地址。格式为IP或域名，域名不包含http前缀，协议层面仅支持https。配置为`openai`时必填													|

**示例**

在云函数或云对象中编写如下代码：

```js
// 不指定provider
const llm = uniCloud.ai.getLLMManager()

// 指定openai，需自行配置相关key，以及中转代理服务器
const openai = uniCloud.ai.getLLMManager({
  provider: 'openai',
  apiKey:'your key',
  proxy:'www.yourdomain.com' //也可以是ip
})
```

现阶段，不指定provider时，uni-ai分配的ai引擎无需开发者支付费用。同时也不会自动分配到gpt-4等比较昂贵但精准的模型上。如有变化会提前公告。

开发者使用openai等已经商用的ai时，需自行向相关服务商支付费用。

### 对话@chat-completion

用法：`llm.chatCompletion(Object ChatCompletionOptions)`

**参数说明ChatCompletionOptions**

|参数		|类型	|必填	|默认值				|说明																									|兼容性说明					|
|---		|---	|---	|---				|---																									|---						|
|messages	|array	|是		| -					|提问信息																								|							|
|model		|string	|否		|默认值见下方说明		|模型名称。每个AI Provider有多个model，见下方说明															|百度文心一言不支持此参数	|
|maxTokens	|number	|否		|-					|生成的token数量限制，需要注意此数量和传入的message token数量相加不可大于4096							|百度文心一言不支持此参数	|
|temperature|number	|否		|1					|较高的值将使输出更加随机，而较低的值将使输出更加集中和确定。建议temperature和top_p同时只调整其中一个	|百度文心一言不支持此参数	|
|topP		|number	|否		|1					|采样方法，数值越小结果确定性越强；数值越大，结果越随机													|百度文心一言不支持此参数	|

**messages参数说明**

需注意messages末尾有个`s`，它是数组，而不是简单的字符串。其中每项由消息内容content和角色role组成。

一个最简单的示例：

```js
await llm.chatCompletion({
  messages: [{
    role: 'user',
    content: '你好'
  }]
})
```

role，即角色，有三个值：

- system 系统，对应的content一般用于对话背景设定等功能。system角色及信息如存在时只能放在messages数组第一项。baidu不支持此角色
- user 用户，对应的content为用户输入的信息
- assistant ai助手，对应的content为ai返回的信息

当开发者需要为用户的场景设置背景时，则需在云端代码写死system，而用户输入的问题则被放入user中，然后一起提交给LLM。

例如，提供一个法律咨询的ai咨询助手。

开发者可以在system里限制对话背景，防止ai乱答问题。然后给用户提供输入框，假使用户咨询了：“谣言传播多少人可以定罪？”，那么拼接的message就是：

```js
const messages = [{
    role: 'system',
    content: '你是一名律师，回答内容仅限法律范围。'
  },{
    role: 'user',
    content: '谣言传播多少人可以定罪？'
  }]
```

对于不支持system的情况，如baidu，只能把system对应的内容写到第一条user信息内，也可以达到一定范围内的控制效果。

> 注意：对于法律、医学等专业领域需要准确回答的，建议使用gpt-4模型。其他模型更适合闲聊、文章内容生成。

assistant这个角色的内容，是ai返回的。当需要持续聊天、记忆前文时，需使用此角色。

因为LLM没有记忆能力，messages参数内需要包含前文，LLM才能记得之前聊天的内容。

以下的messages示例，是第二轮ai对话时发送的messages的示例。在这个示例中，第一个user和assistant的内容，是第一轮ai对话的聊天记录。
最后一个user是第二轮对话时用户提的问题。

因为用户提问的内容“从上述方法名中筛选首字母为元音字母的方法名”，其中有代词“上述”，为了让ai知道“上述”是什么，需要把第一轮的对话内容也提交。

```js
const messages = [{
    role: 'system',
    content: '以下对话只需给出结果，不要对结果进行解释。'
  },{
    role: 'user',
    content: '以数组形式返回nodejs os模块的方法列表，数组的每一项是一个方法名。'
  }, {
    role: 'assistant',
    content: '以下是 Node.js 的 os 模块的方法列表，以数组形式返回，每一项是一个方法名：["arch","cpus","endianness","freemem","getPriority","homedir","hostname","loadavg","networkInterfaces","platform","release","setPriority","tmpdir","totalmem","type","uptime","userInfo"]'
  }, {
    role: 'user',
    content: '从上述方法名中筛选首字母为元音字母的方法名，以数组形式返回'
  }]
```

在持续对话中需注意，messages内容越多则消耗的token越多，而LLM都是以token计费的。

token是LLM的术语，ai认知的语言是经过转换的，对于英语，1个token平均是4个字符，大约0.75个单词；对于中文，1个汉字大约是2个token。

如何在节省token和保持持续对话的记忆之间平衡，是一个挺复杂的事情。开发者需在适合时机要求ai对上文进行总结压缩，下次对话传递总结及总结之后的对话内容以实现更长的对话。

DCloud在[uni-im](https://uniapp.dcloud.net.cn/uniCloud/uni-im.html)和[uni-cms](https://uniapp.dcloud.net.cn/uniCloud/uni-cms.html)中，
已经写好了这些复杂逻辑。开发者直接使用DCloud封装好的开源项目模板即可。

在上述例子中，还可以看到一种有趣的用法，即要求ai以数组方式回答问题。这将有利于开发者格式化数据，并进行后置增强处理。

**可用模型**

每个AI Provider可以有多个model，比如对于openai，ChatGPT的模型是`gpt-3.5-turbo`，而gpt-4的模型就是`gpt-4`。不同模型的功能、性能、价格都不一样。

也有一些AI Provider只有一个模型，此时model参数可不填。

如果您需要非常精准的问答，且不在乎成本，推荐使用`gpt-4`。如果是普通的文章内容生成、续写，大多数模型均可胜任。

|服务商	|接口			|模型																						|
|---	|---			|---																						|
|openai	|chatCompletion	|gpt-4、gpt-4-0314、gpt-4-32k、gpt-4-32k-0314、gpt-3.5-turbo（默认值）、gpt-3.5-turbo-0301	|
|minimax|chatCompletion	|abab4-chat、abab5-chat（默认值）															|


**chatCompletion方法的返回值**

|参数						|类型				|必备		|默认值	|说明														|兼容性说明				|
|---						|---				|---		|---	|---														|---					|
|id							|string				|openai必备	| -		|本次回复的id												|仅openai返回此项		|
|reply						|string				|是			| -		|ai对本次消息的回复											|						|
|choices					|array&lt;object&gt;|否			|-		|所有生成结果												|百度文心一言不返回此项	|
|&#124;--finishReason		|string				|否			|-		|截断原因，stop（正常结束）、length（超出maxTokens被截断）	|						|
|&#124;--message			|object				|否			|-		|返回消息													|						|
|&nbsp;&nbsp;&#124;--role	|string				|否			|-		|角色														|						|
|&nbsp;&nbsp;&#124;--content|string				|否			|-		|消息内容													|						|
|usage						|object				|是			|-		|本次对话token消耗详情										|						|
|&#124;--promptTokens		|number				|否			|-		|输入的token数量											|minimax不返回此项		|
|&#124;--completionTokens	|number				|否			|-		|生成的token数量											|minimax不返回此项		|
|&#124;--totalTokens		|number				|是			|-		|总token数量												|						|


**示例**

```js
const llmManager = uniCloud.ai.getLLMManager()
const res = await llmManager.chatCompletion({
	messages: [{
		role: 'user',
		content: 'uni-app是什么，20个字以内进行说明'
	}]
	})
console.log(res);

```


### 错误码@err-code

在调用uni-cloud-ai提供的api时，如果出现错误，接口会将错误对象抛出。如需处理此类错误需对错误进行捕获

**示例**

```js
try {
  await llm.chatCompletion({
    messages: [{
      role: 'user',
      content: '你好'
    }]
  })
} catch (e) {
  console.log(e.errCode, e.errMsg)
  // TODO 处理错误
}
```

完整错误码列表如下

|错误码	|错误描述					|
|--		|--							|
|50001	|缺少参数					|
|50002	|参数错误					|
|60001	|服务商接口抛出的错误		|
|60002	|接口调用凭证、key等信息有误|
|60003	|触发了服务商限流策略		|

## 非uniCloud服务器调用

如果您需要在非uniCloud的传统服务器调用uni-ai，需要先在uniCloud上创建一个云函数或云对象，加载uni-cloud-ai扩展库，编写上述uni-ai的调用代码。

然后将云函数或云对象进行URL化，转成http接口，[详见](http.md)

如果在您的传统服务器和uniCloud云函数之间需要建立安全通信机制，可使用s2s公共模块，[详见](uni-cloud-s2s.md)

## 费用

- 如果您自己去ai厂商申请和缴费，比如openai，则缴费后在uni-ai中配置相关key即可使用。
- 如果您使用uni-ai自动分配的ai服务，目前也是免费的。未来若计费会提前公告。未来计费原则也必然是市场标准价格，不会出现歧视性、收割性定价。

## 后续版本计划

uni-ai会持续快速迭代，未来会陆续提供：
- stream流式输出
- 聚合更多ai引擎
- 提供私有数据训练方案
- 提供prompt辅助和插件市场
- 后置命令处理

## 常用用途

目前生成式ai的主要用途有：
- 文章生成、润色、续写：常见于生成文案、文书、宣传资料、营销邮件、笑话、诗词等。[uni-cms](https://uniapp.dcloud.net.cn/uniCloud/uni-cms.html)中，已经内置了这个功能
- 闲聊：情感咨询、常识问答。[uni-im](https://ext.dcloud.net.cn/plugin?id=11771)
- 翻译：各国各民族语言翻译
- 代码注释补充和简单代码生成：需使用openai，其他provider在代码领域的能力暂时还不行

如对生成内容有较高的准确性要求，一方面使用gpt-4等高级的模型；另一方面需要追加专业甚至私有的语料训练。目前gpt-4未开放微调，但uni-ai正在开发其他私有数据训练方案，后续会升级提供。


## 合规注意

国内使用ai，需注意合规性。

- ai生成的文章，如发布到互联网上，应当调用内容安全审查后再发布。比如[uni内容安全](https://ext.dcloud.net.cn/plugin?id=5460)。[uni-cms](https://uniapp.dcloud.net.cn/uniCloud/uni-cms.html)已经内置了uni内容安全，只需在配置里开启即可。
- 如开放给用户聊天使用，也应该通过内容安全来管控，避免出现违法违规内容，导致被下架。
- 在微信小程序等平台，名字或内容涉及ChatGPT，都会被平台封禁。所以上微信小程序时不能提及ChatGPT，也不要使用uni-ai的openai配置功能。可以使用国内ai或让uni-ai自动分配。同时输入和返回的内容都需要做安全审查，具体见上。
- 如果在企业内部通过openai提升生产力，这不涉及合规问题，可以放心使用。


> 更多问题欢迎加入uni-ai官方交流群 群号:[699680439](https://qm.qq.com/cgi-bin/qm/qr?k=P_JoYXY56vNfb78uNHwwzqpODwl9e89B&jump_from=webapi&authKey=GDp321q9ZYW4V0ZQcejXikwMnNRs4KVBcQXMADs8lvC0hifSH9ORHsyERy6vO4bA)
