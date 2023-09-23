# uniCloud

截止到目前，uni-app x下的uniCloud还不支持：

- 由于uts暂不支持await，目前仅能通过promise方式使用异步联网api。
- 暂不支持安全网络
- 暂不支持泛型
- 暂不支持pages.json中的uniIdRouter
- 本页面未列举的API均不支持

**兼容说明**

- `HBuilderX 3.9+`支持阿里云，`3.91+`支持腾讯云
- `HBuilderX 3.91+`支持clientDB，但不支持getOne和multiSend

<!-- UTSUNICLOUDAPIJSON.uniCloud_props.description -->

<!-- UTSUNICLOUDAPIJSON.uniCloud_props.param -->

<!-- UTSUNICLOUDAPIJSON.uniCloud_props.returnValue -->

<!-- UTSUNICLOUDAPIJSON.uniCloud_props.compatibility -->

<!-- UTSUNICLOUDAPIJSON.uniCloud_props.tutorial -->

## callFunction(options) @callfunction

<!-- UTSUNICLOUDAPIJSON.callFunction.description -->

<!-- UTSUNICLOUDAPIJSON.callFunction.param -->

<!-- UTSUNICLOUDAPIJSON.callFunction.returnValue -->

<!-- UTSUNICLOUDAPIJSON.callFunction.compatibility -->

<!-- UTSUNICLOUDAPIJSON.callFunction.tutorial -->

## uploadFile(options) @uploadfile

<!-- UTSUNICLOUDAPIJSON.uploadFile.description -->

<!-- UTSUNICLOUDAPIJSON.uploadFile.param -->

<!-- UTSUNICLOUDAPIJSON.uploadFile.returnValue -->

<!-- UTSUNICLOUDAPIJSON.uploadFile.compatibility -->

<!-- UTSUNICLOUDAPIJSON.uploadFile.tutorial -->

## getTempFileURL(options) @gettempfileurl

<!-- UTSUNICLOUDAPIJSON.getTempFileURL.description -->

<!-- UTSUNICLOUDAPIJSON.getTempFileURL.param -->

<!-- UTSUNICLOUDAPIJSON.getTempFileURL.returnValue -->

<!-- UTSUNICLOUDAPIJSON.getTempFileURL.compatibility -->

<!-- UTSUNICLOUDAPIJSON.getTempFileURL.tutorial -->

## importObject(objectName, options?) @importobject

<!-- UTSUNICLOUDAPIJSON.importObject.description -->

<!-- UTSUNICLOUDAPIJSON.importObject.param -->

<!-- UTSUNICLOUDAPIJSON.importObject.returnValue -->

<!-- UTSUNICLOUDAPIJSON.importObject.compatibility -->

<!-- UTSUNICLOUDAPIJSON.importObject.tutorial -->

**uni-app x内使用云对象的特殊说明**

由于强类型语言的一些限制，uni-app-x在编译时需要读取本地云对象导出的方法列表生成客户端对象，请确保调用的云对象在本地包含导出的方法。如果由于云函数加密等因素导致`index.obj.js`无法被正确解析，请在云对象目录创建`index.obj.d.ts`声明云对象内包含的方法。`index.obj.d.ts`示例代码如下：

```ts
// interface.d.ts
type AnyFunction = (...args: any[]) => any;

declare const add: AnyFunction
declare const update: AnyFunction
declare const deleteRecord: AnyFunction

export { // 上面的写法可以自己调整，仅需保证export内包含所有方法即可
  add,
  update
  deleteRecord as remove
}
```

## onResponse(callback) @onresponse

<!-- UTSUNICLOUDAPIJSON.onResponse.description -->

<!-- UTSUNICLOUDAPIJSON.onResponse.param -->

<!-- UTSUNICLOUDAPIJSON.onResponse.returnValue -->

<!-- UTSUNICLOUDAPIJSON.onResponse.compatibility -->

<!-- UTSUNICLOUDAPIJSON.onResponse.tutorial -->

## offResponse(callback) @offresponse

<!-- UTSUNICLOUDAPIJSON.offResponse.description -->

<!-- UTSUNICLOUDAPIJSON.offResponse.param -->

<!-- UTSUNICLOUDAPIJSON.offResponse.returnValue -->

<!-- UTSUNICLOUDAPIJSON.offResponse.compatibility -->

<!-- UTSUNICLOUDAPIJSON.offResponse.tutorial -->

## onRefreshToken(callback) @onrefreshtoken

<!-- UTSUNICLOUDAPIJSON.onRefreshToken.description -->

<!-- UTSUNICLOUDAPIJSON.onRefreshToken.param -->

<!-- UTSUNICLOUDAPIJSON.onRefreshToken.returnValue -->

<!-- UTSUNICLOUDAPIJSON.onRefreshToken.compatibility -->

<!-- UTSUNICLOUDAPIJSON.onRefreshToken.tutorial -->

## offRefreshToken(callback) @offrefreshtoken

<!-- UTSUNICLOUDAPIJSON.offRefreshToken.description -->

<!-- UTSUNICLOUDAPIJSON.offRefreshToken.param -->

<!-- UTSUNICLOUDAPIJSON.offRefreshToken.returnValue -->

<!-- UTSUNICLOUDAPIJSON.offRefreshToken.compatibility -->

<!-- UTSUNICLOUDAPIJSON.offRefreshToken.tutorial -->

## databaseForJQL(callback) @databaseforjql

<!-- UTSUNICLOUDAPIJSON.databaseForJQL.description -->

<!-- UTSUNICLOUDAPIJSON.databaseForJQL.param -->

<!-- UTSUNICLOUDAPIJSON.databaseForJQL.returnValue -->

<!-- UTSUNICLOUDAPIJSON.databaseForJQL.compatibility -->

<!-- UTSUNICLOUDAPIJSON.databaseForJQL.tutorial -->