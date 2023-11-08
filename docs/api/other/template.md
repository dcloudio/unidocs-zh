### addTemplate

组合模板并添加至帐号下的个人模板库。
Combine templates and add to your personal template gallery under your account.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|x|x|x|

**请求地址**
**Request address**

```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/wxopen/template/add?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templateadd?access_token=ACCESS_TOKEN
```

**请求参数**
**Request Parameters**

| 属性 | 类型  | 必填 | 说明 |
| Attribute | Type | Required | Description |
| --- | ----- | --- | --- |
| access_token | string | 是 | 接口调用凭证，微信小程序参考 [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html)，百度小程序参考[verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)|
| access_token | string | Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html), Baidu applet reference [verify]( https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)|
| id | string | 是 | 模板标题id |
| id | string | yes | template title id |
| keyword_id_list | Array.&lt;number&gt; | 是 | 开发者自行组合好的模板关键词列表，关键词顺序可以自由搭配（例如[3,5,4]或[4,5,3]），最多支持10个关键词组合 |
| keyword_id_list | Array.&lt;number&gt; | Yes | A template keyword list composed by the developer, the keyword order can be freely matched (for example [3,5,4] or [4,5,3]), up to 10 Keyword Combinations |

**返回值(Object)**
**Return value(Object)**

| 属性 | 类型 | 说明 |平台|
| Properties | Type | Description | Platform |
| --- | --- | --- |--|
| errcode | number | 错误码 ||
| errcode | number | Error code ||
| errmsg | string | 错误信息 ||
| errmsg | string | error message ||
| template_id | string | 添加至帐号下的模板id，发送APP模板消息时所需 |微信小程序|
| template_id | string | Template id added to the account, required when sending APP template messages |WeChat applet|
| data | Object | {template_id} |百度小程序|
| data | Object | {template_id} |Baidu Mini Program|

**Tips**

* POST 数据格式：JSON。
* POST data format: JSON.
* access_token 应写在 url 上。
* access_token should be written on the url.
* 本接口应在后端服务器调用。
* This interface should be called on the backend server.

**请求数据示例**
**Request data example**
```
{
  "id": "xxx",
  "keyword_id_list": [3, 4, 5]
}
```
**返回数据示例**
**Return data example**
```
{
    "errcode": 0,
    "errmsg": "ok",
    /* "template_id": "wDYzYZVxobJivW9oMpSCpuvACOfJXQIoKUm0PY397Tc" //微信小程序 */
    "data": { // 百度小程序
        "template_id": "f34178cd598201d9dc8d5c88cd87b44cf7cd0e62NwmP" 
    }
}
```

### deleteTemplate

删除帐号下的某个模板。
Delete a template under the account.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|x|x|x|

**请求地址**
**Request address**
```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/wxopen/template/del?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templatedel?access_token=ACCESS_TOKEN
```

**请求参数**
**Request Parameters**

| 属性 | 类型 |必填 | 说明 |
| Attribute | Type | Required | Description |
| --- | --- | --- | --- | 
| access_token | string| 是 |接口调用凭证，微信小程序参考 [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html)，百度小程序参考[verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)|
| access_token | string| Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html), Baidu applet reference [verify]( https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)|
| template_id | string | 是 | 要删除的模板id |
| template_id | string | yes | template id to delete |

**返回值（Object）**
**Return value(Object)**

| 属性 | 类型 | 说明 |
| property | type | description |
| --- | --- | --- |
| errcode | number | 错误码 |
| errcode | number | error code |
| errmsg | string | 错误信息 |
| errmsg | string | error message |

**Tips**

* POST 数据格式：JSON。
* POST data format: JSON.
* access_token 应写在 url 上。
* access_token should be written on the url.
* 本接口应在后端服务器调用。
* This interface should be called on the backend server.

**请求数据示例**
**Request data example**
```
{
  "template_id": "wDYzYZVxobJivW9oMpSCpuvACOfJXQIoKUm0PY397Tc"
}
```
**返回数据示例**
**Return data example**
```
{
  "errcode": 0,
  "errmsg": "ok"
}
```


