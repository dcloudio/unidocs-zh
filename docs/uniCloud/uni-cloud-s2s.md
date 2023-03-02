## 外部服务器如何与uniCloud安全通讯

开发业务时时常遇到外部服务器需要和uniCloud云函数通讯的场景，无论是服务器请求云函数还是云函数请求服务器，接口暴露在外网就可能被非法的调用，因此请求接收方需要一个验证请求来源是否合法。

常见的验证请求来源是否合法的方式有以下两种：

1. connectCode验证（简单）：请求发起方仅在请求头内携带一个字符串标记（connectCode），请求接收方仅需要验证此字符串和预留的字符串是否一致即可
2. 签名验证（安全性高）：请求发起方使用指定的key对时间戳+数据进行签名，签名及时间戳放在请求头内，请求接收方需要使用指定的key对时间戳+数据再进行一次签名判断是否和发起方携带的签名一致。接收方还可以根据时间戳判断此签名是不是最近一小段时间生成的，如果不是直接拒绝请求。

uni-cloud-s2s模块就是为了统一校验、生成验证信息方法，减少重复逻辑，后续官方提供的需要服务器和云函数通讯的云函数及模块均会依赖此模块进行安全通讯。s2s同时有server-to-space和space-to-server的意思。uni-cloud-s2s插件地址：[uni-cloud-s2s](https://ext.dcloud.net.cn/plugin?id=11091)

上述两种安全通讯方式在uni-cloud-s2s内均有实现：

- Code验证请参考：[使用connnectCode进行安全通讯](#code)
- 签名验证请参考：[使用签名进行安全通讯](#sign)

::: warning 注意
uni-cloud-s2s仅能在云函数内使用，开发者需要按照uni-cloud-s2s的规范在服务器上进行生成安全请求头、验证请求方法

请求头的key应忽略大小写进行校验
:::

## 使用connnectCode进行安全通讯@code

### 配置@code-config

本模块相关配置需在[uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425)内进行配置，配置文件位于`uniCloud/cloudfunction/common/uni-cloud-s2s/config.json`。

以下配置示例为标准的json，注释仅为进行说明，如果拷贝示例内容到项目内务必移除注释。

如需携带code进行认证需要配置如下：

```js
{
  "type": "connectCode",
  "connectCode": "" // 一个较长的字符串即可，不可包含中文，请求方将请求头Unicloud-S2s-Authorization设为`CONNECTCODE + ' ' + 此值`即可通过接收方方校验
}
```

### 安全策略@code-policy

接收方仅要求请求方在请求头的`Unicloud-S2s-Authorization`内携带`CONNECTCODE ${connectCode}`，其中connectCode为配置文件内的connectCode值。

如果请求发起方是uniCloud云函数，可以调用uni-cloud-s2s提供的[getSecureHeaders](#get-secure-headers)方法传入数据直接获取安全请求头信息。如果请求接收方是uniCloud云函数，可以调用uni-cloud-s2s提供的[verifyHttpInfo](#verify-http-info)方法传入云函数收到的httpInfo信息直接获取验证结果。

**示例**

发送方request headers如下

```js
{
  "Unicloud-S2s-Authorization": "CONNECTCODE s2uqpb0h958vhhom0hi1ug5bt88r29bcg"
}
```

## 使用数据签名进行安全通讯@sign

### 配置@sign-config

本模块相关配置需在[uni-config-center](https://ext.dcloud.net.cn/plugin?id=4425)内进行配置，配置文件位于`uniCloud/cloudfunction/common/uni-cloud-s2s/config.json`。

以下配置示例为标准的json，注释仅为进行说明，如果拷贝示例内容到项目内务必移除注释。

如需使用签名需要配置如下：

```js
{
  "type": "sign",
  "signKey": "", // 配置一个较长的字符串，建议32位
  "hashMethod": "hmac-sha256", // 计算签名的方法，支持md5、sha1、sha256、hmac-sha256。此项非必填，默认值为hmac-sha256
  "timeDiffTolerance": 60 // 校验签名时的时间减去签名生成时间的差值如果大于此值将会拒绝访问，单位秒。此项非必填，默认值为60秒
}
```

### 安全策略@sign-policy

请求发起方需要在请求头内生成合法的`Unicloud-S2s-Timestamp`（生成签名的时间戳）和`Unicloud-S2s-Signature`（签名），以通过请求接收方校验

仅支持对以下请求方式进行验证：

- 使用GET方法，content-type为`application/x-www-form-urlencoded`，取url参数作为签名数据进行校验
- 使用POST方法，content-type为`application/x-www-form-urlencoded`，body内的参数解析后的对象作为签名数据进行校验
- 使用POST方法，content-type为`application/json`，取body内的json转化后的对象内的基础类型值（字符串、数字、布尔值）进行校验


如果请求发起方是uniCloud云函数，可以调用uni-cloud-s2s提供的[getSecureHeaders](#get-secure-headers)方法传入数据直接获取签名后的请求头信息。如果请求接收方是uniCloud云函数，可以调用uni-cloud-s2s提供的[verifyHttpInfo](#verify-http-info)方法传入云函数收到的httpInfo信息直接获取验证结果。

对于非云函数场景，请求发起方需要按如下规则进行签名，接收方也需要按照如下规则重新生成签名以验证签名真伪。

GET方法url为`a=1&b=2`对应的签名数据为

```js
{
  "a": "1",
  "b": "2"
}
```

POST方法body内url串为`a=1&b=2`对应的签名数据为

```js
{
  "a": "1",
  "b": "2"
}
```

POST方法body内的json串为`{"num": 1, "str": "abc", "bool": true, "arr": [1,2,3]}`对应的签名数据为

```js
{
  "num": 1, 
  "str": "abc", 
  "bool": true
}
```

将签名数据的key按照升序排序拼接为`key1=value1&key2=value2`的字符串暂记为`payloadStr`

毫秒级时间戳暂记为`timestamp`

配置文件内配置的signKey暂记为`signKey`

如果配置的hashMethod为`md5`、`sha1`或`sha256`，直接使用上述哈希方法对字符串`timestamp+'\n'+payloadStr+'\n'+signKey`生成hex格式摘要即可。各语言生成hash摘要方法请参考：[createHash](#create-hash)

如果配置的hashMethod为`hmac-sha256`，需要以`signKey`为key对字符串`timestamp+'\n'+payloadStr`生成hex格式摘要即可。各语言生成hmac摘要方法请参考：[createHmac](#create-hmac)

至此签名生成完成，发起方将时间戳及签名分别放在请求头的`Unicloud-S2s-Timestamp`和`Unicloud-S2s-Signature`内即可发送请求。接收方直接判断生成的签名是否和请求头内一致即可，如果有需求也可以额外判断一下请求头内的时间戳是否是近期时间。

**示例**

发送方请求头如下

```js
{
  "Unicloud-S2s-Timestamp": "1677090154735"
  "Unicloud-S2s-Signature": "hmac-sha256 74416c6ffaa74bc3b70a1dca7c66406dd113e2f0aaf9713d7c3bd19a21d77b47" // 注意签名字符串前需加上签名方法
}
```

## 云函数API@api

### 获取安全请求头@get-secure-headers

传入要签名的数据，获取请求头信息。请求发送方进行请求签名时需使用此方法。

**用法**

```js
const {
  getSecureHeaders
} = require('uni-cloud-s2s')
const headers = getSecureHeaders({
  a: 1,
  b: 2
})
```

getSecureHeaders根据配置的安全策略不同返回不同的安全请求头信息。实际使用时仅需将此方法返回的值放到请求头内即可

**配置为携带code进行验证时返回值如下**

```js
{
  "Unicloud-S2s-Authorization": "" // 值为配置文件内的code值
}
```

**配置为使用签名进行验证时返回值如下**

```js
{
  "Unicloud-S2s-Timestamp": "1677090154735",
  "Unicloud-S2s-Signature": "hmac-sha256 xxxx" // 插件计算出来的签名信息
}
```

### 校验http请求是否有效@verify

传入http请求数据，校验本次请求是否合法。请求接收方调用此方法进行验证。校验未通过时，verify方法会抛出错误。详细错误列表见：[错误码](#err-code)

**用法**

```js
const {
  verifyHttpInfo
} = require('uni-cloud-s2s')
verifyHttpInfo({
  httpMethod: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Unicloud-S2s-Timestamp': '1677090154735',
    'Unicloud-S2s-Signature': 'ea416ed0759d46a8de58f63a59077499'
  },
  body: 'a=1&b=2&c=3'
})
```

如需捕获此方法验证失败/未通过的错误需要使用try-catch

```js
const {
  verifyHttpInfo
} = require('uni-cloud-s2s')
try {
  verifyHttpInfo({
    httpMethod: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Unicloud-S2s-Timestamp': '1677090154735',
      'Unicloud-S2s-Signature': 'ea416ed0759d46a8de58f63a59077499'
    },
    body: 'a=1&b=2&c=3'
  })
} catch (e) {
  if(e.subject === 'uni-cloud-s2s' && e.errCode === 51000) {
    throw new Error('非法请求') // 判断为验证未通过，返回自定义的错误
  }
  throw e
}
```

**云函数示例**

```js
const {
  verifyHttpInfo
} = require('uni-cloud-s2s')
exports.main = async function(event, context) {
  if(context.source === 'http') { // 使用url请求当前云函数时进行验证
    verifyHttpInfo(event)
  } else {
    // 非url访问逻辑
  }
}
```

**云对象示例**

```js
const {
  verify
} = require('uni-cloud-s2s')
module.exports = {
  _before: async function () {
    const source = this.getClientInfo().source
    if(source === 'http'){ // 使用url请求当前云对象时进行验证
      verify(this.getHttpInfo())
    } else {
      // 非url访问逻辑
    }
  }
}
```

## 错误码@err-code

|错误码|说明|
|---|---|
|50000|配置文件错误，包含多种可能的错误，错误信息内有详细说明|
|51000|校验未通过，包含多种可能的错误，错误信息内有详细说明|

## 非云函数场景签名方法@sign-method-of-server

以下示例及执行结果均以如下参数进行演示

```js
const timestamp = 1677743381925
const payload = {
  b: 2,
  a: 1,
  arr: [1,2,3]
}
const signKey = 'q0etb3cl0s8mrlfdqp33ist1ou0r97pg'
```

1. 过滤payload内非简单类型数据，以key升序，生成payloadStr。`payloadStr = 'a=1&b=2'`
2. 拼接签名串，hmac方法对应的签名串为`timestamp+'\n'+payloadStr`，hash方法对应的签名串为`timestamp+'\n'+payloadStr+'\n'+signKey`
3. 分表调用hmac方法、hash方法获取签名结果

上述数据使用不同签名方法获取的签名串分别如下

```text
md5: 47935a0283e141644aa5045cdfa51d83
sha1: aff9b936fd7c478e2c35d7b529d961152b6ffee5
sha256: af0ab0ba174b67219ebd946a5a7e0f5892a6e820fcee64cc4672089582fc0fc2
hmac-sha256: 5c02499d2c45876ceb60635311f2368f672964f0555c08d05d76cb6361d92dd4
```

### createHash@create-hash

#### nodejs

```js
// md5，sha1，sha256均为同样的调用方式
const crypto = require('crypto')
const sign = crypto.createHash('md5').update(timestamp+'\n'+payloadStr+'\n'+signKey).digest('hex')
```

#### php

```php
$sign = hash('sha256', ((string)$timestamp ."\n". $payloadStr . "\n". $signKey));
```

#### java

```java
// Main.java
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
public class Main {
  public static void main(String[] args) {
    try {
      Long timestamp = 1677743381925L;
      String payloadStr = "a=1&b=2";
      String signKey = "q0etb3cl0s8mrlfdqp33ist1ou0r97pg";
      MessageDigest md = MessageDigest.getInstance("MD5");
      String input = Long.toString(timestamp) + "\n" + payloadStr + "\n" + signKey;
      byte[] result = md.digest(input.getBytes("utf-8"));
      StringBuilder sb = new StringBuilder();
      for (byte b : result) {
        sb.append(String.format("%02x", b));
      }
      System.out.println(sb.toString());
    } catch (Exception e) {
      
    }
  }
}
```

### createHmac@create-hmac

#### nodejs

```js
// hmac-sha256
const crypto = require('crypto')
const sign = crypto.createHmac('sha256', signKey).update(timestamp+'\n'+payloadStr).digest('hex')
```

#### php

```php
$sign = hash_hmac('sha256', ((string)$timestamp . $payloadStr), $signKey);
```

#### java

```java
// Main.java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
public class Main {
  public static void main(String[] args) {
    try {
      Long timestamp = 1677743381925L;
      String payloadStr = "a=1&b=2";
      String signKey = "q0etb3cl0s8mrlfdqp33ist1ou0r97pg";
      String algorithm = "HmacSHA256";
      Mac hmac = Mac.getInstance(algorithm);
      String input = Long.toString(timestamp) + "\n" + payloadStr;
      byte[] keyBytes = signKey.getBytes("utf-8");
      hmac.init(new SecretKeySpec(keyBytes, 0, keyBytes.length, algorithm));
      byte[] digestBytes = hmac.doFinal(input.getBytes("utf-8"));
      StringBuilder sb = new StringBuilder();
      for (byte b : digestBytes) {
        sb.append(String.format("%02x", b));
      }
      System.out.println(sb.toString());
    } catch (Exception e) {
          
    }
  }
}
```

## 常见场景示例@scene

**自有服务器调用云函数发送短信**

云函数校验安全请求头，需要在自有服务器完成获取安全请求头逻辑

```js
const {
  verifyHttpInfo
} = require('uni-cloud-s2s')
exports.main = async function(event, context) {
  if(context.source !== 'http') { // 使用url请求当前云函数时进行验证
    // 非url化请求逻辑
    return 
  }
  
  verifyHttpInfo(event) // 未校验通过时会直接抛出错误，后续逻辑不会执行
  // 以application/json格式发送请求到云函数为例
  const {
    phone,
    templateId,
    data 
  } = JSON.parse(event.body)
  const res = await uniCloud.sendSms({
    appid: '__UNI__xxxxxxx', // DCloud AppId
    smsKey: '****************', // 短信服务smsKey
    smsSecret: '****************', // 短信服务smsSecret
    phone: phone,
    templateId: templateId, // 请替换为自己申请的模板id
    data: data // 短信模板字段
  })
  return res
}
```

**云函数调用自有服务器传输数据**

云函数内获取安全请求头，需要在自有服务器完成校验逻辑。

```js
const {
  getSecureHeaders
} = require('uni-cloud-s2s')
exports.main = async function(event, context) {
  const data = {
    a: 1,
    b: 2
  }
  const headers = getSecureHeaders(data)
  const res = await uniCloud.httpclient.request('服务器地址', {
    method: 'POST',
    headers,
    contentType: 'json',
    data
  })
  return res
}
```
