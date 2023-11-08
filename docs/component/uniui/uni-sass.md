

`uni-scss` 是 `uni-ui`提供的一套全局样式 ，通过一些简单的类名和`sass`变量，实现简单的页面布局操作，比如颜色、边距、圆角等。
`uni-scss` is a set of global styles provided by `uni-ui`, through some simple class names and `sass` variables, to achieve simple page layout operations, such as color, margins, rounded corners, etc.

## 使用scss变量
## Using scss variables
安装插件后，需要在项目的根目录的`uni.scss`文件引入变量文件，即可使用或修改对应的`scss`变量，变量主要定义的是主题色，后续后加入更多内容。

```css
/* 需要放到文件最上面 */
@import '@/uni_modules/uni-scss/variables.scss';

/*
 以下变量是默认值，如不需要修改可以不用给下面的变量重新赋值
 */
// 主色
// main color
$uni-primary: #2979ff;
$uni-primary-disable:mix(#fff,$uni-primary,50%);
$uni-primary-light: mix(#fff,$uni-primary,80%);

// 辅助色
// secondary color
// 除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。
// Scene colors other than the main color need to be used in different scenes (for example, dangerous colors indicate dangerous operations).
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
// neutral color
// 中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。
// Neutral colors are used for text, background and border colors. The hierarchy is expressed by using different neutral colors.
$uni-main-color: #3a3a3a; 			// 主要文字
$uni-base-color: #6a6a6a;			// 常规文字
$uni-secondary-color: #909399;	// 次要文字
$uni-extra-color: #c7c7c7;			// 辅助说明

// 边框颜色
// border color
$uni-border-1: #F0F0F0;
$uni-border-2: #EDEDED;
$uni-border-3: #DCDCDC;
$uni-border-4: #B9B9B9;

// 常规色
// regular color
$uni-black: #000000;
$uni-white: #ffffff;
$uni-transparent: rgba($color: #000000, $alpha: 0);

// 背景色
// background color
$uni-bg-color: #f7f7f7;

/* 水平间距 */
$uni-spacing-sm: 8px;
$uni-spacing-base: 15px;
$uni-spacing-lg: 30px;

// 阴影
// shadow
$uni-shadow-sm:0 0 5px rgba($color: #d8d8d8, $alpha: 0.5);
$uni-shadow-base:0 1px 8px 1px rgba($color: #a5a5a5, $alpha: 0.2);
$uni-shadow-lg:0px 1px 10px 2px rgba($color: #a5a4a4, $alpha: 0.5);

// 蒙版
// mask
$uni-mask: rgba($color: #000000, $alpha: 0.4);

```

## 使用类名
## use class name
uni-ui.scss 还提供了一批辅助样式 ，目的是供用户完成快速布局。
uni-ui.scss also provides a set of auxiliary styles for users to complete quick layouts.
需要用户决定是否使用 ，如果使用的话css会增大 `27kb` 左右
The user needs to decide whether to use , if it is used, the css will increase by about `27kb`
使用需在 App.vue `<style lang='scss'>` 中引入
Use in App.vue ` <style lang='scss'>` to import

```css
@import '@/uni_modules/uni-scss/index.scss';
```
### 颜色
### color
前景色可以直接使用变量名同名的类，对元素快速应用`color`样式
For the foreground color, you can directly use the class with the same name as the variable name to quickly apply the `color` style to the element

例：
example:

```html
<view class="uni-primary">主色</view>
<view class="uni-success">成功色</view>
<view class="uni-warning">警告色</view>
<view class="uni-error">错误色</view>
```

背景色可以在上面变量名的基础上加是 `-bg`，对元素快速应用`background-color`样式
The background color can be added to the variable name above with `-bg` to quickly apply the `background-color` style to the element

例：
example:

```html
<view class="uni-primary-bg">主色</view>
<view class="uni-success-bg">成功色</view>
<view class="uni-warning-bg">警告色</view>
<view class="uni-error-bg">错误色</view>
```