### getTemplateLibraryById

获取模板库某个模板标题下关键词库。
Get the keyword library under a template title of the template library.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|x|x|x|

**请求地址**
**Request address**

```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/wxopen/template/library/get?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/libraryget?access_token=ACCESS_TOKEN
```

**请求参数**
**Request Parameters**

| 属性 | 类型  | 必填 | 说明 |
| Attribute | Type | Required | Description |
| --- | ----- | --- | --- |
| access_token | string | 是 | 接口调用凭证，微信小程序参考 [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html)，百度小程序参考[verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)|
| access_token | string | Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html), Baidu applet reference [verify]( https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)|
| id | string | 是 | 模板标题id |
| id | string | yes | template title id |

**返回值(Object)**
**Return value(Object)**

| 属性 | 类型 | 说明 |平台|
| Properties | Type | Description | Platform |
| --- | --- | --- |---|
| errcode | number | 错误码 |微信小程序|
| errcode | number | Error code | WeChat applet |
| errmsg | string | 错误信息 |微信小程序|
| errmsg | string | Error message | WeChat applet |
| id | string | 模板标题 id |微信小程序|
| id | string | Template title id | WeChat Mini Program |
| title | string | 模板标题 |微信小程序|
| title | string | Template title | WeChat applet |
| keyword_list | Array.&lt;Object&gt; | 关键词列表 |微信小程序|
| keyword_list | Array.&lt;Object&gt; | keyword list |WeChat applet|
| errno | number | 错误码 |百度小程序|
| errno | number | Error code | Baidu Mini Program |
| msg | string | 错误信息 |百度小程序|
| msg | string | Error message | Baidu Mini Program |
| data | Object| {id,title,keyword_count,keyword_list} |百度小程序|
| data | Object| {id,title,keyword_count,keyword_list} |Baidu Mini Program|

**keyword_list 的结构**
**The structure of the keyword_list**

| 属性 | 类型 | 说明 |
| property | type | description |
| --- | --- | --- |
| keyword_id | string | 关键词 id，添加模板时需要 |
| keyword_id | string | keyword id, required when adding templates |
| name | string | 关键词内容 |
| name | string | Keyword content |
| example | string | 关键词内容对应的示例 |
| example | string | The example corresponding to the keyword content |


**Tips**

* POST 数据格式：JSON。
* POST data format: JSON.
* access_token 应写在 url 上。
* access_token should be written on the url.
* 本接口应在后端服务器调用。
* This interface should be called on the backend server.

**请求数据示例**
**Request data example**
```
{
  "id": "xxx"
}
```
**微信小程序返回数据示例**
**WeChat applet return data example**
```
{
    "errcode": 0,
    "errmsg": "ok",
    "id": "AT0002",
    "title": "购买成功通知",
    "keyword_list": [
        {
            "keyword_id": 3,
            "name": "购买地点",
            "example": "TIT造舰厂"
        },
        {
            "keyword_id": 4,
            "name": "购买时间",
            "example": "2016年6月6日"
        }
    ]
}
```

**百度小程序返回数据示例**
**Baidu applet return data example**

```js
{
    "errno": 0,
    "msg": "success",
    "data": {
        "id": "BD0016",
        "title": "取票成功通知",
        "keyword_count": 13,
        "keyword_list": [
            {
                "keyword_id": 1,
                "name": "金额",
                "example": "300元"
            },
            {
                "keyword_id": 2,
                "name": "订单号",
                "example": "321254555"
            }
        ]
    }
}
```

### getTemplateLibraryList

获取APP模板库标题列表
Get the list of APP template library titles

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|x|x|x|

**请求地址**
**Request address**

```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/wxopen/template/library/list?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/librarylist?access_token=ACCESS_TOKEN
```

**请求参数**
**Request Parameters**

