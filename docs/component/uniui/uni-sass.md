

`uni-scss` 是 `uni-ui`提供的一套全局样式 ，通过一些简单的类名和`sass`变量，实现简单的页面布局操作，比如颜色、边距、圆角等。

## 使用scss变量
安装插件后，需要在项目的根目录的`uni.scss`文件引入变量文件，即可使用或修改对应的`scss`变量，变量主要定义的是主题色，后续后加入更多内容。

```css
/* 需要放到文件最上面 */
@import '@/uni_modules/uni-scss/variables.scss';

/*
 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值
 */
// 主色
$uni-primary: #2979ff;
$uni-primary-disable:mix(#fff,$uni-primary,50%);
$uni-primary-light: mix(#fff,$uni-primary,80%);

// 辅助色
// 除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。
$uni-success: #18bc37;
$uni-success-disable:mix(#fff,$uni-success,50%);
$uni-success-light: mix(#fff,$uni-success,80%);

$uni-warning: #f3a73f;
$uni-warning-disable:mix(#fff,$uni-warning,50%);
$uni-warning-light: mix(#fff,$uni-warning,80%);

$uni-error: #e43d33;
$uni-error-disable:mix(#fff,$uni-error,50%);
$uni-error-light: mix(#fff,$uni-error,80%);

$uni-info: #8f939c;
$uni-info-disable:mix(#fff,$uni-info,50%);
$uni-info-light: mix(#fff,$uni-info,80%);

// 中性色
// 中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。
$uni-main-color: #3a3a3a; 			// 主要文字
$uni-base-color: #6a6a6a;			// 常规文字
$uni-secondary-color: #909399;	// 次要文字
$uni-extra-color: #c7c7c7;			// 辅助说明

// 边框颜色
$uni-border-1: #F0F0F0;
$uni-border-2: #EDEDED;
$uni-border-3: #DCDCDC;
$uni-border-4: #B9B9B9;

// 常规色
$uni-black: #000000;
$uni-white: #ffffff;
$uni-transparent: rgba($color: #000000, $alpha: 0);

// 背景色
$uni-bg-color: #f7f7f7;

/* 水平间距 */
$uni-spacing-sm: 8px;
$uni-spacing-base: 15px;
$uni-spacing-lg: 30px;

// 阴影
$uni-shadow-sm:0 0 5px rgba($color: #d8d8d8, $alpha: 0.5);
$uni-shadow-base:0 1px 8px 1px rgba($color: #a5a5a5, $alpha: 0.2);
$uni-shadow-lg:0px 1px 10px 2px rgba($color: #a5a4a4, $alpha: 0.5);

// 蒙版
$uni-mask: rgba($color: #000000, $alpha: 0.4);

```

## 使用类名
uni-ui.scss 还提供了一批辅助样式 ，目的是供用户完成快速布局。
需要用户决定是否使用 ，如果使用的话css会增大 `27kb` 左右
使用需在 App.vue `<style lang='scss'>` 中引入

```css
@import '@/uni_modules/uni-scss/index.scss';
```
### 颜色
前景色可以直接使用变量名同名的类，对元素快速应用`color`样式

例：

```html
<view class="uni-primary">主色</view>
<view class="uni-success">成功色</view>
<view class="uni-warning">警告色</view>
<view class="uni-error">错误色</view>
```

背景色可以在上面变量名的基础上加是 `-bg`，对元素快速应用`background-color`样式

例：

```html
<view class="uni-primary-bg">主色</view>
<view class="uni-success-bg">成功色</view>
<view class="uni-warning-bg">警告色</view>
<view class="uni-error-bg">错误色</view>
```


### 边框半径
使用边框半径辅助样式对元素快速应用`border-radius`样式

规则为 `uni-radius-${direction}-${size}`

如果需要四边，则不需要指定 `direction`

**direction** 的如下


边框半径可以通过使用 `t, r, b, l` 内置类在每条边上配置，例：`uni-radius-t` 、`uni-radius-b-lg`

- t 左上+右上
- r 右上+右下
- b 左下+右下
- l 左上+左下

边框半径可以通过使用 `tl, tr, br, bl` 内置类在每个角上配置，例：`uni-radius-tl` 、`uni-radius-br-lg`

