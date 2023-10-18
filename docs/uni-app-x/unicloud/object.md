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

<!-- UTSUNICLOUDAPIJSON.unicloud-import-object.example -->