| 属性 | 类型  | 必填 | 说明 |
| Attribute | Type | Required | Description |
| --- | ----- | --- | --- |
| access_token | string | 是 | 接口调用凭证，微信小程序参考 [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html)，百度小程序参考[verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)|
| access_token | string | Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html), Baidu applet reference [verify]( https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)|
| offset | number | 是 | 用于分页，表示从offset开始。从 0 开始计数。 |
|offset|number|Yes | is used for pagination, it means start from offset. Counting from 0. |
| count | number | 是 | 用于分页，表示拉取count条记录。最大为 20。 |
| count | number | Yes | is used for pagination, which means to pull count records. The maximum is 20. |

**返回值(Object)**
**Return value(Object)**

| 属性 | 类型 | 说明 |平台|
| Properties | Type | Description | Platform |
| --- | --- | --- |---|
| errcode | number | 错误码 |微信小程序|
| errcode | number | Error code | WeChat applet |
| errmsg | string | 错误信息 |微信小程序|
| errmsg | string | Error message | WeChat applet |
| list | Array.&lt;Object&gt;  | 返回模板库标题列表 |微信小程序|
| list | Array.&lt;Object&gt; | Returns the list of template library titles |WeChat applet|
| total_count | number | 模板库标题总数 |微信小程序|
| total_count | number | The total number of template library titles | WeChat Mini Program |
| errno | number | 错误码 |百度小程序|
| errno | number | Error code | Baidu Mini Program |
| msg | string | 错误信息 |百度小程序|
| msg | string | Error message | Baidu Mini Program |
| data | Object | {total_count,list} |百度小程序|
| data | Object | {total_count,list} |Baidu Mini Program|

**list结构说明**
**list structure description**

|属性|类型|说明|
|property|type|description|
|---|---|---|
| id | string | 模板标题id（获取模板标题下的关键词库时需要） |
| id | string | Template title id (required to get the keyword library under the template title) |
| title | string | 模板标题内容 |
| title | string | Template title content |


**Tips**

* POST 数据格式：JSON。
* POST data format: JSON.
* access_token 应写在 url 上。
* access_token should be written on the url.
* 本接口应在后端服务器调用。
* This interface should be called on the backend server.

**请求数据示例**
**Request data example**

```
{
  "offset": 0,
  "count": 5
}
```
**微信小程序返回数据示例**
**WeChat applet return data example**
```
{
    "errcode": 0,
    "errmsg": "ok",
    "list": [
        {"id": "AT0002", "title": "购买成功通知"},
        {"id": "AT0003", "title": "交易提醒"}
    ],
    "total_count": 100
}
```
**百度小程序返回数据示例**
**Baidu applet return data example**
```
{
    "errno": 0,
    "msg": "success",
    "data": {
        "total_count": 100,
        "list": [
            {"id": "AT0002", "title": "购买成功通知"},
            {"id": "AT0003", "title": "交易提醒"}
        ]
    }
}
```

### getTemplateList

获取帐号下已存在的模板列表。
Get a list of templates that already exist under the account.

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|x|x|x|

**请求地址**
**Request address**

```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/wxopen/template/list?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templatelist?access_token=ACCESS_TOKEN
```

**请求参数**
**Request Parameters**

| 属性 | 类型  | 必填 | 说明 |
| Attribute | Type | Required | Description |
| --- | ----- | --- | --- |
| access_token | string | 是 | 接口调用凭证，微信小程序参考 [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html)，百度小程序参考[verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)|
| access_token | string | Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html), Baidu applet reference [verify]( https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)|
| offset | number | 是 | 用于分页，表示从offset开始。从 0 开始计数。 |
|offset|number|Yes | is used for pagination, it means start from offset. Counting from 0. |
| count | number | 是 | 用于分页，表示拉取count条记录。最大为 20。 |
| count | number | Yes | is used for pagination, which means to pull count records. The maximum is 20. |

**返回值(Object)**
**Return value(Object)**

