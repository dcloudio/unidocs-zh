## uni.request(param) @request

<!-- UTSAPIJSON.request.description -->

<!-- UTSAPIJSON.request.param -->

<!-- UTSAPIJSON.request.returnValue -->

<!-- UTSAPIJSON.request.example -->

<!-- UTSAPIJSON.request.compatibility -->

<!-- UTSAPIJSON.request.tutorial -->

<!-- UTSAPIJSON.request.example -->

## 注意事项

* request 接口内部通过[特殊方式读取了泛型类型](../../uts/generics.md#使用限制)，不支持传入动态的泛型：比如将外层方法的普通泛型参数传入 request。
* 如果使用泛型先创建RequestOptions实例，再传入uni.request()，此时请务必确保request要显式指定泛型，例：
    ```typescript
    const options: RequestOptions<Person> = ...
    uni.request<Person>(options)
    ```

<!-- UTSAPIJSON.general_type.name -->

<!-- UTSAPIJSON.general_type.param -->
