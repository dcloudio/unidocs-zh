## uniIDHasRole

新增于`HBuilderX 3.1.15`，判断当前用户是否拥有某角色。此功能依赖uni-id[另见详情](https://uniapp.dcloud.io/uniCloud/uni-id)
Added in `HBuilderX 3.1.15` to determine whether the current user has a role. This feature relies on uni-id [see also details](https://uniapp.dcloud.io/uniCloud/uni-id)

需要应用关联[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README)服务空间并使用[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)。
Requires app to associate with [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README) service space and use [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id ).

> 需要在token内缓存角色权限才可使用，请参考：[缓存角色权限](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
> You need to cache the role permissions in the token before using. Please refer to: [Cache role permissions](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)

**在模板内使用**
**Use in templates**

```html
<template>
  <view v-if="uniIDHasRole('admin')">仅管理员可见</view>
</template>
```

**在页面/组件js代码中使用**
**For use in page/component js codes**

```html
<template>
  <view>xxx</view>
</template>
<script>
  export default {
    onLoad(){
      console.log('当前用户是否拥有管理员角色：', this.uniIDHasRole('admin'))
    }
  }
</script>
```

## uniIDHasPermission

新增于`HBuilderX 3.1.15`，判断当前用户是否拥有某权限，注意：admin角色的用户拥有所有权限。此功能依赖uni-id[另见详情](https://uniapp.dcloud.io/uniCloud/uni-id)
Added in `HBuilderX 3.1.15`, to determine whether the current user has a certain permission, note: users in the admin role have all permissions. This feature relies on uni-id [see also details](https://uniapp.dcloud.io/uniCloud/uni-id)

需要应用关联[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README)服务空间并使用[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)。
The application needs to be associated with the [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README) service space and use the [uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id ).

> 需要在token内缓存角色权限才可使用，请参考：[缓存角色权限](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)
> You need to cache the role permissions in the token before using. Please refer to: [Cache role permissions](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)

**在模板内使用**
**Use in templates**

```html
<template>
  <view v-if="uniIDHasPermission('edit')">拥有编辑权限时可见</view>
</template>
```

**在页面/组件js代码中使用**
**For use in page/component js codes**

```html
<template>
  <view>xxx</view>
</template>
<script>
  export default {
    onLoad(){
      console.log('当前用户是否拥有编辑权限：', this.uniIDHasPermission('edit'))
    }
  }
</script>
```