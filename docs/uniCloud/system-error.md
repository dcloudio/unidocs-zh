## 阿里云系统错误@aliyun

|错误码													|含义																	|状态码	|错误示例																											|可能异常原因																																									|
|:-:														|:-:																	|:-:		|:-:																													|:-:																																													|
|RequestTimeout									|服务器响应超时												|400		|The request has timed out.																		|服务空间长时间无访问，数据库对应的索引被数据库存储引擎淘汰																		|
|InternalError									|服务器发生未知错误										|500		|The request processing has failed due to some unknown error.	|																																															|
|InvalidBody.Format							|body格式不正确												|400		|The request Body is not valid.																|云函数url化body无法解析																																			|
|SignatureNotMatch							|客户端参数签名不正确									|403		|The signature we calculated is: %s														|客户端spaceId或clientSecret错误，请排查客户端uniCloud.init方法或uniCloud.database内传入的参数|
|InvalidParams.Format						|body中params参数格式不正确						|400		|The Params is not valid.																			|																																															|
|MissingParams									|body中缺少参数params									|400		|Params is mandatory for this request.												|																																															|
|MissingMethod									|body中缺少参数method									|400		|Method is mandatory for this request.												|																																															|
|InvalidMethod.Format						|参数method格式不正确									|400		|The specified Method is not valid.														|																																															|
|InvalidSpaceId.NotFound				|服务空间不存在												|404		|The specified SpaceId does not exist.												|																																															|
|InvalidSpace.Deleted						|服务空间已销毁												|404		|The space is already deleted.																|																																															|
|InvalidSpace.NotInService			|服务空间不在服务中										|404		|The space is not in service.																	|																																															|
|Throttling.Api									|QPS流控															|400		|Request was denied due to api flow control.									|云函数、固定ip代理等由QPS系统限制的服务超出了限制																						|
|Throttling.Api.Concurrency			|并发流控															|400		|Request was denied due to api concurrency control.						|																																															|
|InvalidCustomDomain.NotFound		|云函数url化自定义域名不存在					|400		|The specified CustomDomain does not exist.										|																																															|
|HttpCustomDomainCnameNotAllowed|云函数url化不允许直接使用cname访问		|400		|Http custom domain cname can not be used for http trigger.		|																																															|
|ClientIpNotAllowed							|前端网页托管默认域名clientIP禁止访问	|403		|Your clientIp %s does not in the whitelist.									|前端网页托管默认域名白名单未配置，或当天访问默认域名的ip过多																	|
|InvalidComposedResponseBody		|云函数url化响应body格式出错					|400		|The Body of ComposedResponse is not valid.										|																																															|
|InvalidRequestContentType			|云函数url化不支持的body类型					|400		|The request ContentType is not supported.										|																																															|
|RequestContentLength.Exceeded	|云函数url化请求内容长度超限					|400		|The request ContentLength exceeds the limit.									|																																															|
|ResponseContentLength.Exceeded	|云函数url化响应内容长度超限					|400		|The response ContentLength exceeds the limit.								|																																															|
|InternalServerError						|服务器发生未知错误										|200		|%s																														|																																															|
|InternalBizError								|服务器发生业务错误										|200		|																															|																																															|
|ParamInvalid										|上传文件格式不支持										|200		|Unsupported file type.																				|																																															|
|																|上报文件Id不存在											|200		|The specified Id does not exist or has expired.							|																																															|
|																|批量删除或查询文件信息数量超限				|200		|No more than 50 files at a time.															|																																															|
|																|删除或查询的文件不存在								|200		|The specified file does not exist.														|																																															|
|FunctionResourceExhausted			|函数实例资源不足											|200		|																															|																																															|
|FunctionServerError						|函数内部错误													|200		|																															|																																															|
|PrePayResourceExhausted				|套餐资源不足，请升配									|200		|																															|																																															|
|FunctionBizError								|用户的函数业务错误，请检查代码逻辑		|200		|																															|																																															|