| 属性 | 类型 | 说明 |平台|
| Properties | Type | Description | Platform |
| --- | --- | --- |---|
| errcode | number | 错误码 |微信小程序|
| errcode | number | Error code | WeChat applet |
| errmsg | string | 错误信息 |微信小程序|
| errmsg | string | Error message | WeChat applet |
| list | Array.&lt;Object&gt;  | 返回模板列表 |微信小程序|
| list | Array.&lt;Object&gt; | Return to template list |WeChat applet|
| errno | number | 错误码 |百度小程序|
| errno | number | Error code | Baidu Mini Program |
| msg | string | 错误信息 |百度小程序|
| msg | string | Error message | Baidu Mini Program |
| data | Object | {total_count, list} |百度小程序|
| data | Object | {total_count, list} |Baidu Mini Program|

**list结构说明**
**list structure description**

|属性|类型|说明|
|property|type|description|
|---|---|---|
| template_id | string | 添加至帐号下的模板id，发送APP模板消息时所需 |
| template_id | string | Template id added to the account, required when sending APP template messages |
| title | string | 模板标题 |
| title | string | Template title |
| content | string | 模板内容 |
| content | string | Template content |
| example | string | 模板内容示例 |
| example | string | Template content example |


**Tips**

* POST 数据格式：JSON。
* POST data format: JSON.
* access_token 应写在 url 上。
* access_token should be written on the url.
* 本接口应在后端服务器调用。
* This interface should be called on the backend server.

**请求数据示例**
**Request data example**
```
{
  "offset": 0,
  "count": 1
}
```
**微信小程序返回数据示例**
**WeChat applet return data example**
```
{
    "errcode": 0,
    "errmsg": "ok",
    "list": [
        {
          "template_id": "wDYzYZVxobJivW9oMpSCpuvACOfJXQIoKUm0PY397Tc",
          "title": "购买成功通知",
          "content": "购买地点{{keyword1.DATA}}\n购买时间{{keyword2.DATA}}\n物品名称{{keyword3.DATA}}\n",
          "example": "购买地点：TIT造舰厂\n购买时间：2016年6月6日\n物品名称：咖啡\n"
        }
    ]
}
```

**百度小程序返回数据示例**
**Baidu applet return data example**

```javascript
{
    "errno": 0,
    "msg": "success",
    "data": {
        "total_count": 1,
        "list": [
            {
                "template_id": "e4313219538c4b0262e3a14a0507000e8bd79e9PTPAz",
                "title": "续费成功通知",
                "content": "购买时间{{keyword1.DATA}}\n物品名称{{keyword2.DATA}}",
                "example": "购买时间: 2016年6月6日\n物品名称: 奶茶"
            }
        ]
    }
}
```

### sendTemplateMessage

发送模板消息
Send template message

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|√|x|√|x|x|x|x|

**请求地址**
**Request address**

```
/* 微信小程序 */
POST https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=ACCESS_TOKEN

/* 百度小程序 */
POST https://openapi.baidu.com/rest/2.0/smartapp/template/templatedel?access_token=ACCESS_TOKEN
```


**请求参数**
**Request Parameters**