- tl 	左上
- tr	右上
- bl	左下
- br	右下

**size** 的值如下

基于 `$border-radius-root` 变量的四舍五入尺寸，该变量的默认值为0.25rpx。

- null 		使用默认值大小(可忽略)
- 0			清理所有圆角
- sm		默认值 / 2
- lg		默认值 * 2
- xl		默认值 * 6
- pill		9999px
- circle	50% (nvue 下不生效)

在 uni.scss 中修改默认值
```css
$uni-radius-root:20px;
$uni-radius: (
	0: 0,
	'sm': $uni-radius-root / 2,
	null: $uni-radius-root,
	'lg': $uni-radius-root * 2,
	'xl': $uni-radius-root * 6,
	'pill': 9999px,
	'circle': 50%
);
```

例：

```html
<view class="uni-radius-tl">设置左上圆角</view>
<view class="uni-radius-br">设置右下圆角</view>
```

### 间距

使用间距辅助类对元素快速应用 `margin` 或 `padding` 样式， 范围是从 0 到 16。

规则为 `uni-${property}${direction}-${size}`

**property** 应用间距类型:

- m - 应用 margin
- p - 应用 padding

**direction** 指定了该属性所应用的侧边:

- t - 应用 margin-top 和 padding-top 的间距
- r - 应用 margin-right 和 padding-right 的间距
- b - 应用 margin-bottom 和 padding-bottom 的间距
- l - 应用 margin-left 和 padding-left 的间距
- x - 应用 *-left 和 *-right 的间距
- y - 应用 *-top 和 *-bottom 的间距
- a - 在所有方向应用该间距

```html
<view class="uni-mt-2"></view>
```

**size** 以`4px`增量控制间距属性:

- 0 		- 通过设置为 0 来消除所有 margin 或 padding.
- 1 		- 设置 margin 或 padding 为 4px
- 2 		- 设置 margin 或 padding 为 8px
- 3 		- 设置 margin 或 padding 为 12px
- 4 		- 设置 margin 或 padding 为 16px
- 5 		- 设置 margin 或 padding 为 20px
- 6 		- 设置 margin 或 padding 为 24px
- 7 		- 设置 margin 或 padding 为 28px
- 8 		- 设置 margin 或 padding 为 32px
- 9 		- 设置 margin 或 padding 为 36px
- 10 		- 设置 margin 或 padding 为 40px
- 11 		- 设置 margin 或 padding 为 44px
- 12 		- 设置 margin 或 padding 为 48px
- 13 		- 设置 margin 或 padding 为 52px
- 14 		- 设置 margin 或 padding 为 56px
- 15 		- 设置 margin 或 padding 为 60px
- 16 		- 设置 margin 或 padding 为 64px
- n1 		- 设置 margin 或 padding 为 -4px
- n2 		- 设置 margin 或 padding 为 -8px
- n3 		- 设置 margin 或 padding 为 -12px
- n4 		- 设置 margin 或 padding 为 -16px
- n5 		- 设置 margin 或 padding 为 -20px
- n6 		- 设置 margin 或 padding 为 -24px
- n7 		- 设置 margin 或 padding 为 -28px
- n8 		- 设置 margin 或 padding 为 -32px
- n9 		- 设置 margin 或 padding 为 -36px
- n10 		- 设置 margin 或 padding 为 -40px
- n11 		- 设置 margin 或 padding 为 -44px
- n12 		- 设置 margin 或 padding 为 -48px
- n13 		- 设置 margin 或 padding 为 -52px
- n14 		- 设置 margin 或 padding 为 -56px
- n15 		- 设置 margin 或 padding 为 -60px
- n16 		- 设置 margin 或 padding 为 -64px


```html
<!-- margin-top 为 8px -->
<view class="uni-mt-2"></view>
<!-- 左右margin 为 8px-->
<view class="uni-mx-2"></view>
<!-- 上下 padding 为 20px -->
<view class="uni-py-5"></view>
```

在 uni.scss 中修改默认值

```css
$uni-space-root:2;
```

**注意：**
- 在 nvue 页面中，因为权重问题 ，暂时需要在页面最外层加入 `container` 类名，否则样式可能不会生效
	```html
		<template>
			<view class="container">
				<view class="uni-ma-5">test</view>
			</view>
		<template>

	```