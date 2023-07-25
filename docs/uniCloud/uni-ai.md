# uni-ai开发文档

## API@api

> 新增于HBuilderX正式版 3.7.10+， Alpha版 3.7.13+。

> HBuilderX 3.8.5+支持在本地调试云函数时使用uni-ai计费网关

:::warning 注意
使用低版本HBuilder，只能上传到uniCloud云端联调。因为低版本的uniCloud本地运行插件不支持`uni-ai`。云端和本地扩展库差异参考：[云端和本地扩展库差异](rundebug.md#diff-extension)
:::

ai作为一种云能力，相关调用被整合到uniCloud中。

如您的服务器业务不在uniCloud上，可以把[云函数URL化](http.md)，把`uni-ai`当做http接口调用。

在实际应用中，大多数场景是直接使用[uni-ai-chat](uni-ai-chat.md)和[uni-cms](uni-cms.md)的ai功能，这些开源项目已经把完整逻辑都实现，无需自己研究API。

ai能力由`uni-cloud-ai`扩展库提供，在云函数或云对象中，对右键配置`uni-cloud-ai`扩展库。如何使用扩展库请参考：[使用扩展库](cf-functions.md#extension)

如果HBuilderX版本过低，在云函数的扩展库界面里找不到`uni-ai`。

注意`uni-ai`是云函数扩展库，其api是`uniCloud.ai`，不是需要下载的三方插件，它是一个底层能力。
而[uni-ai-chat](uni-ai-chat.md)和[uni-cms](uni-cms.md)等开源项目，是需要在插件市场下载的。

### 获取LLM实例@get-llm-manager

LLM，全称为Large Language Models，指大语言模型。

LLM的主要特点为输入一段前文，可以推导预测下文。

LLM不等于ai的全部，除了LLM，还有ai生成图片等其他模型。

用法：`uniCloud.ai.getLLMManager(Object GetLLMManagerOptions);`

注意需在相关云函数或云对象中加载`uni-cloud-ai`[使用扩展库](cf-functions.md#extension)，否则会报找不到ai对象。

> 在2023年06月15日前，您不填写相关apiKey时可以免费使用uni-ai的LLM能力。但6月15日起需配置自己的apiKey或使用`uni-ai计费网关`，否则无法使用。详见[uni-ai计费老用户升级指南](#migrate-to-uni-ai-gateway)
> 2023年07月25日非uni-ai计费网关调用百度接口由内测接口调整为[文心千帆大模型接口](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/jlil56u11)，HBuilderX本地调试会在下次HBuilderX发版时生效。新接口支持流式响应。

**参数说明GetLLMManagerOptions**

|参数				|类型		|必填																														|默认值	|说明																																																																						|
|---				|---		|---																														|---		|---																																																																						|
|provider		|string	|否																															|minimax|llm服务商，目前支持`openai`、`baidu`、`minimax`、`azure`（azure新增于HBuilderX 3.8.3）、`ifly`（azure新增于HBuilderX 3.8.10）。																												|
|apiKey			|string	|使用uni-ai计费网关时不填。使用自己的key时必填									|-			|llm服务商的apiKey。																																																														|
|endpoint		|string	|使用uni-ai计费网关时不填。使用自己的azure账户时必填						|-			|azure服务端点，在azure创建ai服务时获取																																																					|
|groupId		|string	|使用uni-ai计费网关时不填。使用自己的minimax账户时必填					|-			|minimax的groupId参数。																																																													|
|accessToken|string	|baidu必填																											|-			|llm服务商的accessToken。如何获取请参考：[百度AI鉴权认证机制](https://ai.baidu.com/ai-doc/REFERENCE/Ck3dwjhhu)，需确保已开通相关接口的调用权限	|
|proxy			|string	|使用国外openai时必填，其他情况不填															|-			|可有效连接openai服务器的、可被uniCloud云函数连接的代理服务器地址。格式为IP或域名，域名不包含http前缀，协议层面仅支持https。配置为`openai`时必填|
|appId			|string	|使用uni-ai计费网关时，部分情况必填（见后），使用讯飞账户时必填	|-			|客户端manifest.json内的appId，部分场景下（云函数url化、定时触发）云函数/云对象无法获取客户端appId，需要通过此参数传递													|
|apiSecret	|string	|讯飞必填																												|-			|llm服务商的apiSecret。																																																													|

大语言模型的推理需要消耗很高的GPU算力，调用大模型需要在模型厂商处注册账户和付费。

您可以自行去大模型厂商处注册并填写相应的apiKey的参数。也可以通过DCloud来购买，即使用`uni-ai计费网关`。

`uni-ai计费网关`使用门槛低，并且可以一处充值，多模型体验。您无需在多个大模型厂商处申请，只需向DCloud购买token套餐，即可体验各种大模型的效果。

`uni-ai计费网关`的token计费单价与大模型厂商的定价相同，支持开具发票。

uni-ai作为一个国际化业务，支持国内外各种开发者面向国内外各种用户开发应用。
但开发者务必需注意您的应用是否符合当地政府监管要求、是否满足大模型厂商的限制政策。比如中国的大模型目前只能在大陆地区面向中国国籍用户使用，而国外的模型也有类似的区域限制。在uniCloud web控制台开通uni-ai计费网关时，您需要同意相关许可协议。

**如何使用uni-ai计费网关**

uni-ai计费网关目前支持付费使用国内大模型厂商minimax，以及微软与openai合作提供的基于azure的ChatGPT3.5（与openai的ChatGPT3.5一致）。

1. 开通uni-ai付费服务：[uni-ai计费网关开通流程](uni-ai-buy.md#enable-uni-ai-service)
2. 云函数中调用LLM时，不传apiKey等您向大模型厂商申请的参数
	- apiKey、endpoint、groupId、accessToken等参数，是用于您自己向大模型厂商申请后填写的。如果您使用uni-ai计费网关，这些都不填且不能填。一旦您填了，就会走您自己申请的账户，而不是uni-ai计费网关。
	- 您可以指定provider为minimax或azure，也可以不指定，默认值为minimax。

**示例**

在云函数或云对象中编写如下代码调用LLM服务：

```js
// 使用uni-ai计费网关，不指定provider，默认会走minimax
const llmManager = uniCloud.ai.getLLMManager()
```

```js
// 使用uni-ai计费网关，指定provider为azure
const llmManager = uniCloud.ai.getLLMManager({
  provider: 'azure'
})
```

```js
// 不使用uni-ai计费网关，自行使用openai
const llmManager = uniCloud.ai.getLLMManager({
  provider: 'openai',
  apiKey:'your key',
  proxy:'www.yourdomain.com' //也可以是ip
})
```

**如何测试是否配置成功**

在您使用uni-ai计费网关后，且在云函数代码中做好配置后。您可以：
1. 运行应用，调用LLM的chatCompletion接口，看看是否返回内容
2. 在uniCloud web控制台的uni-ai管理界面，查看计费报表，是否产生了对应的计费条目

**appId参数说明**

使用uni-ai计费网关时，在云函数url化、定时触发、云函数单实例多并发，这3个场景需要传递客户端appId，即您应用的manifest.json里的appid。

如果是在HBuilder内直接运行云函数（非客户端联调调用）也无法获取appId，此时可参考此文档进行参数模拟：[模拟客户端类型](rundebug.md#mock-client-info)

**关于proxy参数的说明**

云函数无法直接连同openai的服务器，您需要自行配置代理。如果使用的代理需要用户名和密码，请在代理地址中加入用户名和密码，例如：`username:password@host:port`。

uni-ai在请求openai时会自动将openai的域名替换为配置的代理域名或ip，一般的反向代理服务器均可满足此需求。

**示例**

在云函数或云对象中编写如下代码：

```js
// 指定openai，需自行配置相关key，以及中转代理服务器
const llmManager = uniCloud.ai.getLLMManager({
  provider: 'openai',
  apiKey:'your key',
  proxy:'www.yourdomain.com' //也可以是ip
})
```

### 对话@chat-completion

:::warning 注意
对话接口响应一般比较慢，建议将云函数超时时间配置的长一些，比如30秒（客户端访问云函数最大超时时间：腾讯云为30秒，阿里云为60秒）。如何配置云函数超时时间请参考：[云函数超时时间](cf-functions.md#timeout)
:::

用法：`llmManager.chatCompletion(Object ChatCompletionOptions)`

**参数说明ChatCompletionOptions**

|参数							|类型		|必填																	|默认值						|说明																																																																		|兼容性说明																							|
|---							|---		|---																	|---							|---																																																																		|---																										|
|messages					|array	|是																		| -								|提问信息																																																																|																												|
|model						|string	|否																		|默认值见下方说明	|模型名称。每个AI Provider有多个model，见下方说明																																												|ifly、baidu、azure（非uni-ai计费网关调用）不支持此参数	|
|deploymentId			|string	|否																		|-								|azure模型部署id，如使用uni-ai计费网关无需传递此参数、而是要传model，详见下方说明																												|仅azure（非uni-ai计费网关调用）支持此参数							|
|~~maxTokens~~		|number	|否																		|-								|【已废弃，请使用tokensToGenerate替代】生成的token数量限制，需要注意此值和传入的messages对应的token数量相加不可大于模型最大上下文token数|baidu不支持此参数																			|
|tokensToGenerate	|number	|否																		|默认值见下方说明	|生成的token数量限制，需要注意此值和传入的messages对应的token数量相加不可大于模型最大上下文token数																			|baidu不支持此参数																			|
|temperature			|number	|否																		|1								|较高的值将使输出更加随机，而较低的值将使输出更加集中和确定。建议temperature和top_p同时只调整其中一个																		|baidu ERNIE-Bot-turbo不支持此参数											|
|topP							|number	|否																		|1								|采样方法，数值越小结果确定性越强；数值越大，结果越随机																																									|ifly、baidu ERNIE-Bot-turbo不支持此参数								|
|stream						|boolean|否																		|false						|是否使用流式响应，见下方[流式响应](#chat-completion-stream)章节																																				|																												|
|sseChannel				|object	|通过uni-ai计费网关使用流式响应时必填	|-								|见下方[流式响应](#chat-completion-stream)章节。客户端如何获取sseChannel对象，请参考：[云函数请求中的中间状态通知通道](sse-channel.md)	|																												|
|streamEventForSSE|string	|否																		|message					|自动处理流式响应时使用的流式响应回调事件，可选：message、optimizedMessage、line。见下方[流式响应](#chat-completion-stream)章节					|																												|

**messages参数说明**

需注意messages末尾有个`s`，它是数组，而不是简单的字符串。其中每项由消息内容content和角色role组成。

一个最简单的示例：

```js
await llmManager.chatCompletion({
  messages: [{
    role: 'user',
    content: '你好'
  }]
})
```

role，即角色，有三个值：

- system 系统，对应的content一般用于对话背景设定等功能。system角色及信息如存在时只能放在messages数组第一项。ifly、baidu不支持此角色
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

DCloud在[uni-ai-chat](https://uniapp.dcloud.net.cn/uniCloud/uni-ai-chat.html)和[uni-cms](https://uniapp.dcloud.net.cn/uniCloud/uni-cms.html)中，
已经写好了这些复杂逻辑。开发者直接使用DCloud封装好的开源项目模板即可。

在上述例子中，还可以看到一种有趣的用法，即要求ai以数组方式回答问题。这将有利于开发者格式化数据，并进行后置增强处理。

**model参数说明**

每个AI Provider可以有多个model，比如对于openai，ChatGPT的模型是`gpt-3.5-turbo`，而gpt-4的模型就是`gpt-4`。不同模型的功能、性能、价格都不一样。

也有一些AI Provider只有一个模型，此时model参数可不填。

如果您需要非常精准的问答，且不在乎成本，推荐使用`gpt-4`。如果是普通的文章内容生成、续写，大多数模型均可胜任。

|服务商							|接口			|模型																						|
|---							|---			|---																						|
|openai							|chatCompletion	|gpt-4、gpt-4-0314、gpt-4-32k、gpt-4-32k-0314、gpt-3.5-turbo（默认值）、gpt-3.5-turbo-0301	|
|minimax						|chatCompletion	|abab4-chat、abab5-chat（默认值）															|
|azure（通过uni-ai计费网关调用）|chatCompletion	|gpt-3.5-turbo（默认值）																	|
|baidu（文心千帆）|chatCompletion	|ERNIE-Bot（默认值）、ERNIE-Bot-turbo																	|

**模型最大上下文token数、字数限制**

openai gpt-3.5-turbo: 4097
azure gpt-3.5-turbo: 8192
abab4-chat、abab5-chat: 4096

baidu文心千帆最后一个message的content长度（即此轮对话的问题）不能超过2000个字符；如果messages中content总长度大于2000字符，系统会依次遗忘最早的历史会话，直到content的总长度不超过2000个字符

**tokensToGenerate参数说明**

tokensToGenerate指生成的token数量限制，即返回的文本对应的token数量不能超过此值。注意这个值不是总token。

注意此值和传入messages对应的token数量，两者相加不可大于模型最大上下文token数。如果messages对应的token数为1024，当传递的tokensToGenerate参数大于（模型最大上下文token数-1024）时接口会抛出错误。

使用minimax时默认最多生成512个token的结果，也就是返回结果不会很长。如有需求请自行调整此值。

**deploymentId参数说明**

自行设置apikey调用azure接口时需要传deploymentId，使用uni-ai计费网关访问azure服务时需要传递model而不是deploymentId。目前通过uni-ai计费网关调用azure接口仅支持`gpt-3.5-turbo`这一个模型。

**chatCompletion方法的返回值**

|参数												|类型								|必备				|默认值	|说明																											|兼容性说明						|
|---												|---								|---				|---		|---																											|---									|
|id													|string							|openai必备	| -			|本次回复的id																							|仅openai返回此项			|
|reply											|string							|是					| -			|ai对本次消息的回复																				|											|
|choices										|array&lt;object&gt;|否					|-			|所有生成结果																							|百度不返回此项				|
|&#124;--finishReason				|string							|否					|-			|截断原因，stop（正常结束）、length（超出maxTokens被截断）|											|
|&#124;--message						|object							|否					|-			|返回消息																									|											|
|&nbsp;&nbsp;&#124;--role		|string							|否					|-			|角色																											|											|
|&nbsp;&nbsp;&#124;--content|string							|否					|-			|消息内容																									|											|
|usage											|object							|是					|-			|本次对话token消耗详情																		|											|
|&#124;--promptTokens				|number							|否					|-			|输入的token数量																					|minimax返回undefined	|
|&#124;--completionTokens		|number							|否					|-			|生成的token数量																					|minimax返回undefined	|
|&#124;--totalTokens				|number							|是					|-			|总token数量																							|											|

#### 简单示例

在你的云函数中加载`uni-cloud-ai`扩展库，写下如下代码，ctrl+r运行，即可调用ai返回结果。

```js
const llmManager = uniCloud.ai.getLLMManager({
  provider: 'azure'
})
const res = await llmManager.chatCompletion({
	messages: [{
		role: 'user',
		content: 'uni-app是什么，20个字以内进行说明'
	}]
})
console.log(res);

```

如果你之前未使用过uniCloud，后续有专门的[新手指南](#first)章节。

#### 流式响应@chat-completion-stream

> 新增于HBuilderX正式版 3.7.10+， alpha版 HBuilderX 3.8.0+。

> uni-ai chatCompletion接口支持传sseChannel参数的用法云端支持新增于2023年6月15日，HBuilderX 3.8.5+支持在本地调试云函数时使用此用法。使用uni-ai计费网关流式响应时，sseChannel参数必填

访问AI聊天接口时，如生成内容过大，响应时间会很久，前端用户需要等待很长时间才会收到结果。

实际上AI是逐渐生成下一个token的，所以可使用流式响应，类似不停打字的打字机那样，让前端用户陆续看到AI生成的内容。

以往云函数只有return的时候，才能给客户端返回消息。在流式响应中，需要云函数支持sse，在return前给客户端一直发送通知。

uniCloud的云函数，基于uni-push2提供了sse通道，即[云函数请求中的中间状态通知通道](sse-channel.md)。

在调用`chatCompletion`接口时传递参数`stream: true`即可开启流式响应。使用uni-ai计费网关时还需要传递`sseChannel`才可以使用流式响应。

**关于使用uni-ai计费网关时使用流式响应的说明**

流式响应需要云端持续从服务商接收数据并发送给客户端，这需要云函数一直保持运行（云函数无法一直保持运行，详情参考：[超时时间](cf-functions.md#timeout)）。如果使用uni-ai计费网关则无需云函数保持运行，在请求发送给DCloud服务器后DCloud服务器会使用推送通道将结果通知给客户端，而云函数可以再继续处理下一个请求或者直接休眠，从而节省大量云函数资源（GBs）。

**注意：**

1. 需提前为应用开通[uni-push2](/unipush-v2.md)
2. 不同provider的流式支持度不同，有的message事件是按字输出、有的是按句输出。
3. 开启流式响应后`chatCompletion`接口将返回流对象，而不会返回具体结果。开发者需要使用流获取AI响应的内容。
4. `chatCompletion`接口传`sseChannel`参数时，`chatCompletion`接口不会返回流对象，只会返回`{errCode: 0}`。
5. 如使用nginx代理，需要将代理配置为`proxy_buffering off;`，否则可能会遇到`Unexpected end of JSON input`错误

stream对象有四个事件：

- message: 收到AI响应的事件，回调函数内可以获取AI返回的信息。需要注意的是在使用不同服务商时message事件的响应可能有些不同，有些服务商是一个字一个字的返回，有些则是一段一段的返回。
- optimizedMessage: 收到AI响应的事件，基于message事件降频得到，使用此事件可以避免非常频繁的往客户端发送请求，导致部分情况下客户端处理消息卡顿。云端新增于`2023年6月21日`，HBuilderX本地调试将于下次发版支持。
- line: AI响应一行文字时触发，回调函数内可以获取这行文字的内容。uni-ai对服务商返回内容做了处理，AI每响应一个段落会触发一次此事件
- end: AI响应完毕事件
- error: AI响应错误事件，回调函数内可以获取具体错误信息

注意，以上事件属于stream对象，不要和sseChannel的事件搞混了，云端调用sseChannel.write客户端就需要使用sseChannel.on('message')进行接受，例如sseChannel并没有optimizedMessage事件。

**云函数代码示例**

```js
// 将sseChannel传递给chatCompletion接口，由uni-ai自动往客户端发送流式响应
'use strict';
exports.main = async (event, context) => {
  const llmManager = uniCloud.ai.getLLMManager({
    provider: 'azure'
  })
  const res = await llmManager.chatCompletion({
    messages: [{
      role: 'user',
      content: '介绍一下uni-app，400字以内，分为两段'
    }],
    tokensToGenerate: 400,
    stream: true, // 开启流式返回
    sseChannel: event.channel
  })
  return {
    errCode: 0,
    errMsg: ''
  }
};
```

```js
// 自行处理流式响应，上述将sseChannel传递给chatCompletion接口的等价写法
'use strict';
exports.main = async (event, context) => {
  const sseChannel = uniCloud.deserializeSSEChannel(event.channel)
  const llmManager = uniCloud.ai.getLLMManager({
    provider: 'azure'
  })
  let streamRes
  try {
    streamRes = await llmManager.chatCompletion({
      messages: [{
        role: 'user',
        content: '介绍一下uni-app，400字以内，分为两段'
      }],
      tokensToGenerate: 400,
      stream: true // 开启流式返回
    })
  } catch (e) {
    console.error(e)
    throw e
  }
  return new Promise((resolve, reject) => { //流式给客户端返回数据
    streamRes.on('line', (line) => {
      console.log('---line----', line) // 返回一行时触发，即\n
    })
    // streamRes.on('message', async (message) => { // 部分服务商message事件频率过高可能导致客户端卡顿，建议使用optimizedMessage事件
    //   await sseChannel.write(message)
    //   console.log('---message----', message) // 实时触发
    // })
    streamRes.on('optimizedMessage', async (message) => { // optimizedMessage事件
      await sseChannel.write(message)
      console.log('---message----', message) // 实时触发
    })
    streamRes.on('end', async () => {
      console.log('---end----') // 响应结束
      await sseChannel.end({ 
        errCode: 0,
        errMsg: ''
      })
      resolve({
        errCode: 0,
        errMsg: ''
      })
    })
    streamRes.on('error', (err) => {
      await sseChannel.end({ 
        errCode: err.errCode || err.code,
        errMsg: err.errMsg || err.message,
      })
      console.log('---error----', err)
      reject(err)
    })
  })
};
```

客户端也需要接收云函数的流式响应。

DCloud提供了开源的`uni-ai-chat`，对流式响应进行了前后端一体的封装，使用更简单，参考：[uni-ai-chat](uni-ai-chat.md)

### AI多媒体能力@ai-media

> 新增于HBuilderX 3.8.2


#### 创建AI多媒体实例@get-media-manager

包含AI生成图片等多媒体处理能力

用法：`uniCloud.ai.getMediaManager(Object GetMediaManagerOptions);`

注意需在相关云函数或云对象中加载`uni-cloud-ai`[使用扩展库](cf-functions.md#extension)，否则会报找不到ai对象。


**参数说明GetMediaManagerOptions**

|参数				|类型		|必填	|默认值	|说明																																																																	|
|---				|---		|---	|---		|---																																																																	|
|provider		|string	|否		|-			|服务商，目前仅支持`baidu`。																																								|
|accessToken|string	|否		|-			|llm服务商的accessToken。目前百度是必填，如何获取请参考：[百度AI鉴权认证机制](https://ai.baidu.com/ai-doc/REFERENCE/Ck3dwjhhu)|


**示例**

在云函数或云对象中编写如下代码：

```js
const mediaManager = uniCloud.ai.getMediaManager({
  provider: 'baidu',
  accessToken:'your baidu access token'
})
```

#### 创建图片生成任务@image-generation

用法：`mediaManager.imageGeneration(Object ImageGenerationOptions)`

**参数说明ImageGenerationOptions**

|参数					|类型		|必填						|默认值			|说明																									|兼容性说明				|
|---					|---		|---						|---				|---																									|---							|
|version			|number	|否							| 1（百度）	|接口版本																							|									|
|prompt				|string	|是							| -					|图片生成所用的提示词																	|									|
|resolution		|string	|否							| 1024*1024	|图片分辨率，详见下方说明															|									|
|imageNum			|number	|否							| -					|生成图片数量																					|									|
|prompt				|string	|是							| -					|提问信息																							|									|
|style				|string	|百度v1接口必填	| -					|图片风格，详见下方说明																|仅百度v1接口支持	|
|imageBase64	|string	|否							| -					|参考图base64，仅能指定一个参考文件										|仅百度v2接口支持	|
|imageUrl			|string	|否							| -					|参考图url，仅能指定一个参考文件											|仅百度v2接口支持	|
|pdfBase64		|string	|否							| -					|参考pdf文件base64，仅能指定一个参考文件							|仅百度v2接口支持	|
|pdfPageNum		|number	|否							| 1					|参考pdf文件页码																			|仅百度v2接口支持	|
|changeDegree	|number	|否							| -					|参考图影响因子，支持 1-10 ；数值越大参考图影响越大	|仅百度v2接口支持	|


**style参数说明**

百度v1接口（AI作画-基础版）支持的风格：探索无限、古风、二次元、写实风格、浮世绘、low poly 、未来主义、像素风格、概念艺术、赛博朋克、洛丽塔风格、巴洛克风格、超现实主义、水彩画、蒸汽波艺术、油画、卡通画

百度v2接口（AI作画-高级版）不支持传风格，如需指定风格可尝试在提示词内指定

**resolution参数说明**

百度v1接口支持以下分辨率：1024*1024、1024*1536、1536*1024

百度v2接口支持以下分辨率：512*512、640*360、360*640、1024*1024、720*1280、1280*720


**返回值**

|参数		|类型		|必备	|说明																								|兼容性说明	|
|---		|---		|---	|---																								|---				|
|taskId	|number	|是		|创建的图片生成任务的id，用于查询任务状态及获取结果	|						|

**示例**

在云函数或云对象中编写如下代码：

```js
const res = await mediaManager.imageGeneration({
  version: 1,
  prompt: '睡莲',
  style: '赛博朋克'
})
const taskId = res.taskId
```

#### 获取图片生成结果@get-generated-image

用法：`mediaManager.getGeneratedImage(Object GetGeneratedImageOptions)`

**参数说明GetGeneratedImageOptions**

|参数		|类型		|必填	|默认值			|说明											|兼容性说明	|
|---		|---		|---	|---				|---											|---				|
|version|number	|否		| 1（百度）	|接口版本									|						|
|taskId	|number	|是		| -					|创建任务接口返回的taskId	|						|

**返回值**

|字段																		|类型								|必备	|说明						|兼容性说明				|
|---																		|---								|---	|---						|---							|
|status																	|string							|是		|任务状态				|见下方说明				|
|imgList																|array&lt;object&gt;|否		|生成的图片列表	|									|
|&nbsp;&nbsp;&#124;--url								|string							|否		|生成的图片url	|									|
|&nbsp;&nbsp;&#124;--securityCheckResult|array							|否		|图片审核状态		|仅百度v2接口支持	|

**参数status说明**

百度v1接口支持的状态为：'RUNNING'（任务执行中）、'SUCCESS'（任务成功）;

百度v2接口支持的状态为：'INIT'（任务创建中）、'WAIT'（任务等待中）、'RUNNING'（任务执行中）、'FAILED'（任务失败）、'SUCCESS'（任务成功）;

**参数securityCheckResult说明**

审核状态有以下几种： 'block'（违规）、'review'（需要人工核查）、'pass'（通过审核）

**示例**

在云函数或云对象中编写如下代码：

```js
const res = await mediaManager.getGeneratedImage({
  version: 1,
  taskId: 123456,
})
```

### 错误码@err-code

在调用`uni-cloud-ai`提供的api时，如果出现错误，接口会将错误对象抛出。如需处理此类错误需对错误进行捕获

**捕获错误的代码示例**

```js
try {
  await llmManager.chatCompletion({
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

|错误码	|错误描述											|
|--			|--														|
|50001	|缺少参数											|
|50002	|参数错误											|
|60000	|请求服务商接口时遇到网络错误	|
|60001	|服务商接口抛出的错误					|
|60002	|接口调用凭证、key等信息有误	|
|60003	|触发了服务商限流策略					|
|60004	|服务商检测到AI输出了敏感内容|

**常见错误信息**

- 错误码：60000，错误信息："A network error occurred while requesting xxx"

  请求服务商接口时遇到网络错误，如果是请求openai接口请注意需要使用代理，如果使用了代理仍遇到此错误，请检查代理连通性是否有问题
  
- 错误信息："certificate has expired"
  
  请参考文档：[云函数通过https访问其他服务器时出现“certificate has expired”](faq.md#lets-encrypt-cert)


## 费用

- 如果您自己去ai厂商申请和缴费，比如openai，则缴费后在uni-ai中配置相关key即可使用。
- 如果您使用uni-ai付费服务，[详见](uni-ai-buy.md)。

## 初次使用uniCloud用户指南@first

如之前未使用过uni-app，那请重头学起。[uni-app官网](https://uniapp.dcloud.net.cn)

如了解uni-app，但未使用过uniCloud。请参考本章节继续。

1. 首先注册开通uniCloud，登录[https://unicloud.dcloud.net.cn/](https://unicloud.dcloud.net.cn/)，创建一个服务空间。

2. 在uni-app项目点右键创建uniCloud环境，关联之前创建的服务空间。

3. 创建uniCloud云函数  

在项目下uniCloud目录右键，新建云函数  
<img width="300px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-ai/20230418213815.jpg"></img>

- 填写云函数名称，比如`ai-demo`。此云函数需要调用`uni-cloud-ai`扩展库，所以需点击`添加公共模块或扩展库依赖`按钮。
<img width="500px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-ai/0D7FE184-19BE-43D2-AFA9-FDC1E1CD719E.png"></img>

- 找到`uni-cloud-ai`勾选，点击确认，创建云函数

<img width="500px" src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-ai/CC9889F4-F006-449A-828A-659A31DC2CBD.png"></img>

4. 云函数中添加如下代码：
```js
	// 云函数的代码运行在uniCloud服务器上
	console.log('event',event) // event为客户端上传的参数
	const {messages} = event
	// 校验客户端提交的参数
	try{
		if(messages === undefined){
			throw "messages为必传参数"
		}else if(!Array.isArray(messages)){
			throw "参数messages的值类型必须是[object,object...]"
		}else{
			messages.forEach(item=>{
				if(typeof item != 'object'){
					throw "参数messages的值类型必须是[object,object...]"
				}
				let itemRoleArr = ["assistant","user","system"]
				if(!itemRoleArr.includes(item.role)){
					throw "参数messages[{role}]的值只能是："+itemRoleArr.join('或')
				}
				if(typeof item.content != 'string'){
					throw "参数messages[{content}]的值类型必须是字符串"
				}
			})
		}
	}catch(errMsg){
		return {
			errSubject: 'ai-demo',
			errCode: 'param-error',
			errMsg
		}
	}

	const llmManager = uniCloud.ai.getLLMManager({
    provider: 'openai',
    apiKey:'your key',
    proxy:'www.yourdomain.com' //也可以是ip
  }) //创建llm对象
	return await llmManager.chatCompletion({
		messages // 初次调试时，可注掉本行代码，不从客户端获取数据，直接使用下面写死在云函数里的数据
		// messages: [{
		// 	role: 'user',
		// 	content: 'uni-app是什么，20个字以内进行说明'
		// }]
	})
```

如果不从客户端获取参数，直接在云函数里写messages，可以在云函数中直接按Ctrl+R（或工具栏的运行按钮），在本地运行云函数。

还可以断点调试云函数，详见[uniCloud运行调试教程](rundebug.md)

5. 在客户端通过callFunction调用`ai-demo`云函数

注意uni-app客户端连接uniCloud不是通过`uni.request`。如果调用云函数是`uniCloud.callFunction`。（如调用云对象是`uniCloud.importObject`）

```js
	const content = "你能给我提供什么服务"
	uni.showLoading();
	uniCloud.callFunction({
		name: "ai-demo", // 这里是你的云函数的名称。如果你的云函数不叫ai-demo请自行更换
		data: {
			messages: [{
				role: 'user',
				content
			}]
		}
	})
	.then(res=>{
		console.log(res);
		uni.showModal({
			content: JSON.stringify(res),
			showCancel: false
		});
	})
	.catch(e=> {
		uni.showModal({
			content: JSON.stringify(e),
			showCancel: false
		});
	})
	.finally(()=>{
		uni.hideLoading()
	})
```

运行客户端项目，比如运行到web浏览器，即可联调客户端和云端。

上述代码只是最简示例，真正的多轮聊天需要的代码较多较复杂，推荐使用现成的[uni-ai-chat](uni-ai-chat.md)或[uni-cms](uni-cms.md)。

官方的`uni-ai-chat`、`uni-cms`等项目一般不使用云函数，而是使用云对象。想看懂这些项目源码，需要了解[云对象](cloud-obj.md)

## 非uniCloud服务器调用

如需在非uniCloud的传统服务器调用`uni-ai`，需要先在uniCloud上创建一个云函数或云对象，加载uni-cloud-ai扩展库，编写上述uni-ai的调用代码。

然后将云函数或云对象进行URL化，转成http接口，[详见](http.md)

注意如果使用URL化后，将无法使用stream流式输出。

如果在您的传统服务器和uniCloud云函数之间需要建立安全通信机制，可使用s2s公共模块，[详见](uni-cloud-s2s.md)

## 从免费版升级到uni-ai计费网关@migrate-to-uni-ai-gateway

大语言模型的推理需要消耗很高的GPU算力，调用大模型需要在模型厂商处注册账户和付费。

您可以自行去大模型厂商处注册并填写相应的apiKey的参数。也可以通过DCloud来购买，即使用`uni-ai计费网关`。

在2023-06-15前，您不填写相关apiKey时可以免费使用uni-ai的LLM能力。但6月15日起需配置自己的apiKey或使用`uni-ai计费网关`，否则无法使用。

`uni-ai计费网关`使用门槛低，并且可以一处充值，多模型体验。您无需在多个大模型厂商处申请，只需向DCloud购买token套餐，即可体验各种大模型的效果。

`uni-ai计费网关`的token计费单价与大模型厂商的定价相同，支持开具发票。

uni-ai计费网关支持调用minimax、微软azure openai ChatGPT3.5的对话接口，调用getLLMManager时如果不传provider会默认使用minimax作为服务商。

1. 购买uni-ai付费服务，购买流程参考：[uni-ai开通流程](uni-ai-buy.md#enable-uni-ai-service)。

2. 更新云函数
	- 如果使用uni-ai-chat，更新uni-ai-chat到1.2.0版本，然后上传云对象。如需自定义provider，参考：[uni-ai-chat配置](uni-ai-chat.md#config)。
	- 如果未使用uni-ai-chat，直接上传云函数/云对象。如需自定义provider。[见上](#get-llm-manager)
	- 如果客户端通过云函数url化调用云函数/云对象，或开启了uniCloud阿里云的单实例多并发，需要在`getLLMManager`方法内传appId参数。[见上](#get-llm-manager)
	- 在使用非流式响应时，`chatCompletion`方法无需调整，和免费版用法一致。
	- 在使用流式响应时，需要将sseChannel对象传给`chatCompletion`方法。详情参考：[使用流式响应](#chat-completion-stream)

调整完毕后上传依赖uni-ai的云函数/云对象即可，**注意即使没有修改也需要重新上传**。

**免费版取消后使用免费版可能遇到的错误**

在免费版停用后，如果连接云端云函数时未使用uni-ai计费网关且未自行传递key信息，且未在2023年6月15日0点后更新云函数，则会遇到`token is unusable`错误。如果使用在2023年6月15日0点后更新了云函数，则会提示`尚未购买uni-ai套餐`。

此外使用HBuilderX 3.8.4及之前的版本本地运行时无法使用uni-ai计费网关，因此也会遇到`token is unusable`错误。请使用云端云函数进行调试。

**如何测试是否配置成功**

在您使用uni-ai计费网关后，且在云函数代码中做好配置后。您可以：
1. 运行应用，调用LLM的chatCompletion接口，看看是否返回内容
2. 在uniCloud web控制台的uni-ai管理界面，查看计费报表，是否产生了对应的计费条目

使用uni-ai计费网关时，如需本地运行需要使用HBuilderX 3.8.5及以上版本。


## 交流群

更多问题欢迎加入uni-ai官方交流群 qq群号:[699680439](https://qm.qq.com/cgi-bin/qm/qr?k=P_JoYXY56vNfb78uNHwwzqpODwl9e89B&jump_from=webapi&authKey=GDp321q9ZYW4V0ZQcejXikwMnNRs4KVBcQXMADs8lvC0hifSH9ORHsyERy6vO4bA)