| 属性 | 类型  | 必填 | 说明 |支持平台|
| Properties | Type | Required | Description | Supported Platforms |
| --- | ----- | --- | --- |---|
| access_token | string | 是 | 接口调用凭证，微信小程序参考 [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html)，百度小程序参考[verify](https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)||
| access_token | string | Yes | API call credentials, WeChat applet reference [getAccessToken](https://developers.weixin.qq.com/miniprogram/dev/api/getAccessToken.html), Baidu applet reference [verify]( https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#verify/)||
| touser | string |是 | 接收者（用户）的 openid/swan_id ||
| touser | string | yes | openid/swan_id of the recipient (user) ||
| template_id | string |是 | 所需下发的模板消息的id ||
| template_id | string | yes | the id of the template message to be sent ||
| page | string |否 | 点击模板卡片后的跳转页面，仅限本APP内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。 ||
| page | string | No | Click the template card to jump to the page, only pages in this APP. Support with parameters, (example index?foo=bar). If this field is not filled, the template will not jump. ||
| data | Object |否 | 模板内容，不填则下发空模板。具体格式请参考示例。 ||
| data | Object | No | Template content, if not filled, an empty template will be sent. Please refer to the example for the specific format. ||
| form_id | string |是 | 表单提交场景下，为 submit 事件带上的 [formId](/component/form)；支付场景下，为本次支付的 [prepay_id](/api/plugins/payment?id=requestpayment) |微信小程序|
| form_id | string | Yes | In the form submission scenario, the [formId](/component/form) on the submit event; in the payment scenario, the [prepay_id](/api/plugins/payment?id= requestpayment) |WeChat applet|
| emphasis_keyword | string |否 | 模板需要放大的关键词，不填则默认无放大 |微信小程序|
| emphasis_keyword | string | No | The keyword that needs to be enlarged in the template, if not filled, the default is not enlarged | WeChat Mini Program|
| touser_openId | string |是 |接收者open_id|百度小程序|
|touser_openId |string |Yes |Receiver open_id|Baidu Mini Program|
| scene_id | string |是 |string|百度小程序|
| scene_id | string |Yes |string|Baidu Mini Program|
| scene_type | number |是 | 场景type，1：表单；2：百度收银台订单；3:直连订单。 |百度小程序|
| scene_type | number | Yes | scene type, 1: form; 2: Baidu cashier order; 3: direct order. |Baidu Mini Program|
| ext | jsonString |否 | '{"xzh_id":111,"category_id":15}'|百度小程序|
| ext | jsonString |No | '{"xzh_id":111,"category_id":15}'|Baidu Mini Program|

**返回值(Object)**
**Return value(Object)**

| 属性 | 类型 | 说明 |平台|
| Properties | Type | Description | Platform |
| --- | --- | --- |---|
| errcode | number | 错误码 |微信小程序|
| errcode | number | Error code | WeChat applet |
| errmsg | string | 错误信息 |微信小程序|
| errmsg | string | Error message | WeChat applet |
| errno | number | 错误码 |百度小程序|
| errno | number | Error code | Baidu Mini Program |
| msg | string | 错误信息 |百度小程序|
| msg | string | Error message | Baidu Mini Program |
| data | Object | {msg_key} |百度小程序|
| data | Object | {msg_key} |Baidu Mini Program|

**errcode 的合法值**
**legal value of errcode**

| 值 | 说明 |
| Value | Description |
| --- | --- |
| 40037 | template_id不正确 |
| 40037 | Incorrect template_id |
| 41028 | form_id不正确，或者过期 |
| 41028 | The form_id is incorrect or expired |
| 41029 | form_id已被使用 |
| 41029 | form_id is already used |
| 41030 | page不正确 |
| 41030 | The page is incorrect |
| 45009 | 接口调用超过限额（目前默认每个帐号日调用限额为100万） |
| 45009 | The API call exceeds the limit (currently, the default daily call limit for each account is 1 million) |

**errno 的合法值**
**legal values for errno**

| 值	| 说明					|
| value | description |
| ---	| ---					|
|2002	|参数错误				|
|2002 |Parameter error |
|4001	|template_id 不正确		|
|4001 |template_id is incorrect |
|4002	|消息推送接口调用失败	|
|4002 |The message push interface call failed |
|4003	|表单无效				|
|4003 |The form is invalid |
|4004	|场景id无效				|
|4004 |The scene id is invalid |
|6001	|无 push 权限			|
|6001 |No push permission |


**Tips**

* POST 数据格式：JSON。
* POST data format: JSON.
* access_token 应写在 url 上。
* access_token should be written on the url.
* 本接口应在后端服务器调用。
* This interface should be called on the backend server.


**微信小程序请求数据示例**
**WeChat applet request data example**
```
{
    "touser": "OPENID",
    "template_id": "TEMPLATE_ID",
    "page": "/pages/index/index",
    "form_id": "FORMID",
    "data": {
        "keyword1": {
            "value": "339208499"
        },
        "keyword2": {
            "value": "2015年01月05日 12:30"
        }
    },
    "scene_type": 1,
    "emphasis_keyword": "keyword1.DATA"
}
```
**微信小程序返回数据示例**
**WeChat applet return data example**
```
{
    "errcode": 0,
    "errmsg": "ok"
}
```

**百度小程序请求数据示例**
**Baidu applet request data example**

```javascript
{
    "touser": "SWAN_ID",
    "template_id": "TEMPLATE_ID",
    "page": "/pages/index/index",
    "data": {
        "keyword1": {
            "value": "339208499"
        },
        "keyword2": {
            "value": "2015年01月05日 12:30"
        }
    },
    "scene_id": "123456"
}
```

**百度小程序返回数据示例**
**Baidu applet return data example**
```
{
    "errno": 0,
    "msg": "success",
    "data": {
        "msg_key": 158
    }
}
```

### alipay.open.app.mini.templatemessage.send

小程序通过 openapi 给用户触达消息，主要为支付后的触达（通过消费id）和用户提交表单后的触达（通过formId）。
The applet sends messages to users through openapi, mainly after payment (through consumption id) and after the user submits the form (through formId).

**平台差异说明**
**Platform Difference Description**

|App|H5|微信小程序|支付宝小程序|百度小程序|抖音小程序、飞书小程序|QQ小程序|快手小程序|京东小程序|
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
|x|x|x|√|x|x|x|x|x|

**请求地址**
**Request address**

```
https://openapi.alipay.com/gateway.do
```

**公共请求参数**
**Public request parameters**

|名称		|类型		|必填	|描述	|示例值																										|
|Name |Type |Required |Description |Example Value |
|---|---		|---	|---	|---																										|
|app_id		|String		|是		|支付宝分配给开发者的应用ID|2014072300007148																							|
|app_id |String |Yes |App ID assigned to the developer by Alipay|2014072300007148 |
|method		|String		|是		|接口名称|alipay.open.app.mini.templatemessage.send																	|
|method |String |Yes |InterfaceName|alipay.open.app.mini.templatemessage.send|
|format		|String		|是		|仅支持JSON|JSON																										|
|format |String |Yes |JSON only |JSON |
|charset	|String		|是		|请求使用的编码格式，如utf-8,gbk,gb2312等|utf-8																										|
|charset |String |Yes |The encoding format used by the request, such as utf-8, gbk, gb2312, etc. |utf-8 |
|sign_type	|String		|是		|商户生成签名字符串所使用的签名算法类型，目前支持RSA2|RSA2																										|
|sign_type |String |Yes |The type of signature algorithm used by the merchant to generate the signature string, currently supports RSA2|RSA2 |
|sign		|String		|是		|商户请求参数的签名串，详见签名|详见示例																									|
|sign |String |Yes |Signature string of merchant request parameters, see signature for details |See example |
|timestamp	|String		|是		|发送请求的时间，格式 `yyyy-MM-dd HH:mm:ss`|`2014-07-24 03:07:50`|
|timestamp |String |Yes |The time when the request was sent, in the format `yyyy-MM-dd HH:mm:ss`|`2014-07-24 03:07:50`|
|version	|String		|是		|调用的接口版本，固定为：1.0|1.0																										|
|version |String |yes |The version of the interface called, fixed as: 1.0|1.0 |
|app_auth_token|String	|否	|详见[应用授权概述](https://doc.open.alipay.com/doc2/detail.htm?treeId=216&articleId=105193&docType=1)|&nbsp;|
|app_auth_token|String |No |See [App Authorization Overview](https://doc.open.alipay.com/doc2/detail.htm?treeId=216&articleId=105193&docType=1)|&nbsp;|
|biz_content|String	|是		|请求参数的集合，最大长度不限，除公共参数外所有请求参数都必须放在这个参数中传递，具体参照各产品快速接入文档	|&nbsp;|
|biz_content|String |Yes |A collection of request parameters, the maximum length is unlimited. All request parameters except public parameters must be passed in this parameter. For details, please refer to the quick access documentation of each product |&nbsp;|