### 边框半径
### border radius
使用边框半径辅助样式对元素快速应用`border-radius`样式
Quickly apply the `border-radius` style to an element using the border-radius helper style

规则为 `uni-radius-${direction}-${size}`
The rule is `uni-radius-${direction}-${size}`

如果需要四边，则不需要指定 `direction`
If you want four sides, you don't need to specify `direction`

**direction** 的如下
**direction** is as follows


边框半径可以通过使用 `t, r, b, l` 内置类在每条边上配置，例：`uni-radius-t` 、`uni-radius-b-lg`
The border radius can be configured per edge by using the `t, r, b, l` built-in classes, for example: `uni-radius-t`, `uni-radius-b-lg`

- t 左上+右上
- t top left + top right
- r 右上+右下
- r top right + bottom right
- b 左下+右下
- b bottom left + bottom right
- l 左上+左下
- l top left + bottom left

边框半径可以通过使用 `tl, tr, br, bl` 内置类在每个角上配置，例：`uni-radius-tl` 、`uni-radius-br-lg`
The border radius can be configured on each corner by using the `tl, tr, br, bl` built-in classes, for example: `uni-radius-tl`, `uni-radius-br-lg`

- tl 	左上
- tl top left
- tr	右上
- tr top right
- bl	左下
- bl bottom left
- br	右下
- br lower right

**size** 的值如下
The values of **size** are as follows

基于 `$border-radius-root` 变量的四舍五入尺寸，该变量的默认值为0.25rpx。
Based on the rounded dimensions of the `$border-radius-root` variable, which defaults to 0.25rpx.

- null 		使用默认值大小(可忽略)
- null use default size (ignorable)
- 0			清理所有圆角
- 0 cleans up all rounded corners
- sm		默认值 / 2
- sm default / 2
- lg		默认值 * 2
-lg default value * 2
- xl		默认值 * 6
- pill		9999px
- circle	50% (nvue 下不生效)
- circle 50% (not valid under nvue)

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
example:

```html
<view class="uni-radius-tl">设置左上圆角</view>
<view class="uni-radius-br">设置右下圆角</view>
```

### 间距
### Spacing

使用间距辅助类对元素快速应用 `margin` 或 `padding` 样式， 范围是从 0 到 16。

规则为 `uni-${property}${direction}-${size}`

**property** 应用间距类型:
**property** Application spacing type:

- m - 应用 margin
- m - apply margin
- p - 应用 padding
- p - apply padding

**direction** 指定了该属性所应用的侧边:
**direction** specifies the side to which the property applies:

- t - 应用 margin-top 和 padding-top 的间距
- t - the spacing to apply margin-top and padding-top
- r - 应用 margin-right 和 padding-right 的间距
- r - the spacing to apply margin-right and padding-right
- b - 应用 margin-bottom 和 padding-bottom 的间距
- b - the spacing to apply margin-bottom and padding-bottom
- l - 应用 margin-left 和 padding-left 的间距
- l - the spacing to apply margin-left and padding-left
- x - 应用 *-left 和 *-right 的间距
- x - applies the *-left and *-right spacing
- y - 应用 *-top 和 *-bottom 的间距
- y - applies the spacing of *-top and *-bottom
- a - 在所有方向应用该间距
- a - applies the spacing in all directions

```html
<view class="uni-mt-2"></view>
```

**size** 以`4px`增量控制间距属性:
**size** controls the spacing property in `4px` increments:

