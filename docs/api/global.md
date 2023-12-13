## uniIDHasRole

新增于`HBuilderX 3.1.15`，判断当前用户是否拥有某角色。此功能依赖uni-id[另见详情](https://uniapp.dcloud.io/uniCloud/uni-id)

需要应用关联[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README)服务空间并使用[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)。

> 需要在token内缓存角色权限才可使用，请参考：[缓存角色权限](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)

**在模板内使用**

```html
<template>
  <view v-if="uniIDHasRole('admin')">仅管理员可见</view>
</template>
```

**在页面/组件js代码中使用**

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

需要应用关联[uniCloud](https://uniapp.dcloud.net.cn/uniCloud/README)服务空间并使用[uni-id](https://uniapp.dcloud.net.cn/uniCloud/uni-id)。

> 需要在token内缓存角色权限才可使用，请参考：[缓存角色权限](https://uniapp.dcloud.net.cn/uniCloud/uni-id?id=cachepermissionintoken)

**在模板内使用**

```html
<template>
  <view v-if="uniIDHasPermission('edit')">拥有编辑权限时可见</view>
</template>
```

**在页面/组件js代码中使用**

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