- 0 		- 通过设置为 0 来消除所有 margin 或 padding.
- 0 - Remove any margin or padding by setting to 0.
- 1 		- 设置 margin 或 padding 为 4px
- 1 - set margin or padding to 4px
- 2 		- 设置 margin 或 padding 为 8px
- 2 - Set margin or padding to 8px
- 3 		- 设置 margin 或 padding 为 12px
- 3 - Set margin or padding to 12px
- 4 		- 设置 margin 或 padding 为 16px
- 4 - Set margin or padding to 16px
- 5 		- 设置 margin 或 padding 为 20px
- 5 - Set margin or padding to 20px
- 6 		- 设置 margin 或 padding 为 24px
- 6 - Set margin or padding to 24px
- 7 		- 设置 margin 或 padding 为 28px
- 7 - Set margin or padding to 28px
- 8 		- 设置 margin 或 padding 为 32px
- 8 - Set margin or padding to 32px
- 9 		- 设置 margin 或 padding 为 36px
- 9 - Set margin or padding to 36px
- 10 		- 设置 margin 或 padding 为 40px
- 10 - Set margin or padding to 40px
- 11 		- 设置 margin 或 padding 为 44px
- 11 - Set margin or padding to 44px
- 12 		- 设置 margin 或 padding 为 48px
- 12 - Set margin or padding to 48px
- 13 		- 设置 margin 或 padding 为 52px
- 13 - Set margin or padding to 52px
- 14 		- 设置 margin 或 padding 为 56px
- 14 - Set margin or padding to 56px
- 15 		- 设置 margin 或 padding 为 60px
- 15 - Set margin or padding to 60px
- 16 		- 设置 margin 或 padding 为 64px
- 16 - Set margin or padding to 64px
- n1 		- 设置 margin 或 padding 为 -4px
- n1 - set margin or padding to -4px
- n2 		- 设置 margin 或 padding 为 -8px
- n2 - set margin or padding to -8px
- n3 		- 设置 margin 或 padding 为 -12px
- n3 - set margin or padding to -12px
- n4 		- 设置 margin 或 padding 为 -16px
- n4 - set margin or padding to -16px
- n5 		- 设置 margin 或 padding 为 -20px
- n5 - set margin or padding to -20px
- n6 		- 设置 margin 或 padding 为 -24px
- n6 - set margin or padding to -24px
- n7 		- 设置 margin 或 padding 为 -28px
- n7 - set margin or padding to -28px
- n8 		- 设置 margin 或 padding 为 -32px
- n8 - set margin or padding to -32px
- n9 		- 设置 margin 或 padding 为 -36px
- n9 - set margin or padding to -36px
- n10 		- 设置 margin 或 padding 为 -40px
- n10 - set margin or padding to -40px
- n11 		- 设置 margin 或 padding 为 -44px
- n11 - set margin or padding to -44px
- n12 		- 设置 margin 或 padding 为 -48px
- n12 - set margin or padding to -48px
- n13 		- 设置 margin 或 padding 为 -52px
- n13 - set margin or padding to -52px
- n14 		- 设置 margin 或 padding 为 -56px
- n14 - set margin or padding to -56px
- n15 		- 设置 margin 或 padding 为 -60px
- n15 - set margin or padding to -60px
- n16 		- 设置 margin 或 padding 为 -64px
- n16 - set margin or padding to -64px


```html
<!-- margin-top 为 8px -->
<!-- margin-top is 8px -->
<view class="uni-mt-2"></view>
<!-- 左右margin 为 8px-->
<!-- Left and right margins are 8px-->
<view class="uni-mx-2"></view>
<!-- 上下 padding 为 20px -->
<!-- The top and bottom padding is 20px -->
<view class="uni-py-5"></view>
```

在 uni.scss 中修改默认值
Modify default values in uni.scss

```css
$uni-space-root:2;
```

**注意：**
**Notice:**
- 在 nvue 页面中，因为权重问题 ，暂时需要在页面最外层加入 `container` 类名，否则样式可能不会生效
- In the nvue page, because of the weight problem, temporarily need to add the `container` class name in the outermost layer of the page, otherwise the style may not take effect
	```html
		<template>
			<view class="container">
				<view class="uni-ma-5">test</view>
			</view>
		<template>

	```